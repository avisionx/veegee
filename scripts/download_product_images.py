#!/usr/bin/env python3
"""Download one Google image per product item and save as WebP.

Output structure:
public/images/v1/products/<category>/<subcategory-slug>/<product-slug>.webp

Dependencies:
    pip install icrawler pillow
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from typing import Any

from PIL import Image
from icrawler.builtin import BingImageCrawler, GoogleImageCrawler


SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent


NODE_EXTRACTOR_SCRIPT = r"""
const fs = require('fs');
const vm = require('vm');

function extractObjectLiteral(source, startIndex) {
  const openIndex = source.indexOf('{', startIndex);
  if (openIndex === -1) {
    throw new Error('Could not find opening brace for PRODUCTS object');
  }

  let i = openIndex;
  let depth = 0;
  let quote = null;
  let escaping = false;
  let inLineComment = false;
  let inBlockComment = false;

  while (i < source.length) {
    const ch = source[i];
    const next = source[i + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      i += 1;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }

    if (quote) {
      if (escaping) {
        escaping = false;
      } else if (ch === '\\') {
        escaping = true;
      } else if (ch === quote) {
        quote = null;
      }
      i += 1;
      continue;
    }

    if (ch === '/' && next === '/') {
      inLineComment = true;
      i += 2;
      continue;
    }

    if (ch === '/' && next === '*') {
      inBlockComment = true;
      i += 2;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      i += 1;
      continue;
    }

    if (ch === '{') {
      depth += 1;
    } else if (ch === '}') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(openIndex, i + 1);
      }
    }

    i += 1;
  }

  throw new Error('Unbalanced braces while parsing PRODUCTS object');
}

const constantsPath = process.argv[1] || process.argv[2];
if (!constantsPath) {
  throw new Error('Missing constants path argument');
}

const source = fs.readFileSync(constantsPath, 'utf8');
const marker = 'export const PRODUCTS =';
const markerIndex = source.indexOf(marker);

if (markerIndex === -1) {
  throw new Error('Could not find PRODUCTS export in constants file');
}

const literal = extractObjectLiteral(source, markerIndex + marker.length);
const data = vm.runInNewContext('(' + literal + ')');
process.stdout.write(JSON.stringify(data));
"""


def slugify(value: str) -> str:
    return re.sub(r"^-+|-+$", "", re.sub(r"[\s_-]+", "-", re.sub(r"[^\w\s-]", "", str(value).lower().strip())))


def load_products_from_constants(constants_path: Path) -> dict[str, Any]:
    node_cmd = ["node", "-e", NODE_EXTRACTOR_SCRIPT, str(constants_path)]
    proc = subprocess.run(node_cmd, check=False, capture_output=True, text=True)

    if proc.returncode != 0:
        raise RuntimeError(f"Failed to parse PRODUCTS from {constants_path}:\n{proc.stderr.strip()}")

    try:
        data = json.loads(proc.stdout)
    except json.JSONDecodeError as exc:
        raise RuntimeError(f"Node parser output was not valid JSON: {exc}") from exc

    if not isinstance(data, dict):
        raise RuntimeError("Parsed PRODUCTS did not produce an object")

    return data


def _download_first_with_crawler(
    crawler_cls,
    query: str,
    temp_dir: Path,
    min_size: tuple[int, int],
) -> Path | None:
    if temp_dir.exists():
        shutil.rmtree(temp_dir)
    temp_dir.mkdir(parents=True, exist_ok=True)

    crawler = crawler_cls(
        parser_threads=1,
        downloader_threads=1,
        storage={"root_dir": str(temp_dir)},
    )

    try:
        crawler.crawl(keyword=query, max_num=1, min_size=min_size)
    except Exception:
        return None

    files = sorted(path for path in temp_dir.iterdir() if path.is_file())
    return files[0] if files else None


def download_first_result(
    query: str,
    temp_dir: Path,
    min_size: tuple[int, int],
    engine: str,
) -> Path | None:
    if engine == "google":
        return _download_first_with_crawler(
            GoogleImageCrawler,
            query=query,
            temp_dir=temp_dir,
            min_size=min_size,
        )

    if engine == "bing":
        return _download_first_with_crawler(
            BingImageCrawler,
            query=query,
            temp_dir=temp_dir,
            min_size=min_size,
        )

    # Default strategy: prefer Google, then fallback to Bing.
    source = _download_first_with_crawler(
        GoogleImageCrawler,
        query=query,
        temp_dir=temp_dir,
        min_size=min_size,
    )
    if source is not None:
        return source

    return _download_first_with_crawler(
        BingImageCrawler,
        query=query,
        temp_dir=temp_dir,
        min_size=min_size,
    )


def convert_to_webp(input_path: Path, output_path: Path, quality: int) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(input_path) as image:
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        elif image.mode == "RGBA":
            # Flatten alpha so all outputs are predictable WebP cards.
            rgb = Image.new("RGB", image.size, (255, 255, 255))
            rgb.paste(image, mask=image.split()[3])
            image = rgb

        image.save(output_path, format="WEBP", quality=quality, method=6)


def iterate_product_items(products: dict[str, Any]):
    for category, subcategories in products.items():
        for subcategory_title, items in subcategories.items():
            subcategory_slug = slugify(subcategory_title)
            for item in items:
                item_id = str(item.get("id", ""))
                item_name = str(item.get("name", "")).strip()
                filename = f"{slugify(item_id)}-{slugify(item_name)}.webp"
                yield {
                    "category": category,
                    "subcategory_title": subcategory_title,
                    "subcategory_slug": subcategory_slug,
                    "item_id": item_id,
                    "item_name": item_name,
                    "filename": filename,
                }


def build_query(item_name: str, subcategory_title: str, category: str) -> str:
    human_category = category.replace("-", " ")
    return f"{item_name} {subcategory_title} {human_category} product photo"


def run(args: argparse.Namespace) -> int:
    constants_path = Path(args.constants)
    if not constants_path.is_absolute():
        constants_path = (REPO_ROOT / constants_path).resolve()

    output_root = Path(args.output)
    if not output_root.is_absolute():
        output_root = (REPO_ROOT / output_root).resolve()

    if not constants_path.exists():
        print(f"Constants file not found: {constants_path}", file=sys.stderr)
        return 1

    try:
        products = load_products_from_constants(constants_path)
    except Exception as exc:  # pragma: no cover - defensive path
        print(str(exc), file=sys.stderr)
        return 1

    output_root.mkdir(parents=True, exist_ok=True)

    total = 0
    downloaded = 0
    skipped = 0
    failed = 0

    with tempfile.TemporaryDirectory(prefix="veegee-img-") as temp_root:
        temp_dir = Path(temp_root) / "download"

        for item in iterate_product_items(products):
            if args.limit and total >= args.limit:
                break

            total += 1

            output_path = (
                output_root
                / item["category"]
                / item["subcategory_slug"]
                / item["filename"]
            )

            if output_path.exists() and not args.force:
                skipped += 1
                print(f"[SKIP] {output_path}")
                continue

            query = build_query(
                item_name=item["item_name"],
                subcategory_title=item["subcategory_title"],
                category=item["category"],
            )

            source = download_first_result(
                query=query,
                temp_dir=temp_dir,
                min_size=(args.min_width, args.min_height),
                engine=args.engine,
            )

            if source is None:
                fallback_query = f"{item['item_name']} product"
                source = download_first_result(
                    query=fallback_query,
                    temp_dir=temp_dir,
                    min_size=(args.min_width, args.min_height),
                    engine=args.engine,
                )

            if source is None:
                failed += 1
                print(f"[FAIL] No image found: {item['item_name']} ({item['category']} / {item['subcategory_title']})")
                if args.sleep > 0:
                    time.sleep(args.sleep)
                continue

            try:
                convert_to_webp(source, output_path, quality=args.quality)
            except Exception as exc:  # pragma: no cover - image decoding edge cases
                failed += 1
                print(f"[FAIL] Could not convert image for {item['item_name']}: {exc}")
                if args.sleep > 0:
                    time.sleep(args.sleep)
                continue

            downloaded += 1
            print(f"[OK] {output_path}")

            if args.sleep > 0:
                time.sleep(args.sleep)

    print("\nSummary")
    print(f"  Total considered : {total}")
    print(f"  Downloaded       : {downloaded}")
    print(f"  Skipped existing : {skipped}")
    print(f"  Failed           : {failed}")

    if args.strict and failed > 0:
        return 2
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Download one Google image for each product item and store WebP files by category/subcategory."
    )
    parser.add_argument(
        "--constants",
        default="app/constants.js",
        help="Path to constants file containing PRODUCTS export. Relative paths are resolved from the repo root.",
    )
    parser.add_argument(
        "--output",
        default="public/images/v1/products",
        help="Output root for generated images. Relative paths are resolved from the repo root.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Optional cap for number of product items to process (0 means all).",
    )
    parser.add_argument(
        "--sleep",
        type=float,
        default=0.8,
        help="Delay in seconds between requests to reduce rate limiting.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-download and overwrite files even if they already exist.",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=84,
        help="WebP quality (0-100).",
    )
    parser.add_argument(
        "--min-width",
        type=int,
        default=600,
        help="Minimum width for downloaded source images.",
    )
    parser.add_argument(
        "--min-height",
        type=int,
        default=600,
        help="Minimum height for downloaded source images.",
    )
    parser.add_argument(
        "--engine",
        choices=("google", "bing", "google-then-bing"),
        default="bing",
        help="Search engine strategy to use for image crawling.",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit with code 2 if any item fails to download.",
    )
    return parser.parse_args()


if __name__ == "__main__":
    raise SystemExit(run(parse_args()))

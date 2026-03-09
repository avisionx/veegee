import "server-only"

import Image from "next/image"
import Link from "next/link"

import CTA from "@/components/CTA"
import PageTitle from "@/components/PageTitle"

import { PRODUCTS } from "@/app/constants"
import { slugify, toTitleCase } from "@/app/utils"

const DISABLE_IMAGE = true

export default async function SubcategoryPage({ params }) {
    const { category, subcategory } = await params

    const [title, products] = Object.entries(PRODUCTS[category]).find(
        ([key, _]) => slugify(key) === subcategory
    )

    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <div className="mb-4 flex justify-center">
                    <Link
                        href={`/products/${category}`}
                        className="rounded-full border border-accent/20 bg-accent/20 px-3 py-1 text-center text-xs font-light text-secondary"
                    >
                        {category.toUpperCase()} PRODUCTS
                    </Link>
                </div>
                <PageTitle
                    title={title}
                    subtitle="Browse from our wide range of products in this category."
                />
                {DISABLE_IMAGE ? (
                    <ul className="mt-16 space-y-3 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0 xl:grid-cols-3">
                        {products.map(({ id, name }) => (
                            <li
                                key={id}
                                className="rounded-xl bg-black/5 px-4 py-3 text-black/80"
                            >
                                <span className="font-medium">{name}</span>
                                <span className="ml-2 text-sm text-black/60">
                                    ({id})
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="mt-16 grid grid-cols-2 gap-6 xl:grid-cols-4">
                        {products.map(({ id, name }) => (
                            <div
                                key={id}
                                className="overflow-hidden rounded-2xl bg-black/10"
                            >
                                <Image
                                    src={`https://picsum.photos/300.webp?random=${id}`}
                                    width={512}
                                    height={512}
                                    className="w-full"
                                />
                                <div className="p-4">
                                    <p className="text-center font-medium text-black/80">
                                        {name}
                                    </p>
                                    <p className="text-center text-sm font-medium text-black/60">
                                        {id}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <CTA />
        </>
    )
}

export const generateMetadata = async ({ params }) => {
    const { category, subcategory } = await params

    return {
        title: `${toTitleCase(subcategory)} | ${toTitleCase(category)} Products`,
        description: `Browse our selection of ${toTitleCase(subcategory)} in the ${toTitleCase(category)} category.`,
    }
}

export const generateStaticParams = () => {
    return Object.entries(PRODUCTS).flatMap(([category, subcategories]) => {
        return Object.keys(subcategories).map((subcategory) => ({
            category,
            subcategory: slugify(subcategory),
        }))
    })
}

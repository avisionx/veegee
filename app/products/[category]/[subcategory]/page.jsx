import "server-only"

import Image from "next/image"
import Link from "next/link"

import CTA from "@/components/CTA"
import PageTitle from "@/components/PageTitle"

import { IMAGE_VERSION, PRODUCTS } from "@/app/constants"
import { slugify, toTitleCase } from "@/app/utils"

const getProductImageSrc = (category, subcategoryTitle, id, name) => {
    return `/images/${IMAGE_VERSION}/products/${category}/${slugify(subcategoryTitle)}/${slugify(String(id))}-${slugify(name)}.webp`
}

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
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {products.map(({ id, name }) => (
                        <div
                            key={id}
                            className="overflow-hidden rounded-2xl bg-black/10"
                        >
                            <Image
                                src={getProductImageSrc(category, title, id, name)}
                                width={512}
                                height={512}
                                className="h-56 w-full object-cover"
                                alt={`${name} (${id})`}
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

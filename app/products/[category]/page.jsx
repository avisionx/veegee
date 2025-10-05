import "server-only"

import CTA from "@/components/CTA"
import ImageLink from "@/components/ImageLink"
import PageTitle from "@/components/PageTitle"

import { CATEGORIES, CATEGORIES_SUBTITLE, PRODUCTS } from "@/app/constants"
import { slugify, toTitleCase } from "@/app/utils"

export default async function CategoryPage({ params }) {
    const { category } = await params

    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle
                    title={`${toTitleCase(category)} Products`}
                    subtitle={CATEGORIES_SUBTITLE[category]}
                />
                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    {Object.keys(PRODUCTS[category]).map((subcategory) => (
                        <ImageLink
                            key={subcategory}
                            title={toTitleCase(subcategory)}
                            href={`/products/${category}/${slugify(subcategory)}`}
                            imageSrc={
                                false
                                    ? `/images/products/${category}/${slugify(subcategory)}.webp`
                                    : `https://picsum.photos/300.webp?random=${subcategory}`
                            }
                            priority
                        />
                    ))}
                </div>
            </section>
            <CTA />
        </>
    )
}

export const generateMetadata = async ({ params }) => {
    const { category } = await params

    return {
        title: `${toTitleCase(category)} Products`,
        description: `Browse our wide range of ${toTitleCase(category)} products.`,
    }
}

export const generateStaticParams = () => {
    return Object.values(CATEGORIES).map((category) => ({ category }))
}

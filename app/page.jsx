import "server-only"

import { ArrowRightIcon, MouseIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import CTA from "@/components/CTA"
import FancyButton from "@/components/FancyButton"
import FancyHeading from "@/components/FancyHeading"
import HeroGallery from "@/components/HeroGallery"

import { CONTACT_URL, CONTENT } from "@/app/constants"

export default function HomePage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-16">
                    <div className="space-y-6">
                        <h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl">
                            Trusted, <br />
                            <span className="text-primary">Reliable</span>{" "}
                            &amp;&nbsp;
                            <span className="font-heading italic text-secondary">
                                Affordable
                            </span>
                            <br />
                            Since 2002.
                        </h1>
                        <p className="text-black/80 md:text-lg">
                            {CONTENT.homepage.hero.subtitle}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link
                                href="/about"
                                className="inline-flex h-[44px] items-center justify-center rounded-xl bg-secondary px-6 py-1 font-medium text-white transition-all hover:bg-secondary/90"
                            >
                                Know More
                            </Link>
                            <FancyButton href={CONTACT_URL} text="Contact Us" />
                        </div>
                        <div className="flex items-center gap-2 pt-6 text-sm text-black/30">
                            <MouseIcon className="animate animate-bounce" />
                            {CONTENT.homepage.hero.scrollText}
                        </div>
                    </div>
                    <HeroGallery />
                </div>
            </section>
            <section className="pb-24" id="our-stays">
                <div className="mx-auto max-w-9xl px-4">
                    <FancyHeading text={CONTENT.homepage.products.title} />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                        {CONTENT.homepage.products.subtitle}
                    </p>
                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {["Household", "Electrical", "Furniture"].map(
                            (category) => (
                                <div
                                    className="relative overflow-hidden rounded-2xl shadow-sm"
                                    key={category}
                                >
                                    <Link
                                        href={`/products/${category.toLowerCase()}`}
                                    >
                                        <Image
                                            src={`/images/products/${category.toLowerCase()}.webp`}
                                            width={512}
                                            height={512}
                                            className="h-full w-full object-cover transition-all group-hover:scale-110"
                                            alt=""
                                            priority
                                        />
                                        <div className="z-1 group absolute top-0 flex h-full w-full flex-col bg-black/30 px-6 py-4 text-white transition-all">
                                            <div className="mt-auto flex items-center">
                                                <p className="max-w-[300px] text-2xl font-bold tracking-wide">
                                                    {category}
                                                </p>
                                                <ArrowRightIcon className="ml-auto mr-1 size-8 transition-transform group-hover:translate-x-4" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <div className="mx-auto max-w-9xl px-4">
                    <div className="grid gap-8 rounded-2xl bg-secondary/10 px-8 py-12 md:grid-cols-3 md:gap-16 md:px-16 md:py-16">
                        <div>
                            <p className="font-heading text-3xl text-black">
                                {CONTENT.homepage.whyChoose.title}
                            </p>
                            <p className="mt-2 text-black/70 md:text-lg">
                                {CONTENT.homepage.whyChoose.subtitle}
                            </p>
                        </div>
                        <div className="col-span-2 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
                            {CONTENT.homepage.whyChoose.features.map(
                                (text, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start space-x-4"
                                    >
                                        <span className="font-heading text-5xl font-semibold text-accent/30">
                                            {idx + 1}
                                        </span>
                                        <p className="text-black/80 md:text-lg">
                                            {text}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </>
    )
}

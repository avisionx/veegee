"use client"

import Link from "next/link"

import FancyButton from "@/components/FancyButton"

import { CONTACT_URL, CONTENT } from "@/app/constants"

export default function CTA() {
    return (
        <section className="pb-24">
            <div className="mx-auto max-w-9xl px-4 py-4 text-center">
                <p className="font-heading text-5xl text-black">
                    {CONTENT.cta.titlePart1}{" "}
                    <span className="text-primary">
                        {CONTENT.cta.titlePart2}
                    </span>{" "}
                    {CONTENT.cta.titlePart3}
                </p>
                <p className="mt-4 text-black/80 md:text-lg">
                    {CONTENT.cta.subtitle}
                </p>
                <div className="mt-8 flex justify-center gap-4 pt-2">
                    <Link
                        href="/about"
                        className="inline-flex h-[44px] items-center justify-center rounded-xl bg-secondary px-6 py-1 font-medium text-white transition-all hover:bg-secondary/90"
                    >
                        Know More
                    </Link>
                    <FancyButton href={CONTACT_URL} text="Contact Us" />
                </div>
            </div>
        </section>
    )
}

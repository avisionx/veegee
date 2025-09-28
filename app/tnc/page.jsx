import "server-only"

import Link from "next/link"

import PageTitle from "@/components/PageTitle"

import { CONTENT } from "@/app/constants"

export const metadata = {
    title: CONTENT.tnc.title,
}

export default function TncPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle
                    title={CONTENT.tnc.title}
                    subtitle={CONTENT.tnc.subtitle}
                />
                <div class="rounded-2xl bg-secondary/5 px-6 py-6 md:text-lg">
                    <ul className="list-disc space-y-3 pl-5 text-black/70">
                        <li>
                            <b>Use of Website:</b> By accessing this website,
                            you agree to comply with our terms and conditions.
                        </li>
                        <li>
                            <b>Intellectual Property:</b> All content, logos,
                            images, and text on this site are the property of
                            Vee Gee Exports Limited and may not be reproduced
                            without permission.
                        </li>
                        <li>
                            <b>Product Information:</b> Product descriptions and
                            images are for informational purposes only.
                            Availability, specifications, and pricing are
                            subject to change.
                        </li>
                        <li>
                            <b>Orders & Payments:</b> All orders are subject to
                            confirmation. Prices exclude taxes and shipping
                            unless specified. Payment terms must be agreed upon
                            prior to order confirmation.
                        </li>
                        <li>
                            <b>Limitation of Liability:</b> Vee Gee Exports
                            Limited is not responsible for any indirect or
                            consequential damages arising from the use of this
                            website.
                        </li>
                        <li>
                            <b>Third-Party Links:</b> This website may contain
                            links to third-party websites. We are not
                            responsible for their content or practices.
                        </li>
                        <li>
                            <b>User Conduct:</b> You agree to use this website
                            for lawful purposes and not to engage in any
                            activity that may harm, disrupt, or misuse the
                            website or its services.
                        </li>
                        <li>
                            <b>Privacy:</b> Your information will be handled
                            according to our{" "}
                            <Link
                                href="/privacy"
                                className="text-primary underline"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </li>
                        <li>
                            <b>Modifications:</b> We may update these terms at
                            any time. Continued use of the website indicates
                            acceptance of any changes.
                        </li>
                        <li>
                            <b>Governing Law:</b> These terms are governed by
                            the laws of India. Any disputes will be subject to
                            the jurisdiction of courts in Jaipur, Rajasthan.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

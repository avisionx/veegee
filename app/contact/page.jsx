import "server-only"

import { MailIcon, PhoneIcon, SmartphoneIcon } from "lucide-react"
import Link from "next/link"

import CTA from "@/components/CTA"
import FancyHeading from "@/components/FancyHeading"
import PageTitle from "@/components/PageTitle"

import {
    CONTACT_EMAIL,
    CONTACT_PHONE_NUMBER_1,
    CONTACT_PHONE_NUMBER_2,
    CONTENT,
} from "@/app/constants"

export const metadata = {
    title: CONTENT.contact.hero.title,
}

export default function ContactPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle
                    title={CONTENT.contact.hero.title}
                    subtitle={CONTENT.contact.hero.subtitle}
                />
                <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <Link
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="flex items-center gap-4 rounded-2xl bg-secondary/10 px-6 py-4 text-lg text-black/80 hover:underline"
                    >
                        <MailIcon className="size-8 text-secondary" />
                        <span>{CONTACT_EMAIL}</span>
                    </Link>
                    <Link
                        href={`tel:${CONTACT_PHONE_NUMBER_1}`}
                        className="flex items-center gap-4 rounded-2xl bg-primary/5 px-6 py-4 text-lg text-black/80 hover:underline"
                    >
                        <PhoneIcon className="size-8 text-primary" />
                        <span>{CONTACT_PHONE_NUMBER_1}</span>
                    </Link>
                    <Link
                        href={`tel:${CONTACT_PHONE_NUMBER_2}`}
                        className="flex items-center gap-4 rounded-2xl bg-secondary/10 px-6 py-4 text-lg text-black/80 hover:underline"
                    >
                        <SmartphoneIcon className="size-8 text-secondary" />
                        <span>{CONTACT_PHONE_NUMBER_2}</span>
                    </Link>
                </div>
                <FancyHeading text={CONTENT.contact.locations.title} />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    {CONTENT.contact.locations.subtitle}
                </p>
                <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl bg-primary/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.378978015386!2d75.79286479999999!3d26.923197599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f724414f9b%3A0x8d3e0ea793d18b5a!2z4KSV4KWN4KSw4KS_4KS44KWN4KSf4KSyIOCkruCkvuClheCksg!5e0!3m2!1sen!2sin!4v1759079483181!5m2!1sen!2sin"
                            width={"100%"}
                            title="bhor"
                            className="h-[300px] rounded-t-2xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="p-4">
                            <p className="font-heading text-xl text-black/80">
                                Office Address
                            </p>
                            <p className="text-black/70">
                                Crystal Mall, 401 J. Near Collectorate <br />
                                Opp. Jhangleshwar Mahadev Mandir, Jaipur
                                (Rajasthan) <br />
                                India - 302021
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-primary/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30110.97824350548!2d73.1779170199997!3d19.374682141085312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79bf652addd4d%3A0xab2da1817d880472!2sSaidham%20Warehouses%20Main%20Gate!5e0!3m2!1sen!2sin!4v1759079673269!5m2!1sen!2sin"
                            width={"100%"}
                            title="bhor"
                            className="h-[300px] rounded-t-2xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="p-4">
                            <p className="font-heading text-xl text-black/80">
                                Warehouse Address
                            </p>
                            <p className="text-black/70">
                                Sarvey No.42/1P, Opp. Vaishno Devi, At Villagr
                                Dohale, Post <br />
                                Padgha, Mumbai - Nashik Expy, Tal, Bhiwandi,
                                Maharashtra <br />
                                India - 421101
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </>
    )
}

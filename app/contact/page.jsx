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
    CONTACT_PHONE_NUMBER_3,
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
                <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    <Link
                        href={`tel:${CONTACT_PHONE_NUMBER_3}`}
                        className="flex items-center gap-4 rounded-2xl bg-primary/5 px-6 py-4 text-lg text-black/80 hover:underline"
                    >
                        <PhoneIcon className="size-8 text-primary" />
                        <span>{CONTACT_PHONE_NUMBER_3}</span>
                    </Link>
                </div>
                <FancyHeading text={CONTENT.contact.locations.title} />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    {CONTENT.contact.locations.subtitle}
                </p>
                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl bg-primary/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.378978015386!2d75.79286479999999!3d26.923197599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3f724414f9b%3A0x8d3e0ea793d18b5a!2z4KSV4KWN4KSw4KS_4KS44KWN4KSf4KSyIOCkruCkvuClheCksg!5e0!3m2!1sen!2sin!4v1759079483181!5m2!1sen!2sin"
                            width={"100%"}
                            title="india-office"
                            className="h-[300px] rounded-t-2xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="p-4">
                            <p className="font-heading text-xl text-black/80">
                                India Office
                            </p>
                            <p className="text-black/70">
                                Crystal Mall, 401 J. Near Collectorate <br />
                                Opp. Jhangleshwar Mahadev Mandir, Jaipur
                                (Rajasthan) <br />
                                India - 302021
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-secondary/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28866.62269378418!2d55.29631838102521!3d25.25955492090471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4347ba997e7d%3A0xac75f0f3c81b067c!2sNew%20Emirates%20NBD%20Bank%20Deira%20Building!5e0!3m2!1sen!2sin!4v1772563250334!5m2!1sen!2sin"
                            width={"100%"}
                            title="dubai-office"
                            className="h-[300px] rounded-t-2xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="p-4">
                            <p className="font-heading text-xl text-black/80">
                                Dubai Office
                            </p>
                            <p className="text-black/70">
                                New Emirates NBD Bank Deira Building, <br />
                                Office Number: 905, Al Ras, Deira, Dubai, UAE.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-secondary/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.091472949826!2d113.1867104!3d22.6130591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34023a8145116f93%3A0xbacaacd3bd1b10a9!2sChengyi%20Commercial%20Building!5e0!3m2!1sen!2sin!4v1772563352288!5m2!1sen!2sin"
                            width={"100%"}
                            title="china-office-1"
                            className="h-[300px] rounded-t-2xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="p-4">
                            <p className="font-heading text-xl text-black/80">
                                China Office 1
                            </p>
                            <p className="text-black/70">
                                B2-1, 16F, Chengyi Commercial Building, <br />
                                No.16, Dongxing Middle Road, Guzhen Town, <br />
                                Zhongshan City, Guangdong Province, China
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-primary/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1456.3434666042335!2d120.09974662677146!3d29.33014693427287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34495471242cfafd%3A0x42c648eef8607544!2sChou%20Zhou%20Bei%20Lu%2C%20Yi%20Wu%20Shi%2C%20Jin%20Hua%20Shi%2C%20Zhe%20Jiang%20Sheng%2C%20China!5e0!3m2!1sen!2sin!4v1772563496457!5m2!1sen!2sin"
                            width={"100%"}
                            title="china-office-2"
                            className="h-[300px] rounded-t-2xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="p-4">
                            <p className="font-heading text-xl text-black/80">
                                China Office 2
                            </p>
                            <p className="text-black/70">
                                Room 2107, 21/F, Bldg 1, Shuangchuang No.1133,{" "}
                                <br />
                                Chouzhou North Road, Yiwu City, China
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-2xl bg-primary/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.24190605142604!2d121.5580292605714!3d29.868008421989188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d634a477efab7%3A0x49a0005ddf0b6b8b!2s29%20Dongdu%20Rd%2C%20Hai%20Shu%20Qu%2C%20Ning%20Bo%20Shi%2C%20Zhe%20Jiang%20Sheng%2C%20China%2C%20315041!5e0!3m2!1sen!2sin!4v1772563606461!5m2!1sen!2sin"
                            width={"100%"}
                            title="china-office-3"
                            className="h-[300px] rounded-t-2xl"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="p-4">
                            <p className="font-heading text-xl text-black/80">
                                China Office 3
                            </p>
                            <p className="text-black/70">
                                Suite B10-7 Room, 10th Floor, World Trade Center
                                Building, <br />
                                No.29, Dong Du Road, Hai Shu District,
                                Ningbo,China.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </>
    )
}

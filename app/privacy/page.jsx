import "server-only"

import PageTitle from "@/components/PageTitle"

import { CONTENT } from "@/app/constants"

export const metadata = {
    title: CONTENT.privacy.title,
}

export default function PrivacyPage() {
    return (
        <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
            <PageTitle
                title={CONTENT.privacy.title}
                subtitle={CONTENT.privacy.subtitle}
            />
            <div className="rounded-2xl bg-secondary/5 px-6 py-6 md:text-lg">
                <ul className="list-disc space-y-3 pl-5 text-black/70">
                    <li>
                        Vee Gee Exports Limited values your privacy and is
                        committed to safeguarding your personal and business
                        information.
                    </li>
                    <li>
                        We may collect information such as your name, company
                        name, email address, and phone number to facilitate
                        communication and business operations.
                    </li>
                    <li>
                        Your information will not be sold, rented, or shared
                        with third-party advertisers or marketers without your
                        explicit consent.
                    </li>
                    <li>
                        Data may be shared internally only with authorized staff
                        responsible for inquiries, customer support, or
                        compliance purposes.
                    </li>
                    <li>
                        Communication regarding inquiries, feedback, updates, or
                        important announcements may be sent to your registered
                        email or phone number.
                    </li>
                    <li>
                        Any media content, such as images or videos shared with
                        us, will only be used with explicit consent for
                        promotional or informational purposes.
                    </li>
                    <li>
                        Users may request access to, correction of, or deletion
                        of their personal data by contacting Vee Gee Exports
                        Limited’s support team.
                    </li>
                    <li>
                        This Privacy Policy may be updated periodically. All
                        changes will be posted on this page with the effective
                        date.
                    </li>
                </ul>
            </div>
        </section>
    )
}

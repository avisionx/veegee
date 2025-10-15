import "server-only"

import CTA from "@/components/CTA"
import FancyHeading from "@/components/FancyHeading"
import PageTitle from "@/components/PageTitle"

import { CONTENT } from "@/app/constants"

export const metadata = {
    title: CONTENT.about.hero.title,
}

export default function AboutPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-8 pt-36 lg:pt-44">
                <PageTitle
                    title={CONTENT.about.hero.title}
                    subtitle={CONTENT.about.hero.subtitle}
                />
                <div className="mx-auto -mt-8 mb-4 max-w-5xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.hero.para1}
                </div>
                <p className="mx-auto mb-16 max-w-5xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.hero.para2}
                </p>
                <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {CONTENT.about.hero.features.map(
                        ({ title, description, Icon }, index) => (
                            <div
                                key={title}
                                className={`${index % 2 == 0 ? "bg-secondary/15" : "bg-primary/5"} flex flex-col gap-2 rounded-2xl p-6 transition-all hover:scale-[1.02]`}
                            >
                                <div className="relative flex items-center gap-4 text-black/80">
                                    <p className="text-2xl font-medium">
                                        {title}
                                    </p>
                                    <Icon
                                        className={`${index % 2 == 0 ? "text-secondary" : "text-primary"} absolute right-0 size-10`}
                                    />
                                </div>
                                <p
                                    className="text-black/70"
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </div>
                        )
                    )}
                </div>
                <FancyHeading text={CONTENT.about.journey.title} />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.journey.subtitle}
                </p>
                <div className="mx-auto mt-4 max-w-5xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.journey.para1}
                </div>
                <div className="mx-auto mb-16 mt-4 max-w-5xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.journey.para2}
                </div>
            </section>
            <section className="mx-auto max-w-9xl px-4 pb-24">
                <FancyHeading text={CONTENT.about.location.title} />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.location.subtitle}
                </p>
            </section>
            <CTA />
        </>
    )
}

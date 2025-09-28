import "server-only"

import Image from "next/image"

import SHOWCASE_IMG_1 from "@/assets/landing/showcase-1.webp"
import SHOWCASE_IMG_2 from "@/assets/landing/showcase-2.webp"
import SHOWCASE_IMG_3 from "@/assets/landing/showcase-3.webp"
import SHOWCASE_IMG_4 from "@/assets/landing/showcase-4.webp"
import SHOWCASE_IMG_5 from "@/assets/landing/showcase-5.webp"
import SHOWCASE_IMG_6 from "@/assets/landing/showcase-6.webp"
import SHOWCASE_IMG_7 from "@/assets/landing/showcase-7.webp"
import SHOWCASE_IMG_8 from "@/assets/landing/showcase-8.webp"

const SHOWCASE_IMAGES = [
    SHOWCASE_IMG_6,
    SHOWCASE_IMG_8,
    SHOWCASE_IMG_3,
    SHOWCASE_IMG_2,
    SHOWCASE_IMG_1,
    SHOWCASE_IMG_5,
    SHOWCASE_IMG_7,
    SHOWCASE_IMG_4,
]

export default function HeroGallery() {
    return (
        <div className="h-full lg:col-span-2">
            {/* Desktop View */}
            <div className="hidden h-full grid-cols-4 grid-rows-3 gap-3 lg:grid">
                <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-accent">
                    <Image
                        src={SHOWCASE_IMG_6}
                        alt=""
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-md bg-primary">
                    <Image
                        src={SHOWCASE_IMG_8}
                        alt=""
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-accent">
                    <Image
                        src={SHOWCASE_IMG_3}
                        alt=""
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-white">
                    <Image
                        src={SHOWCASE_IMG_2}
                        alt=""
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <div className="col-span-1 row-span-2 overflow-hidden rounded-md bg-accent">
                    <Image
                        src={SHOWCASE_IMG_1}
                        alt=""
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-black">
                    <Image
                        src={SHOWCASE_IMG_5}
                        alt=""
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-white">
                    <Image
                        src={SHOWCASE_IMG_7}
                        alt=""
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-black">
                    <Image
                        src={SHOWCASE_IMG_4}
                        alt=""
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
            </div>
            {/* Mobile View */}
            <div className="lg:hidden">
                <div className="no-scrollbar overflow-x-auto">
                    <div className="flex gap-3 pb-2">
                        {SHOWCASE_IMAGES.map((image, index) => (
                            <div
                                key={index}
                                className="h-44 w-64 flex-shrink-0 overflow-hidden rounded-md bg-accent"
                            >
                                <Image
                                    src={image}
                                    alt=""
                                    className="h-full w-full object-cover"
                                    priority={index < 3}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

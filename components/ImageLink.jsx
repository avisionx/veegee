import "server-only"

import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ImageLink({
    title,
    href,
    imageSrc,
    imageAlt = "",
    priority = false,
    className = "",
}) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl shadow-sm ${className}`}
        >
            <Link href={href}>
                <Image
                    src={imageSrc}
                    width={512}
                    height={512}
                    className="h-full w-full object-cover transition-all group-hover:scale-110"
                    alt={imageAlt}
                    priority={priority}
                />
                <div className="z-1 group absolute top-0 flex h-full w-full flex-col bg-black/30 px-6 py-4 text-white transition-all hover:bg-black/20">
                    <div className="mt-auto flex items-center">
                        <p className="max-w-[300px] text-2xl font-bold tracking-wide">
                            {title}
                        </p>
                        <ArrowRightIcon className="ml-auto mr-1 size-8 transition-transform group-hover:translate-x-4" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

import "server-only"

import { League_Spartan, Poppins } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ScrollToTop from "@/components/ScrollToTop"

import { CONTENT } from "@/app/constants"

import "./globals.css"

const fontHeading = League_Spartan({ subsets: ["latin"] })
const fontBody = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    preload: false,
})

export const metadata = {
    title: {
        template: `%s | ${CONTENT.seo.title}`,
        default: CONTENT.seo.title,
    },
    description: CONTENT.seo.description,
    keywords: CONTENT.seo.keywords,
    openGraph: {
        title: CONTENT.seo.title,
        description: CONTENT.seo.description,
        url: "https://veegee.info",
        siteName: "VeeGee.info",
        images: [
            {
                url: "https://veegee.info/og.png",
                width: 1200,
                height: 630,
                alt: "VeeGee.info",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: CONTENT.seo.title,
        description: CONTENT.seo.description,
        images: ["https://veegee.info/og.png"],
        creator: "@veegee",
    },
    metadataBase: new URL("https://veegee.info"),
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`relative ${fontHeading.variable} ${fontBody.variable}`}
            >
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    )
}

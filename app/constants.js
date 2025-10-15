import { EyeIcon, GemIcon, LeafIcon } from "lucide-react"

import { slugify, toTitleCase } from "@/app/utils"

export const CONTACT_EMAIL = "vgexports@vng.sina.net"
export const CONTACT_PHONE_NUMBER_1 = "+91 1414 030115"
export const CONTACT_PHONE_NUMBER_2 = "+91 982 9138378"
export const CONTACT_URL = "/contact"

export const CONTENT = {
    seo: {
        title: "Vee Gee Exports Limited - Quality Products at Affordable Prices",
        description:
            "Since 2002, Vee Gee Exports Limited has been delivering high-quality food, non-food, and personal care products worldwide at affordable prices.",
        keywords: [
            "Vee Gee Exports",
            "FMCG Exports",
            "Food Products Export",
            "Personal Care Export",
            "Affordable FMCG",
            "India Exports",
            "Global Trade",
            "Nestle Distributor",
            "Unilever Distributor",
            "Caribbean FMCG",
            "Africa FMCG",
        ],
    },
    homepage: {
        hero: {
            subtitle:
                "Serving Africa, the Caribbean, the Middle East, and beyond with quality products from India.",
            scrollText: "Scroll to browse our product range",
        },
        products: {
            title: "Our Product Range",
            subtitle:
                "Explore our diverse range of high-quality household, electrical, and furniture products - sourced from reliable manufacturers, ensuring consistent quality, competitive pricing, and timely delivery to our partners.",
        },
        whyChoose: {
            title: "Why Partner With Us?",
            subtitle:
                "Partnering with us means working with a team that values reliability, consistency, and long-term success - built on trust and a deep understanding of global trade.",
            features: [
                "Global Reach: Supplying quality products to markets across Africa, the Caribbean, and the Middle East.",
                "Diverse Range: Offering household, electrical, and furniture products to meet every market need.",
                "Strong Sourcing: Delivering premium quality with exceptional value and competitive strength.",
                "Mutual Growth: Building transparent, lasting partnerships that create shared success.",
            ],
        },
    },
    about: {
        hero: {
            title: "About Us",
            subtitle:
                "Since 2002, Vee Gee Exports Limited has been transforming the way businesses access high-quality household, electrical, and furniture products worldwide. What started as a vision to provide reliable, premium solutions has grown into a global network of satisfied clients and trusted partners.",
            para1: "Our commitment goes beyond products - we focus on delivering consistency, reliability, and tailored solutions that help businesses thrive. With every shipment, we bring not just products, but peace of mind and a promise of excellence.",
            para2: "At Vee Gee Exports Limited, your business is our priority, and global service is our standard.",
            features: [
                {
                    title: "Our Mission",
                    description:
                        "To provide businesses worldwide with high-quality household, electrical, and furniture products through reliable sourcing, timely delivery, and exceptional customer service, fostering lasting partnerships built on trust and excellence.",
                    Icon: LeafIcon,
                },
                {
                    title: "Our Vision",
                    description:
                        "To be a leading global supplier recognized for quality, reliability, and innovation, setting the standard in household, electrical, and furniture solutions, while expanding our reach to serve every market with integrity and professionalism.",
                    Icon: EyeIcon,
                },
                {
                    title: "Our Values",
                    description: `• Quality First: Every product meets the highest standards. <br/>• Reliability: Consistent service that clients can depend on. <br/>• Integrity: Transparent and ethical business practices.`,
                    Icon: GemIcon,
                },
            ],
        },
        journey: {
            title: "Our Journey",
            subtitle:
                "From a small office in Guangzhou, China, to a global leader in household, electrical, and furniture products, Vee Gee Exports Limited has built a story of passion, growth, and excellence.",
            para1: "Founded in 2002 by Mr. Girish Bhagtani and Mr. Ravi Choithani, our mission has always been to set new benchmarks in quality, reliability, and customer satisfaction. Over the years, we have expanded our presence with offices in India, China, Hong Kong, and the UAE, serving clients across Africa, the Caribbean, the Middle East, and the Levant.",
            para2: "Through strategic partnerships and a commitment to excellence, we deliver products and solutions that help businesses thrive worldwide.",
        },
        location: {
            title: "Our Global Presence",
            subtitle:
                "Headquartered in Jaipur, India, Vee Gee Exports Limited operates across multiple international markets, with branches in Hong Kong and China to efficiently serve our global clients.",
        },
    },
    contact: {
        hero: {
            title: "Contact Us",
            subtitle:
                "Ready to partner with us? Let's discuss how we can deliver trusted products to your market.",
        },
        locations: {
            title: "Our Addresses",
            subtitle:
                "Reach out to us at our office in Jaipur, India, or our warehouse in Mumbai, India.",
        },
    },
    cta: {
        titlePart1: "Global Connections,",
        titlePart2: "Trusted Partnerships.",
        titlePart3: "",
        subtitle:
            "Vee Gee Exports Limited bridges markets with reliable household, electrical, and furniture products — built on trust, consistency, and long-term collaboration.",
    },
    tnc: {
        title: "Terms & Conditions",
        subtitle: "Please review our terms and conditions carefully",
    },
    privacy: {
        title: "Privacy Policy",
        subtitle:
            "Your privacy is important to us. Please review our privacy policy to understand how we collect, use, and protect your information.",
    },
}

export const CATEGORIES = {
    household: "household",
    electrical: "electrical",
    furniture: "furniture",
}

export const CATEGORIES_SUBTITLE = {
    [CATEGORIES.household]:
        "Explore our wide range of cookware, utensils, storage solutions, and everyday household essentials designed for quality, durability, and affordability.",
    [CATEGORIES.electrical]:
        "From lighting and wiring to solar equipment and appliances — discover reliable electrical solutions built for homes, businesses, and industries.",
    [CATEGORIES.furniture]:
        "Stylish, functional, and durable furniture for indoor, outdoor, and commercial spaces — crafted to bring comfort and utility to every environment.",
}

export const PRODUCTS = {
    [CATEGORIES.household]: {
        "Cookware & Utensils": [
            { id: "VG-1001", name: "3 PCS NICE DAY" },
            { id: "VG-1002", name: "6 PCS STRAINER HEAVY" },
            { id: "VG-1003", name: "6 PCS STRAINER MESH" },
            { id: "VG-1004", name: "DOUBLE FRYPAN" },
            { id: "VG-1005", name: "FRYPAN" },
            { id: "VG-1014", name: "PRESSURE COOKER" },
            { id: "VG-1018", name: "5 PCS BOWL SET" },
            { id: "VG-1023", name: "14 PCS ALU POT" },
            { id: "VG-1025", name: "6 PCS SS BOWL SET WITH GRATER PLATE" },
            { id: "VG-1026", name: "5 PCS SS COLANDER SET" },
            { id: "VG-1027", name: "STAINLESS STEEL POT (TIFFIN)" },
            { id: "VG-1047", name: "CUTLERY ITEMS (Spoon, Fork, Knife, etc.)" },
            { id: "VG-1048", name: "SOLIGEN KNIFE" },
            { id: "VG-1049", name: "COOKWARE SET" },
            { id: "VG-1050", name: "CHAFING DISH" },
            { id: "VG-1020", name: "DIECAST COOKWARE" },
            { id: "VG-1021", name: "OPALWARE" },
            { id: "VG-1031", name: "4 PCS FOOD WARMER" },
            { id: "VG-1058", name: "CUTTING BOARD" },
            { id: "VG-1045", name: "PAPER CUP" },
        ],
        "Storage & Organization": [
            { id: "VG-1019", name: "CEREAL DISPENSER" },
            { id: "VG-1024", name: "SPACE SAVER RACK" },
            { id: "VG-1038", name: "14 PCS STORAGE BOX" },
            { id: "VG-1040", name: "STORAGE RACK" },
            { id: "VG-1043", name: "SHOERACK" },
            { id: "VG-1054", name: "COIN BOX" },
            { id: "VG-1055", name: "GIFT BAG" },
            { id: "VG-1056", name: "GIFT WRAPPER ROLL" },
            { id: "VG-1052", name: "3 PCS SUITCASE SET" },
        ],
        "Kitchen & Gas Appliances": [
            { id: "VG-1006", name: "TR 219 GAS COOKER" },
            { id: "VG-1007", name: "GAS REGULATOR" },
            { id: "VG-1008", name: "GAS CYLINDER" },
            { id: "VG-1009", name: "GAS PIPE" },
            { id: "VG-1010", name: "GAS STOVE" },
            { id: "VG-1011", name: "HOT PLATE" },
            { id: "VG-1012", name: "WATER PUMP" },
            { id: "VG-1013", name: "PORTABLE GAS STOVE" },
            { id: "VG-1017", name: "WATER KETTLE" },
            { id: "VG-1041", name: "METAL FLASK" },
            { id: "VG-1051", name: "LIQUID DISPENSER" },
            { id: "VG-1035", name: "CAMRY SCALE 20KG" },
            { id: "VG-1036", name: "DIGITAL SCALE" },
            { id: "VG-1037", name: "SMALL SCALE 10KG" },
            { id: "VG-1046", name: "SCRUBBER" },
            { id: "VG-1028", name: "MEAT MINCER" },
            { id: "VG-1029", name: "CORN GRINDER" },
            { id: "VG-1030", name: "PASTA MAKER" },
            { id: "VG-1042", name: "FOOD PROCESSOR" },
            { id: "VG-1044", name: "COFFEE GRINDER" },
        ],
        "Home Comforts": [
            { id: "VG-1016", name: "TABLE MATE" },
            { id: "VG-1022", name: "BEACH CHAIR" },
            { id: "VG-1034", name: "BEACH UMBRELLA" },
            { id: "VG-1039", name: "MATTRESS" },
            { id: "VG-1053", name: "BLANKET" },
        ],
    },
    [CATEGORIES.electrical]: {
        "Lighting & Solar": [
            { id: "VG-4001", name: "LED BULB" },
            { id: "VG-4002", name: "LED T BULB" },
            { id: "VG-4003", name: "LED PANEL LIGHT" },
            { id: "VG-4004", name: "LED DOWN LIGHT" },
            { id: "VG-4005", name: "LED SURFACE PANEL LIGHT" },
            { id: "VG-4006", name: "LED FILAMENT LAMP" },
            { id: "VG-4007", name: "CLEAR BULB 100W/200W" },
            { id: "VG-4008", name: "COLOUR BULB" },
            { id: "VG-4013", name: "LED STRIP LIGHT" },
            { id: "VG-4014", name: "LED SOLAR LIGHT" },
            { id: "VG-4015", name: "SOLAR PANEL" },
            { id: "VG-4016", name: "SOLAR INVERTER" },
            { id: "VG-4021", name: "SOLAR BATTERY" },
            { id: "VG-4020", name: "LED DC LIGHT" },
            { id: "VG-4022", name: "LED EMERGENCY LIGHT" },
            { id: "VG-4023", name: "ENRGY SAVER" },
            { id: "VG-4024", name: "SENSOR" },
        ],
        "Wiring & Accessories": [
            { id: "VG-4009", name: "PVC PIPE" },
            { id: "VG-4010", name: "PHOTO MCB BOX" },
            { id: "VG-4011", name: "DISTRIBUTION BOARD" },
            { id: "VG-4012", name: "ELECTRIC CABLE" },
            { id: "VG-4018", name: "PVC BOX AND METAL BOX" },
            { id: "VG-4019", name: "SWITCH SOCKET" },
            { id: "VG-4025", name: "LAMPHOLDER" },
            { id: "VG-4026", name: "INSULATOR" },
            { id: "VG-4027", name: "EXTENSION" },
            { id: "VG-4028", name: "CABLE REEL" },
            { id: "VG-4029", name: "CABLE TRAY" },
            { id: "VG-4033", name: "TELEPHONE WIRE" },
            { id: "VG-4034", name: "TV CABLE WITH CONNECTOR" },
            { id: "VG-4035", name: "LAN CABLE" },
            { id: "VG-4036", name: "CHANGE OVER SWITCH" },
        ],
        "Small Electrical Appliances": [
            { id: "VG-2001", name: "WASHING MACHINE" },
            { id: "VG-2002", name: "REFRIGERATOR" },
            { id: "VG-2003", name: "CHEST FREEZER" },
            { id: "VG-2004", name: "LED SMART TV" },
            { id: "VG-2005", name: "BLENDER" },
            { id: "VG-2006", name: "ELECTRIC KETTLE" },
            { id: "VG-2007", name: "PIZZA PAN" },
            { id: "VG-2008", name: "STAND FAN" },
            { id: "VG-2009", name: "WALL FAN" },
            { id: "VG-2010", name: "VACCUM CLEANER" },
            { id: "VG-2011", name: "WATER DISPENSER" },
            { id: "VG-2012", name: "PP KETTLE" },
            { id: "VG-2013", name: "ELECTRIC STOVE" },
            { id: "VG-2014", name: "DEEP FRYER" },
            { id: "VG-2015", name: "COFFEE MAKER" },
            { id: "VG-2016", name: "HUMIDIFIER" },
            { id: "VG-2017", name: "MICROWAVE OVEN" },
            { id: "VG-2018", name: "HOT PLATE OVEN" },
            { id: "VG-2019", name: "HAIR DRYER" },
            { id: "VG-2020", name: "EXPRESSO COFFEE MAKER" },
            { id: "VG-2021", name: "PUMP STEAM IRON STATION" },
            { id: "VG-2022", name: "BREAD TOASTER" },
            { id: "VG-2023", name: "COFFEE GRINDER" },
            { id: "VG-2024", name: "FOOD PROCESSOR" },
            { id: "VG-2025", name: "7 IN 1 GRINDER BLENDER" },
            { id: "VG-2026", name: "TEA POT KETTLE" },
            { id: "VG-2027", name: "STAND MIXER" },
            { id: "VG-2028", name: "HEAVY IRON" },
            { id: "VG-2029", name: "5 IN 1 GRINDER BLENDER" },
        ],
        "Other Electricals": [
            { id: "VG-4017", name: "EX-FAN & IND FAN" },
            { id: "VG-4030", name: "INSECT KILLER" },
            { id: "VG-4031", name: "VOLTAGE PROTECTOR" },
            { id: "VG-4032", name: "AUTOMATIC VOLTAGE REGULATOR" },
        ],
    },
    [CATEGORIES.furniture]: {
        "Indoor Furniture": [
            { id: "VG-1016", name: "TABLE MATE" },
            { id: "VG-1024", name: "SPACE SAVER RACK" },
            { id: "VG-1040", name: "STORAGE RACK" },
            { id: "VG-1043", name: "SHOERACK" },
            { id: "VG-1052", name: "3 PCS SUITCASE SET" },
        ],
        "Outdoor Furniture": [
            { id: "VG-1022", name: "BEACH CHAIR" },
            { id: "VG-1034", name: "BEACH UMBRELLA" },
        ],
        "Home Comfort": [
            { id: "VG-1039", name: "MATTRESS" },
            { id: "VG-1053", name: "BLANKET" },
        ],
        "Tools & Hardware": [
            { id: "VG-3001", name: "EMERY CLOTH TYPE 115MM*45M 60#" },
            { id: "VG-3002", name: "PAPER TYPE ROLLS 115MM*45M 60#" },
            { id: "VG-3003", name: "GRINDING DISC FOR METAL" },
            {
                id: "VG-3004",
                name: 'SEGMENT DIAMOND DISC 9" (230x2.4x7x22.23mm)',
            },
            { id: "VG-3005", name: "TAIWAN TROWEL" },
            { id: "VG-3006", name: "MANNESMAN TROWEL" },
            { id: "VG-3007", name: "10KG SCALE" },
            { id: "VG-3008", name: "GREEN SHEDDING NET 3M*50M 140 GSM" },
            { id: "VG-3009", name: "PAINT ROLLER" },
            { id: "VG-3015", name: "BABY PAINT ROLLER" },
            { id: "VG-3016", name: "PAINT BRUSH" },
            { id: "VG-3017", name: "PRUNING SHEAR" },
            { id: "VG-3018", name: "COLT TAPE" },
            { id: "VG-3019", name: "OPEN MEASURING TAPE" },
            { id: "VG-3020", name: "1/2*1*20M WELDED WIRE MASH" },
            { id: "VG-3021", name: "16L SPRAYER" },
            { id: "VG-3022", name: "3PC PLIER SETS" },
            { id: "VG-3023", name: "40PC Combination Socket Set" },
            { id: "VG-3024", name: "BLACK TRI SQUARE" },
            { id: "VG-3025", name: "SILICON GUN" },
            { id: "VG-3026", name: "BOW SAW 0.8MM" },
            { id: "VG-3027", name: "BUILDING LINE 100M 0.8MM" },
            { id: "VG-3028", name: 'DYGT HAMMER 16"' },
            { id: "VG-3029", name: "EARTH CLAMP 1670H" },
            { id: "VG-3030", name: "EARTH ROD 14MM 1.2M" },
            { id: "VG-3031", name: "ELECTRONIC PLATFORM SCALE 150 KG" },
            { id: "VG-3032", name: "ELECTRONIC PLATFORM SCALE 200 KG" },
            { id: "VG-3033", name: "FISHER PLUG 6MM WITH CAP" },
            { id: "VG-3034", name: "FISHER PLUG 8MM" },
            { id: "VG-3035", name: "FLICKER MACHINE" },
            { id: "VG-3036", name: "HOSE PIPE 3/4 45M, 7.7KGS" },
            { id: "VG-3037", name: "PUR FIBER TROWEL 18*32 200G" },
            { id: "VG-3038", name: "PVC TRUNKING 16X16/0.58MM" },
            { id: "VG-3039", name: "PVC TRUNKING 25x16/0.6MM" },
            { id: "VG-3040", name: "PVC TRUNKING 39X19/0.8MM" },
            { id: "VG-3041", name: "PVC TRUNKING 40X25/0.68MM" },
            { id: "VG-3042", name: "PVC TRUNKING 50X50/1.2MM" },
            { id: "VG-3043", name: 'SICKLE 16"' },
            { id: "VG-3044", name: "SILICON SEALANT BLACK" },
            { id: "VG-3045", name: "SILICON SEALANT WHITE" },
            { id: "VG-3046", name: "SOLDERING IRON 60W" },
            { id: "VG-3047", name: 'STAREX HAMMER 16"' },
            { id: "VG-3048", name: "WHEEL BARROW 3800" },
            { id: "VG-3049", name: "WIRE BRUSH 4*15*12 PLASTIC HANDLE" },
            { id: "VG-3050", name: "WIRE BRUSH 4*15*12 WOOD HANDLE" },
            { id: "VG-3051", name: 'YATO HAMMER 16"' },
            { id: "VG-3052", name: 'VISE GRIP 7"' },
            { id: "VG-3053", name: '10" SIDE SCRAPER' },
            { id: "VG-3054", name: "6-22 10PC SPARK PLUG WRENCH" },
            { id: "VG-3055", name: "CHARCOAL IRON 752 1.8KG" },
            { id: "VG-3056", name: 'PROFESSIONAL HAND SAW 16"' },
            { id: "VG-3057", name: 'PROFESSIONAL HAND SAW 18"' },
            { id: "VG-3058", name: 'PROFESSIONAL HAND SAW 20"' },
            { id: "VG-3059", name: 'PROFESSIONAL HAND SAW 22"' },
            { id: "VG-3060", name: 'PROFESSIONAL HAND SAW 24"' },
            { id: "VG-3061", name: "POINTED TROWEL" },
            { id: "VG-3062", name: 'TOOL CASE 21"' },
            { id: "VG-3063", name: "33# HACKSAW FRAME" },
            { id: "VG-3064", name: "HEAVY DUTY PLIER" },
            { id: "VG-3065", name: "LIGHT DUTY PLIER" },
            { id: "VG-3066", name: "PVC FITTINGS" },
            { id: "VG-3067", name: "SCREWDRIVER SET" },
            { id: "VG-3068", name: "WIRE NAIL" },
            { id: "VG-3069", name: "CONCRETE NAIL" },
            { id: "VG-3070", name: "ROOFING NAIL" },
            { id: "VG-3071", name: "CHAIR NAIL" },
            { id: "VG-3072", name: "LOCKS" },
            { id: "VG-3073", name: "ALLEN KEY" },
            { id: "VG-3074", name: "CHIPBOARD SCREW" },
            { id: "VG-3075", name: "TILE SPACER" },
            { id: "VG-3076", name: "TILE CUTTER" },
        ],
    },
}

const getProductMenu = () => {
    return Object.keys(CATEGORIES).map((category) => {
        const subcategories = Object.keys(PRODUCTS[category])
        return {
            title: toTitleCase(category),
            submenu: subcategories.map((subcategory) => ({
                title: subcategory,
                href: `/products/${category}/${slugify(subcategory)}`,
            })),
            link: `/products/${category}`,
        }
    })
}

export const MENU_DATA = [
    {
        title: "Products",
        submenu: getProductMenu(),
    },
    {
        title: "About",
        href: "/about",
    },
]

export const FOOTER_LINKS = [
    {
        title: "Quick Links",
        links: [
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/sitemap.xml", label: "Sitemap ↗" },
        ],
    },
    {
        title: "Contact",
        links: [
            { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
            {
                href: `tel:${CONTACT_PHONE_NUMBER_1}`,
                label: `${CONTACT_PHONE_NUMBER_1}`,
            },
            {
                href: `tel:${CONTACT_PHONE_NUMBER_2}`,
                label: `${CONTACT_PHONE_NUMBER_2}`,
            },
        ],
    },
    {
        title: "Legal",
        links: [
            { href: "/tnc", label: "Terms & Conditions" },
            { href: "/privacy", label: "Privacy Policy" },
        ],
    },
]

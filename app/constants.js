import { EyeIcon, GemIcon, LeafIcon } from "lucide-react"

import { slugify, toTitleCase } from "@/app/utils"

export const IMAGE_VERSION = "v1"

export const CONTACT_EMAIL = "vgexports@vng.sina.net"
export const CONTACT_PHONE_NUMBER_1 = "+86 138 5787 8564"
export const CONTACT_PHONE_NUMBER_2 = "+91 98291 38378"
export const CONTACT_PHONE_NUMBER_3 = "+971 55 651 5107"
export const CONTACT_URL = "/contact"

export const CONTENT = {
    seo: {
        title: "Vee Gee Exports Limited - Quality Products at Affordable Prices",
        description:
            "Since 2005, Vee Gee Exports Limited has been delivering high-quality food, non-food, and personal care products worldwide at affordable prices.",
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
                "Serving Africa, the Caribbean, the Middle East, the Levant, and beyond with quality products from China.",
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
                "Global Reach: Supplying quality products to markets across Africa, the Caribbean, the Middle East and the Levant.",
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
                "Since 2005, Vee Gee Exports Limited has been transforming the way businesses access high-quality household, electrical, and furniture products worldwide. What started as a vision to provide reliable, premium solutions has grown into a global network of satisfied clients and trusted partners.",
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
            para1: "Founded in 2005 by Mr. Girish Bhagtani and Mr. Ravi Kumar, our mission has always been to set new benchmarks in quality, reliability, and customer satisfaction. Over the years, we have expanded our presence with offices in India, China, Hong Kong, and the UAE, serving clients across Africa, the Caribbean, the Middle East, and the Levant.",
            para2: "Through strategic partnerships and a commitment to excellence, we deliver products and solutions that help businesses thrive worldwide.",
        },
        location: {
            title: "Our Global Presence",
            subtitle:
                "Headquartered in Ningbo, China, Vee Gee Exports Limited operates across multiple international markets, with branches in China, Hong Kong, Dubai and India to efficiently serve our global clients.",
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
                "Reach out to us at our offices across China, India, and Dubai.",
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
    "electrical-items": "electrical-items",
    furniture: "furniture",
    "hardware-items": "hardware-items",
    "home-appliance": "home-appliance",
    "household-items": "household-items",
    lighting: "lighting",
}

export const CATEGORIES_SUBTITLE = {
    [CATEGORIES["electrical-items"]]:
        "Switches, sockets, wiring, and electrical accessories built for reliable everyday use.",
    [CATEGORIES.furniture]:
        "Indoor, outdoor, and office furniture with durable construction and modern finishes.",
    [CATEGORIES["hardware-items"]]:
        "Building materials, tools, and hardware supplies for construction and maintenance.",
    [CATEGORIES["home-appliance"]]:
        "Home appliances and kitchen electronics designed for daily comfort and convenience.",
    [CATEGORIES["household-items"]]:
        "Everyday household essentials including cookware, storage, and home comforts.",
    [CATEGORIES.lighting]:
        "Indoor, outdoor, and solar lighting solutions for homes, businesses, and projects.",
}

export const PRODUCTS = {
    "electrical-items": {
        "OTHER ELECTRICAL ITEMS": [
            {
                id: "1",
                name: "PVC BOX AND METAL BOX",
            },
            {
                id: "2",
                name: "INSECT KILLER",
            },
            {
                id: "3",
                name: "AUTOMATIC VOLTAGE REGULATOR",
            },
            {
                id: "4",
                name: "SOLAR PANEL",
            },
            {
                id: "5",
                name: "SOLAR BATTERY",
            },
            {
                id: "6",
                name: "EX-FAN",
            },
            {
                id: "7",
                name: "INDUSTRIAL FAN",
            },
            {
                id: "8",
                name: "SOLAR INVERTER",
            },
            {
                id: "9",
                name: "SENSOR",
            },
            {
                id: "10",
                name: "LAMPHOLDER",
            },
        ],
        "SWITCH AND SOCKET": [
            {
                id: "1",
                name: "16A Euro socket",
            },
            {
                id: "2",
                name: "3*3 Blank Plate",
            },
            {
                id: "3",
                name: "1 gang 1 way switch",
            },
            {
                id: "4",
                name: "2 gang 1 way switch",
            },
            {
                id: "5",
                name: "3 gang 1 way switch",
            },
            {
                id: "6",
                name: "4 gang 1 way switch",
            },
            {
                id: "7",
                name: "5 gang 1 way switch",
            },
            {
                id: "8",
                name: "10A doorbell switch",
            },
            {
                id: "9",
                name: "20A DP water heater switch",
            },
            {
                id: "10",
                name: "15A switch socket",
            },
            {
                id: "11",
                name: "13A switch socket",
            },
            {
                id: "12",
                name: "13A switch socket",
            },
            {
                id: "13",
                name: "13A double switch socket",
            },
            {
                id: "14",
                name: "13A double switch socket with neon",
            },
            {
                id: "15",
                name: "13A multi socket",
            },
            {
                id: "16",
                name: "13A multi socket with neon",
            },
            {
                id: "17",
                name: "double 13A multi socket",
            },
            {
                id: "18",
                name: "double 13A multi socket with neon",
            },
            {
                id: "19",
                name: "13A multi socket with 2pin socket +neon",
            },
            {
                id: "20",
                name: "13A multi socket with USB port",
            },
            {
                id: "21",
                name: "16A 2 pin socket",
            },
            {
                id: "22",
                name: "16A double 2 pin socket",
            },
            {
                id: "23",
                name: "16A 1gang and 2 pin socket",
            },
            {
                id: "24",
                name: "16A 2gang and 2 pin socket",
            },
            {
                id: "25",
                name: "3*3 45A DP switch",
            },
            {
                id: "26",
                name: "3*6 45A DP switch",
            },
            {
                id: "27",
                name: "45A cooker with neon",
            },
            {
                id: "28",
                name: "TV",
            },
            {
                id: "29",
                name: "Satelite",
            },
            {
                id: "30",
                name: "TEL",
            },
            {
                id: "31",
                name: "1 gang speed dimmer switch",
            },
            {
                id: "32",
                name: "25A cooker connector",
            },
            {
                id: "33",
                name: "EXTENSION",
            },
            {
                id: "34",
                name: "VOLTAGE PROTECTOR",
            },
            {
                id: "35",
                name: "SOCKETS",
            },
        ],
        "WIRE & ACCESSORIES": [
            {
                id: "1",
                name: "PHOTO MCB BOX",
            },
            {
                id: "2",
                name: "DISTRIBUTION BOARD",
            },
            {
                id: "3",
                name: "ELECTRIC CABLE",
            },
            {
                id: "4",
                name: "INSULATOR",
            },
            {
                id: "5",
                name: "CABLE REEL",
            },
            {
                id: "6",
                name: "CABLE TRAY",
            },
            {
                id: "7",
                name: "TELEPHONE WIRE",
            },
            {
                id: "8",
                name: "COAXIAL CABLE",
            },
            {
                id: "9",
                name: "LAN CABLE",
            },
        ],
    },
    furniture: {
        "INDOOR FURNITURE": [
            {
                id: "1",
                name: "BED",
            },
            {
                id: "2",
                name: "SOFA",
            },
            {
                id: "3",
                name: "CABINET",
            },
            {
                id: "4",
                name: "DINING TABLE",
            },
            {
                id: "5",
                name: "CENTER TABLE",
            },
            {
                id: "6",
                name: "CONSOLE TABLE",
            },
            {
                id: "7",
                name: "SIDE TABLE",
            },
            {
                id: "8",
                name: "HIGH CHAIR",
            },
            {
                id: "9",
                name: "BEDROOM SET",
            },
            {
                id: "10",
                name: "SHOE RACK",
            },
            {
                id: "11",
                name: "TV TABLE",
            },
            {
                id: "12",
                name: "DRESSING TABLE",
            },
            {
                id: "13",
                name: "SOFA BED",
            },
            {
                id: "14",
                name: "MASSAGE CHAIR",
            },
            {
                id: "15",
                name: "BAR",
            },
            {
                id: "16",
                name: "RECLINER",
            },
            {
                id: "17",
                name: "MODULAR KITCHEN",
            },
            {
                id: "18",
                name: "STOOL",
            },
            {
                id: "19",
                name: "WARDROBE",
            },
            {
                id: "20",
                name: "BOOKSHELF",
            },
        ],
        "OFFICE FURNITURE": [
            {
                id: "1",
                name: "RECEPTION TABLE",
            },
            {
                id: "2",
                name: "CONFRENCE TABLE",
            },
            {
                id: "3",
                name: "COFFEE TABLE",
            },
            {
                id: "4",
                name: "WORK STATION",
            },
            {
                id: "5",
                name: "BOSS TABLE",
            },
            {
                id: "6",
                name: "SOFA",
            },
            {
                id: "7",
                name: "CABINET",
            },
            {
                id: "8",
                name: "MEETING TABLE",
            },
            {
                id: "9",
                name: "OFFICE CHAIR",
            },
            {
                id: "10",
                name: "METAL LOCKER",
            },
            {
                id: "11",
                name: "VISITOR SEATING AREA",
            },
        ],
        "OUTDOOR FURNITURE": [
            {
                id: "1",
                name: "Aluminum frame sofa set",
            },
            {
                id: "2",
                name: "Steel corner sofa set",
            },
            {
                id: "3",
                name: "Steel Corner sofa set",
            },
            {
                id: "4",
                name: "Steel corner sofa set",
            },
            {
                id: "5",
                name: "Steel corner sofa set (NON KD)",
            },
            {
                id: "6",
                name: "Steel corner sofa set",
            },
            {
                id: "7",
                name: "Steel corner sofa set",
            },
            {
                id: "8",
                name: "Steel corner sofa set",
            },
            {
                id: "9",
                name: "Steel 4pc sofa set",
            },
            {
                id: "10",
                name: "Steel 4pc sofa set",
            },
            {
                id: "11",
                name: "Steel 4pc sofa set",
            },
            {
                id: "12",
                name: "Steel 3pcs sofa set HOME DEPOT",
            },
            {
                id: "13",
                name: "Steel frame sofa set",
            },
            {
                id: "14",
                name: "Steel sofa set with USFR fabric",
            },
            {
                id: "15",
                name: "Steel corner sofa NON KD",
            },
            {
                id: "16",
                name: "Steel corner sofa set",
            },
            {
                id: "17",
                name: "Steel corner sofa set",
            },
            {
                id: "18",
                name: "Steel Corner sofa set",
            },
            {
                id: "19",
                name: "Steel sofa set with 10cm seat cushion",
            },
            {
                id: "20",
                name: "Steel sofa set with 10cm seat cushion",
            },
            {
                id: "21",
                name: "Steel corner sofa set-NON KD",
            },
            {
                id: "22",
                name: "Aluminum sofa set",
            },
            {
                id: "23",
                name: "Aluminum 3pcs sofa set",
            },
            {
                id: "24",
                name: "Steel swivel sofa set HOME DEPOT",
            },
            {
                id: "25",
                name: "Steel sofa set",
            },
            {
                id: "26",
                name: "Aluminum rope sofa set red color",
            },
            {
                id: "27",
                name: "Steel corner sofa set UKFR cushion ALDI-UK",
            },
            {
                id: "28",
                name: "Aluminum 7pcs corner sofa set-NON KD",
            },
            {
                id: "29",
                name: "Steel 4pc sofa set",
            },
            {
                id: "30",
                name: "6PC STEEL SOFA SET",
            },
            {
                id: "31",
                name: "Aluminum sofa set",
            },
            {
                id: "32",
                name: "Aluminum sofa set",
            },
            {
                id: "33",
                name: "Steel 4pc sofa set",
            },
            {
                id: "34",
                name: "Steel chaise lounger sofa set",
            },
            {
                id: "35",
                name: "Steel 5pc sofa set",
            },
            {
                id: "36",
                name: "Aluminum 6pc sofa set with cover",
            },
            {
                id: "37",
                name: "Aluminum 3pc sofa set with cover",
            },
            {
                id: "38",
                name: "Steel 7pcs sofa set",
            },
            {
                id: "39",
                name: "Steel corner sofa set",
            },
            {
                id: "40",
                name: "Steel corner sofa set",
            },
            {
                id: "41",
                name: "Aluminum sofa set",
            },
            {
                id: "42",
                name: "Aluminum big rope sofa set 53999",
            },
            {
                id: "43",
                name: "Steel corner sofa set",
            },
            {
                id: "44",
                name: "Steel corner sofa set",
            },
            {
                id: "45",
                name: "Steel bistro set",
            },
            {
                id: "46",
                name: "Steel corner sofa set",
            },
            {
                id: "47",
                name: "Steel corner sofa set",
            },
            {
                id: "48",
                name: "Steel corner sofa set",
            },
            {
                id: "49",
                name: "Steel corner sofa set",
            },
            {
                id: "50",
                name: "Steel corner sofa set",
            },
            {
                id: "51",
                name: "Aluminum corner sofa set",
            },
            {
                id: "52",
                name: "Steel corner sofa set",
            },
            {
                id: "53",
                name: "Steel corner sofa set",
            },
            {
                id: "54",
                name: "Steel 4pc KD sofa set",
            },
            {
                id: "55",
                name: "Steel 4pc KD sofa set",
            },
            {
                id: "56",
                name: "Steel 6pc sofa set",
            },
            {
                id: "57",
                name: "Steel corner sofa set",
            },
            {
                id: "58",
                name: "Steel 7pc sofa set",
            },
            {
                id: "59",
                name: "Aluminum & steel sofa set",
            },
            {
                id: "60",
                name: "Steel 5pc sofa set",
            },
            {
                id: "61",
                name: "Aluminum sofa set",
            },
            {
                id: "62",
                name: "Steel corner sofa set",
            },
            {
                id: "63",
                name: "Aluminum sofa set",
            },
            {
                id: "64",
                name: "Aluminum sofa set",
            },
            {
                id: "65",
                name: "Steel 4pc sofa set",
            },
            {
                id: "66",
                name: "Steel 4pc sofa set",
            },
            {
                id: "67",
                name: "Steel 4pc sofa set",
            },
            {
                id: "68",
                name: "Steel 4pcs sofa set",
            },
            {
                id: "69",
                name: "Steel 4pc sofa set",
            },
            {
                id: "70",
                name: "Steel 5pc sofa set",
            },
            {
                id: "71",
                name: "Steel sofa set",
            },
            {
                id: "72",
                name: "Steel sofa set",
            },
            {
                id: "73",
                name: "Steel sofa set",
            },
            {
                id: "74",
                name: "Steel sofa set",
            },
            {
                id: "75",
                name: "Steel corner sofa set",
            },
            {
                id: "76",
                name: "Steel 3pcs sofa set rocking function HOME DEPOT",
            },
            {
                id: "77",
                name: "Steel 3pcs sofa set rocking function HOME DEPOT",
            },
            {
                id: "78",
                name: "Steel 4pc sofa set HOME DEPOT",
            },
            {
                id: "79",
                name: "Aluminum sofa set",
            },
            {
                id: "80",
                name: "Aluminum sofa set",
            },
            {
                id: "81",
                name: "Aluminum sofa set",
            },
            {
                id: "82",
                name: "Aluminum sofa set",
            },
            {
                id: "83",
                name: "Steel 4pc KD sofa set",
            },
            {
                id: "84",
                name: "Steel corner sofa set",
            },
            {
                id: "85",
                name: "Steel sofa set",
            },
            {
                id: "86",
                name: "Steel 8pc sofa set",
            },
            {
                id: "87",
                name: "Steel 4pc corner sofa set",
            },
            {
                id: "88",
                name: "Steel sofa set",
            },
            {
                id: "89",
                name: "Steel corner sofa set-UKFR CUSHION",
            },
            {
                id: "90",
                name: "Polywood 3pcs sofa set",
            },
            {
                id: "91",
                name: "Steel 4pc sofa set",
            },
            {
                id: "92",
                name: "Steel 4pc sofa set",
            },
            {
                id: "93",
                name: "Steel corner sofa set",
            },
            {
                id: "94",
                name: "Steel 4pc sofa set",
            },
            {
                id: "95",
                name: "Steel 4pc sofa set",
            },
        ],
    },
    "hardware-items": {
        "BUILDING MATERIAL": [
            {
                id: "1",
                name: "WELDED PIPE",
            },
            {
                id: "2",
                name: "IRON ANGLE BAR",
            },
            {
                id: "3",
                name: "REBAR",
            },
            {
                id: "4",
                name: "SEAMLESS PIPE",
            },
            {
                id: "5",
                name: "H BEAM",
            },
            {
                id: "6",
                name: "ANGLE",
            },
            {
                id: "7",
                name: "CHANNEL",
            },
            {
                id: "8",
                name: "SQUARE TUBE",
            },
            {
                id: "9",
                name: "GI PIPE",
            },
            {
                id: "10",
                name: "GI PIPE FITTINGS",
            },
            {
                id: "11",
                name: "H BEAM",
            },
            {
                id: "12",
                name: "STAINLESS STEEL STRAP",
            },
            {
                id: "13",
                name: "STAINLESS STEEL ANGLE",
            },
            {
                id: "14",
                name: "STAINLESS STEEL PIPE",
            },
            {
                id: "15",
                name: "STAINLESS STEEL CHANNEL",
            },
            {
                id: "16",
                name: "STAINLESS STEEL BAR",
            },
            {
                id: "17",
                name: "STAINLESS STEEL FLAT",
            },
            {
                id: "18",
                name: "ALUMINUM PLATE",
            },
            {
                id: "19",
                name: "ALUMINUM ROD",
            },
            {
                id: "20",
                name: "ALUMINUM PIPE",
            },
            {
                id: "21",
                name: "COPPER PLATE",
            },
            {
                id: "22",
                name: "COPPER ROD",
            },
            {
                id: "23",
                name: "COPPER PIPE",
            },
            {
                id: "24",
                name: "PVC PIPE",
            },
            {
                id: "25",
                name: "PVC FITTINGS",
            },
            {
                id: "26",
                name: "CABLE TRAY",
            },
            {
                id: "27",
                name: "CABLE TRAY FITTINGS",
            },
            {
                id: "28",
                name: "PVC TRUNCKING",
            },
            {
                id: "29",
                name: "ROOFING SHEET",
            },
            {
                id: "30",
                name: "ROOFING TILE",
            },
            {
                id: "31",
                name: "FLASH BAND",
            },
            {
                id: "32",
                name: "PLYWOOD",
            },
            {
                id: "33",
                name: "HARDBOARD",
            },
            {
                id: "34",
                name: "PVC PANEL / WPC GRILL",
            },
            {
                id: "35",
                name: "WPC DOOR",
            },
            {
                id: "36",
                name: "HEAD PAN",
            },
            {
                id: "37",
                name: "KITHCEN SINK",
            },
            {
                id: "38",
                name: "FLEXIBLE TUBE",
            },
            {
                id: "39",
                name: "FAUCETS",
            },
            {
                id: "40",
                name: "ANGLE VALVE",
            },
            {
                id: "41",
                name: "SHOWER",
            },
            {
                id: "42",
                name: "WC",
            },
            {
                id: "43",
                name: "WASHBASIN",
            },
            {
                id: "44",
                name: "SAFETY HELMET",
            },
            {
                id: "45",
                name: "SCARPPER",
            },
            {
                id: "46",
                name: "WALL SCRAPPER",
            },
            {
                id: "47",
                name: "HINGES",
            },
            {
                id: "48",
                name: "DOOR LOCK",
            },
            {
                id: "49",
                name: "6 TURN LOCK",
            },
            {
                id: "50",
                name: "CK LOCK",
            },
            {
                id: "51",
                name: "PAINT BRUSH",
            },
            {
                id: "52",
                name: "PAINT ROLLER",
            },
            {
                id: "53",
                name: "PLUMBING TAPE",
            },
            {
                id: "54",
                name: "RAINBOOT",
            },
            {
                id: "55",
                name: "SAFETY SHOE",
            },
            {
                id: "56",
                name: "EXTENSION SOCKET",
            },
            {
                id: "57",
                name: "SAFETY JACKET",
            },
            {
                id: "58",
                name: "WIRE MESH",
            },
            {
                id: "59",
                name: "FASTNERS",
            },
            {
                id: "60",
                name: "WELDING GLOVES",
            },
            {
                id: "61",
                name: "MESH",
            },
            {
                id: "62",
                name: "GREEN SHEDDING NET",
            },
            {
                id: "63",
                name: "WIRE NAIL",
            },
            {
                id: "64",
                name: "CONCRETE NAIL",
            },
            {
                id: "65",
                name: "ROOFING NAIL",
            },
            {
                id: "66",
                name: "CARPANTER SAW",
            },
            {
                id: "67",
                name: "EAGLE SHOVEL",
            },
            {
                id: "68",
                name: "LAMPHOLDER",
            },
            {
                id: "69",
                name: "REVERSE SWITCH",
            },
            {
                id: "70",
                name: "SWITCHES",
            },
            {
                id: "71",
                name: "SOCKETS",
            },
            {
                id: "72",
                name: "ELECTRIC CABLE",
            },
            {
                id: "73",
                name: "UTILITY CUP",
            },
            {
                id: "74",
                name: "ROUND CUP",
            },
        ],
        EQUIPMENT: [
            {
                id: "1",
                name: "PAINT ROLLER",
            },
            {
                id: "2",
                name: "BABY PAINT ROLLER",
            },
            {
                id: "3",
                name: "PAINT BRUSH",
            },
            {
                id: "4",
                name: "PRUNIN SHEAR",
            },
            {
                id: "5",
                name: "COLT TAPE",
            },
            {
                id: "6",
                name: "OPEN MEASURING TAPE",
            },
        ],
        "HAND TOOLS": [
            {
                id: "1",
                name: "TAIWAN TROWEL",
            },
            {
                id: "2",
                name: "MANNESMAN TROWEL",
            },
            {
                id: "3",
                name: "3PC Plier Sets",
            },
            {
                id: "4",
                name: "40PC Combination Socket Set",
            },
            {
                id: "5",
                name: "BLACK TRI SQUARE 16*24*1.4MM",
            },
            {
                id: "6",
                name: "SILICON GUN",
            },
            {
                id: "7",
                name: "BOW SAW 0.8MM",
            },
            {
                id: "8",
                name: 'DYGT HAMMER 16"',
            },
            {
                id: "9",
                name: "FISHER PLUG 6MM WITH CAP",
            },
            {
                id: "10",
                name: "FISHER PLUG 8MM",
            },
            {
                id: "11",
                name: "FLICKER MACHINE",
            },
            {
                id: "12",
                name: "PUR FIBER TROWEL 18*32 200G",
            },
            {
                id: "13",
                name: 'SICKLE 16"',
            },
            {
                id: "14",
                name: "SOLDERING IRON 60W",
            },
            {
                id: "15",
                name: 'STAREX HAMMER 16"',
            },
            {
                id: "16",
                name: "WHEEL BARROW 3800",
            },
            {
                id: "17",
                name: "WIRE BRUSH 4*15*12 PLASTIC HANDLE",
            },
            {
                id: "18",
                name: "WIRE BRUSH 4*15*12 WOOD HANDLE",
            },
            {
                id: "19",
                name: 'YATO HAMMER 16"',
            },
            {
                id: "20",
                name: 'VISE GRIP 7"',
            },
            {
                id: "21",
                name: '10"SIDE SCRAPER',
            },
            {
                id: "22",
                name: "6-22 10PC SPARK PLUG WRENCH",
            },
            {
                id: "23",
                name: 'PROFESSIOANL HAND SAW 16"',
            },
            {
                id: "24",
                name: 'PROFESSIOANL HAND SAW 18"',
            },
            {
                id: "25",
                name: 'PROFESSIOANL HAND SAW 20"',
            },
            {
                id: "26",
                name: 'PROFESSIOANL HAND SAW 22"',
            },
            {
                id: "27",
                name: "PROFESSIONAL HAND SAW 24''",
            },
            {
                id: "28",
                name: "POINTED TROWEL",
            },
            {
                id: "29",
                name: 'TOOL CASE 21"',
            },
            {
                id: "30",
                name: "33# HACKSAW FRAME",
            },
            {
                id: "31",
                name: "HEAVY DUTY PLIER",
            },
            {
                id: "32",
                name: "LIGHT DUTY PLIER",
            },
            {
                id: "33",
                name: "SCREWDRIVER SET",
            },
            {
                id: "34",
                name: "WIRE NAIL",
            },
            {
                id: "35",
                name: "CONCRETE NAIL",
            },
            {
                id: "36",
                name: "ROOFING NAIL",
            },
            {
                id: "37",
                name: "CHAIR NAIL",
            },
            {
                id: "38",
                name: "ALLEN KEY",
            },
            {
                id: "39",
                name: "CHIPBOARD SCREW",
            },
        ],
        OTHERS: [
            {
                id: "1",
                name: "EMERY CLOTH TYPE 115MM*45M 60#",
            },
            {
                id: "2",
                name: "PAPER TYPE ROLLS 115MM*45M 60#",
            },
            {
                id: "3",
                name: "GRINDNG DISC FOR METAL",
            },
            {
                id: "4",
                name: 'SEGMENT DIAMOND DISC 9" (230x2.4x7x22.23mm)',
            },
            {
                id: "5",
                name: "10KG SCALE",
            },
            {
                id: "6",
                name: "GREEN SHEDDING NET 3M*50M 140 GSM",
            },
            {
                id: "7",
                name: "WARNING TAP 7CM*200M",
            },
            {
                id: "8",
                name: 'STERN CUTTING DISC 9"',
            },
            {
                id: "9",
                name: "BLACK SUNGLOVE",
            },
            {
                id: "10",
                name: "OXFORD HINGES GP",
            },
            {
                id: "11",
                name: "ARALDITE GLUE",
            },
            {
                id: "12",
                name: "1/2*1*20M WELDED WIRE MASH",
            },
            {
                id: "13",
                name: "16L SPRAYER",
            },
            {
                id: "14",
                name: "BUILDING LINE 100M 0.8MM",
            },
            {
                id: "15",
                name: "EARTH CLAMP 1670H",
            },
            {
                id: "16",
                name: "EARTH ROD 14MM 1.2M",
            },
            {
                id: "17",
                name: "ELECTRONIC PLATFORM SCALE 150 KG",
            },
            {
                id: "18",
                name: "ELECTRONIC PLATFORM SCALE 200 KG",
            },
            {
                id: "19",
                name: "HOSE PIPE 3/4 45M, 7.7KGS",
            },
            {
                id: "20",
                name: "SILICON SEALANT BLACK",
            },
            {
                id: "21",
                name: "SILICON SEALANT WHITE",
            },
            {
                id: "22",
                name: "CHARCOAL IRON 752 1.8KG",
            },
            {
                id: "23",
                name: "LOCKS",
            },
            {
                id: "24",
                name: "TILE SPACER",
            },
            {
                id: "25",
                name: "TILE CUTTER",
            },
        ],
        "POWER TOOLS": [
            {
                id: "1",
                name: "ANGLE GRINDER",
            },
            {
                id: "2",
                name: "CORDLESS ANGLE GRINDER",
            },
            {
                id: "3",
                name: "ELECTRIC DRILL",
            },
            {
                id: "4",
                name: "CORDLESS DRILL",
            },
            {
                id: "5",
                name: "ELECTRIC POLISHER",
            },
            {
                id: "6",
                name: "ELECTRIC SANDER",
            },
            {
                id: "7",
                name: "ELECTRIC CHAIN SAW",
            },
            {
                id: "8",
                name: "GASOLINE CHAINSAW",
            },
            {
                id: "9",
                name: "ELECTRIC MIXER",
            },
            {
                id: "10",
                name: "PPR WELDING MACHINE",
            },
            {
                id: "11",
                name: "ELECTRIC BLOWER",
            },
            {
                id: "12",
                name: "CUT OFF MACHINE",
            },
            {
                id: "13",
                name: "HIGH PRESSURE WASHER",
            },
            {
                id: "14",
                name: "ROTARY HAMMER",
            },
            {
                id: "15",
                name: "SPRAY GUN",
            },
            {
                id: "16",
                name: "HEAT GUN",
            },
            {
                id: "17",
                name: "WATER PUMP",
            },
            {
                id: "18",
                name: "CORDLESS CUTTER",
            },
            {
                id: "19",
                name: "CORDLESS SPRAY GUN",
            },
            {
                id: "20",
                name: "DEEP WELL PUMP",
            },
            {
                id: "21",
                name: "WATER HOSE REEL",
            },
            {
                id: "22",
                name: "OIL FREE AIR COMPRESSER",
            },
            {
                id: "23",
                name: "WELDING MACHINE",
            },
            {
                id: "24",
                name: "PORTABLE BLOWER",
            },
            {
                id: "25",
                name: "GASOLINE HAMMER AND DRILL",
            },
            {
                id: "26",
                name: "DEMOLITION HAMMER",
            },
            {
                id: "27",
                name: "CAR AIR COMPRESSOR",
            },
            {
                id: "28",
                name: "ELECTRIC SPRAY GUN",
            },
            {
                id: "29",
                name: "CORDLESS SPRAY GUN",
            },
        ],
    },
    "home-appliance": {
        "HOME APPLIANCES": [
            {
                id: "VG-2001",
                name: "WASHING MACHINE",
            },
            {
                id: "VG-2002",
                name: "REFRIGRATOR",
            },
            {
                id: "VG-2003",
                name: "CHEST FREEZER",
            },
            {
                id: "VG-2004",
                name: "LED SMART TV",
            },
            {
                id: "VG-2005",
                name: "BLENDER",
            },
            {
                id: "VG-2006",
                name: "ELECTRIC KETTLE",
            },
            {
                id: "VG-2007",
                name: "PIZZA PAN",
            },
            {
                id: "VG-2008",
                name: "STAND FAN",
            },
            {
                id: "VG-2009",
                name: "WALL FAN",
            },
            {
                id: "VG-2010",
                name: "VACCUM CLEANER",
            },
            {
                id: "VG-2011",
                name: "WATER DISPENSER",
            },
            {
                id: "VG-2012",
                name: "PP KETTLE",
            },
            {
                id: "VG-2013",
                name: "ELECTRIC STOVE",
            },
            {
                id: "VG-2014",
                name: "DEEP FRYER",
            },
            {
                id: "VG-2015",
                name: "COFFEE MAKER",
            },
            {
                id: "VG-2016",
                name: "HUMIDIFIER",
            },
            {
                id: "VG-2017",
                name: "MICROWAVE OVEN",
            },
            {
                id: "VG-2018",
                name: "HOT PLATE OVEN",
            },
            {
                id: "VG-2019",
                name: "HAIR DRYER",
            },
            {
                id: "VG-2020",
                name: "EXPRESSO COFFEE MAKER",
            },
            {
                id: "1",
                name: "PUMP STEAM IRON STATION",
            },
            {
                id: "2",
                name: "BREAD TOASTER",
            },
            {
                id: "3",
                name: "COFFEE GRINDER",
            },
            {
                id: "4",
                name: "FOOD PROCESSOR",
            },
            {
                id: "5",
                name: "7 IN 1 GRINDER BLENDER",
            },
            {
                id: "6",
                name: "TEA POT KETTLE",
            },
            {
                id: "7",
                name: "STAND MIXER",
            },
            {
                id: "8",
                name: "HEAVY IRON",
            },
            {
                id: "9",
                name: "5 IN 1 GRINDER BLENDER",
            },
        ],
    },
    "household-items": {
        "HOUSEHOLD ITEMS": [
            {
                id: "1",
                name: "3 PCS NICE DAY",
            },
            {
                id: "2",
                name: "6 PCS STRAINER HEAVY",
            },
            {
                id: "3",
                name: "6 PCS STRAINER MESH",
            },
            {
                id: "4",
                name: "DOUBLE FRYPAN",
            },
            {
                id: "5",
                name: "FRYPAN",
            },
            {
                id: "6",
                name: "TR 219 GAS COOKER",
            },
            {
                id: "7",
                name: "GAS REGULATOR",
            },
            {
                id: "8",
                name: "GAS CYLINDER",
            },
            {
                id: "9",
                name: "GAS PIPE",
            },
            {
                id: "10",
                name: "GAS STOVE",
            },
            {
                id: "11",
                name: "HOT PLATE",
            },
            {
                id: "12",
                name: "WATER PUMP",
            },
            {
                id: "13",
                name: "PORTABLE GAS STOVE",
            },
            {
                id: "14",
                name: "PRESSURE COOKER",
            },
            {
                id: "15",
                name: "SGB AND MODEL ITALY",
            },
            {
                id: "16",
                name: "TABLE MATE",
            },
            {
                id: "17",
                name: "WATER KETTLE",
            },
            {
                id: "18",
                name: "5 PCS BOWL SET",
            },
            {
                id: "19",
                name: "CEREAL DISPENSER",
            },
            {
                id: "20",
                name: "DIECAST COOKWARE",
            },
            {
                id: "21",
                name: "OPALWARE",
            },
            {
                id: "22",
                name: "BEACH CHAIR",
            },
            {
                id: "23",
                name: "14 PCS ALU POT",
            },
            {
                id: "24",
                name: "SPACE SAVER RACK",
            },
            {
                id: "25",
                name: "6 PCS SS BOWL SET WITH GRATER PLATE",
            },
            {
                id: "26",
                name: "5 PCS SS COLANDER SET",
            },
            {
                id: "27",
                name: "STAINLES STEEL POT ( TIFFIN )",
            },
            {
                id: "28",
                name: "MEAT MINCER",
            },
            {
                id: "29",
                name: "CORN GRINDER",
            },
            {
                id: "30",
                name: "PASTA MAKER",
            },
            {
                id: "31",
                name: "4 PCS FOOD WARMER",
            },
            {
                id: "32",
                name: "GAS STOVE WITH COVER",
            },
            {
                id: "33",
                name: "4 BURNER STAND GAS STOVE",
            },
            {
                id: "34",
                name: "BEACH UMBRELLA",
            },
            {
                id: "35",
                name: "CAMRY SCALE 20KG",
            },
            {
                id: "36",
                name: "DIGITAL SCALE",
            },
            {
                id: "37",
                name: "SMALL SCALE 10KG",
            },
            {
                id: "38",
                name: "14 PCS STORAGE BOX",
            },
            {
                id: "39",
                name: "MATTRESS",
            },
            {
                id: "40",
                name: "STORAGE RACK",
            },
            {
                id: "41",
                name: "METAL FLASK",
            },
            {
                id: "42",
                name: "FOOD PROCESSOR",
            },
            {
                id: "43",
                name: "SHOERACK",
            },
            {
                id: "44",
                name: "COFFEE GRINDER",
            },
            {
                id: "45",
                name: "PAPER CUP",
            },
            {
                id: "46",
                name: "SCRUBBER",
            },
            {
                id: "47",
                name: "CUTLERY ITEMS SPOON FORK KNIFE ETC",
            },
            {
                id: "48",
                name: "SOLIGEN KNIFE",
            },
            {
                id: "49",
                name: "COOKWARE SET",
            },
            {
                id: "50",
                name: "CHAFING DISH",
            },
            {
                id: "51",
                name: "LIQUID DISPENSER",
            },
            {
                id: "52",
                name: "3 PCS SUITCASE SET",
            },
            {
                id: "53",
                name: "BLANKET",
            },
            {
                id: "54",
                name: "COIN BOX",
            },
            {
                id: "55",
                name: "GIFT BAG",
            },
            {
                id: "56",
                name: "GIFT WRAPPER ROLL",
            },
            {
                id: "57",
                name: "VINYL GLOVE",
            },
            {
                id: "58",
                name: "CUTTING BOARD",
            },
        ],
    },
    lighting: {
        "INDOOR LIGHTING": [
            {
                id: "1",
                name: "LED A BULB",
            },
            {
                id: "2",
                name: "LED T BULB",
            },
            {
                id: "3",
                name: "LED EMERGENCY BULB",
            },
            {
                id: "4",
                name: "LED CANDLE BULB",
            },
            {
                id: "5",
                name: "LED CANDLE BULB TAILED",
            },
            {
                id: "6",
                name: "LED R50 BULB",
            },
            {
                id: "7",
                name: "LED R63 BULB",
            },
            {
                id: "8",
                name: "LED HIGHBAY LIGHT",
            },
            {
                id: "9",
                name: "GU5.3 BULB",
            },
            {
                id: "10",
                name: "GU 10 BULB",
            },
            {
                id: "11",
                name: "LED G9 TUBE",
            },
            {
                id: "12",
                name: "LED CANDLE BULB DECORATIVE",
            },
            {
                id: "13",
                name: "LED PANEL LIGHT",
            },
            {
                id: "14",
                name: "LED DOWN LIGHT",
            },
            {
                id: "15",
                name: "LED SURFACE PANEL LIGHT",
            },
            {
                id: "16",
                name: "ENRGY SAVER",
            },
            {
                id: "17",
                name: "CLEAR BULB 100W 200W",
            },
            {
                id: "18",
                name: "COLOUR BULB",
            },
            {
                id: "19",
                name: "LED STRIP LIGHT",
            },
        ],
        "OUTDOOR LIGHTING": [
            {
                id: "1",
                name: "LED FLOOD LIGHT",
            },
            {
                id: "2",
                name: "LED FLOOD LIGHT",
            },
            {
                id: "3",
                name: "LED WALL LAMP",
            },
            {
                id: "4",
                name: "LED ACRYLIC WALL LAMP",
            },
            {
                id: "5",
                name: "LED GARDEN LIGHT",
            },
            {
                id: "6",
                name: "LED GARDEN LIGHT",
            },
            {
                id: "7",
                name: "LED GARDEN LIGHT",
            },
            {
                id: "8",
                name: "LED STREET LIGHT",
            },
            {
                id: "9",
                name: "LED STREET LIGHT",
            },
            {
                id: "10",
                name: "LED STREET LIGHT",
            },
            {
                id: "11",
                name: "LED PROJECTOR LIGHT",
            },
        ],
        "SOLAR LIGHTING": [
            {
                id: "1",
                name: "LED FLOOD LIGHT",
            },
            {
                id: "2",
                name: "LED FLOOD LIGHT",
            },
            {
                id: "3",
                name: "LED WALL LAMP",
            },
            {
                id: "4",
                name: "LED ACRYLIC WALL LAMP",
            },
            {
                id: "5",
                name: "LED GARDEN LIGHT",
            },
            {
                id: "6",
                name: "LED GARDEN LIGHT",
            },
            {
                id: "7",
                name: "LED GARDEN LIGHT",
            },
            {
                id: "8",
                name: "LED STREET LIGHT",
            },
            {
                id: "9",
                name: "LED STREET LIGHT",
            },
            {
                id: "10",
                name: "LED STREET LIGHT",
            },
            {
                id: "11",
                name: "SOLAR PORTABLE POWER STATION",
            },
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
        title: "About Us",
        href: "/about",
    },
]

export const FOOTER_LINKS = [
    {
        title: "Quick Links",
        links: [
            { href: "/about", label: "About Us" },
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
            {
                href: `tel:${CONTACT_PHONE_NUMBER_3}`,
                label: `${CONTACT_PHONE_NUMBER_3}`,
            },
        ],
    },
]

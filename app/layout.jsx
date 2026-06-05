import { Syne, DM_Sans } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Analytics from "@/components/Analytics";
import CustomCursor from "@/components/CustomCursor";
import SecretTerminal from "@/components/SecretTerminal";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans" });

export const viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#16a34a",
};

export const metadata = {
    title: {
        default: "Makhtar Wade (AlmuxtaarDev) | Développeur Full Stack & Designer UI/UX",
        template: "%s | Makhtar Wade"
    },
    description: "Portfolio de Makhtar Wade (AlmuxtaarDev). Développeur Full Stack et Designer Créatif basé au Sénégal. Expert en création d'expériences digitales premium et modernes.",
    keywords: ["Makhtar Wade", "AlmuxtaarDev", "Portfolio Makhtar", "Développeur Full Stack Sénégal", "Designer Dakar", "Next.js", "Créatif", "Touba"],
    authors: [{ name: "Makhtar Wade" }],
    metadataBase: new URL("https://almuxtaardev.vercel.app"),
    verification: {
        google: 'I-JWfpWAoLx2luVVTMRl0KmEKWM2M8T5JtZw9K9i_Hw',
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Makhtar Wade | Portfolio Développeur & Designer",
        description: "Explorez l'univers digital de Makhtar Wade (AlmuxtaarDev) : Projets Web, Design Graphique et solutions sur mesure.",
        url: 'https://almuxtaardev.vercel.app',
        siteName: 'Makhtar Wade Portfolio',
        images: [
            {
                url: '/profile.jpeg',
                width: 1200,
                height: 630,
                alt: 'Makhtar Wade - Développeur Full Stack & Designer',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "AlmuxtaarDev | Développeur Full Stack & Designer",
        description: "Transformez vos idées en réalités digitales premium.",
        images: ['/profile.jpeg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
            <body className={`${syne.variable} ${dmSans.variable} font-sans antialiased pb-20 md:pb-0`}>
                <CustomCursor />
                <SecretTerminal />
                <Toaster />
                {/* <Suspense fallback={null}>
                    <Analytics />
                </Suspense> */}
                {children}
            </body>
        </html>
    );
}

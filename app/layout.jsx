import { Outfit } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Analytics from "@/components/Analytics";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "900"] });

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "#16a34a",
};

export const metadata = {
    title: {
        default: "Makhtar Wade | Développeur Full Stack & Designer",
        template: "%s | Makhtar Wade"
    },
    description: "Portfolio de Makhtar, Développeur Full Stack et Designer Créatif basé à Touba, Thiès et Dakar, Sénégal.",
    keywords: ["portfolio", "développeur", "fullstack", "designer", "Touba", "Thiès", "Dakar", "Sénégal", "React", "Next.js"],
    authors: [{ name: "Makhtar" }],
    metadataBase: new URL("https://makhtar.sn"),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Makhtar | Développeur Full Stack & Designer",
        description: "Découvrez mes projets et mon expertise en développement web et design.",
        url: 'https://makhtar.sn',
        siteName: 'Makhtar Portfolio',
        images: [
            {
                url: '/assets/hero-main.png',
                width: 1200,
                height: 630,
                alt: 'Makhtar Portfolio',
            },
        ],
        locale: 'fr_SN',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
            <body className={`${outfit.className} antialiased pb-20 md:pb-0`}>
                <Toaster />
                <Suspense fallback={null}>
                    <Analytics />
                </Suspense>
                {children}
            </body>
        </html>
    );
}

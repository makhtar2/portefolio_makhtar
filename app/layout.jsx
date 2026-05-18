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
        default: "AlmuxtaarDev | Développeur Full Stack & Designer Créatif",
        template: "%s | AlmuxtaarDev"
    },
    description: "Expert en création d'expériences digitales premium. Développement Web Full Stack, Design UI/UX et identité visuelle au Sénégal.",
    keywords: ["AlmuxtaarDev", "Makhtar Wade", "Portfolio", "Développeur Full Stack", "Designer", "Sénégal", "Dakar", "Touba", "Next.js", "Tailwind CSS"],
    authors: [{ name: "Makhtar Wade" }],
    metadataBase: new URL("https://almuxtaardev.vercel.app"),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "AlmuxtaarDev | Créativité & Technologie",
        description: "Explorez mon univers digital : Projets Web, Design Graphique et solutions sur mesure.",
        url: 'https://almuxtaardev.vercel.app',
        siteName: 'AlmuxtaarDev Portfolio',
        images: [
            {
                url: '/assets/images/profile.jpeg',
                width: 1200,
                height: 630,
                alt: 'AlmuxtaarDev - Développeur Full Stack & Designer',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "AlmuxtaarDev | Développeur Full Stack & Designer",
        description: "Transformez vos idées en réalités digitales premium.",
        images: ['/assets/images/profile.jpeg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
            <body className={`${outfit.className} antialiased pb-20 md:pb-0`}>
                <Toaster />
                {/* <Suspense fallback={null}>
                    <Analytics />
                </Suspense> */}
                {children}
            </body>
        </html>
    );
}

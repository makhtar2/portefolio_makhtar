'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PublicLayout({ children }) {
    const pathname = usePathname();

    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </>
    );
}

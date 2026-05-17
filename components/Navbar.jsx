'use client'
import { Home, Briefcase, Wrench, User, MessageCircle, MessageSquareTextIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Accueil', href: '/', icon: Home },
        { name: 'Projets', href: '/work', icon: Briefcase },
        { name: 'Services', href: '/services', icon: Wrench },
    ];

    return (
        <>
            {/* TOP HEADER */}
            <header className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-24">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="size-10 sm:size-12 bg-brand-gradient rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <span className="font-black text-xl">M</span>
                            </div>
                            <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter">
                                Makhtar<span className="text-brand-primary">.</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                                return (
                                    <Link 
                                        key={link.name} 
                                        href={link.href}
                                        className={`relative px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-xl ${
                                            isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.div 
                                                layoutId="navTab"
                                                className="absolute inset-0 bg-brand-gradient rounded-xl shadow-lg shadow-brand-primary/20"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Action Button */}
                        <div className="flex items-center gap-3">
                             <Link 
                                href="/contact" 
                                className="bg-slate-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-brand-gradient transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center gap-2"
                             >
                                <span className="hidden sm:inline">Me contacter</span>
                                <MessageSquareTextIcon size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE BOTTOM NAVBAR */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-2xl border-t border-slate-100 pb-safe">
                <div className="flex items-center justify-around h-16 px-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                        return (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className="relative flex flex-col items-center justify-center flex-1 h-full gap-1"
                            >
                                <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-brand-primary scale-110' : 'text-slate-400 opacity-70'}`}>
                                    <link.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <span className={`text-[8px] font-black uppercase tracking-wider transition-all ${isActive ? 'text-brand-primary' : 'text-slate-500 opacity-0 h-0 overflow-hidden'}`}>
                                    {link.name}
                                </span>
                                
                                {isActive && (
                                    <motion.div 
                                        layoutId="bottomNavLine"
                                        className="absolute -top-[1px] w-10 h-[3px] bg-brand-gradient rounded-full shadow-[0_0_10px_rgba(217,165,78,0.5)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}

export default Navbar;

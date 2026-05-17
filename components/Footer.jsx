'use client'
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {

    const linkSections = [
        {
            title: "NAVIGATION",
            links: [
                { text: "Accueil", path: '/' },
                { text: "Projets", path: '/work' },
                { text: "Services", path: '/services' },
                { text: "Mon CV", path: '/cv' },
                { text: "Contact", path: '/contact' },
            ]
        },
        {
            title: "SERVICES",
            links: [
                { text: "Développement Web", path: '/services' },
                { text: "UI/UX Design", path: '/services' },
                { text: "Gestion de Projet", path: '/services' },
            ]
        },
        {
            title: "CONTACT",
            links: [
                { text: "+221 75 446 90 97", path: 'tel:+221754469097', icon: Phone },
                { text: "makhtar2gsm@gmail.com", path: 'mailto:makhtar2gsm@gmail.com', icon: Mail },
                { text: "Touba, Thiès & Dakar", path: '/contact', icon: MapPin }
            ]
        }
    ];

    const socialIcons = [
        { icon: Facebook, link: "https://www.facebook.com", color: 'hover:text-blue-600' },
        { icon: Instagram, link: "https://www.instagram.com", color: 'hover:text-pink-600' },
        { icon: Twitter, link: "https://twitter.com", color: 'hover:text-blue-400' },
        { icon: Linkedin, link: "https://www.linkedin.com", color: 'hover:text-blue-700' },
    ]

    return (
        <footer className="bg-white border-t border-slate-100 mt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 py-16">
                    {/* Brand Info */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="text-3xl font-black text-slate-900 tracking-tighter">
                            Makhtar Wade<span className="text-brand-primary">.</span>
                        </Link>
                        <p className="mt-6 text-slate-500 font-medium text-sm leading-relaxed max-w-sm">
                            Développeur Full Stack & Designer passionné par la création d'expériences numériques innovantes basées à Touba, Thiès et Dakar.
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            {socialIcons.map((item, i) => (
                                <Link 
                                    href={item.link} 
                                    key={i} 
                                    className={`group flex items-center justify-center size-10 bg-slate-50 rounded-xl transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 ${item.color}`}
                                >
                                    <item.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-[10px] font-black text-slate-900 mb-6 uppercase tracking-widest">{section.title}</h3>
                                <ul className="space-y-4">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <Link 
                                                href={link.path} 
                                                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-primary transition-all group"
                                            >
                                                {link.icon && <link.icon size={14} className="text-slate-400 group-hover:text-brand-primary transition-colors" />}
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="py-10 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] font-black text-slate-400 tracking-tight uppercase tracking-[0.2em]">
                        © 2026 MAKHTAR WADE. TOUS DROITS RÉSERVÉS.
                    </p>
                    <div className="flex items-center gap-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                         <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;

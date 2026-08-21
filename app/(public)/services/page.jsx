'use client'
import OurSpecs from "@/components/OurSpec";
import Title from "@/components/Title";
import Link from "next/link";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";

export default function ServicesPage() {
    
    const extraDetails = [
        "Architectures Microservices & APIs Scalables",
        "Pipelines d'Automatisation n8n & Webhooks",
        "Applications Web Next.js & SaaS Haute Performance",
        "Applications Mobiles Cross-Platform Flutter",
        "Conteneurisation Docker & Déploiements CI/CD",
        "Infrastructures Réseaux & Sécurité Cisco CCNA"
    ];

    return (
        <div className="py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Title 
                    title="Services & Expertise" 
                    description="Ingénierie de systèmes distribués, automatisation de processus métiers et développement d'applications logicielles haute performance."
                    visibleButton={false}
                />
            </div>
            
            <OurSpecs />

            {/* QUICK LIST SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
                <div className="bg-slate-900 rounded-3xl sm:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 size-72 sm:size-96 bg-brand-primary rounded-full blur-[150px] opacity-10 pointer-events-none" />
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 sm:mb-8">
                                Pourquoi choisir <br />
                                <span className="text-brand-gradient">AlmuxtaarDev ?</span>
                            </h2>
                            <p className="text-slate-400 font-bold text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                                Mon approche combine rigueur architecturale, automatisation des flux et excellence UI/UX pour bâtir des solutions robustes et pérennes.
                            </p>
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all w-full sm:w-auto"
                            >
                                Discuter d&apos;un projet <ArrowRightIcon size={16} />
                            </Link>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {extraDetails.map((detail, i) => (
                                <div key={i} className="flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl">
                                    <CheckCircle2Icon className="text-brand-primary shrink-0" size={18} />
                                    <span className="text-white font-bold text-xs sm:text-sm tracking-tight">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center bg-slate-50 p-8 sm:p-14 lg:p-20 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 mb-16 sm:mb-24">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tighter">Besoin d&apos;un devis personnalisé ?</h3>
                <p className="text-slate-500 font-bold text-sm sm:text-base mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed">
                    Que ce soit pour une architecture distribuée, l&apos;automatisation de vos flux ou le développement d&apos;une application, je vous propose une étude détaillée de vos besoins.
                </p>
                <a 
                    href="https://wa.me/221754469097?text=Bonjour%20AlmuxtaarDev%2C%20je%20souhaiterais%20obtenir%20un%20devis%20pour%20un%20service%20sp%C3%A9cifique." 
                    target="_blank"
                    className="inline-block bg-brand-gradient text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20 w-full sm:w-auto"
                >
                    Me contacter pour un devis
                </a>
            </div>
        </div>
    );
}

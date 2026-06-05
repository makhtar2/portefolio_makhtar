'use client'
import OurSpecs from "@/components/OurSpec";
import Title from "@/components/Title";
import Link from "next/link";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";

export default function ServicesPage() {
    
    const extraDetails = [
        "Identité Visuelle & Logo Design",
        "Conception de Flyers & Supports Print",
        "Sérigraphie sur T-shirts & Gadgets",
        "Maintenance & Optimisation PC",
        "Développement d'Applications Web",
        "Audit & Conseil Digital"
    ];

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-6">
                <Title 
                    title="Services & Expertise" 
                    description="Des solutions sur mesure pour répondre à vos besoins numériques et créatifs, de la conception à la maintenance."
                    visibleButton={false}
                />
            </div>
            
            <OurSpecs />

            {/* QUICK LIST SECTION */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-slate-900 rounded-3xl lg:rounded-[4rem] p-8 sm:p-16 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 size-96 bg-brand-primary rounded-full blur-[150px] opacity-10" />
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-8">
                                Pourquoi choisir <br />
                                <span className="text-brand-gradient">AlmuxtaarDev ?</span>
                            </h2>
                            <p className="text-slate-400 font-bold text-lg leading-relaxed mb-10">
                                Mon approche combine créativité visuelle et rigueur technique pour offrir des résultats qui dépassent vos attentes.
                            </p>
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all"
                            >
                                Discuter d'un projet <ArrowRightIcon size={16} />
                            </Link>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {extraDetails.map((detail, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                                    <CheckCircle2Icon className="text-brand-primary shrink-0" size={20} />
                                    <span className="text-white font-bold text-sm tracking-tight">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto px-6 text-center bg-slate-50 p-12 sm:p-20 rounded-3xl lg:rounded-[3rem] border border-slate-100 mb-24">
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">Besoin d'un devis personnalisé ?</h3>
                <p className="text-slate-500 font-bold mb-10 max-w-lg mx-auto">
                    Que ce soit pour une identité visuelle complète ou une intervention technique, je vous propose une étude gratuite de vos besoins.
                </p>
                <a 
                    href="https://wa.me/221754469097?text=Bonjour%20AlmuxtaarDev%2C%20je%20souhaiterais%20obtenir%20un%20devis%20pour%20un%20service%20sp%C3%A9cifique." 
                    target="_blank"
                    className="inline-block bg-brand-gradient text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20"
                >
                    Me contacter pour un devis
                </a>
            </div>
        </div>
    );
}

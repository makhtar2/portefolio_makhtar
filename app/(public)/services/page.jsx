'use client'
import OurSpecs from "@/components/OurSpec";
import Title from "@/components/Title";
import Link from "next/link";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";

export default function ServicesPage() {
    
    const extraDetails = [
        "Identité Visuelle & Logo Design",
        "Conception de Flyers & Supports Print",
        "Développement d'Applications Web",
        "Audit & Conseil Digital",
        "Maintenance & Optimisation",
        "Conversion & Performance"
    ];

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <Title 
                    title="Services" 
                    description="Solutions numériques et créatives sur mesure pour votre projet."
                    visibleButton={false}
                />
            </div>
            
            <OurSpecs />

            {/* WHY CHOOSE SECTION */}
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-slate-800">
                    <div className="absolute top-0 right-0 size-80 bg-brand-primary rounded-full blur-[120px] opacity-8" />
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                                Pourquoi travailler <br /> ensemble ?
                            </h2>
                            <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed mb-8">
                                Je combine rigueur technique et vision créative pour des résultats qui parlent d'eux-mêmes.
                            </p>
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-wide hover:brightness-110 transition-all shadow-md"
                            >
                                Discuter du projet <ArrowRightIcon size={14} />
                            </Link>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {extraDetails.map((detail, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                                    <CheckCircle2Icon className="text-brand-primary shrink-0" size={18} />
                                    <span className="text-white font-semibold text-xs sm:text-sm">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CTA SECTION */}
            <div className="max-w-3xl mx-auto px-6 text-center bg-slate-50 p-10 sm:p-14 rounded-2xl border border-slate-100 mb-20">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">Besoin d'un devis ?</h3>
                <p className="text-slate-600 font-medium mb-8 max-w-lg mx-auto text-sm sm:text-base">
                    Je vous propose une étude gratuite de vos besoins.
                </p>
                <a 
                    href="https://wa.me/221754469097?text=Bonjour%20AlmuxtaarDev%2C%20je%20souhaiterais%20obtenir%20un%20devis%20pour%20un%20service%20sp%C3%A9cifique." 
                    target="_blank"
                    className="inline-block bg-brand-primary text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-wide hover:brightness-110 transition-all shadow-md"
                >
                    Me contacter
                </a>
            </div>
        </div>
    );
}

'use client'
import OurSpecs from "@/components/OurSpec";
import Title from "@/components/Title";

export default function ServicesPage() {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-6">
                <Title 
                    title="Services & Expertise" 
                    description="Des solutions sur mesure pour répondre à vos besoins numériques et créatifs."
                    visibleButton={false}
                />
            </div>
            <OurSpecs />
            
            <div className="max-w-4xl mx-auto px-6 mt-20 text-center bg-slate-50 p-12 sm:p-20 rounded-[3rem] border border-slate-100">
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">Un projet spécifique en tête ?</h3>
                <p className="text-slate-500 font-bold mb-10 max-w-lg mx-auto">
                    Chaque projet est unique. Je m'adapte à vos besoins pour vous proposer la meilleure solution technique et visuelle.
                </p>
                <a 
                    href="https://wa.me/221754469097?text=Bonjour%20Makhtar%2C%20je%20souhaiterais%20obtenir%20un%20devis%20pour%20un%20projet%20digital." 
                    target="_blank"
                    className="inline-block bg-brand-gradient text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20"
                >
                    Demander un devis via WhatsApp
                </a>
            </div>
        </div>
    );
}

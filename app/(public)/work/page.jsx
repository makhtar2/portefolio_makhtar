import React from 'react'
import Title from '@/components/Title'
import { SparklesIcon } from 'lucide-react'
import LatestProjects from '@/components/LatestProjects'
import { getProjects } from "@/lib/supabase/public"
import * as motion from "framer-motion/client"

export default async function WorkHubPage() {
    const projects = await getProjects();

    return (
        <div className="pb-24">
            {/* HUB HERO */}
            <div className="bg-white text-slate-900 py-12 sm:py-16 lg:py-20 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-wide mb-6">
                            <SparklesIcon size={12} /> Portfolio
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-[1.1]">
                            Mes projets <br />
                            <span className="text-brand-primary">en images</span>
                        </h1>
                        <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                            Découvrez mes réalisations : sites web, applications et identités visuelles.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* STATS SECTION */}
            <div className="bg-slate-50 border-b border-slate-200 py-10 sm:py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-3 gap-4 sm:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="text-center"
                        >
                            <div className="text-2xl sm:text-3xl font-black text-brand-primary mb-2">50+</div>
                            <div className="text-xs sm:text-sm text-slate-600 font-semibold">Projets</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="text-2xl sm:text-3xl font-black text-brand-primary mb-2">30+</div>
                            <div className="text-xs sm:text-sm text-slate-600 font-semibold">Clients</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="text-2xl sm:text-3xl font-black text-brand-primary mb-2">5+</div>
                            <div className="text-xs sm:text-sm text-slate-600 font-semibold">Ans d'expérience</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 sm:mt-14 relative z-20">
                {/* ALL PROJECTS */}
                <div className="mb-12">
                        <Title 
                            title="Tous mes projets" 
                            description="Web, applications et design : découvrez l'intégralité de mon portfolio." 
                            visibleButton={false}
                        />
                        <div className="mt-14">
                            <LatestProjects projects={projects} initialCount={12} showFilters={true} />
                        </div>
                </div>

                {/* FOOTER CTA */}
                <div className='mt-32 text-center bg-white rounded-2xl p-10 sm:p-14 relative overflow-hidden border border-slate-100'>
                    <div className='absolute top-0 right-0 size-80 bg-brand-primary rounded-full blur-[120px] opacity-5' />
                    <h3 className='text-2xl sm:text-3xl font-black text-slate-900 mb-4 relative z-10 tracking-tight'>Un projet en tête ?</h3>
                    <p className='text-slate-600 font-medium mb-8 max-w-xl mx-auto relative z-10 text-sm sm:text-base'>
                        Discutons ensemble de vos idées et transformons-les en réalité.
                    </p>
                    <a 
                        href="https://wa.me/221754469097?text=Bonjour%20Makhtar%2C%20je%20souhaiterais%20discuter%20d'un%20projet%20sp%C3%A9cifique%20vu%20sur%20votre%20portfolio." 
                        target="_blank"
                        className='inline-block bg-brand-primary text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-wide hover:brightness-110 transition-all shadow-md relative z-10'
                    >
                        Discuter sur WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}

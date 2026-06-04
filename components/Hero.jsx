'use client'
import { ArrowRightIcon, ChevronRightIcon, PlusIcon, ZapIcon, PenToolIcon, LayoutDashboardIcon, PaletteIcon, LaptopIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'
import { motion } from 'framer-motion'

const Hero = () => {

    const router = useRouter();
    const skills = ["React", "Next.js", "Node.js", "Tailwind CSS", "Figma", "Photoshop", "Illustrator", "TypeScript", "Supabase", "Git"];
    const steps = [
        {
            title: 'Comprendre',
            description: 'Je démarre par une discussion claire sur vos besoins, objectifs et deadlines.',
            icon: LayoutDashboardIcon
        },
        {
            title: 'Créer',
            description: 'Je conçois des interfaces simples, attractives et faciles à utiliser.',
            icon: PenToolIcon
        },
        {
            title: 'Lancer',
            description: 'Je livre des projets performants avec un suivi réactif et une expérience fluide.',
            icon: ZapIcon
        }
    ];

    return (
        <div className='px-4 sm:px-6 overflow-hidden'>
            <div className='flex flex-col xl:flex-row gap-6 sm:gap-8 max-w-7xl mx-auto my-8 sm:my-12'>
                {/* BLOC PRINCIPAL */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className='relative flex-[1.5] flex flex-col bg-white rounded-2xl group overflow-hidden border border-slate-100'
                >
                    <div className='p-6 sm:p-10 lg:p-12 z-10'>
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className='inline-flex items-center gap-2 sm:gap-3 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold'
                        >
                            <span className='bg-brand-gradient px-2.5 py-1 rounded-lg text-white text-xs font-black'>DISPONIBLE</span> 
                            <span className='line-clamp-1'>Ouvert à collaborer</span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className='text-3xl sm:text-4xl lg:text-5xl leading-[1.2] my-6 sm:my-8 font-black tracking-tight text-slate-900'
                        >
                            Développeur & <span className='text-brand-primary'>Designer</span> spécialisé
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className='text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-md mb-10'
                        >
                            Je crée des expériences numériques minimalistes, performantes et mémorables.
                        </motion.p>

                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className='flex flex-col sm:flex-row gap-3'
                        >
                            <button 
                                onClick={() => router.push('/work')} 
                                className='group bg-brand-primary text-white py-3 px-8 rounded-xl font-black text-xs uppercase tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2'
                            >
                                Voir mes projets
                                <ArrowRightIcon size={16} />
                            </button>
                            <button 
                                onClick={() => router.push('/cv')} 
                                className='group border border-slate-200 bg-white text-slate-900 py-3 px-8 rounded-xl font-black text-xs uppercase tracking-wide shadow-sm hover:shadow-md transition-all'
                            >
                                Télécharger mon CV
                            </button>
                        </motion.div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10'>
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.55 + index * 0.08, duration: 0.4 }}
                                    className='border border-slate-100 rounded-xl bg-slate-50 p-4 sm:p-5 hover:bg-white transition-all duration-200'
                                >
                                    <div className='w-10 h-10 flex items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary mb-3'>
                                        <step.icon size={20} />
                                    </div>
                                    <h4 className='text-sm font-black text-slate-900 uppercase tracking-wide mb-2'>{step.title}</h4>
                                    <p className='text-xs text-slate-600 leading-relaxed'>{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Portrait Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className='relative xl:absolute bottom-0 right-0 xl:right-4 w-full xl:w-[40%] flex justify-center items-end mt-8 xl:mt-0 select-none pointer-events-none'
                    >
                        <Image 
                            priority 
                            className='w-[75%] sm:w-[65%] xl:w-full h-auto' 
                            src="/assets/hero-main.png" 
                            alt="Makhtar" 
                            width={600} 
                            height={600}
                        />
                    </motion.div>
                </motion.div>

                {/* SIDE CARDS CONTAINER */}
                <div className='flex flex-col md:flex-row xl:flex-col gap-6 w-full xl:max-w-sm'>
                    {/* CARD: DESIGN GRAPHIQUE */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className='flex-1 group'
                    >
                        <button 
                            onClick={() => {
                                const el = document.getElementById('work');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className='relative flex flex-col justify-end w-full h-full min-h-[280px] bg-white rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100 text-left'
                        >
                            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Image
                                    src="/assets/design-bg.png"
                                    alt="Design"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="size-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-200 shadow-sm">
                                    <PaletteIcon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className='text-2xl font-black text-slate-900 mb-3 uppercase italic tracking-tighter'>Design Graphique</h3>
                                <div className='flex items-center gap-2 font-black text-brand-primary text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-all'>
                                    Portfolio <ArrowRightIcon size={14} /> 
                                </div>
                            </div>
                        </button>
                    </motion.div>

                    {/* CARD: DÉVELOPPEMENT WEB */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className='flex-1 group'
                    >
                        <button 
                            onClick={() => {
                                const el = document.getElementById('work');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className='relative flex flex-col justify-end w-full h-full min-h-[280px] bg-slate-900 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl border border-slate-800 text-left'
                        >
                            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                <Image
                                    src="/assets/projects/sherifa.png"
                                    alt="Web"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="size-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 shadow-sm">
                                    <LaptopIcon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className='text-2xl font-black text-white mb-3 uppercase italic tracking-tighter'>Développement Web</h3>
                                <div className='flex items-center gap-2 font-black text-brand-primary text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-all'>
                                    Réalisations <ArrowRightIcon size={14} /> 
                                </div>
                            </div>
                        </button>
                    </motion.div>
                </div>
            </div>
            
            {/* MARQUEE */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <CategoriesMarquee categories={skills} />
            </motion.div>
        </div>
    );
}

export default Hero;

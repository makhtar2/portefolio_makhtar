'use client'
import { ArrowRightIcon, ChevronRightIcon, PlusIcon, ZapIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'
import { motion } from 'framer-motion'

const Hero = () => {

    const router = useRouter();
    const skills = ["React", "Next.js", "Node.js", "Tailwind CSS", "Figma", "Photoshop", "Illustrator", "TypeScript", "Supabase", "Git"];

    return (
        <div className='px-4 sm:px-6 overflow-hidden'>
            <div className='flex flex-col xl:flex-row gap-6 sm:gap-8 max-w-7xl mx-auto my-6 sm:my-10'>
                {/* BLOC PRINCIPAL */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className='relative flex-[1.5] flex flex-col bg-brand-primary/5 rounded-[2.5rem] group overflow-hidden border border-brand-primary/10'
                >
                    <div className='relative p-8 sm:p-12 lg:p-16 xl:p-20 xl:pr-[40%] z-10'>
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className='inline-flex items-center gap-2 sm:gap-3 bg-white/80 border border-brand-primary/20 text-slate-800 pr-4 p-1 rounded-full text-[10px] sm:text-xs backdrop-blur-sm shadow-sm'
                        >
                            <span className='bg-brand-gradient px-2 sm:px-3 py-1 rounded-full text-white text-[10px] font-black'>DISPONIBLE</span> 
                            <span className='line-clamp-1 font-bold'>Ouvert à de nouvelles opportunités !</span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className='text-4xl sm:text-6xl lg:text-7xl leading-[1.1] my-6 sm:my-8 font-black tracking-tighter text-slate-900 font-display'
                        >
                            AlmuxtaarDev : Développeur & <span className='text-brand-gradient'>Designer.</span>
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className='text-slate-500 font-bold text-base sm:text-xl leading-relaxed max-w-md mb-10'
                        >
                            Passionné par la création d'expériences numériques innovantes et d'identités visuelles percutantes.
                        </motion.p>

                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className='flex flex-col sm:flex-row gap-4'
                        >
                            <button 
                                onClick={() => router.push('/work')} 
                                className='group flex-1 sm:flex-none bg-brand-gradient text-white py-5 px-10 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-brand-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3'
                            >
                                VOIR MES PROJETS
                                <ArrowRightIcon className='group-hover:translate-x-2 transition-transform' size={18} />
                            </button>
                            <button 
                                onClick={() => router.push('/cv')} 
                                className='group flex-1 sm:flex-none bg-slate-900 text-white py-5 px-10 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:bg-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3'
                            >
                                MON CV PRO
                            </button>
                        </motion.div>
                    </div>
                    
                    {/* Portrait Image - Fixed for better mobile responsiveness */}
                    <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className='relative xl:absolute bottom-0 right-0 xl:-right-4 w-full xl:w-[42%] flex justify-center items-end mt-8 xl:mt-0 select-none pointer-events-none'
                    >
                        <Image 
                            priority 
                            fetchPriority="high"
                            loading="eager"
                            sizes="(max-width: 640px) 80vw, (max-width: 1280px) 70vw, 600px"
                            className='w-[80%] sm:w-[70%] xl:w-full h-auto drop-shadow-2xl brightness-105' 
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
                        <Link href="/work/design" className='relative flex flex-col justify-end w-full h-full min-h-[300px] bg-slate-50 rounded-3xl md:rounded-[3rem] p-10 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-brand-primary/10 border border-slate-100 hover:border-brand-primary/20'>
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/assets/design-bg.png"
                                    alt="Design"
                                    fill
                                    className="object-cover opacity-40 blur-[3px] group-hover:scale-110 group-hover:blur-[1px] transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center xl:items-start text-center xl:text-left">
                                <span className='inline-block mb-3 px-4 py-1.5 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full'>
                                    Créativité
                                </span>
                                <h3 className='text-3xl font-black text-slate-900 tracking-tighter leading-none mb-4 font-display'>
                                    Design <br className="hidden xl:block" /> Graphique
                                </h3>
                                <div className='flex items-center gap-2 font-black text-brand-secondary uppercase text-[11px] tracking-widest group-hover:translate-x-2 transition-all duration-300'>
                                    Portfolio <ArrowRightIcon size={16} /> 
                                </div>
                            </div>

                            <div className='absolute top-6 right-6 xl:top-8 xl:right-8 size-10 xl:size-12 rounded-xl xl:rounded-2xl bg-white shadow-md flex items-center justify-center text-slate-200 group-hover:text-brand-primary group-hover:rotate-45 transition-all duration-500'>
                                <PlusIcon size={20} />
                            </div>
                        </Link>
                    </motion.div>

                    {/* CARD: DÉVELOPPEMENT WEB */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className='flex-1 group'
                    >
                        <Link href="/work/web" className='relative flex flex-col justify-end w-full h-full min-h-[300px] bg-slate-900 rounded-3xl md:rounded-[3rem] p-10 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-brand-primary/20 border border-slate-800 hover:border-brand-primary/40'>
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/assets/projects/sherifa.png"
                                    alt="Web"
                                    fill
                                    className="object-cover opacity-50 blur-[3px] brightness-50 group-hover:scale-110 group-hover:blur-[1px] group-hover:brightness-75 transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                            </div>

                            <div className="relative z-10 flex flex-col items-center xl:items-start text-center xl:text-left">
                                <span className='inline-block mb-3 px-4 py-1.5 bg-brand-gradient text-white text-[9px] font-black uppercase tracking-widest rounded-full'>
                                    Performance
                                </span>
                                <h3 className='text-3xl font-black text-white tracking-tighter leading-none mb-4 font-display'>
                                    Développement <br className="hidden xl:block" /> Web
                                </h3>
                                <div className='flex items-center gap-2 font-black text-brand-primary uppercase text-[11px] tracking-widest group-hover:translate-x-2 transition-all duration-300'>
                                    Projets <ArrowRightIcon size={16} /> 
                                </div>
                            </div>

                            <div className='absolute top-6 right-6 xl:top-8 xl:right-8 size-10 xl:size-12 rounded-xl xl:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white/20 group-hover:text-brand-primary group-hover:rotate-90 transition-all duration-500'>
                                <ZapIcon size={20} fill="currentColor" />
                            </div>
                        </Link>
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

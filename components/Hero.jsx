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
    const skills = ["Systèmes Distribués", "n8n Automation", "FastAPI", "Next.js", "Agents IA & RAG", "Flutter", "Docker", "Cisco CCNA", "Supabase", "PostgreSQL", "Figma", "CI/CD"];

    return (
        <div className='px-4 sm:px-6 overflow-hidden'>
            <div className='max-w-7xl mx-auto my-6 sm:my-10'>
                {/* BLOC PRINCIPAL */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className='relative w-full flex flex-col bg-brand-primary/5 rounded-[2.5rem] group overflow-hidden border border-brand-primary/10'
                >
                    <div className='relative p-8 sm:p-12 lg:p-16 xl:p-24 xl:pr-[45%] z-10'>
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
                            Spécialisé dans les architectures distribuées, l&apos;automatisation intelligente de processus et le développement de solutions logicielles performantes.
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
                        className='relative xl:absolute bottom-0 right-0 xl:right-10 w-full xl:w-[45%] lg:w-[50%] flex justify-center items-end mt-8 xl:mt-0 select-none pointer-events-none'
                    >
                        <Image 
                            priority 
                            fetchPriority="high"
                            loading="eager"
                            sizes="(max-width: 640px) 80vw, (max-width: 1280px) 70vw, 600px"
                            className='w-[80%] sm:w-[70%] xl:w-full h-auto drop-shadow-2xl brightness-105' 
                            src="/assets/hero-main.png" 
                            alt="Makhtar Wade - Développeur Full Stack & Designer UI/UX" 
                            width={600} 
                            height={600}
                        />
                    </motion.div>
                </motion.div>

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

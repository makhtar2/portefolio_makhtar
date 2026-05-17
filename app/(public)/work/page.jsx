'use client'
import React from 'react'
import Title from '@/components/Title'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, CodeIcon, PaletteIcon, SparklesIcon } from 'lucide-react'
import LatestProjects from '@/components/LatestProjects'
import projectsData from "@/assets/data/projects.json"

export default function WorkHubPage() {
    
    // Featured projects to show on hub
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <div className="pb-24">
            {/* HUB HERO */}
            <div className="bg-slate-900 text-white py-24 sm:py-32 lg:py-40 relative overflow-hidden">
                <div className="absolute top-0 right-0 size-[600px] bg-brand-primary rounded-full blur-[180px] opacity-10 -translate-y-1/2 translate-x-1/3" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary text-[11px] font-black uppercase tracking-widest mb-10">
                            <SparklesIcon size={14} /> Showcase
                        </span>
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[0.95]">
                            Explorer mes <br />
                            <span className="text-brand-gradient">univers créatifs.</span>
                        </h1>
                        <p className="text-slate-400 font-bold text-lg sm:text-2xl leading-relaxed max-w-2xl">
                            Plongez dans un catalogue de solutions numériques et d'identités visuelles conçues avec précision et passion.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-12 sm:-mt-20 relative z-20">
                {/* CATEGORY BANNERS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-24">
                    
                    {/* WEB & APPS HUB */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/work/web" className="group relative block aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-[600px] bg-white rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-brand-primary/10 border border-slate-100">
                            <div className="absolute inset-0 z-0">
                                <Image 
                                    src="/assets/projects/sherifa.png" 
                                    alt="Web" 
                                    fill 
                                    className="object-cover opacity-30 group-hover:opacity-10 transition-opacity duration-1000 group-hover:scale-110 transition-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                            </div>
                            
                            <div className="absolute inset-0 p-10 sm:p-16 flex flex-col justify-end">
                                <div className="size-16 sm:size-20 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl group-hover:bg-brand-primary transition-all duration-500 group-hover:rotate-6">
                                    <CodeIcon size={32} />
                                </div>
                                <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">Sites Web & <br /> Applications</h3>
                                <p className="text-slate-500 font-bold text-base mb-10 max-w-xs opacity-80">Solutions interactives, performantes et scalables.</p>
                                <div className='flex items-center gap-3 text-brand-primary font-black text-[11px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all'>
                                    DÉCOUVRIR <ArrowRightIcon size={16} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* DESIGN HUB */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link href="/work/design" className="group relative block aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-[600px] bg-brand-primary rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-brand-secondary/20 border border-brand-primary/10">
                            <div className="absolute inset-0 z-0">
                                <Image 
                                    src="/assets/projects/babos.png" 
                                    alt="Design" 
                                    fill 
                                    className="object-cover opacity-50 group-hover:opacity-20 transition-opacity duration-1000 group-hover:scale-110 transition-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-brand-primary/20 to-transparent" />
                            </div>
                            
                            <div className="absolute inset-0 p-10 sm:p-16 flex flex-col justify-end">
                                <div className="size-16 sm:size-20 bg-white text-brand-primary rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl group-hover:-rotate-6 transition-all duration-500">
                                    <PaletteIcon size={32} />
                                </div>
                                <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-4">Design <br /> Graphique</h3>
                                <p className="text-white/80 font-bold text-base mb-10 max-w-xs">Branding, UI/UX et supports de communication.</p>
                                <div className='flex items-center gap-3 text-white font-black text-[11px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all'>
                                    VOIR LE PORTFOLIO <ArrowRightIcon size={16} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* FEATURED SELECTION */}
                <div className="mt-32">
                    <Title 
                        title="Sélection du moment" 
                        description="Quelques-uns de mes projets favoris toutes catégories confondues." 
                        href="/work/web"
                    />
                    <div className="mt-16">
                        <LatestProjects projects={featuredProjects} />
                    </div>
                </div>

                {/* FOOTER CTA */}
                <div className='mt-32 text-center bg-slate-900 rounded-[3.5rem] p-12 sm:p-24 relative overflow-hidden'>
                    <div className='absolute top-0 right-0 size-96 bg-brand-primary rounded-full blur-[150px] opacity-10' />
                    <h3 className='text-3xl sm:text-5xl font-black text-white mb-8 relative z-10 tracking-tighter'>Un projet spécifique en tête ?</h3>
                    <p className='text-slate-400 font-bold mb-12 max-w-xl mx-auto relative z-10 text-lg'>
                        Je suis toujours ouvert à de nouvelles collaborations et défis techniques. Discutons de la manière dont je peux vous aider à concrétiser votre vision.
                    </p>
                    <a 
                        href="https://wa.me/221754469097?text=Bonjour%20Makhtar%2C%20je%20souhaiterais%20discuter%20d'un%20projet%20sp%C3%A9cifique%20vu%20sur%20votre%20portfolio." 
                        target="_blank"
                        className='inline-block bg-brand-gradient text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20 relative z-10'
                    >
                        Discuter sur WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}

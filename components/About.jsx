'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { DownloadIcon, Mail, MapPin } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className='px-6 my-24 max-w-7xl mx-auto'>
            <Title title='À Propos de Moi' description="Découvrez mon parcours, mes passions et ce qui me motive dans le monde du numérique." />
            
            <div className='mt-12 flex flex-col lg:flex-row gap-12 items-center'>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-brand-primary/10'
                >
                    <Image 
                        src="/assets/hero-main.png" 
                        alt="Makhtar Wade" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 500px"
                        className='object-cover'
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='flex-1 flex flex-col gap-6'
                >
                    <h3 className='text-3xl sm:text-4xl font-black text-slate-900 leading-tight'>
                        Je suis Makhtar Wade, Étudiant <span className='text-brand-primary'>Entrepreneur</span> basé à Touba & Thiès.
                    </h3>

                    <p className='text-slate-600 font-medium text-lg leading-relaxed'>
                        Fondateur de la startup JULO, je suis un développeur Full-Stack spécialisé dans les architectures distribuées et l’automatisation. Mon profil hybride allie la rigueur technique logicielle à une expertise avancée en design UI/UX.
                    </p>
                    <p className='text-slate-500 font-medium'>
                        Actuellement en Licence 3 Informatique à l'UCAK, je maîtrise aussi bien le développement (Java, Python, JS) que les infrastructures réseaux (Cisco CCNA).
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4'>
                        <div className='p-4 bg-slate-50 rounded-2xl border border-slate-100'>
                            <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1'>Email</p>
                            <p className='text-sm font-black text-slate-900'>makhtar2gsm@gmail.com</p>
                        </div>
                        <div className='p-4 bg-slate-50 rounded-2xl border border-slate-100'>
                            <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1'>Localisation</p>
                            <p className='text-sm font-black text-slate-900'>Touba, Thiès & Dakar</p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-4'>
                        <Link 
                            href="/cv" 
                            className='inline-flex items-center gap-3 bg-brand-gradient text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20 active:scale-95 w-fit'
                        >
                            Voir mon CV Digital
                        </Link>
                        <a 
                            href="/MAKHTAR_WADE_CV.pdf" 
                            download
                            className='inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/10 active:scale-95 w-fit'
                        >
                            Télécharger PDF <DownloadIcon size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
out

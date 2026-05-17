'use client'
import React from 'react'
import { motion } from 'framer-motion'

const WorkHero = ({ title, description, category }) => {
    return (
        <section className='relative py-24 sm:py-32 overflow-hidden bg-slate-50 border-b border-slate-100'>
            <div className='max-w-7xl mx-auto px-6 relative z-10'>
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className='max-w-4xl'
                >
                    <div className='flex items-center gap-4 mb-8'>
                        <div className='h-[2px] w-12 bg-brand-primary' />
                        <span className='text-[11px] font-black uppercase tracking-[0.3em] text-slate-400'>{category}</span>
                    </div>
                    <h1 className='text-5xl sm:text-7xl font-black text-slate-900 leading-[1] tracking-tighter mb-8'>
                        {title}
                    </h1>
                    <p className='text-slate-500 font-bold text-lg sm:text-2xl leading-relaxed max-w-2xl'>
                        {description}
                    </p>
                </motion.div>
            </div>
            
            {/* Background decorative element */}
            <div className='absolute top-0 right-0 w-2/3 h-full bg-brand-gradient opacity-[0.04] rounded-bl-[20rem] pointer-events-none' />
            <div className='absolute -bottom-24 -left-24 size-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none' />
        </section>
    )
}

export default WorkHero

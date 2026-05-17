'use client'
import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'
import { motion } from 'framer-motion'

const OurSpecs = () => {

    return (
        <section id="services" className='px-6 my-24 max-w-7xl mx-auto'>
            <Title visibleButton={false} title='Mes Services' description="Je propose une expertise complète pour transformer vos idées en solutions numériques concrètes et élégantes." />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16'>
                {
                    ourSpecsData.map((spec, index) => {
                        return (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className='relative p-8 sm:p-12 flex flex-col items-start justify-center w-full border border-slate-100 rounded-[3rem] group transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/5 bg-white' 
                                key={index}
                            >
                                <div className='mb-8 p-5 text-white rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg' style={{ background: 'var(--brand-gradient, radial-gradient(circle at 50% 50%, #d9a54e, #c2773a))', boxShadow: `#d9a54e40 0px 10px 30px` }}>
                                    <spec.icon size={28} />
                                </div>
                                <h3 className='text-slate-900 font-black text-2xl mb-4 tracking-tight group-hover:text-brand-primary transition-colors'>{spec.title}</h3>
                                <p className='text-sm sm:text-base text-slate-500 font-bold leading-relaxed opacity-80'>{spec.description}</p>
                            </motion.div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default OurSpecs

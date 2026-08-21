'use client'
import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'
import { motion } from 'framer-motion'

const OurSpecs = () => {

    return (
        <section id="services" className='px-4 sm:px-6 my-16 sm:my-24 max-w-7xl mx-auto'>
            <Title visibleButton={false} title='Mes Services' description="Des architectures logicielles distribuées à l'automatisation de vos processus, je conçois des solutions performantes et pérennes." />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16'>
                {
                    ourSpecsData.map((spec, index) => {
                        return (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className='relative p-6 sm:p-10 lg:p-12 flex flex-col items-center sm:items-start justify-center text-center sm:text-left w-full border border-slate-100 rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] group transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/5 bg-white' 
                                key={index}
                            >
                                <div className='mb-6 sm:mb-8 p-4 sm:p-5 text-white rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg mx-auto sm:mx-0' style={{ background: 'var(--brand-gradient, radial-gradient(circle at 50% 50%, #d9a54e, #c2773a))', boxShadow: `#d9a54e40 0px 10px 30px` }}>
                                    <spec.icon size={26} />
                                </div>
                                <h3 className='text-slate-900 font-black text-xl sm:text-2xl mb-3 sm:mb-4 tracking-tight group-hover:text-brand-primary transition-colors'>{spec.title}</h3>
                                <p className='text-xs sm:text-sm text-slate-600 font-bold leading-relaxed'>{spec.description}</p>
                            </motion.div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default OurSpecs

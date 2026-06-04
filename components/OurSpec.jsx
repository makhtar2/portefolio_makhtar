'use client'
import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'
import { motion } from 'framer-motion'

const OurSpecs = () => {

    return (
        <section id="services" className='px-6 my-20 max-w-7xl mx-auto'>
            <Title visibleButton={false} title='Services' description="Conception et développement de solutions numériques professionnelles." />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    ourSpecsData.map((spec, index) => {
                        return (
                            <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                className='p-5 sm:p-6 flex flex-col items-start bg-white border border-slate-100 rounded-xl transition-all duration-200 hover:shadow-md' 
                                key={index}
                            >
                                <div className='mb-4 p-2.5 text-white rounded-lg' style={{ background: 'var(--brand-gradient, radial-gradient(circle at 50% 50%, #d9a54e, #c2773a))' }}>
                                    <spec.icon size={20} />
                                </div>
                                <h3 className='text-slate-900 font-black text-base mb-2 tracking-tight'>{spec.title}</h3>
                                <p className='text-xs sm:text-sm text-slate-600 font-medium leading-relaxed'>{spec.description}</p>
                            </motion.div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default OurSpecs

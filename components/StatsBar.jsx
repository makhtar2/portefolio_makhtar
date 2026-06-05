'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
    { value: 13, suffix: '+', label: 'Projets livrés', sublabel: 'Web & Design' },
    { value: 5, suffix: '', label: 'Secteurs couverts', sublabel: 'Luxe, Agri, Edu...' },
    { value: 3, suffix: '', label: 'Villes actives', sublabel: 'Touba · Thiès · Dakar' },
    { value: 100, suffix: '%', label: 'Disponible', sublabel: 'Dès maintenant' },
]

function CountUpNumber({ target, suffix, isActive }) {
    const [count, setCount] = useState(0)
    const rafRef = useRef(null)
    const startRef = useRef(null)
    const duration = 1800

    useEffect(() => {
        if (!isActive) return
        startRef.current = null

        const step = (timestamp) => {
            if (!startRef.current) startRef.current = timestamp
            const progress = Math.min((timestamp - startRef.current) / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step)
            } else {
                setCount(target)
            }
        }

        rafRef.current = requestAnimationFrame(step)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [isActive, target])

    return (
        <span>
            {count}{suffix}
        </span>
    )
}

export default function StatsBar() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-4 sm:px-6 my-8 sm:my-12"
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="relative group bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-primary/20 rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-brand-primary/5"
                    >
                        {/* Glow on hover */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            style={{
                                background: 'radial-gradient(circle at 50% 0%, rgba(217,165,78,0.08) 0%, transparent 70%)'
                            }}
                        />

                        <div className="relative z-10">
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter"
                                style={{
                                    background: 'radial-gradient(circle, #d9a54e, #c2773a)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                <CountUpNumber target={stat.value} suffix={stat.suffix} isActive={isInView} />
                            </p>
                            <p className="text-sm sm:text-base font-black text-slate-900 mt-2 leading-tight">
                                {stat.label}
                            </p>
                            <p className="text-[11px] font-bold text-slate-500 mt-1 uppercase tracking-wider">
                                {stat.sublabel}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

'use client'
import React, { useMemo, useState, useRef } from 'react'
import { LayoutGrid, Globe, Palette, SparklesIcon } from 'lucide-react'
import Title from './Title'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { motion, AnimatePresence } from 'framer-motion'

const LatestProjects = ({ projects = [], initialCount = 6, showFilters = true }) => {
    const [visibleCount, setVisibleCount] = useState(initialCount)
    const [activeCategory, setActiveCategory] = useState('All')

    const categories = useMemo(() => {
        const set = new Set()
        projects.forEach(p => {
            if (p.category) set.add(p.category.toLowerCase())
        })
        return ['All', ...Array.from(set)]
    }, [projects])

    const filtered = useMemo(() => {
        if (activeCategory === 'All') return projects
        return projects.filter(p => (p.category || 'Général').toLowerCase() === activeCategory)
    }, [projects, activeCategory])

    const visibleProjects = filtered.slice(0, visibleCount)

    const [selectedProject, setSelectedProject] = useState(null)
    const lastFocusedRef = useRef(null)

    return (
        <section id="work" className='px-6 my-32 max-w-7xl mx-auto'>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        <SparklesIcon size={12} />
                        <span>Portfolio Sélectionné</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-6">
                        Mes Réalisations <br />
                        <span className="text-transparent bg-clip-text bg-brand-gradient">Web & Design</span>
                    </h2>
                    <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed max-w-xl">
                        Explorez mes derniers projets, allant du développement d'applications web complexes à la création d'identités visuelles mémorables.
                    </p>
                </div>

                {showFilters && (
                    <div className='flex items-center gap-2 bg-slate-100 p-2 rounded-[2rem] border border-slate-200'>
                        {categories.map((cat) => {
                            let icon = null;
                            let label = cat;
                            if (cat === 'All') { icon = <LayoutGrid size={14} />; label = 'Tous'; }
                            else if (cat === 'web') { icon = <Globe size={14} />; label = 'Web'; }
                            else if (cat === 'design') { icon = <Palette size={14} />; label = 'Design'; }
                            
                            const isActive = activeCategory === cat;
                            
                            return (
                                <button
                                    key={cat}
                                    onClick={() => { setActiveCategory(cat); setVisibleCount(initialCount); }}
                                    className={`px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 ${
                                        isActive 
                                            ? 'bg-white text-slate-900 shadow-xl shadow-slate-200 ring-1 ring-slate-200' 
                                            : 'text-slate-500 hover:text-slate-900'
                                    }`}
                                >
                                    {icon}
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16'>
                <AnimatePresence mode='popLayout'>
                    {visibleProjects.length > 0 ? (
                        visibleProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id || index}
                            >
                                <ProjectCard 
                                    project={project} 
                                    onClick={() => { 
                                        lastFocusedRef.current = document.activeElement; 
                                        setSelectedProject(project) 
                                    }} 
                                />
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-slate-500 py-20 col-span-full font-bold">Aucun projet disponible dans cette catégorie.</p>
                    )}
                </AnimatePresence>
            </div>

            {filtered.length > visibleProjects.length && (
                <div className='mt-20 text-center'>
                    <button 
                        onClick={() => setVisibleCount(v => Math.min(filtered.length, v + initialCount))} 
                        className='group bg-slate-900 text-white px-10 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-gradient transition-all shadow-2xl shadow-slate-900/20 active:scale-95'
                    >
                        Explorer plus de projets
                    </button>
                </div>
            )}

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => { setSelectedProject(null); setTimeout(() => { try { lastFocusedRef.current?.focus?.() } catch(e){} }, 0) }} />
            )}
        </section>
    )
}

export default LatestProjects

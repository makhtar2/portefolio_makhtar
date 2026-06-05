'use client'

import React, { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Only show these top-level filters (no tech-stack noise)
const FILTER_LABELS = {
    All: 'Tous',
    web: 'Web App',
    design: 'Design',
}

const ProjectGrid = ({ projects = [] }) => {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('All')

    // Derive available categories from data
    const categories = useMemo(() => {
        const cats = new Set(projects.map(p => p.category).filter(Boolean))
        return ['All', ...Array.from(cats)]
    }, [projects])

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        return projects.filter(p => {
            const matchCat = category === 'All' || p.category === category
            if (!matchCat) return false
            if (!q) return true
            const name = (p.name || '').toLowerCase()
            const desc = (p.description || '').toLowerCase()
            return name.includes(q) || desc.includes(q)
        })
    }, [projects, query, category])

    const clearSearch = () => setQuery('')

    return (
        <section aria-labelledby="projects-heading">

            {/* ── Toolbar ── */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-8">

                {/* Category pills */}
                <div className="flex items-center gap-2 flex-wrap">
                    {categories.map((cat) => {
                        const label = FILTER_LABELS[cat] || cat
                        const isActive = cat === category
                        return (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-200 border ${
                                    isActive
                                        ? 'text-white border-transparent shadow-lg shadow-brand-primary/20'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-brand-primary/30'
                                }`}
                                style={isActive ? { background: 'radial-gradient(circle at 50% 50%, #d9a54e, #c2773a)' } : {}}
                                aria-pressed={isActive}
                            >
                                {label}
                            </button>
                        )
                    })}
                </div>

                {/* Search */}
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Rechercher..."
                        className="w-full pl-10 pr-8 py-2.5 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-shadow"
                        aria-label="Rechercher un projet"
                    />
                    {query && (
                        <button onClick={clearSearch}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                            <X size={14} />
                        </button>
                    )}
                </div>
            </div>

            {/* Result count */}
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">
                {filtered.length} projet{filtered.length !== 1 ? 's' : ''}
            </p>

            {/* ── Grid ── */}
            <AnimatePresence mode="popLayout">
                {filtered.length > 0 ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filtered.map((project, idx) => (
                            <ProjectCard
                                key={project.id || project.name || idx}
                                project={project}
                                index={idx}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="col-span-full flex flex-col items-center justify-center py-28 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200"
                    >
                        <p className="text-3xl mb-3">🔍</p>
                        <p className="text-slate-500 font-bold">Aucun projet trouvé.</p>
                        <button
                            onClick={() => { setQuery(''); setCategory('All') }}
                            className="mt-4 text-sm text-brand-primary font-black hover:underline"
                        >
                            Réinitialiser les filtres
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ProjectGrid

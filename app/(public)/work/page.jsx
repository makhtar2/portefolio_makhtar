import React from 'react'
import { getProjects } from "@/lib/supabase/public"
import ProjectGrid from '@/components/ProjectGrid'
import * as motion from "framer-motion/client"
import Link from 'next/link'

export const metadata = {
    title: 'Projets',
    description: 'Découvrez tous les projets de Makhtar Wade — applications web, e-commerce, design graphique et plus.',
}

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function WorkPage() {
    const projects = await getProjects()

    return (
        <div className="min-h-screen">

            {/* ── PAGE HEADER ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Eyebrow */}
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4">
                        Portfolio · {projects.length} projets
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tighter leading-[1.05] font-display max-w-2xl">
                        Mes réalisations
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-slate-500 font-medium text-base sm:text-lg max-w-xl leading-relaxed">
                        Applications web, design graphique, e-commerce — des projets réels pour de vrais clients.
                    </p>
                </motion.div>
            </div>

            {/* ── THIN DIVIDER ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="h-px bg-slate-100 mb-10" />
            </div>

            {/* ── PROJECT GRID ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
                <ProjectGrid projects={projects} />
            </div>

            {/* ── CTA FOOTER ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-12 rounded-3xl border border-slate-100 bg-slate-50"
                >
                    <div>
                        <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display">
                            Un projet en tête ?
                        </p>
                        <p className="text-slate-500 font-medium mt-1 text-sm">
                            Je suis disponible pour de nouvelles collaborations.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/221754469097?text=Bonjour%20Makhtar%2C%20j%27ai%20vu%20votre%20portfolio%20et%20je%20voudrais%20discuter%20d%27un%20projet."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-primary/20"
                        style={{ background: 'radial-gradient(circle at 50% 50%, #d9a54e, #c2773a)' }}
                    >
                        Me contacter →
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

'use client'
import { ExternalLinkIcon, LockIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index = 0 }) => {
    const [imgError, setImgError] = useState(false)

    const imageName = project.image_url || project.image
    const isPlaceholder = !imageName || imageName.includes('placeholder')
    const imagePath = imageName?.startsWith('http') ? imageName : `/assets/projects/${imageName}`
    const projectUrl = project.site_url || project.links?.view || '#'
    const projectName = project.name || 'Projet Sans Nom'
    const description = project.description || project.desc || ''
    const techStack = (project.tech_stack || project.tech || []).slice(0, 3)
    const isLive = projectUrl !== '#' && !projectUrl.includes('example.com')

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:shadow-brand-primary/8 transition-shadow duration-400"
        >
            {/* ── Image ── */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 shrink-0">
                {!imgError && !isPlaceholder ? (
                    <Image
                        fill
                        src={imagePath}
                        alt={projectName}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    // Fallback gradient with initials
                    <div className="absolute inset-0 flex items-center justify-center"
                        style={{ background: 'radial-gradient(circle at 40% 40%, #d9a54e, #c2773a)' }}>
                        <span className="text-5xl font-black text-white/30 select-none">
                            {projectName.charAt(0)}
                        </span>
                    </div>
                )}

                {/* Category pill — top left */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-slate-700 rounded-full border border-white/50 shadow-sm z-10">
                    {project.category || 'Web'}
                </span>

                {/* Live dot — top right */}
                {isLive && (
                    <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black text-emerald-600 rounded-full border border-white/50 shadow-sm z-10">
                        <span className="relative flex size-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex rounded-full size-1.5 bg-emerald-500" />
                        </span>
                        Live
                    </span>
                )}
            </div>

            {/* ── Content ── */}
            <div className="flex flex-col flex-1 p-6 gap-3">

                {/* Title */}
                <h3 className="text-lg font-black text-slate-900 leading-tight tracking-tight font-display line-clamp-2 group-hover:text-brand-primary transition-colors duration-300">
                    {projectName}
                </h3>

                {/* Description — always visible, clamped */}
                {description && (
                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">
                        {description}
                    </p>
                )}

                {/* Tech stack pills */}
                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {techStack.map((tech, i) => (
                            <span key={i}
                                className="px-2.5 py-1 text-[10px] font-bold text-slate-500 bg-slate-100 rounded-lg border border-slate-200/60 uppercase tracking-wider">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* CTA — always at bottom */}
                <div className="mt-auto pt-4">
                    {isLive ? (
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                            style={{ background: 'radial-gradient(circle at 50% 50%, #d9a54e, #c2773a)' }}
                        >
                            Voir le projet
                            <ExternalLinkIcon size={14} />
                        </a>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-1.5 w-full py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                            <div className="flex items-center gap-2 text-slate-500 text-sm font-black">
                                <LockIcon size={13} className="text-slate-400" />
                                <span>Confidentiel · En production</span>
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium leading-snug">
                                Plateforme opérationnelle — accès restreint
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </motion.article>
    )
}

export default ProjectCard

'use client'
import { ExternalLinkIcon, ImageOffIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
    const [imgError, setImgError] = useState(false);
    const category = project.category || "General";
    
    // Support both Supabase and JSON formats
    const imageName = project.image_url || project.image;
    const isPlaceholder = !imageName || imageName.includes('placeholder');
    const imagePath = imageName?.startsWith('http') ? imageName : `/assets/projects/${imageName}`;
    const projectUrl = project.site_url || project.links?.view || "#";
    const projectName = project.name || "Projet Sans Nom";
    const description = project.description || project.desc || "Découvrez ce projet innovant.";
    const techStack = project.tech_stack || project.tech || [];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 flex flex-col h-full'
        >
            {/* Image Section */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-50">
                {!imgError && !isPlaceholder ? (
                    <Image 
                        fill
                        className='object-cover transition-transform duration-1000 group-hover:scale-110' 
                        src={imagePath} 
                        alt={projectName} 
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 bg-brand-gradient flex flex-col items-center justify-center p-8 text-center">
                        <div className="size-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4 border border-white/20 shadow-xl">
                            <span className="text-2xl font-black">
                                {projectName.charAt(0)}
                            </span>
                        </div>
                        <h3 className="text-white font-black text-xl tracking-tighter leading-tight uppercase italic drop-shadow-md">
                            {projectName}
                        </h3>
                    </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                    <span className="px-5 py-2.5 bg-white/95 backdrop-blur-md text-slate-900 text-[9px] font-black uppercase tracking-[0.2em] rounded-2xl border border-white/20 shadow-xl">
                        {category}
                    </span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="p-8 sm:p-10 flex flex-col flex-1 relative bg-gradient-to-b from-white to-slate-50/30">
                <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-5 group-hover:text-brand-primary transition-colors duration-300">
                        {projectName}
                    </h3>
                    
                    {/* Description with more "Cool" look */}
                    <div className="relative mb-6">
                        <p className="text-slate-600 text-sm font-semibold leading-relaxed tracking-tight line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                            {description}
                        </p>
                    </div>

                    {/* Tech Stack Pills */}
                    {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                            {techStack.slice(0, 3).map((tech, i) => (
                                <span key={i} className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">
                                    {tech}
                                </span>
                            ))}
                            {techStack.length > 3 && (
                                <span className="text-[9px] font-black text-slate-300 px-2 py-1.5">+ {techStack.length - 3}</span>
                            )}
                        </div>
                    )}
                </div>

                {/* Action Link */}
                <div className="mt-auto pt-6 border-t border-slate-100/80 flex items-center justify-between">
                    {projectUrl !== "#" && !projectUrl.includes('example.com') ? (
                        <a 
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-slate-900 text-white pl-8 pr-6 py-4 rounded-[1.25rem] font-black text-[10px] uppercase tracking-[0.25em] hover:bg-brand-gradient transition-all shadow-xl shadow-slate-900/10 active:scale-95 group/btn overflow-hidden relative"
                        >
                            <span className="relative z-10">Découvrir</span>
                            <div className="size-8 bg-white/10 rounded-xl flex items-center justify-center relative z-10 group-hover/btn:bg-white/20 transition-colors">
                                <ExternalLinkIcon size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </div>
                        </a>
                    ) : (
                        <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-[1.25rem] border border-slate-100 group/soon">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                            </span>
                            <span className="text-slate-400 font-black text-[9px] uppercase tracking-[0.2em]">En cours</span>
                        </div>
                    )}

                    {/* Subtle design element */}
                    <div className="size-1.5 rounded-full bg-slate-200 group-hover:bg-brand-primary transition-colors" />
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard

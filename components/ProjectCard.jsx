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

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500'
        >
            {/* Image Section */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {!imgError && !isPlaceholder ? (
                    <Image 
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-105' 
                        src={imagePath} 
                        alt={projectName} 
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 bg-brand-gradient flex flex-col items-center justify-center p-8 text-center">
                        <div className="size-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/20">
                            <span className="text-xl font-black">
                                {projectName.charAt(0)}
                            </span>
                        </div>
                        <h3 className="text-white font-black text-xl tracking-tighter leading-tight uppercase italic">
                            {projectName}
                        </h3>
                    </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full border border-white/20 shadow-lg">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 sm:p-10 flex flex-col h-full">
                <div className="flex-1 mb-8">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-4 group-hover:text-brand-primary transition-colors">
                        {projectName}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Action Link */}
                <div className="mt-auto">
                    {projectUrl !== "#" ? (
                        <a 
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-gradient transition-all shadow-xl shadow-slate-900/10 active:scale-95 group/btn"
                        >
                            Voir le projet
                            <ExternalLinkIcon size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-3 bg-slate-50 text-slate-400 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] cursor-help italic">
                            Projet Privé
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard

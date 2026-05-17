'use client'
import { ExternalLinkIcon, ImageOffIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
    const [imgError, setImgError] = useState(false);
    const category = project.category || "General";
    const isPlaceholder = !project.image || project.image.includes('placeholder');
    const imagePath = `/assets/projects/${project.image}`;
    const projectUrl = project.links?.view || "#";

    return (
        <motion.a 
            href={projectUrl}
            target={projectUrl !== "#" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className='group relative w-full aspect-[4/3] bg-slate-100 rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer block'
        >
            {/* Project Image or Branded Fallback */}
            {!imgError && !isPlaceholder ? (
                <Image 
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110' 
                    src={imagePath} 
                    alt={project.name} 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="absolute inset-0 bg-brand-gradient flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                    {/* Decorative Background Icon */}
                    <div className="absolute -bottom-4 -right-4 opacity-10 text-white transform rotate-12">
                        <ImageOffIcon size={200} strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                        <div className="size-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 mx-auto border border-white/20 shadow-2xl">
                            <span className="text-3xl font-black">
                                {project.name.charAt(0)}
                            </span>
                        </div>
                        <h3 className="text-white font-black text-2xl sm:text-3xl tracking-tighter leading-[1.1] mb-2 uppercase italic drop-shadow-lg">
                            {project.name}
                        </h3>
                        <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.3em]">
                            En développement
                        </p>
                    </div>
                </div>
            )}
            
            {/* Visual indicator on hover */}
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px] z-20">
                <div className="size-14 bg-brand-primary/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 border border-white/10">
                    <ExternalLinkIcon size={24} />
                </div>
                <h3 className="text-white font-black text-xl tracking-tight leading-tight">{project.name}</h3>
                <p className="text-brand-primary text-[10px] font-black uppercase tracking-widest mt-2">{category}</p>
                {projectUrl === "#" && (
                    <span className="text-white/60 text-[10px] mt-4 font-bold italic leading-tight max-w-[200px]">
                        Contactez-moi pour avoir des informations sur ce projet
                    </span>
                )}
            </div>
        </motion.a>
    )
}

export default ProjectCard

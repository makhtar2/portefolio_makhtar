'use client'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
    const category = project.category || "General";
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
            <Image 
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110' 
                src={imagePath} 
                alt={project.name} 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
            
            {/* Visual indicator on hover */}
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
                <div className="size-14 bg-brand-primary/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 border border-white/10">
                    <ExternalLinkIcon size={24} />
                </div>
                <h3 className="text-white font-black text-xl tracking-tight leading-tight">{project.name}</h3>
                <p className="text-brand-primary text-[10px] font-black uppercase tracking-widest mt-2">{category}</p>
                {projectUrl === "#" && (
                    <span className="text-white/50 text-[9px] mt-4 font-bold italic">Lien bientôt disponible</span>
                )}
            </div>
        </motion.a>
    )
}

export default ProjectCard

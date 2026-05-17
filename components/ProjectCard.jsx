'use client'
import { XIcon, Maximize2Icon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);
    const category = project.category || "General";
    const imagePath = `/assets/projects/${project.image}`;
    const isDesign = category.toLowerCase() === 'design';

    return (
        <>
            {/* 1. THE PURE IMAGE CARD */}
            <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className='group relative w-full aspect-[4/3] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl cursor-zoom-in'
                onClick={() => setIsOpen(true)}
            >
                <Image 
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110' 
                    src={imagePath} 
                    alt={project.name} 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                
                {/* Visual indicator on hover */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="size-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                        <Maximize2Icon size={24} />
                    </div>
                </div>
            </motion.div>

            {/* 2. LIGHTBOX MODAL (Full View) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setIsOpen(false)}
                    >
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-all p-2 z-[210]">
                            <XIcon size={32} />
                        </button>

                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className={`relative shadow-2xl rounded-2xl overflow-hidden bg-slate-900 ${
                                isDesign 
                                ? 'h-[85vh] aspect-[1/1.414]' // A4-ish ratio for designs
                                : 'w-full max-w-6xl aspect-video' // 16:9 for web apps
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image 
                                fill
                                src={imagePath} 
                                alt={project.name} 
                                className="object-contain sm:object-cover"
                                sizes="100vw"
                                priority
                            />
                            
                            {/* Subtle Project Name in Lightbox */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950/80 to-transparent">
                                <h3 className="text-white font-black text-xl tracking-tight">{project.name}</h3>
                                <p className="text-brand-primary text-[10px] font-black uppercase tracking-widest mt-1">{category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ProjectCard

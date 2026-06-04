'use client'
import NextImage from 'next/image'
import { GlobeIcon, PaletteIcon, ExternalLinkIcon, MoveUpRightIcon } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, onClick }) => {
  const [imgError, setImgError] = useState(false)
  const category = project.category || 'Général'
  const imageName = project.image_url || project.image
  const imagePath = imageName ? (imageName.startsWith('http') ? imageName : `/assets/projects/${imageName}`) : null
  const projectUrl = project.site_url || project.links?.view || null
  const projectName = project.name || 'Projet Sans Nom'
  const description = project.description || project.desc || 'Découvrez ce projet.'
  const techStack = project.tech_stack || project.tech || []

  const isWeb = category.toLowerCase() === 'web'

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick || (() => projectUrl && window.open(projectUrl, '_blank'))}
      className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 flex flex-col h-full cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
        {imagePath && !imgError ? (
          <NextImage
            fill
            src={imagePath}
            alt={projectName}
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-brand-gradient flex flex-col items-center justify-center p-8 text-center">
            <div className="size-16 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center text-white mb-6 border border-white/20 shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
              {isWeb ? (
                <GlobeIcon size={32} strokeWidth={1.5} />
              ) : (
                <PaletteIcon size={32} strokeWidth={1.5} />
              )}
            </div>
            <h3 className="text-white font-black text-2xl tracking-tighter leading-tight uppercase italic drop-shadow-lg max-w-[80%]">
              {projectName}
            </h3>
          </div>
        )}

        {/* Floating Badge */}
        <div className="absolute top-6 left-6 z-10">
          <div className={`flex items-center gap-2 px-4 py-2 backdrop-blur-md rounded-2xl border shadow-lg transition-all duration-300 ${
            isWeb 
              ? 'bg-blue-500/90 text-white border-blue-400/50' 
              : 'bg-amber-500/90 text-white border-amber-400/50'
          }`}>
            {isWeb ? <GlobeIcon size={12} strokeWidth={2.5} /> : <PaletteIcon size={12} strokeWidth={2.5} />}
            <span className="text-[10px] font-black uppercase tracking-widest">{category}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 sm:p-10 flex flex-col flex-1 relative bg-gradient-to-b from-white to-slate-50/30">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic leading-none group-hover:text-brand-primary transition-colors duration-300">
              {projectName}
            </h3>
            <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
              <MoveUpRightIcon size={18} />
            </div>
          </div>
          
          <p className="text-slate-600 text-sm font-semibold leading-relaxed tracking-tight line-clamp-3 mb-8">
            {description}
          </p>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-brand-primary transition-colors">
            {projectUrl ? 'Voir le projet' : 'Bientôt disponible'}
          </div>
          <div className="size-2 rounded-full bg-slate-200 group-hover:bg-brand-primary transition-all duration-500 group-hover:scale-150 shadow-lg" />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

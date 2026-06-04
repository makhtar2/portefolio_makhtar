 'use client'
import React, { useEffect, useRef, useState } from 'react'
import { GlobeIcon, PaletteIcon, XIcon, ExternalLinkIcon } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null)
  if (!project) return null

  const category = project.category || 'Général'
  const isWeb = category.toLowerCase() === 'web'
  const imageName = project.image_url || project.image
  const imagePath = imageName ? (imageName.startsWith('http') ? imageName : `/assets/projects/${imageName}`) : null

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    // Lock scroll
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // mount animation
    setTimeout(() => setMounted(true), 10)

    // focus modal
    modalRef.current?.focus()

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeModal()
      }
      if (e.key === 'Tab') {
        // focus trap
        const focusable = modalRef.current.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
      // restore focus
      try { previouslyFocused?.focus?.() } catch (e) {}
    }
  }, [])

  // Close with animation
  let closing = false
  const closeModal = () => {
    if (closing) return
    closing = true
    setMounted(false)
    // give time for exit animation
    setTimeout(() => {
      onClose()
    }, 220)
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-6 transition-colors duration-200 ${mounted ? 'bg-black/40' : 'bg-black/0'}`} role="presentation">
      <div ref={modalRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className={`bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl transform transition-all duration-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="relative aspect-[16/9] bg-slate-50 group overflow-hidden">
          {imagePath ? (
            <Image fill src={imagePath} alt={project.name} className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="100vw" />
          ) : (
            <div className="absolute inset-0 bg-brand-gradient flex flex-col items-center justify-center p-8 text-center">
              <div className="size-20 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center text-white mb-6 border border-white/20 shadow-2xl">
                {isWeb ? <GlobeIcon size={40} strokeWidth={1.5} /> : <PaletteIcon size={40} strokeWidth={1.5} />}
              </div>
            </div>
          )}
          <button 
            onClick={closeModal} 
            aria-label="Fermer" 
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-2xl border border-white/20 transition-all z-20"
          >
            <XIcon size={20} />
          </button>
        </div>

        <div className="p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
              isWeb ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-amber-50 text-amber-600 border-amber-100'
            }`}>
              {category}
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <h2 id="project-modal-title" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-6">
            {project.name}
          </h2>
          
          <p className="text-slate-600 font-medium leading-relaxed mb-8">
            {project.description || project.desc}
          </p>

          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tech_stack.map((t, i) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-50">
            {project.site_url && (
              <a 
                href={project.site_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-gradient transition-all shadow-xl active:scale-95"
              >
                <span>Visiter le site</span>
                <ExternalLinkIcon size={16} />
              </a>
            )}
            <button 
              onClick={closeModal} 
              className="px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

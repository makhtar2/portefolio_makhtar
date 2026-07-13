'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Événements du parcours (générés chronologiquement)
const timelineEvents = [
  {
    year: "2026",
    title: "Formateur Canva - Bénévolat",
    description: "Animation de séances de formation gratuites sur l'outil Canva pour les étudiants de l'Université Cheikh Ahmadoul Khadim (UCAK). Un engagement pour servir et faire grandir la communauté estudiantine.",
    image: "/assets/events/canva_formation.png"
  },
  {
    year: "2025",
    title: "Touba Bootcamp 2ème Édition",
    description: "Participation à la 2ème édition du Touba Bootcamp au sein du Complexe Cheikh Ahmadoul Khadim (CCAK). Une expérience enrichissante remplie de gratitude.",
    image: "/assets/events/event3.jpg"
  },
  {
    year: "2025",
    title: "Préparation PAS Challenge JOJ 2026",
    description: "Participation au hackathon préparatoire PAS challenge pour les Jeux Olympiques de la Jeunesse (JOJ) de Dakar 2026.",
    image: "/assets/events/pas_challenge.webp"
  },
  {
    year: "2025",
    title: "2ème Place Rio Digital Show",
    description: "Prix de la 2ème place remportée au concours d'innovation Rio Digital Show.",
    image: "/assets/events/hackrio.JPG"
  },
  {
    year: "2025",
    title: "Mentor - Hackathon Touba",
    description: "Intervention en tant que Mentor lors du Hackathon Touba 2025, organisé à l'Université Cheikh Ahmadoul Khadim en partenariat avec Sonatel.",
    image: "/assets/events/coachhackathon.png"
  },
  {
    year: "2024",
    title: "Présentation Aksil Touba",
    description: "Présentation de notre projet Aksil Touba, lauréat du premier prix lors du hackathon.",
    image: "/assets/events/mentor.png"
  },
  {
    year: "2024",
    title: "1er Prix Hackathon Sonatel",
    description: "Remise du Premier prix du Hackathon Sonatel organisé à Touba.",
    image: "/assets/events/event12.JPG"
  },
  {
    year: "2020",
    title: "Présentation Application Mobile",
    description: "Présentation d'application mobile devant un jury lors de la formation Mjangal.",
    image: "/assets/events/event8.jpg"
  },
  {
    year: "2020",
    title: "Stage p5.js - Motifs Wax",
    description: "Stage sur la bibliothèque p5.js portant sur la création de motifs Wax avec JavaScript, encadré par Mjangal.",
    image: "/assets/events/event11.jpg"
  },
  {
    year: "2019",
    title: "Formation Développement Mobile",
    description: "Poursuite de la formation et de l'apprentissage en développement mobile encadrée par Mjangal.",
    image: "/assets/events/event10.jpg"
  },
  {
    year: "2018",
    title: "Développement MIT App Inventor",
    description: "Débuts en programmation. Formation en développement d'applications mobiles avec Mjangal en utilisant la plateforme MIT App Inventor.",
    image: "/assets/events/event6.jpg"
  }
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6"
        >
          Mon <span className="text-brand-gradient">Parcours</span>.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 font-bold max-w-2xl mx-auto text-lg mb-12"
        >
          Au-delà du code et du design, voici les moments marquants, les événements et les projets qui ont forgé mon expérience.
        </motion.p>
      </div>

      {/* PARCOURS — CARROUSEL VERTICAL AUTO */}
      <div
        className="vscroll-viewport relative mx-auto w-full max-w-2xl h-[560px] md:h-[680px] overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 10%, #000 90%, transparent)',
        }}
      >
        <div className="vscroll-track flex flex-col" style={{ ['--vscroll-duration']: '55s' }}>
          {[...timelineEvents, ...timelineEvents].map((event, index) => (
            <article
              key={index}
              aria-hidden={index >= timelineEvents.length}
              className="mb-8 shrink-0 group"
            >
              <div className="flex flex-col w-full bg-white rounded-[2.5rem] shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-brand-primary/20 transition-shadow duration-500 border border-slate-100 overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-48 md:h-56 bg-slate-50 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={`Makhtar Wade - ${event.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Year badge */}
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-slate-900/90 backdrop-blur-sm text-white font-black text-xs rounded-xl shadow-lg">
                    {event.year}
                  </span>
                </div>

                {/* Text */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 tracking-tight">{event.title}</h3>
                  <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center bg-slate-900 rounded-[3rem] p-12 sm:p-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 0%, #d9a54e, transparent 70%)' }} />
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 relative z-10 tracking-tighter">Envie d'écrire la prochaine ligne avec moi ?</h2>
        <p className="text-slate-400 font-medium max-w-xl mx-auto mb-10 relative z-10">
          Je suis toujours ouvert à de nouveaux défis, que ce soit pour un projet client ou une collaboration innovante.
        </p>
        <a href="/contact" className="relative z-10 inline-flex items-center gap-2 bg-brand-gradient text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
          Me Contacter
        </a>
      </motion.div>
    </div>
  )
}

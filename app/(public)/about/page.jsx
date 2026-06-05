'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Événements du parcours (générés chronologiquement)
const timelineEvents = [
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

        {/* QUICK STATS BENTO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl md:text-5xl font-black text-brand-primary mb-2 tracking-tighter">7+</span>
            <span className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest">Ans d'Évolution</span>
          </div>
          <div className="bg-slate-900 rounded-[2rem] p-6 shadow-xl shadow-slate-900/20 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter relative z-10">1er</span>
            <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest relative z-10">Prix Innovation</span>
          </div>
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl md:text-5xl font-black text-brand-primary mb-2 tracking-tighter">15+</span>
            <span className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest">Événements Tech</span>
          </div>
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
            <span className="text-3xl md:text-4xl font-black text-brand-primary mb-2 tracking-tighter">Coach</span>
            <span className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest">Mentor Tech</span>
          </div>
        </motion.div>
      </div>

      {/* TIMELINE INTERACTIVE */}
      <div className="relative md:mx-auto md:w-full md:max-w-5xl mt-10">
        {/* Central Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1.5 bg-slate-100 -translate-x-1/2 rounded-full" />
        {/* Left Line for Mobile */}
        <div className="md:hidden absolute left-[23px] top-0 bottom-0 w-1.5 bg-slate-100 rounded-full" />

        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`mb-24 relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
          >
            {/* Timeline Dot Desktop */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 bg-white border-4 border-brand-primary rounded-full shadow-xl items-center justify-center z-10">
               <div className="size-3 bg-brand-secondary rounded-full" />
            </div>

            {/* Timeline Dot Mobile */}
            <div className="md:hidden absolute left-[23px] top-1/2 -translate-y-1/2 -translate-x-1/2 size-7 bg-white border-[3px] border-brand-primary rounded-full shadow-lg z-10" />
            
            {/* Content Container */}
            <div className={`w-full md:w-[45%] pl-14 pr-4 md:px-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
              <div className="flex flex-col gap-4 group">
                
                {/* Year Bubble */}
                <div className={`flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                   <span className="inline-block px-5 py-2 bg-slate-900 text-white font-black text-sm rounded-2xl shadow-xl shadow-slate-900/20">
                     {event.year}
                   </span>
                </div>

                {/* Premium Bento Card */}
                <div className="flex flex-col w-full bg-white rounded-[2.5rem] shadow-xl shadow-slate-200 group-hover:shadow-2xl group-hover:shadow-brand-primary/20 transition-all duration-700 border border-slate-100 overflow-hidden">
                  
                  {/* Image section: fully visible, uncropped */}
                  <div className="w-full bg-slate-50 border-b border-slate-100 overflow-hidden">
                    <Image 
                      src={event.image} 
                      alt={`Makhtar Wade - ${event.title}`}
                      width={1000}
                      height={800}
                      className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Text Container */}
                  <div className="p-6 md:p-8 bg-white">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">{event.title}</h3>
                    <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )})}
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

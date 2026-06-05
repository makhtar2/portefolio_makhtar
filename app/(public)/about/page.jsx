'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Temporary placeholders, the user can replace them
const timelineEvents = [
  {
    year: "2024",
    title: "Touba Bootcamp 2ème Édition",
    description: "Échanges et développement intensif lors du hackathon 72h Xidmatoul Xadiim.",
    image: "/assets/events/event1.jpg"
  },
  {
    year: "2024",
    title: "Présentation de Projets",
    description: "Démonstration des solutions développées devant le jury et les participants du Bootcamp.",
    image: "/assets/events/event3.jpg"
  },
  {
    year: "2023",
    title: "Développement UCAK",
    description: "Travail sur le projet de l'Université Cheikh Ahmadoul Khadim (UCAK).",
    image: "/assets/events/event2.jpg"
  },
  {
    year: "2023",
    title: "Travail d'Équipe & Conception",
    description: "Session de brainstorming et de conception d'interfaces en équipe.",
    image: "/assets/events/event5.jpg"
  },
  {
    year: "2022",
    title: "Remise de Certificats",
    description: "Cérémonie de remise d'attestations suite à la formation en développement web.",
    image: "/assets/events/event4.jpg"
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
          className="text-slate-500 font-bold max-w-2xl mx-auto text-lg"
        >
          Au-delà du code et du design, voici les moments marquants, les événements et les projets qui ont forgé mon expérience.
        </motion.p>
      </div>

      {/* TIMELINE INTERACTIVE */}
      <div className="relative border-l-2 border-slate-100 md:mx-auto md:w-full md:max-w-4xl">
        {timelineEvents.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-16 ml-6 md:ml-12 relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[35px] md:-left-[59px] top-1 size-5 bg-white border-4 border-brand-primary rounded-full shadow-sm" />
            
            <div className="flex flex-col md:flex-row gap-8 bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-brand-primary/10 hover:bg-white transition-all duration-500 group">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-secondary font-black text-xs rounded-lg mb-4">
                  {event.year}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{event.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {event.description}
                </p>
              </div>
              
              {/* Image Bento Style */}
              <div className="relative w-full md:w-72 h-56 md:h-auto rounded-[1.5rem] overflow-hidden group-hover:shadow-lg transition-all duration-500">
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </motion.div>
        ))}
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

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ZapIcon, CodeXmlIcon, SparklesIcon } from 'lucide-react'

export default function Banner() {
    const messages = [
        { text: "Makhtar - Développeur Full Stack & Designer Créatif", icon: SparklesIcon },
        { text: "Disponible pour de nouveaux projets innovants", icon: ZapIcon },
        { text: "Expertise en React, Next.js, Node.js & Design Graphique", icon: CodeXmlIcon }
    ];

    return (
        <div className="bg-slate-900 text-white py-3 overflow-hidden relative border-b border-white/5 select-none">
            <motion.div 
                animate={{ x: ["0%", "-100%"] }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 40, 
                    ease: "linear" 
                }}
                className="flex whitespace-nowrap gap-24 items-center px-12"
            >
                {[...messages, ...messages, ...messages, ...messages].map((msg, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <msg.icon size={16} className="text-brand-primary" />
                        <span className="text-[11px] font-black uppercase tracking-[0.25em]">{msg.text}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

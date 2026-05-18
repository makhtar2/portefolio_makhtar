'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { 
    ThumbsUp, 
    MessageSquare, 
    Repeat2, 
    Send, 
    MoreHorizontal, 
    Globe2,
    Linkedin
} from 'lucide-react'
import Title from './Title'

const LinkedInPosts = ({ posts = [] }) => {
    if (posts.length === 0) return null;

    return (
        <section className='px-6 my-24 max-w-7xl mx-auto'>
            <Title 
                title="Actualités LinkedIn" 
                description="Suivez mes derniers partages et réflexions directement depuis mon flux professionnel."
                visibleButton={false}
            />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16'>
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className='bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow'
                    >
                        {/* Header */}
                        <div className="p-4 flex items-start justify-between">
                            <div className="flex gap-3">
                                <div className="size-12 rounded-full bg-slate-100 overflow-hidden border border-slate-100 shrink-0">
                                    <img src="/assets/hero-main.png" alt="Almuxtaar" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 text-sm tracking-tight flex items-center gap-1">
                                        AlmuxtaarDev <span className="text-slate-400 font-medium">• 1er</span>
                                    </h4>
                                    <p className="text-[11px] text-slate-500 font-bold leading-tight line-clamp-1">
                                        Développeur Full Stack | UI/UX Designer | JULO
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-bold mt-0.5 flex items-center gap-1 uppercase tracking-tighter">
                                        {new Date(post.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} • <Globe2 size={10} />
                                    </p>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        {/* Text Content */}
                        <div className="px-4 pb-4">
                            <p className="text-sm text-slate-800 font-medium leading-relaxed line-clamp-4">
                                <span className="font-black block mb-1">{post.title}</span>
                                {post.content}
                            </p>
                        </div>

                        {/* Media Content */}
                        {post.image_url && (
                            <a href={post.url} target="_blank" rel="noopener noreferrer" className="relative aspect-video w-full bg-slate-50 border-y border-slate-100 overflow-hidden block">
                                <img 
                                    src={post.image_url} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover"
                                />
                            </a>
                        )}

                        {/* Footer / Interactions */}
                        <div className="p-1 px-4 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex -space-x-1 py-3">
                                <div className="size-4 bg-blue-500 rounded-full border border-white flex items-center justify-center text-[8px] text-white">
                                    <ThumbsUp size={8} fill="currentColor" />
                                </div>
                                <div className="size-4 bg-red-500 rounded-full border border-white flex items-center justify-center text-[8px] text-white">
                                    ❤️
                                </div>
                                <span className="pl-3 text-[11px] font-bold text-slate-500">24</span>
                            </div>
                            <span className="text-[11px] font-bold text-slate-500 hover:text-blue-600 hover:underline cursor-pointer">
                                4 commentaires
                            </span>
                        </div>

                        <div className="px-2 pb-2 flex border-t border-slate-50">
                            {[
                                { icon: ThumbsUp, label: 'J\'aime' },
                                { icon: MessageSquare, label: 'Commenter' },
                                { icon: Repeat2, label: 'Republier' },
                                { icon: Send, label: 'Envoyer' }
                            ].map((action, i) => (
                                <a 
                                    key={i}
                                    href={post.url}
                                    target="_blank"
                                    className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-slate-50 rounded-lg transition-colors group"
                                >
                                    <action.icon size={18} className="text-slate-500 group-hover:text-blue-600" />
                                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter group-hover:text-blue-600">
                                        {action.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <a 
                    href="https://linkedin.com/in/makhtar-wade-julo" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[#0077b5] font-black text-sm uppercase tracking-widest hover:underline"
                >
                    <Linkedin size={18} fill="currentColor" /> Voir tout sur LinkedIn
                </a>
            </div>
        </section>
    )
}

export default LinkedInPosts

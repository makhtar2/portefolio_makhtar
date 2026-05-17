'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LinkedinIcon, ExternalLinkIcon, CalendarIcon } from 'lucide-react'
import Title from './Title'
import { createPublicClient } from '@/lib/supabase/public'

const LinkedInPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const supabase = createPublicClient();
                if (!supabase) throw new Error("Supabase not configured");

                const { data, error } = await supabase
                    .from('linkedin_posts')
                    .select('*')
                    .order('published_at', { ascending: false })
                    .limit(4);
                
                if (error) throw error;
                if (data) setPosts(data);
            } catch (err) {
                console.warn("Using mock LinkedIn data:", err.message);
                // Fallback to mock data if DB fails
                setPosts([
                    {
                        id: 1,
                        title: "Lancement de ma nouvelle startup JULO 🚀",
                        content: "Très fier de vous présenter JULO, une solution innovante pour l'automatisation des processus métiers au Sénégal...",
                        url: "https://linkedin.com",
                        published_at: "2026-05-15",
                        image_url: "/assets/projects/sherifa.png"
                    },
                    {
                        id: 2,
                        title: "Retour sur mon expérience à l'UCAK 🎓",
                        content: "Une année riche en défis techniques et en apprentissages au sein du département informatique...",
                        url: "https://linkedin.com",
                        published_at: "2026-05-10",
                        image_url: "/assets/projects/babos.png"
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (!loading && posts.length === 0) return null;

    return (
        <section className='px-6 my-24 max-w-7xl mx-auto'>
            <Title 
                title="Actualités & Partages" 
                description="Retrouvez mes dernières réflexions, succès et partages d'expérience sur LinkedIn."
                visibleButton={false}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
                {posts.map((post, index) => (
                    <motion.a
                        key={post.id}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className='group relative flex flex-col sm:flex-row bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500'
                    >
                        {/* Image side */}
                        <div className='relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden bg-slate-100'>
                            <img 
                                src={post.image_url || "/assets/projects/placeholder-image.png"} 
                                alt={post.title}
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                            <div className='absolute top-4 left-4 size-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-[#0077b5] shadow-lg'>
                                <LinkedinIcon size={20} fill="currentColor" />
                            </div>
                        </div>

                        {/* Content side */}
                        <div className='flex-1 p-8 flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4'>
                                    <CalendarIcon size={12} />
                                    {new Date(post.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </div>
                                <h3 className='text-xl font-black text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-brand-primary transition-colors'>
                                    {post.title}
                                </h3>
                                <p className='text-slate-500 text-sm font-bold line-clamp-3 leading-relaxed'>
                                    {post.content}
                                </p>
                            </div>

                            <div className='mt-6 flex items-center gap-2 text-brand-secondary font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all'>
                                Lire le post <ExternalLinkIcon size={14} />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}

export default LinkedInPosts

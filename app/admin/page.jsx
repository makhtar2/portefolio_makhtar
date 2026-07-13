'use client'
import React, { useEffect, useState } from 'react'
import { Plus, Briefcase, Linkedin, Loader2, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function AdminDashboard() {
    const [stats, setStats] = useState([
        { name: 'Projets', value: '0', icon: Briefcase, color: 'bg-blue-500' },
        { name: 'Posts LinkedIn', value: '0', icon: Linkedin, color: 'bg-[#0077b5]' },
    ]);
    const [recentProjects, setRecentProjects] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const [projectsRes, postsRes] = await Promise.all([
                    supabase.from('projects').select('*', { count: 'exact' }).order('created_at', { ascending: false }).limit(2),
                    supabase.from('linkedin_posts').select('*', { count: 'exact' }).order('published_at', { ascending: false }).limit(2)
                ]);

                setStats([
                    { name: 'Projets', value: projectsRes.count?.toString() || '0', icon: Briefcase, color: 'bg-blue-500' },
                    { name: 'Posts LinkedIn', value: postsRes.count?.toString() || '0', icon: Linkedin, color: 'bg-[#0077b5]' },
                ]);

                setRecentProjects(projectsRes.data || []);
                setRecentPosts(postsRes.data || []);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchDashboardData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="animate-spin text-brand-primary" size={48} />
            </div>
        )
    }

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-4 uppercase italic">
                        Tableau <br /><span className="text-brand-gradient">de Bord</span>
                    </h1>
                    <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Bienvenue, Makhtar Wade</p>
                </div>
                <div className="size-16 bg-slate-100 rounded-[1.5rem] flex items-center justify-center text-slate-400 border border-slate-200">
                    <LayoutDashboard size={24} />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20 flex flex-col gap-6 relative overflow-hidden group">
                        <div className={`absolute top-0 right-0 size-32 ${stat.color} opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150`} />
                        
                        <div className={`size-14 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/10 relative z-10`}>
                            <stat.icon size={24} />
                        </div>
                        <div className="relative z-10">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{stat.name}</p>
                            <p className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/20">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Derniers Projets</h3>
                        <Briefcase className="text-slate-200" size={24} />
                    </div>
                    <div className="space-y-4 mb-10">
                        {recentProjects.map((project) => (
                            <div key={project.id} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:border-brand-primary/20">
                                <span className="font-black text-slate-700 text-sm uppercase tracking-tight">{project.name}</span>
                                <span className="text-[9px] font-black text-brand-primary uppercase bg-brand-primary/10 px-4 py-2 rounded-full tracking-widest">{project.category}</span>
                            </div>
                        ))}
                        {recentProjects.length === 0 && <p className="text-slate-400 font-bold italic text-center py-6">Aucun projet récent.</p>}
                    </div>
                    <Link href="/admin/projects" className="flex items-center justify-center gap-3 w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20">
                        <Plus size={16} /> Gérer les projets
                    </Link>
                </div>

                <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/20">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Activités LinkedIn</h3>
                        <Linkedin className="text-slate-200" size={24} />
                    </div>
                    <div className="space-y-4 mb-10">
                        {recentPosts.map((post) => (
                            <div key={post.id} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:border-brand-primary/20">
                                <p className="font-black text-slate-700 text-sm uppercase tracking-tight line-clamp-1">{post.title}</p>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2 block italic">Publié le {new Date(post.published_at).toLocaleDateString()}</span>
                            </div>
                        ))}
                        {recentPosts.length === 0 && <p className="text-slate-400 font-bold italic text-center py-6">Aucune activité récente.</p>}
                    </div>
                    <Link href="/admin/linkedin" className="flex items-center justify-center gap-3 w-full py-5 bg-brand-gradient text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20">
                        <Plus size={16} /> Gérer les posts
                    </Link>
                </div>
            </div>
        </div>
    )
}

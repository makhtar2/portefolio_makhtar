'use client'
import React from 'react'
import { Plus, Briefcase, Linkedin, Users } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
    
    const stats = [
        { name: 'Projets', value: '12', icon: Briefcase, color: 'bg-blue-500' },
        { name: 'Posts LinkedIn', value: '8', icon: Linkedin, color: 'bg-[#0077b5]' },
        { name: 'Visiteurs', value: '1.2k', icon: Users, color: 'bg-green-500' },
    ];

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">Bonjour, Makhtar 👋</h1>
                <p className="text-slate-500 font-bold mt-2 text-lg">Gérez vos contenus et suivez vos performances.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
                        <div className={`size-16 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/10`}>
                            <stat.icon size={28} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.name}</p>
                            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Derniers Projets</h3>
                    <div className="space-y-4 mb-8">
                        {/* Short list of projects */}
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                            <span className="font-bold text-slate-700">Sherifa Parfumerie</span>
                            <span className="text-[10px] font-black text-green-500 uppercase bg-green-50 px-3 py-1 rounded-full">En ligne</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                            <span className="font-bold text-slate-700">Vote Numérique UCAK</span>
                            <span className="text-[10px] font-black text-blue-500 uppercase bg-blue-50 px-3 py-1 rounded-full">Beta</span>
                        </div>
                    </div>
                    <Link href="/admin/projects" className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all">
                        <Plus size={16} /> Ajouter un projet
                    </Link>
                </div>

                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Activités LinkedIn</h3>
                    <div className="space-y-4 mb-8">
                        {/* Short list of posts */}
                        <div className="p-4 bg-slate-50 rounded-2xl">
                            <p className="font-bold text-slate-700 line-clamp-1">Lancement de ma nouvelle startup JULO 🚀</p>
                            <span className="text-[10px] font-black text-slate-400 uppercase">Publié le 15 Mai</span>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl">
                            <p className="font-bold text-slate-700 line-clamp-1">Retour sur mon expérience à l'UCAK 🎓</p>
                            <span className="text-[10px] font-black text-slate-400 uppercase">Publié le 10 Mai</span>
                        </div>
                    </div>
                    <Link href="/admin/linkedin" className="flex items-center justify-center gap-2 w-full py-4 bg-brand-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20">
                        <Plus size={16} /> Poster sur le site
                    </Link>
                </div>
            </div>
        </div>
    )
}

'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Briefcase, Linkedin, LogOut, Home } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'react-hot-toast'

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Projets', href: '/admin/projects', icon: Briefcase },
        { name: 'LinkedIn', href: '/admin/linkedin', icon: Linkedin },
    ];

    const handleLogout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        toast.success('Déconnexion réussie');
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans selection:bg-brand-primary/20">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-slate-100 flex flex-col fixed h-full z-20">
                <div className="p-10">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900">
                        Almuxtaar<span className="text-brand-primary">.</span><span className="text-slate-400">Admin</span>
                    </Link>
                </div>

                <nav className="flex-1 px-6 space-y-3">
                    <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Menu Principal</p>
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                                    isActive 
                                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' 
                                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                                }`}
                            >
                                <item.icon size={18} className={isActive ? 'text-brand-primary' : ''} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-8 border-t border-slate-50 space-y-3">
                    <Link href="/" className="flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">
                        <Home size={18} />
                        Voir le site
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all"
                    >
                        <LogOut size={18} />
                        Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-72 min-h-screen relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 size-[500px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 -z-10" />
                
                <div className="p-10 sm:p-16 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

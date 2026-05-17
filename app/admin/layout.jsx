'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Briefcase, Linkedin, LogOut, Home } from 'lucide-react'

export default function AdminLayout({ children }) {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Projets', href: '/admin/projects', icon: Briefcase },
        { name: 'LinkedIn', href: '/admin/linkedin', icon: Linkedin },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full z-20">
                <div className="p-8">
                    <Link href="/" className="text-2xl font-black tracking-tighter">
                        Almuxtaar<span className="text-brand-primary">.</span>Admin
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                                    isActive 
                                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <item.icon size={18} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-white/5 space-y-2">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all">
                        <Home size={18} />
                        Voir le site
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all">
                        <LogOut size={18} />
                        Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 sm:p-12">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

'use client'
import React from 'react'
import { Printer } from 'lucide-react'

export default function PrintButton() {
    return (
        <button 
            onClick={() => window.print()}
            className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all shadow-xl shadow-slate-900/10 active:scale-95"
        >
            <Printer size={16} /> Imprimer
        </button>
    )
}

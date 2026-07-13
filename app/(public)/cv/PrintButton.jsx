'use client'

import { Download } from 'lucide-react'

const PrintButton = () => {
    return (
        <button
            type="button"
            onClick={() => window.print()}
            className="bg-brand-gradient text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-brand-primary/20 active:scale-95"
        >
            <Download size={16} /> Télécharger PDF
        </button>
    )
}

export default PrintButton

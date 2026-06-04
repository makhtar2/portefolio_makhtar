'use client'
import React from 'react'
import Title from './Title'
import toast from 'react-hot-toast'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Merci ! Votre message a bien été envoyé.");
    }

    return (
        <div id="contact" className='flex flex-col items-center mx-6 my-20 text-center'>
            <Title 
                title="Discutons de votre projet" 
                description="Partagez votre idée, je vous fournirai une réponse rapide et professionnelle." 
                visibleButton={false} 
            />
            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-2 bg-white w-full max-w-2xl my-8 p-2 border border-slate-100 rounded-xl shadow-sm'>
                <input 
                    className='flex-1 px-4 py-3 bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 font-medium rounded-lg focus:bg-white focus:ring-2 focus:ring-brand-primary/20 transition text-sm' 
                    type="email" 
                    placeholder='votre@email.com' 
                    required 
                />
                <button 
                    type="submit" 
                    className='bg-brand-primary text-white px-6 py-3 rounded-lg font-black text-xs uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all whitespace-nowrap shadow-sm'
                >
                    S'inscrire
                </button>
            </form>
            <p className='text-xs font-semibold text-slate-500 uppercase tracking-wide'>
                ✓ Réponse sous 24h
            </p>
        </div>
    )
}

export default Contact

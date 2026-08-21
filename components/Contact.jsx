'use client'
import React, { useState } from 'react'
import Title from './Title'
import toast from 'react-hot-toast'

const Contact = () => {
    const [email, setEmail] = useState('');
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    subject: 'Nouvelle demande rapide depuis la page d\'accueil',
                    message: 'Demande envoyée via le formulaire rapide de la page d\'accueil (adresse e-mail uniquement).',
                }),
            });
            if (!res.ok) throw new Error('request-failed');
            toast.success('Merci ! Votre message a bien été envoyé.');
            setEmail('');
        } catch {
            toast.error("Une erreur est survenue. Réessayez ou écrivez-moi directement.");
        } finally {
            setSending(false);
        }
    }

    return (
        <div id="contact" className='flex flex-col items-center mx-4 my-24 text-center'>
            <Title
                title="Parlons de votre projet"
                description="Vous avez une idée ou un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je suis toujours ouvert à de nouvelles collaborations."
                visibleButton={false}
            />
            <form onSubmit={handleSubmit} className='flex bg-slate-50 text-sm p-1.5 rounded-full w-full max-w-xl my-6 border border-slate-100 shadow-sm'>
                <input
                    className='flex-1 pl-6 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 font-medium'
                    type="email"
                    placeholder='Votre adresse e-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    disabled={sending}
                    className='bg-green-600 text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-green-700 active:scale-95 transition-all shadow-lg shadow-green-600/20 disabled:opacity-50'
                >
                    {sending ? 'Envoi...' : 'Envoyer'}
                </button>
            </form>
            <p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4'>
                Réponse garantie sous 24h
            </p>
        </div>
    )
}

export default Contact

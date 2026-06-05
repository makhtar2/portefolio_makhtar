'use client'
import React, { useState } from 'react';
import Title from '@/components/Title';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, message } = formData;
        const text = `Bonjour Makhtar, je suis ${name}. Sujet: ${subject}. Message: ${message}`;
        window.open(`https://wa.me/221754469097?text=${encodeURIComponent(text)}`, '_blank');
        toast.success("Redirection vers WhatsApp...");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "221754469097";
        const message = "Bonjour Makhtar, j'ai vu votre portfolio et j'aimerais discuter d'un projet.";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="mx-6">
            <div className="max-w-7xl mx-auto my-12">
                <Title 
                    title="Parlons de votre projet" 
                    description="Que vous ayez une idée précise ou un projet en phase de conception, je suis là pour vous aider." 
                    visibleButton={false} 
                />

                <div className="flex flex-col lg:flex-row gap-12 mt-16">
                    {/* Left: Contact Form */}
                    <div className="flex-1">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-slate-600">
                            <div className="flex flex-col sm:flex-row gap-6">
                                <input 
                                    type="text" 
                                    placeholder="Nom Complet" 
                                    className="p-4 px-6 border border-slate-200 outline-none rounded-2xl w-full focus:border-brand-primary transition"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email address" 
                                    className="p-4 px-6 border border-slate-200 outline-none rounded-2xl w-full focus:border-brand-primary transition"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Sujet" 
                                className="p-4 px-6 border border-slate-200 outline-none rounded-2xl w-full focus:border-brand-primary transition"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                required
                            />
                            <textarea 
                                rows="6" 
                                placeholder="Votre Message" 
                                className="p-4 px-6 border border-slate-200 outline-none rounded-2xl w-full focus:border-brand-primary transition resize-none"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            ></textarea>
                            <button className="bg-brand-gradient text-white text-sm font-black py-4 rounded-2xl hover:brightness-110 active:scale-95 transition-all w-full sm:w-max px-16 shadow-xl shadow-brand-primary/20 uppercase tracking-widest">
                                ENVOYER SUR WHATSAPP
                            </button>
                        </form>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="lg:w-[400px] flex flex-col gap-6">
                        <div className="border border-slate-200 p-8 rounded-[2.5rem] flex flex-col gap-4 bg-white">
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-4">Nos Coordonnées</h3>
                            
                            <div className="flex items-center gap-4 text-slate-600">
                                <div className="size-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Téléphone</p>
                                    <p className="text-sm font-bold text-slate-900">+221 75 446 90 97</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-600 border-t border-slate-50 pt-4">
                                <div className="size-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Email</p>
                                    <p className="text-sm font-bold text-slate-900">makhtar2gsm@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-slate-600 border-t border-slate-50 pt-4">
                                <div className="size-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-400">Localisation</p>
                                    <p className="text-sm font-bold text-slate-900">Touba, Thiès & Dakar</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-8 rounded-[2.5rem] flex flex-col gap-4 text-white">
                            <h3 className="text-lg font-black uppercase tracking-widest text-brand-primary">Disponibilité</h3>
                            <p className="text-sm text-slate-300 font-medium leading-relaxed">
                                <b>Lundi - Vendredi :</b> 09h00 - 18h00<br />
                                <b>Week-end :</b> Sur rendez-vous
                            </p>
                            <p className="text-sm text-slate-400 italic border-t border-white/10 pt-4">
                                "Je m'efforce de répondre à toutes les demandes sous 24h."
                            </p>
                            <button 
                                onClick={handleWhatsAppClick}
                                className="mt-4 flex items-center justify-center gap-2 bg-brand-gradient text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all"
                            >
                                <MessageCircle size={18} fill="currentColor" />
                                DISCUTER SUR WHATSAPP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

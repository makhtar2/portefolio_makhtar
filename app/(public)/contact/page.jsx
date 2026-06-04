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
                    description="Partagez vos idées, je vous répondrai rapidement avec des solutions concrètes." 
                    visibleButton={false} 
                />

                <div className="flex flex-col lg:flex-row gap-10 mt-14">
                    {/* Left: Contact Form */}
                    <div className="flex-1">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-slate-600">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Nom Complet" 
                                    className="p-2.5 px-4 border border-slate-100 outline-none rounded-lg w-full bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition font-medium text-sm"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="p-2.5 px-4 border border-slate-100 outline-none rounded-lg w-full bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition font-medium text-sm"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Sujet" 
                                className="p-2.5 px-4 border border-slate-100 outline-none rounded-lg w-full bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition font-medium text-sm"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                required
                            />
                            <textarea 
                                rows="5" 
                                placeholder="Votre Message" 
                                className="p-2.5 px-4 border border-slate-100 outline-none rounded-lg w-full bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition resize-none font-medium text-sm"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            ></textarea>
                            <button className="bg-brand-primary text-white text-xs font-black py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all w-full sm:w-fit px-8 shadow-md uppercase tracking-wide">
                                Envoyer via WhatsApp
                            </button>
                        </form>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="lg:w-[380px] flex flex-col gap-5">
                        <div className="border border-slate-100 p-5 rounded-xl flex flex-col gap-3 bg-white">
                            <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">Contact Direct</h3>
                            
                            <div className="flex items-start gap-3 text-slate-600">
                                <div className="size-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                                    <Phone size={16} />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase text-slate-400">Téléphone</p>
                                    <a href="tel:+221754469097" className="text-sm font-semibold text-slate-900 hover:text-brand-primary transition">+221 75 446 90 97</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-slate-600 border-t border-slate-50 pt-3">
                                <div className="size-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                                    <Mail size={16} />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase text-slate-400">Email</p>
                                    <a href="mailto:makhtar2gsm@gmail.com" className="text-sm font-semibold text-slate-900 hover:text-brand-primary transition">makhtar2gsm@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-slate-600 border-t border-slate-50 pt-3">
                                <div className="size-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase text-slate-400">Localisation</p>
                                    <p className="text-sm font-semibold text-slate-900">Touba, Thiès & Dakar</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-5 rounded-xl flex flex-col gap-3 text-white border border-slate-800">
                            <h3 className="text-sm font-black uppercase tracking-wide text-brand-primary">Disponibilité</h3>
                            <p className="text-xs text-slate-300 font-medium leading-relaxed">
                                <b>Lun-Ven :</b> 09h00 - 18h00<br />
                                <b>Week-end :</b> Sur rendez-vous
                            </p>
                            <button 
                                onClick={handleWhatsAppClick}
                                className="mt-2 flex items-center justify-center gap-2 bg-brand-primary text-white py-2.5 rounded-lg font-black text-xs uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-md"
                            >
                                <MessageCircle size={14} fill="currentColor" />
                                WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react'
import Image from 'next/image'
import { 
    Phone, 
    Mail, 
    MapPin, 
    Globe, 
    Linkedin, 
    Download,
    Code2,
    ShieldCheck,
    Palette,
    Zap,
    GraduationCap,
    Briefcase,
    Award,
    XIcon
} from 'lucide-react'
import Link from 'next/link'
import { getProjects } from "@/lib/supabase/public"

const CVPage = async () => {
    const projects = await getProjects();
    const projectNames = projects.length > 0 
        ? projects.map(p => p.name).join(', ') 
        : "GymScore Sénégal, Sherifa Parfumerie, Vote Numérique UCAK, Gestion Kurel, Qurratul Ayni, Faaris Signature, PARAR, Roadmap Tracker MLOps, Babos.";

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 print:p-0 print:bg-white">
            {/* TOOLBAR - HIDDEN ON PRINT */}
            <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
                <Link href="/" className="text-slate-900 font-black text-2xl tracking-tighter hover:opacity-70 transition-all flex items-center gap-3">
                    <div className="size-10 bg-brand-gradient rounded-xl flex items-center justify-center text-white text-base">M</div>
                    Générateur de CV <span className="text-brand-primary">Pro</span>
                </Link>
                <div className="flex gap-4">
                    <a 
                        href="/api/cv" 
                        download="Makhtar_Wade_CV.html"
                        className="bg-brand-gradient text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-brand-primary/20 active:scale-95"
                    >
                        <Download size={16} /> Télécharger CV
                    </a>
                </div>
            </div>

            {/* CV CONTENT - A4 DESIGN */}
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row print:shadow-none print:rounded-none print:w-full min-h-[297mm]">
                
                {/* LEFT SIDEBAR - BRANDED */}
                <div className="w-full md:w-80 bg-slate-900 text-white p-10 flex flex-col gap-10">
                    {/* Portrait */}
                    <div className="relative size-48 mx-auto rounded-[2.5rem] overflow-hidden border-4 border-white/10 bg-brand-gradient shadow-2xl">
                        <Image 
                            src="/assets/hero-main.png" 
                            alt="Makhtar Wade" 
                            fill 
                            className="object-cover brightness-110"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-brand-primary font-black uppercase text-[10px] tracking-[0.2em] border-b border-white/10 pb-2">Contact</h3>
                        <div className="flex items-center gap-4 text-xs font-bold">
                            <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-primary">
                                <Phone size={14} />
                            </div>
                            <span>+221 75 446 90 97</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold">
                            <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-primary">
                                <Mail size={14} />
                            </div>
                            <span className="break-all">makhtar2gsm@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold">
                            <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-primary">
                                <MapPin size={14} />
                            </div>
                            <span>Thiès • Touba • Dakar</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold">
                            <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-primary">
                                <Globe size={14} />
                            </div>
                            <span>makhtarwade.netlify.app</span>
                        </div>
                    </div>

                    {/* Technical Stack */}
                    <div className="space-y-6">
                        <h3 className="text-brand-primary font-black uppercase text-[10px] tracking-[0.2em] border-b border-white/10 pb-2">Expertise</h3>
                        <div className="flex flex-col gap-5">
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Développement</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {["Java (POO)", "Python", "FastAPI", "Django", "Next.js", "Angular"].map(s => (
                                        <span key={s} className="px-2 py-0.5 bg-white/5 rounded text-[9px] font-bold">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Réseaux & Sécurité</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {["Cisco CCNA", "Routage", "Commutation", "Cybersécurité"].map(s => (
                                        <span key={s} className="px-2 py-0.5 bg-white/5 rounded text-[9px] font-bold">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">IA & Automatisation</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {["n8n (Workflows)", "Prompt Eng.", "Git/GitHub", "CI/CD"].map(s => (
                                        <span key={s} className="px-2 py-0.5 bg-white/5 rounded text-[9px] font-bold">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Bases de Données</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {["MySQL", "PostgreSQL", "Modélisation"].map(s => (
                                        <span key={s} className="px-2 py-0.5 bg-white/5 rounded text-[9px] font-bold">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Design</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {["Figma", "Photoshop", "Illustrator", "Blender"].map(s => (
                                        <span key={s} className="px-2 py-0.5 bg-white/5 rounded text-[9px] font-bold">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="space-y-6 mt-auto">
                        <h3 className="text-brand-primary font-black uppercase text-[10px] tracking-[0.2em] border-b border-white/10 pb-2">Langues</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-[11px] font-bold">
                                <span>Français</span>
                                <span className="text-brand-primary">Courant</span>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold">
                                <span>Anglais</span>
                                <span className="text-slate-400">Technique</span>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold">
                                <span>Wolof</span>
                                <span className="text-brand-primary">Maternel</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="flex-1 p-12 sm:p-16 flex flex-col gap-10">
                    {/* Header */}
                    <div>
                        <h2 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-4 uppercase">
                            Makhtar <br /><span className="text-brand-gradient">Wade</span>
                        </h2>
                        <p className="text-brand-secondary font-black text-xs sm:text-sm uppercase tracking-[0.3em] mb-8">
                            Développeur Full-Stack & Designer UI/UX
                        </p>
                        <p className="text-slate-500 font-bold text-sm sm:text-base leading-relaxed max-w-xl">
                            Étudiant entrepreneur et fondateur de la startup JULO. Spécialisé dans les architectures distribuées et l'automatisation. Profil hybride alliant rigueur technique logicielle, maîtrise des infrastructures réseaux (CCNA) et expertise en design UI/UX.
                        </p>
                    </div>

                    {/* Experiences */}
                    <div>
                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-3 mb-8">
                            <div className="h-[2px] w-8 bg-brand-primary" /> Expériences Professionnelles
                        </h3>
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l-2 border-slate-100">
                                <div className="absolute top-0 -left-[5px] size-2 rounded-full bg-brand-primary" />
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-black text-slate-900 text-sm">Fondateur & Lead Designer</h4>
                                    <span className="text-[10px] font-black text-slate-400">2023 – Présent</span>
                                </div>
                                <p className="text-brand-primary font-black text-[10px] uppercase tracking-widest mb-2">JULO Startup</p>
                                <p className="text-xs text-slate-500 font-bold">Gestion technique de projets digitaux et création d’identités visuelles institutionnelles.</p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-slate-100">
                                <div className="absolute top-0 -left-[5px] size-2 rounded-full bg-brand-primary" />
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-black text-slate-900 text-sm">Prestataire Design Graphique</h4>
                                    <span className="text-[10px] font-black text-slate-400">2024 – Présent</span>
                                </div>
                                <p className="text-brand-primary font-black text-[10px] uppercase tracking-widest mb-2">UCAK Touba</p>
                                <p className="text-xs text-slate-500 font-bold">Conception de supports de communication visuelle institutionnels (Freelance).</p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-slate-100">
                                <div className="absolute top-0 -left-[5px] size-2 rounded-full bg-brand-primary" />
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-black text-slate-900 text-sm">Stagiaire Développeur</h4>
                                    <span className="text-[10px] font-black text-slate-400">Sept. 2025 – Nov. 2025</span>
                                </div>
                                <p className="text-brand-primary font-black text-[10px] uppercase tracking-widest mb-2">CRI - Ecole Polytechnique de Thiès</p>
                                <p className="text-xs text-slate-500 font-bold">Maintenance infrastructurelle et support au développement d’applications internes.</p>
                            </div>
                        </div>
                    </div>

                    {/* Formation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
                                <div className="h-[2px] w-6 bg-brand-primary" /> Formation
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-black text-slate-900 text-xs">Licence 3 Informatique (DAR)</h4>
                                    <p className="text-[10px] text-slate-500 font-bold">UCAK | 2023 – Présent</p>
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 text-xs">Baccalauréat Scientifique (S2)</h4>
                                    <p className="text-[10px] text-slate-500 font-bold">Lycée Malick SY – Thiès | 2022</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
                                <div className="h-[2px] w-6 bg-brand-primary" /> Certifications
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck size={14} className="text-brand-primary" />
                                    <p className="text-[10px] font-bold text-slate-600">Cisco CCNA (2025)</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Zap size={14} className="text-brand-primary" />
                                    <p className="text-[10px] font-bold text-slate-600">FORCEN Marketing Digital (2025)</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Award size={14} className="text-brand-primary" />
                                    <p className="text-[10px] font-bold text-slate-600">MIT & Facebook Engineering (2021)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Platforms */}
                    <div>
                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-8 bg-brand-primary" /> Plateformes Réalisées
                        </h3>
                        <p className="text-[10px] font-bold text-slate-500 leading-relaxed">
                            {projectNames}
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-8 border-t border-slate-50 flex justify-between items-end">
                        <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                            Généré via le portfolio de Makhtar Wade <br />
                            © 2026 Tous droits réservés
                        </div>
                        <div className="size-16 bg-slate-100 rounded-2xl flex items-center justify-center text-[8px] font-black text-slate-300 text-center uppercase tracking-widest p-2">
                            makhtarwade.netlify.app
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CVPage

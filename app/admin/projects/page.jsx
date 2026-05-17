'use client'
import React, { useState } from 'react'
import { Plus, Trash2, Edit, Save, Briefcase, Globe, Code } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import projectsData from '@/assets/data/projects.json'

export default function AdminProjects() {
    const [isAdding, setIsAdding] = useState(false);
    const [projects, setPosts] = useState(projectsData);

    const [newProject, setNewProject] = useState({
        name: '',
        desc: '',
        image: '',
        category: 'web',
        links: { view: '#', code: '#' },
        tech: []
    });

    const handleAddProject = (e) => {
        e.preventDefault();
        // Logic to save to Supabase would go here
        setPosts([{ ...newProject }, ...projects]);
        setIsAdding(false);
        setNewProject({ name: '', desc: '', image: '', category: 'web', links: { view: '#', code: '#' }, tech: [] });
    };

    return (
        <div className="space-y-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Projets</h1>
                    <p className="text-slate-500 font-bold mt-2 text-lg">Gérez votre portfolio de réalisations.</p>
                </div>
                <button 
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black shadow-xl shadow-slate-900/10 transition-all"
                >
                    {isAdding ? 'Annuler' : 'Ajouter un Projet'}
                </button>
            </div>

            <AnimatePresence>
                {isAdding && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <form onSubmit={handleAddProject} className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Nom du Projet</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={newProject.name}
                                        onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                                        placeholder="Ex: Sherifa Parfumerie"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Catégorie</label>
                                    <select 
                                        value={newProject.category}
                                        onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors appearance-none"
                                    >
                                        <option value="web">Développement Web</option>
                                        <option value="design">Design Graphique</option>
                                        <option value="maintenance">Maintenance</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">URL de l'image (dans /assets/projects/)</label>
                                    <input 
                                        type="text" 
                                        value={newProject.image}
                                        onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                                        placeholder="Ex: sherifa.png"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Lien du site (Live)</label>
                                    <input 
                                        type="text" 
                                        value={newProject.links.view}
                                        onChange={(e) => setNewProject({...newProject, links: {...newProject.links, view: e.target.value}})}
                                        placeholder="https://..."
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Description</label>
                                <textarea 
                                    rows="3"
                                    required
                                    value={newProject.desc}
                                    onChange={(e) => setNewProject({...newProject, desc: e.target.value})}
                                    placeholder="Présentez brièvement le projet..."
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button type="submit" className="flex items-center justify-center gap-3 w-full py-5 bg-brand-gradient text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20">
                                <Save size={18} /> Publier le projet
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between group">
                        <div className="flex items-center gap-6">
                            <div className="size-16 bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center text-slate-300">
                                {project.image ? (
                                    <img src={`/assets/projects/${project.image}`} alt={project.name} className="w-full h-full object-cover" />
                                ) : (
                                    <Briefcase size={24} />
                                )}
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900 tracking-tight">{project.name}</h4>
                                <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mt-1">{project.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                            <button className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all">
                                <Edit size={18} />
                            </button>
                            <button className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

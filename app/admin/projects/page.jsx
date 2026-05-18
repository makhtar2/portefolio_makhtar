'use client'
import React, { useState, useEffect } from 'react'
import { Plus, Trash2, Edit, Save, Briefcase, Globe, Code, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'react-hot-toast'

export default function AdminProjects() {
    const [isAdding, setIsAdding] = useState(false);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const supabase = createClient();

    const [newProject, setNewProject] = useState({
        name: '',
        desc: '',
        image: '',
        category: 'web',
        links: { view: '#', code: '#' },
        tech: []
    });
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) throw error;
            setProjects(data || []);
        } catch (error) {
            toast.error('Erreur lors du chargement des projets');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const uploadImage = async (file) => {
        try {
            setUploading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('projects')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data } = supabase.storage
                .from('projects')
                .getPublicUrl(filePath);

            return data.publicUrl;
        } catch (error) {
            toast.error("Erreur lors de l'envoi de l'image");
            return null;
        } finally {
            setUploading(false);
        }
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            let finalImageUrl = newProject.image;

            if (imageFile) {
                const uploadedUrl = await uploadImage(imageFile);
                if (uploadedUrl) finalImageUrl = uploadedUrl;
            }

            const { error } = await supabase
                .from('projects')
                .insert([{
                    name: newProject.name,
                    description: newProject.desc,
                    image_url: finalImageUrl,
                    category: newProject.category,
                    site_url: newProject.links.view,
                    tech_stack: newProject.tech
                }]);

            if (error) throw error;

            toast.success('Projet ajouté avec succès !');
            setIsAdding(false);
            setNewProject({ name: '', desc: '', image: '', category: 'web', links: { view: '#', code: '#' }, tech: [] });
            setImageFile(null);
            fetchProjects();
        } catch (error) {
            toast.error(error.message || 'Erreur lors de l\'ajout');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteProject = async (id) => {
        if (!confirm('Voulez-vous vraiment supprimer ce projet ?')) return;

        try {
            const { error } = await supabase
                .from('projects')
                .delete()
                .eq('id', id);

            if (error) throw error;

            toast.success('Projet supprimé');
            fetchProjects();
        } catch (error) {
            toast.error('Erreur lors de la suppression');
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
                <div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-4 uppercase italic">
                        Gestion des <br /><span className="text-brand-gradient">Projets</span>
                    </h1>
                    <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Configurez votre vitrine technologique</p>
                </div>
                <button 
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black shadow-2xl shadow-slate-900/20 transition-all active:scale-95"
                >
                    {isAdding ? 'Annuler' : 'Ajouter un Projet'}
                </button>
            </div>

            <AnimatePresence>
                {isAdding && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="overflow-hidden"
                    >
                        <form onSubmit={handleAddProject} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 size-64 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Nom du Projet</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={newProject.name}
                                        onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                                        placeholder="Ex: Sherifa Parfumerie"
                                        className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] font-black text-slate-700 focus:outline-none focus:border-brand-primary focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Catégorie</label>
                                    <select 
                                        value={newProject.category}
                                        onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                                        className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] font-black text-slate-700 focus:outline-none focus:border-brand-primary focus:bg-white transition-all appearance-none"
                                    >
                                        <option value="web">Développement Web</option>
                                        <option value="design">Design Graphique</option>
                                        <option value="maintenance">Maintenance</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Lien du site (Live)</label>
                                    <input 
                                        type="text" 
                                        value={newProject.links.view}
                                        onChange={(e) => setNewProject({...newProject, links: {...newProject.links, view: e.target.value}})}
                                        placeholder="https://..."
                                        className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] font-black text-slate-700 focus:outline-none focus:border-brand-primary focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-3 md:col-span-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Image du Projet</label>
                                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                                        <div className="flex-1 w-full relative">
                                            <input 
                                                type="file" 
                                                accept="image/*"
                                                onChange={(e) => setImageFile(e.target.files[0])}
                                                className="hidden" 
                                                id="project-image-upload"
                                            />
                                            <label 
                                                htmlFor="project-image-upload"
                                                className="flex flex-col items-center justify-center w-full h-40 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[1.5rem] cursor-pointer hover:bg-slate-100 hover:border-brand-primary/40 transition-all group"
                                            >
                                                {imageFile ? (
                                                    <div className="text-center px-6">
                                                        <p className="font-black text-slate-900 text-sm truncate max-w-[250px]">{imageFile.name}</p>
                                                        <p className="text-[10px] font-black text-brand-primary uppercase mt-1">Fichier sélectionné</p>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Plus className="text-slate-300 group-hover:text-brand-primary transition-colors mb-2" size={32} />
                                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cliquez pour choisir une image</p>
                                                    </>
                                                )}
                                            </label>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Ou utilisez un lien existant</p>
                                            <input 
                                                type="text" 
                                                value={newProject.image}
                                                onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                                                placeholder="URL de l'image (Ex: /assets/...)"
                                                className="w-full sm:w-80 px-8 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] font-black text-slate-700 focus:outline-none focus:border-brand-primary focus:bg-white transition-all text-xs"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">Description</label>
                                <textarea 
                                    rows="3"
                                    required
                                    value={newProject.desc}
                                    onChange={(e) => setNewProject({...newProject, desc: e.target.value})}
                                    placeholder="Présentez brièvement le projet..."
                                    className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] font-black text-slate-700 focus:outline-none focus:border-brand-primary focus:bg-white transition-all resize-none"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={submitting}
                                className="flex items-center justify-center gap-4 w-full py-6 bg-brand-gradient text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-primary/20 disabled:opacity-50"
                            >
                                {submitting ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                                Publier le projet
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* List */}
            {loading ? (
                <div className="flex justify-center py-32">
                    <Loader2 className="animate-spin text-brand-primary" size={48} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/10 flex items-center justify-between group transition-all hover:shadow-2xl hover:border-brand-primary/10">
                            <div className="flex items-center gap-8">
                                <div className="size-20 bg-slate-50 rounded-[1.5rem] overflow-hidden flex items-center justify-center text-slate-200 border border-slate-100 relative group-hover:scale-105 transition-transform duration-500">
                                    {project.image_url ? (
                                        <img src={`/assets/projects/${project.image_url}`} alt={project.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <Briefcase size={28} />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 text-lg tracking-tight uppercase italic">{project.name}</h4>
                                    <p className="text-[9px] font-black text-brand-primary uppercase tracking-[0.2em] mt-2">{project.category}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                <button className="p-4 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">
                                    <Edit size={20} />
                                </button>
                                <button 
                                    onClick={() => handleDeleteProject(project.id)}
                                    className="p-4 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

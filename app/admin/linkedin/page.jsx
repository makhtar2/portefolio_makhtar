'use client'
import React, { useState, useEffect } from 'react'
import { Plus, Trash2, ExternalLink, Save, Linkedin, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'react-hot-toast'

export default function AdminLinkedIn() {
    const [isAdding, setIsAdding] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const supabase = createClient();

    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
        url: '',
        image_url: '',
        published_at: new Date().toISOString().split('T')[0]
    });

    const fetchPosts = async () => {
        try {
            const { data, error } = await supabase
                .from('linkedin_posts')
                .select('*')
                .order('published_at', { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (error) {
            toast.error('Erreur lors du chargement des posts');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount; setState only runs after the internal await
        fetchPosts();
    }, []);

    const handleAddPost = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const { error } = await supabase
                .from('linkedin_posts')
                .insert([{
                    title: newPost.title,
                    content: newPost.content,
                    url: newPost.url,
                    image_url: newPost.image_url,
                    published_at: newPost.published_at
                }]);

            if (error) throw error;

            toast.success('Post enregistré !');
            setIsAdding(false);
            setNewPost({ title: '', content: '', url: '', image_url: '', published_at: new Date().toISOString().split('T')[0] });
            fetchPosts();
        } catch (error) {
            toast.error(error.message || 'Erreur lors de l\'ajout');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeletePost = async (id) => {
        if (!confirm('Voulez-vous vraiment supprimer ce post ?')) return;

        try {
            const { error } = await supabase
                .from('linkedin_posts')
                .delete()
                .eq('id', id);

            if (error) throw error;

            toast.success('Post supprimé');
            fetchPosts();
        } catch (error) {
            toast.error('Erreur lors de la suppression');
        }
    };

    return (
        <div className="space-y-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">LinkedIn</h1>
                    <p className="text-slate-500 font-bold mt-2 text-lg">Gérez vos partages et posts en vedette.</p>
                </div>
                <button 
                    onClick={() => setIsAdding(!isAdding)}
                    className="flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 shadow-xl shadow-brand-primary/20 transition-all"
                >
                    {isAdding ? 'Annuler' : 'Nouveau Post'}
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
                        <form onSubmit={handleAddPost} className="bg-white p-10 rounded-[3rem] border border-brand-primary/20 shadow-xl shadow-brand-primary/5 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Titre du Post</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={newPost.title}
                                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                                        placeholder="Ex: Lancement de mon nouveau projet..."
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">URL du Post</label>
                                    <input 
                                        type="url" 
                                        required
                                        value={newPost.url}
                                        onChange={(e) => setNewPost({...newPost, url: e.target.value})}
                                        placeholder="https://linkedin.com/posts/..."
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">URL de l&apos;image (Optionnel)</label>
                                    <input 
                                        type="text" 
                                        value={newPost.image_url}
                                        onChange={(e) => setNewPost({...newPost, image_url: e.target.value})}
                                        placeholder="Lien vers l'image de couverture"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Date de publication</label>
                                    <input 
                                        type="date" 
                                        required
                                        value={newPost.published_at}
                                        onChange={(e) => setNewPost({...newPost, published_at: e.target.value})}
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Résumé / Accroche</label>
                                <textarea 
                                    rows="3"
                                    value={newPost.content}
                                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                                    placeholder="Un court texte pour donner envie de lire le post..."
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:outline-none focus:border-brand-primary transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={submitting}
                                className="flex items-center justify-center gap-3 w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-black transition-all disabled:opacity-50"
                            >
                                {submitting ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                Enregistrer le post
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* List */}
            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 bg-slate-50/50">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Posts publiés</h3>
                </div>
                <div className="divide-y divide-slate-50">
                    {loading ? (
                        <div className="flex justify-center py-10">
                            <Loader2 className="animate-spin text-brand-primary" size={24} />
                        </div>
                    ) : (
                        posts.map((post) => (
                            <div key={post.id} className="p-6 sm:p-8 flex items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-6">
                                    <div className="size-12 bg-[#0077b5]/10 text-[#0077b5] rounded-xl flex items-center justify-center shrink-0">
                                        <Linkedin size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 tracking-tight">{post.title}</h4>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Publié le {post.published_at}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a href={post.url} target="_blank" className="p-3 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-all">
                                        <ExternalLink size={18} />
                                    </a>
                                    <button 
                                        onClick={() => handleDeletePost(post.id)}
                                        className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                    {!loading && posts.length === 0 && (
                        <p className="text-center py-10 text-slate-400 font-bold italic">Aucun post trouvé.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

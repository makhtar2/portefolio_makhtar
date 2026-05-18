import React from 'react'
import WorkHero from '@/components/WorkHero'
import ProjectCard from '@/components/ProjectCard'
import { getProjects } from "@/lib/supabase/public"

export default async function DesignProjectsPage() {
    const projects = await getProjects();
    const designProjects = projects.filter(p => p.category?.toLowerCase() === 'design');

    return (
        <div className="pb-24">
            <WorkHero 
                category="Expression Créative"
                title="Design Graphique & Branding"
                description="Création d'identités visuelles fortes et de supports de communication qui marquent les esprits."
            />

            <div className="max-w-7xl mx-auto px-6 mt-16">
                {designProjects.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12'>
                        {designProjects.map((project, index) => (
                            <ProjectCard key={project.name || index} project={project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                        <p className="text-slate-500 font-bold text-xl">Bientôt disponible...</p>
                    </div>
                )}
            </div>
        </div>
    )
}

import React from 'react'
import WorkHero from '@/components/WorkHero'
import ProjectCard from '@/components/ProjectCard'
import { getProjects } from "@/lib/supabase/public"

export default async function WebProjectsPage() {
    const projects = await getProjects();
    const webProjects = projects.filter(p => p.category?.toLowerCase() === 'web');

    return (
        <div className="pb-24">
            <WorkHero 
                category="Expertise Technique"
                title="Sites Web & Applications"
                description="Conception et développement de solutions numériques robustes, allant des sites vitrines aux applications web complexes."
            />

            <div className="max-w-7xl mx-auto px-6 mt-16">
                {webProjects.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12'>
                        {webProjects.map((project, index) => (
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

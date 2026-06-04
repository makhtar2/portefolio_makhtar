import React from 'react'
import WorkHero from '@/components/WorkHero'
import ProjectGrid from '@/components/ProjectGrid'
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
                <ProjectGrid projects={webProjects} />
            </div>
        </div>
    )
}

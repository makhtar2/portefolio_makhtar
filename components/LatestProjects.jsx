'use client'
import React from 'react'
import Title from './Title'
import ProjectCard from './ProjectCard'

const LatestProjects = ({ projects }) => {
    const displayQuantity = 4
    const latestProjects = projects ? projects.slice(0, displayQuantity) : [];

    return (
        <div id="work" className='px-6 my-24 max-w-7xl mx-auto'>
            <Title title='Mes Derniers Projets' description={`Une sélection de mes travaux récents en design et développement.`} />
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12'>
                {latestProjects.length > 0 ? (
                    latestProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                ) : (
                    <p className="text-center text-slate-500 py-10 col-span-full">Aucun projet disponible pour le moment.</p>
                )}
            </div>
        </div>
    )
}

export default LatestProjects
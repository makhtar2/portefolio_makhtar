import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  it("propose l'aperçu en modale pour un projet de catégorie design (lien canva.link)", () => {
    render(
      <ProjectCard
        project={{
          name: 'Design Institutionnel',
          description: 'Charte graphique',
          category: 'design',
          site_url: 'https://canva.link/dzjavtf39cmqd4h',
          tech_stack: ['Canva'],
        }}
      />
    )

    expect(screen.getByRole('button', { name: 'Voir le design' })).toBeInTheDocument()
  })

  it('propose un lien externe "Voir le projet" pour un projet web live', () => {
    render(
      <ProjectCard
        project={{
          name: 'Sherifa Parfumerie',
          description: 'Boutique de parfums',
          category: 'web',
          site_url: 'https://www.sherifaparfumerie.com/',
          tech_stack: ['Next.js'],
        }}
      />
    )

    const link = screen.getByRole('link', { name: /Voir le projet Sherifa Parfumerie/i })
    expect(link).toHaveAttribute('href', 'https://www.sherifaparfumerie.com/')
  })

  it("affiche 'Projet privé' quand il n'y a pas d'URL exploitable", () => {
    render(
      <ProjectCard
        project={{
          name: 'ImmoAgence',
          description: 'Gestion immobilière',
          category: 'web',
          site_url: '#',
          tech_stack: ['PHP'],
        }}
      />
    )

    expect(screen.getByText('Projet privé')).toBeInTheDocument()
  })
})

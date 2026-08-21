import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectGrid from './ProjectGrid'

const projects = [
  { id: '1', name: 'Sherifa Parfumerie', description: 'Boutique de parfums de luxe', category: 'web', site_url: 'https://sherifa.example.com', tech_stack: ['Next.js'] },
  { id: '2', name: 'Design Institutionnel', description: 'Charte graphique UCAK', category: 'design', site_url: 'https://canva.link/abc', tech_stack: ['Canva'] },
  { id: '3', name: 'GymScore', description: 'Suivi de performance sportive', category: 'web', site_url: 'https://gymscore.example.com', tech_stack: ['React'] },
]

describe('ProjectGrid', () => {
  it('affiche tous les projets par défaut', () => {
    render(<ProjectGrid projects={projects} />)
    expect(screen.getByText('Sherifa Parfumerie')).toBeInTheDocument()
    expect(screen.getByText('Design Institutionnel')).toBeInTheDocument()
    expect(screen.getByText('GymScore')).toBeInTheDocument()
    expect(screen.getByText('3 projets')).toBeInTheDocument()
  })

  it('filtre par catégorie', async () => {
    const user = userEvent.setup()
    render(<ProjectGrid projects={projects} />)

    await user.click(screen.getByRole('button', { name: 'Design' }))

    expect(screen.getByText('Design Institutionnel')).toBeInTheDocument()
    expect(screen.queryByText('Sherifa Parfumerie')).not.toBeInTheDocument()
    expect(screen.getByText('1 projet')).toBeInTheDocument()
  })

  it('filtre par recherche texte sur le nom et la description', async () => {
    const user = userEvent.setup()
    render(<ProjectGrid projects={projects} />)

    await user.type(screen.getByPlaceholderText('Rechercher...'), 'sportive')

    expect(screen.getByText('GymScore')).toBeInTheDocument()
    expect(screen.queryByText('Sherifa Parfumerie')).not.toBeInTheDocument()
    expect(screen.queryByText('Design Institutionnel')).not.toBeInTheDocument()
  })

  it("affiche un état vide quand aucun projet ne correspond", async () => {
    const user = userEvent.setup()
    render(<ProjectGrid projects={projects} />)

    await user.type(screen.getByPlaceholderText('Rechercher...'), 'inexistant')

    expect(screen.getByText('Aucun projet trouvé.')).toBeInTheDocument()
  })
})

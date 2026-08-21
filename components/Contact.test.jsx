import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import toast from 'react-hot-toast'
import Contact from './Contact'

vi.mock('react-hot-toast', () => ({
  default: { success: vi.fn(), error: vi.fn() },
}))

describe('Contact (formulaire rapide de la home)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("envoie l'email saisi à /api/contact et affiche un succès", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)
    const user = userEvent.setup()

    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Votre adresse e-mail'), 'visiteur@example.com')
    await user.click(screen.getByRole('button', { name: /Envoyer/i }))

    expect(fetchMock).toHaveBeenCalledWith('/api/contact', expect.objectContaining({ method: 'POST' }))
    const body = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(body.email).toBe('visiteur@example.com')
    expect(toast.success).toHaveBeenCalled()
  })

  it("affiche une erreur si l'envoi échoue au lieu d'un faux succès", async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))
    const user = userEvent.setup()

    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Votre adresse e-mail'), 'visiteur@example.com')
    await user.click(screen.getByRole('button', { name: /Envoyer/i }))

    expect(toast.error).toHaveBeenCalled()
    expect(toast.success).not.toHaveBeenCalled()
  })
})

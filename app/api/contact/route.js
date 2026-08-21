import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail } from '@/lib/email'

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(200).optional().default('Visiteur du site'),
  email: z.email(),
  subject: z.string().trim().min(1).max(200).optional().default('Nouveau contact depuis le portfolio'),
  message: z.string().trim().min(1).max(5000).optional().default('(Formulaire rapide — aucun message fourni)'),
})

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const parsed = ContactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Champs invalides' }, { status: 400 })
  }

  const result = await sendContactEmail(parsed.data)
  if (!result.success) {
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}

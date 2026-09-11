import { validService } from '@/lib/contact-services'
import { NextRequest, NextResponse } from 'next/server'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@surveydrone.se'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Ogiltig förfrågan.' }, { status: 400 })
    }

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ ok: true })
    }

    const limits: Record<string, number> = { name: 120, company: 200, email: 254, service: 100, message: 5000 }
    if (Object.entries(limits).some(([key, limit]) => body[key] != null && (typeof body[key] !== 'string' || body[key].length > limit))) {
      return NextResponse.json({ error: 'Kontrollera formulärets uppgifter.' }, { status: 400 })
    }
    const name = (body.name ?? '').trim()
    const company = (body.company ?? '').trim()
    const email = (body.email ?? '').trim()
    const service = body.service ?? ''
    const message = (body.message ?? '').trim()
    if (!validService(service)) {
      return NextResponse.json({ error: 'Välj en tjänst i formuläret.' }, { status: 400 })
    }

    // Basic validation
    if (!name || !company || !email) {
      return NextResponse.json(
        { error: 'Namn, företag och e-post krävs.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ogiltig e-postadress.' },
        { status: 400 }
      )
    }

    // Send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'SurveyDrone <noreply@surveydrone.se>',
          to: [CONTACT_EMAIL],
          reply_to: email,
          subject: `Ny förfrågan: ${service || 'Allmänt'} — ${company}`,
          html: `
            <h2>Ny kontaktförfrågan från surveydrone.se</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px">
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #e2e8f0">Namn</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(name)}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #e2e8f0">Företag</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(company)}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #e2e8f0">E-post</td><td style="padding:8px;border-bottom:1px solid #e2e8f0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #e2e8f0">Tjänst</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(service || 'Ej valt')}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #e2e8f0">Meddelande</td><td style="padding:8px;border-bottom:1px solid #e2e8f0">${escapeHtml(message || 'Inget meddelande')}</td></tr>
            </table>
          `,
        }),
      })

      if (!res.ok) {
        console.error('Contact delivery rejected', { status: res.status })
        return NextResponse.json(
          { error: 'Kunde inte skicka meddelandet. Försök igen.' },
          { status: 500 }
        )
      }
    } else {
      return NextResponse.json({ error: 'Formuläret är tillfälligt otillgängligt. Kontakta info@surveydrone.se.' }, { status: 503 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Serverfel. Försök igen.' },
      { status: 500 }
    )
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

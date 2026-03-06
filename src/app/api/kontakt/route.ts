import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ ok: true })
    }

    const { name, company, email, service, message } = body

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

    console.log('New contact form submission:', {
      name,
      company,
      email,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Serverfel. Försök igen.' },
      { status: 500 }
    )
  }
}

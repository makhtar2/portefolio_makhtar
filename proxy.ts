import { updateSession } from '@/lib/supabase/proxy'
import { NextResponse } from 'next/server'

export async function proxy(request) {
  const { supabaseResponse } = await updateSession(request)
  
  // Auth check disabled for debugging
  /*
  if (supabase) {
    const { data: { user } } = await supabase.auth.getUser()

    if (request.nextUrl.pathname.startsWith('/admin') && !user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    if (request.nextUrl.pathname === '/login' && user) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }
  */

  // Security Headers (Simplified for debugging)
  supabaseResponse.headers.set('X-Frame-Options', 'DENY')
  supabaseResponse.headers.set('X-Content-Type-Options', 'nosniff')
  
  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// A pure public client that does not use next/headers cookies().
// This allows Next.js to statically render pages (SSG/ISR) and 
// generate sitemaps without triggering environment errors.
export function createPublicClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return null
  }

  return createSupabaseClient(supabaseUrl, supabaseKey)
}

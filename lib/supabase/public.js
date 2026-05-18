import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// A pure public client that does not use next/headers cookies().
// This allows Next.js to statically render pages (SSG/ISR) and 
// generate sitemaps without triggering environment errors.
export function createPublicClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('CRITICAL: Supabase keys are missing!', { 
      hasUrl: !!supabaseUrl, 
      hasKey: !!supabaseKey 
    })
    return null
  }

  return createSupabaseClient(supabaseUrl, supabaseKey)
}

export async function getProjects() {
  const supabase = createPublicClient()
  if (!supabase) return []
  
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  return data
}

export async function getLinkedInPosts() {
  const supabase = createPublicClient()
  if (!supabase) return []
  
  const { data, error } = await supabase
    .from('linkedin_posts')
    .select('*')
    .order('published_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching linkedin posts:', error)
    return []
  }
  return data
}

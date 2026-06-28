import { createClient } from '@supabase/supabase-js'

/**
 * Server-only Supabase client using the SERVICE-ROLE key.
 *
 * This key bypasses Row Level Security, so it must NEVER be imported from /src
 * or shipped to the browser. It lives only in the /server process, which reads
 * it from a non-`VITE_` environment variable.
 */
const url = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceRoleKey) {
  throw new Error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. These are server-only ' +
      'secrets — set them in .env (never prefixed with VITE_).',
  )
}

export const supabaseAdmin = createClient(url, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

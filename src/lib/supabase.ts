import { createClient } from '@supabase/supabase-js'
import { env } from './env'

/**
 * Browser Supabase client. Uses the public anon key only — all access is
 * constrained by Row Level Security policies defined in the database.
 *
 * Anything that needs the service-role key (admin writes, Plaid token
 * exchange, webhooks) must go through the /server layer or a Supabase Edge
 * Function instead. Never import a service-role client into this file.
 */
export const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})

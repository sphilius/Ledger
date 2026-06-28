/**
 * Centralised, validated access to client-side environment variables.
 *
 * Only `VITE_`-prefixed variables exist here — Vite refuses to expose anything
 * else to the browser, which is exactly what we want. Server-only secrets
 * (service-role key, Plaid secret) live in the /server layer, never here.
 */

function required(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name]
  if (!value) {
    throw new Error(
      `Missing required environment variable "${name}". ` +
        `Copy .env.example to .env and fill it in.`,
    )
  }
  return value
}

export const env = {
  supabaseUrl: required('VITE_SUPABASE_URL'),
  supabaseAnonKey: required('VITE_SUPABASE_ANON_KEY'),
} as const

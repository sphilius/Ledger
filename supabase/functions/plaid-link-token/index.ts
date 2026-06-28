// Supabase Edge Function (Deno runtime) — an alternative to the /server layer
// for privileged work. Plaid secrets are read from Supabase-managed secrets and
// never reach the browser.
//
//   Deploy:  supabase functions deploy plaid-link-token
//   Secrets: supabase secrets set PLAID_CLIENT_ID=... PLAID_SECRET=...
//
// NOTE: This file targets the Deno runtime, not Node — it is intentionally
// excluded from the Node tsconfig, so editor type errors here are expected.
import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const plaidClientId = Deno.env.get('PLAID_CLIENT_ID')
  const plaidSecret = Deno.env.get('PLAID_SECRET')

  if (!plaidClientId || !plaidSecret) {
    return new Response(JSON.stringify({ error: 'server_misconfigured' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  // TODO: call Plaid /link/token/create and return { link_token }.
  return new Response(JSON.stringify({ error: 'not_implemented' }), {
    status: 501,
    headers: { 'content-type': 'application/json' },
  })
})

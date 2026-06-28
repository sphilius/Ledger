import { Router } from 'express'

/**
 * Plaid endpoints. All Plaid network calls and the PLAID_SECRET stay on the
 * server — the browser only ever receives short-lived link tokens and never
 * sees the secret or the long-lived access_token.
 *
 * These are placeholders; wire them to the Plaid Node SDK when ready.
 */
export const plaidRouter = Router()

// Create a Plaid Link token to initialise the client-side Link flow.
plaidRouter.post('/create-link-token', async (_req, res) => {
  // TODO: const client = new PlaidApi(...); call linkTokenCreate using
  //       process.env.PLAID_CLIENT_ID / process.env.PLAID_SECRET.
  res.status(501).json({ error: 'not_implemented' })
})

// Exchange a public_token for an access_token, then persist it server-side
// (e.g. via supabaseAdmin) so the access_token never reaches the browser.
plaidRouter.post('/exchange-public-token', async (_req, res) => {
  // TODO: itemPublicTokenExchange, then store the access_token with supabaseAdmin.
  res.status(501).json({ error: 'not_implemented' })
})

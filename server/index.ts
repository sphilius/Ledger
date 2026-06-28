import 'dotenv/config'
import express from 'express'
import { plaidRouter } from './routes/plaid'

/**
 * The /server layer is a trusted backend. It is the ONLY place (besides
 * Supabase Edge Functions) that may touch service-role and Plaid secrets.
 * It is never bundled into the browser build — Vite only compiles /src.
 */
const app = express()
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api/plaid', plaidRouter)

const port = Number(process.env.PORT ?? 8787)
app.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`)
})

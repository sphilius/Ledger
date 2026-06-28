/**
 * Thin client → /server fetch helper.
 *
 * Every privileged operation (Plaid, Supabase service-role) lives behind the
 * `/api` boundary, served by the /server layer (proxied in dev via
 * vite.config.ts). The browser only ever sees this public boundary — it never
 * holds a secret key.
 */
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`/api${path}`, {
    ...init,
    headers: {
      'content-type': 'application/json',
      ...init?.headers,
    },
  })

  if (!res.ok) {
    throw new Error(`API request to ${path} failed with status ${res.status}`)
  }

  return res.json() as Promise<T>
}

import { NavLink, Outlet } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'

const NAV_LINKS = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/settings', label: 'Settings' },
]

/**
 * App shell: a persistent sidebar with navigation plus a theme toggle, and an
 * <Outlet /> where the active route renders.
 */
export function Layout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto flex min-h-screen max-w-6xl">
        <aside className="w-56 shrink-0 border-r border-neutral-200 p-4 dark:border-neutral-800">
          <div className="mb-8 flex items-center gap-2 px-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-emerald-500 text-sm font-bold text-emerald-950">
              L
            </span>
            <span className="text-lg font-semibold tracking-tight">Ledger</span>
          </div>

          <nav className="space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                      : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="mb-8 flex items-center justify-end">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {theme === 'dark' ? '☀ Light' : '☾ Dark'}
            </button>
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  )
}

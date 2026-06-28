const SECTIONS = [
  { title: 'Profile', body: 'Name, email, and password.' },
  { title: 'Connected institutions', body: 'Link or remove banks via Plaid.' },
  { title: 'Categories & budgets', body: 'Customise your spending categories.' },
  { title: 'Preferences', body: 'Currency, theme, and notifications.' },
]

export function Settings() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        Manage your profile, connected institutions, and preferences.
      </p>

      <div className="mt-6 divide-y divide-neutral-200 overflow-hidden rounded-lg border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {SECTIONS.map((section) => (
          <div key={section.title} className="p-4">
            <div className="text-sm font-medium">{section.title}</div>
            <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {section.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

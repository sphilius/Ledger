const SUMMARY_CARDS = [
  { label: 'Net Worth', hint: 'Across all accounts' },
  { label: 'This Month', hint: 'Spent vs. budgeted' },
  { label: 'Upcoming', hint: 'Scheduled & recurring' },
]

export function Dashboard() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
        Your accounts, budgets, and cash flow will appear here.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SUMMARY_CARDS.map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
          >
            <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {card.label}
            </div>
            <div className="mt-2 text-2xl font-semibold tabular-nums">—</div>
            <div className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
              {card.hint}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
        Connect an account to start tracking transactions.
      </div>
    </section>
  )
}

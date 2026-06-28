/**
 * Core domain types for the Ledger app.
 *
 * These mirror the planned Postgres schema. Once the database exists you can
 * generate exact row types with:
 *   supabase gen types typescript --project-id <id> > src/types/database.ts
 * and have these interfaces extend the generated ones.
 */

export type AccountType =
  | 'checking'
  | 'savings'
  | 'credit'
  | 'investment'
  | 'loan'
  | 'cash'

export interface Account {
  id: string
  userId: string
  name: string
  type: AccountType
  /** Stored in minor units (cents) to avoid floating-point rounding errors. */
  balance: number
  currency: string
  institution?: string
  createdAt: string
}

export interface Category {
  id: string
  userId: string
  name: string
  /** Monthly budgeted amount in minor units. */
  budgeted: number
  parentId?: string | null
}

export interface Transaction {
  id: string
  userId: string
  accountId: string
  categoryId?: string | null
  /** Negative for outflow, positive for inflow, in minor units. */
  amount: number
  currency: string
  payee: string
  notes?: string
  date: string
  pending: boolean
}

export interface Budget {
  id: string
  userId: string
  /** Budget period, e.g. "2026-06". */
  month: string
  categoryId: string
  amount: number
}

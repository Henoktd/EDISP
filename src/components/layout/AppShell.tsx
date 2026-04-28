import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function AppShell() {
  return (
    <div className="min-h-screen bg-gov-surface text-gov-ink">
      <Header />
      <main className="min-w-0">
        <Outlet />
      </main>
    </div>
  )
}

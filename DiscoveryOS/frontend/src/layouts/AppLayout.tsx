import { Outlet } from 'react-router-dom'

/**
 * Root App Layout
 * Serves as the main layout wrapper for all pages
 * All pages are rendered inside the Outlet component
 */
export default function AppLayout() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-950">
      {/* Header can be added here */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Footer can be added here */}
    </div>
  )
}

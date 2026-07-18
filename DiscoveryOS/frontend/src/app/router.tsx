import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import HomePage from '../pages/HomePage'

/**
 * React Router configuration
 * Defines all routes for the application
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Add more routes here as features are developed
      // {
      //   path: 'workspace',
      //   element: <WorkspacePage />,
      // },
      // {
      //   path: '*',
      //   element: <NotFoundPage />,
      // },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

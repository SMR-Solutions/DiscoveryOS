/**
 * API service layer
 * Add API endpoints and service functions here
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`)
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  },

  post: async (endpoint: string, data: unknown) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  },
}

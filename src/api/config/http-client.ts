/**
 * HTTP Client Configuration
 * Centralized setup for all API requests with interceptors for auth, logging, and error handling
 */
import { API_CONFIG } from './constants'

const API_BASE_URL = API_CONFIG.BASE_URL
const API_TIMEOUT = API_CONFIG.TIMEOUT

/**
 * Create a configured fetch instance with interceptors
 */
export const createHttpClient = () => {
  return {
    /**
     * Make a GET request
     */
    get: async <T>(url: string, options?: RequestInit): Promise<T> => {
      return fetchWithInterceptors(url, { ...options, method: 'GET' })
    },

    /**
     * Make a POST request
     */
    post: async <T>(
      url: string,
      data?: unknown,
      options?: RequestInit,
    ): Promise<T> => {
      return fetchWithInterceptors(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      })
    },

    /**
     * Make a PUT request
     */
    put: async <T>(
      url: string,
      data?: unknown,
      options?: RequestInit,
    ): Promise<T> => {
      return fetchWithInterceptors(url, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      })
    },

    /**
     * Make a DELETE request
     */
    delete: async <T>(url: string, options?: RequestInit): Promise<T> => {
      return fetchWithInterceptors(url, { ...options, method: 'DELETE' })
    },
  }
}

/**
 * Fetch with request/response interceptors
 */
async function fetchWithInterceptors<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT)

  try {
    // Request interceptor
    const headers = {
      ...getDefaultHeaders(),
      ...options.headers,
    }

    if (options.body && typeof options.body === 'string') {
      // Already stringified
    } else if (options.body) {
      options.body = JSON.stringify(options.body)
    }

    const response = await fetch(fullUrl, {
      ...options,
      headers,
      signal: controller.signal,
    })

    // Response interceptor
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: 'Network error' }))
      throw new Error(
        `API Error: ${response.status} - ${error.message || 'Unknown error'}`,
      )
    }

    return (await response.json()) as T
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timeout')
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}

/**
 * Get default request headers (add auth tokens, etc.)
 */
function getDefaultHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  // Add auth token if available
  const token = localStorage.getItem('auth_token')
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return headers
}

// Export configured client
export const httpClient = createHttpClient()

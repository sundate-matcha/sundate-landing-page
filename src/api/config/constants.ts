/**
 * API Configuration Constants
 * Define base URLs, endpoints, and environment-specific configurations
 */

export const API_CONFIG = {
  // Primary API base URL
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',

  // Timeout for requests (ms)
  TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),

  // Environment
  env: import.meta.env.MODE,

  // Feature flags
  enableLogging: import.meta.env.VITE_API_DEBUG === 'true',
}

/**
 * API Endpoints - Organize by resource/feature
 */
export const ENDPOINTS = {
  // Auth endpoints
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/auth/register',
    refresh: '/auth/refresh',
  },

  // User endpoints
  users: {
    profile: '/users/profile',
    settings: '/users/settings',
    avatar: '/users/avatar',
  },

  // Example: Add more endpoints as needed
  // posts: {
  //   list: '/posts',
  //   create: '/posts',
  //   detail: (id: string) => `/posts/${id}`,
  //   update: (id: string) => `/posts/${id}`,
  //   delete: (id: string) => `/posts/${id}`,
  // },
}

/**
 * HTTP Status codes for error handling
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
}

/**
 * Logger utility for API calls (only in development)
 */
export const apiLogger = {
  log: (message: string, data?: unknown) => {
    if (API_CONFIG.enableLogging) {
      console.group(message)
      console.log(data)
      console.groupEnd()
    }
  },
}

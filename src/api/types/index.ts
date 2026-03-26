/**
 * API Type Definitions
 * Define TypeScript types for all API requests and responses
 */

// ============================================================================
// Auth Types
// ============================================================================

export interface LoginRequest {
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: User
}

// ============================================================================
// User Types
// ============================================================================

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface UserProfile extends User {
  bio?: string
  preferences?: UserPreferences
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  notifications: boolean
  language: string
}

// ============================================================================
// Generic API Response Types
// ============================================================================

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: ApiError
  timestamp: string
}

export interface ApiListResponse<T> {
  success: boolean
  data: T[]
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
  error?: ApiError
  timestamp: string
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
}

// ============================================================================
// Pagination
// ============================================================================

export interface PaginationParams {
  page?: number
  limit?: number
  sort?: string
  order?: 'asc' | 'desc'
}

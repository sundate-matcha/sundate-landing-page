/**
 * Auth API Endpoints
 * All authentication-related API calls
 */

import { httpClient } from '../config/http-client'
import { ENDPOINTS } from '../config/constants'
import { LoginRequest, AuthResponse } from '../types'

export const authAPI = {
  /**
   * Login with email and password
   */
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    return httpClient.post(ENDPOINTS.auth.login, credentials)
  },

  /**
   * Logout current user
   */
  logout: async (): Promise<void> => {
    return httpClient.post(ENDPOINTS.auth.logout)
  },

  /**
   * Register new user
   */
  register: async (data: {
    email: string
    password: string
    name: string
  }): Promise<AuthResponse> => {
    return httpClient.post(ENDPOINTS.auth.register, data)
  },

  /**
   * Refresh access token using refresh token
   */
  refresh: async (): Promise<AuthResponse> => {
    return httpClient.post(ENDPOINTS.auth.refresh)
  },
}

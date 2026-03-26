/**
 * Users API Endpoints
 * All user-related API calls
 */

import { httpClient } from '../config/http-client'
import { ENDPOINTS } from '../config/constants'
import { User, UserProfile } from '../types'

export const usersAPI = {
  /**
   * Get current user profile
   */
  getProfile: async (): Promise<UserProfile> => {
    return httpClient.get(ENDPOINTS.users.profile)
  },

  /**
   * Update user profile
   */
  updateProfile: async (data: Partial<UserProfile>): Promise<UserProfile> => {
    return httpClient.put(ENDPOINTS.users.profile, data)
  },

  /**
   * Get user settings
   */
  getSettings: async (): Promise<Record<string, unknown>> => {
    return httpClient.get(ENDPOINTS.users.settings)
  },

  /**
   * Update user settings
   */
  updateSettings: async (
    settings: Record<string, unknown>,
  ): Promise<Record<string, unknown>> => {
    return httpClient.put(ENDPOINTS.users.settings, settings)
  },

  /**
   * Upload user avatar
   */
  uploadAvatar: async (file: File): Promise<User> => {
    const formData = new FormData()
    formData.append('avatar', file)
    return httpClient.post(ENDPOINTS.users.avatar, formData)
  },
}

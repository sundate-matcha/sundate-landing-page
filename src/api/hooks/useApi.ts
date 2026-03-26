/**
 * useApi Hook
 * Custom React hook for making API calls with loading/error states
 */

import { useState, useCallback } from 'react'
import { httpClient } from '../config/http-client'
// import { ApiResponse } from '../types'

interface UseApiState<T> {
  data: T | null
  error: Error | null
  isLoading: boolean
}

export function useApi<T = unknown>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    error: null,
    isLoading: false,
  })

  const execute = useCallback(
    async (
      method: 'get' | 'post' | 'put' | 'delete',
      url: string,
      payload?: unknown,
    ) => {
      setState({ data: null, error: null, isLoading: true })

      try {
        const response = await (httpClient[method] as any)(url, payload)
        setState({ data: response as T, error: null, isLoading: false })
        return response as T
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error('Unknown error occurred')
        setState({ data: null, error, isLoading: false })
        throw error
      }
    },
    [],
  )

  const get = useCallback((url: string) => execute('get', url), [execute])
  const post = useCallback(
    (url: string, payload: unknown) => execute('post', url, payload),
    [execute],
  )
  const put = useCallback(
    (url: string, payload: unknown) => execute('put', url, payload),
    [execute],
  )
  const del = useCallback((url: string) => execute('delete', url), [execute])

  return {
    ...state,
    get,
    post,
    put,
    delete: del,
  }
}

/**
 * Example usage in a React component:
 *
 * function MyComponent() {
 *   const { data, isLoading, error, get } = useApi<User>();
 *
 *   useEffect(() => {
 *     get('/users/profile');
 *   }, [get]);
 *
 *   if (isLoading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 *   if (!data) return null;
 *
 *   return <div>{data.name}</div>;
 * }
 */

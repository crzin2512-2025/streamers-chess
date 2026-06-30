import { useCallback, useEffect, useState } from 'react'
import { fetchStreamers } from '../services/streamersService'
import type { Streamer } from '../types/streamer'

interface UseStreamersReturn {
  streamers: Streamer[]
  isLoading: boolean
  error: string | null
  refetch: () => void
}

export function useStreamers(): UseStreamersReturn {
  const [streamers, setStreamers] = useState<Streamer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [fetchKey, setFetchKey] = useState(0)

  const refetch = useCallback(() => {
    setFetchKey((key) => key + 1)
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setIsLoading(true)
      setError(null)

      try {
        const data = await fetchStreamers(controller.signal)
        setStreamers(data.streamers ?? [])
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return
        const message =
          err instanceof Error ? err.message : 'Erro ao carregar streamers'
        setError(message)
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    load()

    return () => controller.abort()
  }, [fetchKey])

  return { streamers, isLoading, error, refetch }
}

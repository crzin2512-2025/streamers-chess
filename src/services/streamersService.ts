import { STREAMERS_API_URL } from '../config/constants'
import type { StreamersResponse } from '../types/streamer'

export async function fetchStreamers(
  signal?: AbortSignal,
): Promise<StreamersResponse> {
  const response = await fetch(STREAMERS_API_URL, { signal })

  if (!response.ok) {
    throw new Error(`Falha ao carregar streamers (${response.status})`)
  }

  return response.json() as Promise<StreamersResponse>
}

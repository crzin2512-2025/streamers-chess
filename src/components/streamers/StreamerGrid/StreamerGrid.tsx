import type { Streamer } from '../../../types/streamer'
import { StreamerCard } from '../StreamerCard/StreamerCard'
import './StreamerGrid.css'

interface StreamerGridProps {
  streamers: Streamer[]
}

export function StreamerGrid({ streamers }: StreamerGridProps) {
  return (
    <div className="streamer-grid">
      {streamers.map((streamer) => (
        <StreamerCard key={streamer.username} streamer={streamer} />
      ))}
    </div>
  )
}

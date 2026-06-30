import { useState } from 'react'
import type { Streamer } from '../../../types/streamer'
import { LiveBadge } from '../LiveBadge/LiveBadge'
import './StreamerCard.css'

interface StreamerCardProps {
  streamer: Streamer
}

function getInitials(username: string): string {
  return username.slice(0, 2).toUpperCase()
}

export function StreamerCard({ streamer }: StreamerCardProps) {
  const [avatarError, setAvatarError] = useState(false)
  const isOffline = !streamer.is_live

  return (
    <article
      className={`streamer-card${isOffline ? ' streamer-card--offline' : ''}`}
    >
      <div className="streamer-card__avatar-wrapper">
        {avatarError ? (
          <div className="streamer-card__avatar-fallback" aria-hidden="true">
            {getInitials(streamer.username)}
          </div>
        ) : (
          <img
            className="streamer-card__avatar"
            src={streamer.avatar}
            alt={`Avatar de ${streamer.username}`}
            width={56}
            height={56}
            onError={() => setAvatarError(true)}
          />
        )}
      </div>

      <div className="streamer-card__content">
        <div className="streamer-card__header">
          <h2 className="streamer-card__username">{streamer.username}</h2>
          {streamer.is_live && <LiveBadge />}
        </div>

        <a
          className="streamer-card__link"
          href={streamer.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Perfil no Chess.com
        </a>

        <a
          className="streamer-card__link"
          href={streamer.twitch_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Assistir live
        </a>
      </div>
    </article>
  )
}

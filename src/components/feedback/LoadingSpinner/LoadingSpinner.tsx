import './LoadingSpinner.css'

export function LoadingSpinner() {
  return (
    <div className="loading-spinner" role="status" aria-label="Carregando">
      <div className="loading-spinner__circle" />
      <p className="loading-spinner__text">Carregando streamers...</p>
    </div>
  )
}

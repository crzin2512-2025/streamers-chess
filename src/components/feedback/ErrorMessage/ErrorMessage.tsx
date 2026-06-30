import './ErrorMessage.css'

interface ErrorMessageProps {
  message: string
  onRetry: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="error-message" role="alert">
      <p className="error-message__text">{message}</p>
      <button type="button" className="error-message__button" onClick={onRetry}>
        Tentar novamente
      </button>
    </div>
  )
}

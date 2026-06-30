import './Pagination.css'

interface PaginationProps {
  page: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  onPrev: () => void
  onNext: () => void
}

export function Pagination({
  page,
  totalPages,
  totalItems,
  itemsPerPage,
  onPrev,
  onNext,
}: PaginationProps) {
  if (totalItems <= itemsPerPage) return null

  return (
    <nav className="pagination" aria-label="Paginação">
      <button
        type="button"
        className="pagination__button"
        onClick={onPrev}
        disabled={page <= 1}
      >
        Anterior
      </button>

      <span className="pagination__info">
        Página {page} de {totalPages}
      </span>

      <button
        type="button"
        className="pagination__button"
        onClick={onNext}
        disabled={page >= totalPages}
      >
        Próximo
      </button>
    </nav>
  )
}

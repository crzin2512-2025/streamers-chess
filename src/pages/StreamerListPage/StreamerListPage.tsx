import { Container } from '../../components/layout/Container/Container'
import { Header } from '../../components/layout/Header/Header'
import { EmptyState } from '../../components/feedback/EmptyState/EmptyState'
import { ErrorMessage } from '../../components/feedback/ErrorMessage/ErrorMessage'
import { LoadingSpinner } from '../../components/feedback/LoadingSpinner/LoadingSpinner'
import { StreamerGrid } from '../../components/streamers/StreamerGrid/StreamerGrid'
import { Pagination } from '../../components/ui/Pagination/Pagination'
import { ITEMS_PER_PAGE } from '../../config/constants'
import { usePagination } from '../../hooks/usePagination'
import { useStreamers } from '../../hooks/useStreamers'
import './StreamerListPage.css'

export function StreamerListPage() {
  const { streamers, isLoading, error, refetch } = useStreamers()
  const { paginatedItems, page, totalPages, nextPage, prevPage } =
    usePagination(streamers, ITEMS_PER_PAGE)

  return (
    <>
      <Header />
      <Container>
        {isLoading && <LoadingSpinner />}

        {!isLoading && error && (
          <ErrorMessage message={error} onRetry={refetch} />
        )}

        {!isLoading && !error && streamers.length === 0 && <EmptyState />}

        {!isLoading && !error && streamers.length > 0 && (
          <div className="streamer-list-page">
            <StreamerGrid streamers={paginatedItems} />
            <Pagination
              page={page}
              totalPages={totalPages}
              totalItems={streamers.length}
              itemsPerPage={ITEMS_PER_PAGE}
              onPrev={prevPage}
              onNext={nextPage}
            />
          </div>
        )}
      </Container>
    </>
  )
}

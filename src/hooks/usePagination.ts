import { useState } from 'react'
import { getPageSlice, getTotalPages } from '../utils/pagination'

interface UsePaginationReturn<T> {
  page: number
  totalPages: number
  paginatedItems: T[]
  setPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
}

export function usePagination<T>(
  items: T[],
  itemsPerPage: number,
): UsePaginationReturn<T> {
  const [page, setPage] = useState(1)
  const [prevItems, setPrevItems] = useState(items)

  if (items !== prevItems) {
    setPrevItems(items)
    setPage(1)
  }

  const totalPages = getTotalPages(items.length, itemsPerPage)
  const paginatedItems = getPageSlice(items, page, itemsPerPage)

  const nextPage = () => {
    setPage((current) => Math.min(current + 1, totalPages))
  }

  const prevPage = () => {
    setPage((current) => Math.max(current - 1, 1))
  }

  return { page, totalPages, paginatedItems, setPage, nextPage, prevPage }
}

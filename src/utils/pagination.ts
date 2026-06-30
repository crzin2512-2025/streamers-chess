export function getTotalPages(totalItems: number, itemsPerPage: number): number {
  if (totalItems === 0 || itemsPerPage <= 0) return 0
  return Math.ceil(totalItems / itemsPerPage)
}

export function getPageSlice<T>(
  items: T[],
  page: number,
  itemsPerPage: number,
): T[] {
  const start = (page - 1) * itemsPerPage
  return items.slice(start, start + itemsPerPage)
}

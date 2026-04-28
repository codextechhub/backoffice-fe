export interface PaginatedResponse {
  success: boolean
  message: string
  pagination: Pagination
}

export interface Pagination {
  currentPage: number
  pageSize: number
  totalItems: number
  totalPages: number
  next?: string
  previous?: string
}
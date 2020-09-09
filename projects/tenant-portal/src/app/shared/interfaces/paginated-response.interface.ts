export interface PaginatedResponse<R> {
  count: number;
  next: string;
  pageNumber: number;
  previous: string;
  results: R[];
}

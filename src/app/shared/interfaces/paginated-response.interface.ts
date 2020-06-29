export interface PaginatedResponse<R> {
  count: number;
  next: string;
  previous: string;
  results: R[];
}

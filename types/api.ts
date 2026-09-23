import { PaginationMeta } from "./pagination";

export interface APIResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export interface PaginatedAPIResponse<T> {
  status: boolean;
  message: string;
  data: T;
  pagination: PaginationMeta;
}

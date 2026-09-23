import { Category } from "./category";
import { ProductGallery } from "./productGallery";
import { SEO } from "./seo";
import { PaginationMeta } from "./pagination";

export type { Category } from "./category";
export type { ProductGallery } from "./productGallery";
export type { SEO } from "./seo";
export type { PaginationMeta } from "./pagination";

export interface Product {
  id: number;
  name: string;
  slug: string;
  category_id?: number;
  category?: Category | string;
  description: string;
  image: string;
  price?: number;
  dimension?: string;
  weight?: number;
  stock?: number;
  is_active?: boolean;
  is_featured?: boolean;
  galleries?: ProductGallery[];
  gallery?: string[];
  seo?: SEO;
}

export interface PaginatedProductsResponse {
  status: boolean;
  message: string;
  data: Product[];
  pagination: PaginationMeta;
}

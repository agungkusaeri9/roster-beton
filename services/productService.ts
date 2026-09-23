import apiClient from "@/lib/axios";
import { PaginatedProductsResponse, Product, APIResponse } from "@/types";

export interface FetchProductsParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

/**
 * Fetch list of products with pagination, category filter, and search
 */
export async function fetchProducts({
  page = 1,
  limit = 10,
  category = "",
  search = "",
}: FetchProductsParams = {}): Promise<PaginatedProductsResponse> {
  const params: Record<string, string | number> = {
    page,
    limit,
  };

  if (category && category !== "Semua") {
    params.category = category;
  }

  if (search) {
    params.search = search;
  }

  const response = await apiClient.get<PaginatedProductsResponse>("/products", {
    params,
  });

  return response.data;
}

/**
 * Fetch single product detail by slug with full relations and SEO
 */
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await apiClient.get<APIResponse<Product>>(`/products/${slug}`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`Error fetching product by slug ${slug}:`, error);
    return null;
  }
}

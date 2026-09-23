import apiClient from "@/lib/axios";
import { formatImageUrl } from "@/lib/imageUtils";
import { PaginatedProductsResponse, Product, APIResponse } from "@/types";

export interface FetchProductsParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

function normalizeProduct(product: Product): Product {
  return {
    ...product,
    image: formatImageUrl(product.image),
    gallery: product.gallery?.map(formatImageUrl),
    galleries: product.galleries?.map((g) => ({
      ...g,
      image_url: formatImageUrl(g.image_url),
    })),
  };
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

  if (response.data && response.data.data) {
    response.data.data = response.data.data.map(normalizeProduct);
  }

  return response.data;
}

/**
 * Fetch single product detail by slug with full relations and SEO
 */
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await apiClient.get<APIResponse<Product>>(`/products/${slug}`);
    const product = response.data?.data || null;
    return product ? normalizeProduct(product) : null;
  } catch (error) {
    console.error(`Error fetching product by slug ${slug}:`, error);
    return null;
  }
}

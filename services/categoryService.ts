import apiClient from "@/lib/axios";
import { Category, APIResponse } from "@/types";

/**
 * Fetch all categories from backend API
 */
export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await apiClient.get<APIResponse<Category[]>>("/categories");
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

/**
 * Fetch category detail by slug
 */
export async function fetchCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await apiClient.get<APIResponse<Category>>(`/categories/${slug}`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`Error fetching category by slug ${slug}:`, error);
    return null;
  }
}

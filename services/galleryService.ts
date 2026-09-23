import apiClient from "@/lib/axios";
import { formatImageUrl } from "@/lib/imageUtils";
import { GalleryItem, APIResponse } from "@/types";

/**
 * Fetch list of galleries with optional category filter
 */
export async function fetchGalleries(category: string = ""): Promise<GalleryItem[]> {
  try {
    const params: Record<string, string> = {};
    if (category && category !== "Semua") {
      params.category = category;
    }

    const response = await apiClient.get<APIResponse<GalleryItem[]>>("/galleries", {
      params,
    });

    const items = response.data?.data || [];
    return items.map((item) => ({
      ...item,
      src: formatImageUrl(item.src),
    }));
  } catch (error) {
    console.error("Error fetching galleries from backend:", error);
    return [];
  }
}

/**
 * Helper to get the backend base URL without trailing '/api'
 */
export function getBackendBaseUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
  return apiUrl.replace(/\/api\/?$/, "");
}

/**
 * Normalizes and formats product/gallery image URLs
 * - Handles relative paths (/uploads/..., /images/...)
 * - Replaces localhost:8080 with the actual backend host from NEXT_PUBLIC_API_URL
 */
export function formatImageUrl(url: string | undefined | null): string {
  if (!url) return "/images/placeholder.jpg";

  // If already relative to frontend public folder (e.g. /images/products/...)
  if (url.startsWith("/images/")) {
    return url;
  }

  const backendBase = getBackendBaseUrl();

  // If contains localhost or 127.0.0.1 (from local database seed)
  if (url.includes("localhost:8080") || url.includes("127.0.0.1:8080")) {
    return url.replace(/https?:\/\/(localhost|127\.0\.0\.1):8080/, backendBase);
  }

  // If relative path like /uploads/products/...
  if (url.startsWith("/uploads/")) {
    return `${backendBase}${url}`;
  }

  return url;
}

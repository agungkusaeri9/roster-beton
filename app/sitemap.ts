import { MetadataRoute } from "next";
import { fetchProducts } from "@/services/productService";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rosterbetonpurwakarta.com";

  // Static core routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic product detail routes
  try {
    const productsRes = await fetchProducts({ limit: 100 });
    if (productsRes && productsRes.data) {
      const productRoutes: MetadataRoute.Sitemap = productsRes.data.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      }));
      return [...routes, ...productRoutes];
    }
  } catch (error) {
    console.error("Error generating dynamic sitemap for products:", error);
  }

  return routes;
}

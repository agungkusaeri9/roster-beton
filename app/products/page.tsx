import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProdukClient from "@/components/ProdukClient";
import { Metadata } from "next";
import { fetchProducts } from "@/services/productService";
import { fetchCategories } from "@/services/categoryService";
import { PaginatedProductsResponse, Category } from "@/types";

export const metadata: Metadata = {
  title: "Koleksi Produk Roster Beton Berkualitas & Terlengkap | CV Roster Purwakarta",
  description:
    "Jual berbagai motif roster beton minimalis, klasik, floral, dan geometri berkualitas tinggi langsung dari pabrik CV Roster Purwakarta. Hubungi kami untuk harga terbaik!",
  keywords:
    "roster beton, roster purwakarta, pabrik roster beton, harga roster beton, roster minimalis, roster klasik, roster beton plered",
  alternates: {
    canonical: "https://rosterbetonpurwakarta.com/products",
  },
  openGraph: {
    title: "Koleksi Produk Roster Beton Berkualitas | CV Roster Purwakarta",
    description:
      "Koleksi lengkap roster beton berkualitas tinggi di CV Roster Purwakarta. Berbagai motif dan ukuran presisi tersedia untuk konstruksi Anda.",
    url: "https://rosterbetonpurwakarta.com/products",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://rosterbetonpurwakarta.com/images/products/galprod-17.jpeg",
        width: 1200,
        height: 630,
        alt: "Koleksi Produk Roster Beton Purwakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koleksi Produk Roster Beton Berkualitas | CV Roster Purwakarta",
    description:
      "Koleksi lengkap roster beton berkualitas tinggi di CV Roster Purwakarta. Berbagai motif dan ukuran presisi tersedia.",
  },
};

export default async function ProdukPage() {
  let initialData: PaginatedProductsResponse | null = null;
  let initialCategories: Category[] = [];

  try {
    const [productsRes, categoriesRes] = await Promise.all([
      fetchProducts({ page: 1, limit: 12 }),
      fetchCategories(),
    ]);
    initialData = productsRes;
    initialCategories = categoriesRes || [];
  } catch (error) {
    console.error("Error fetching initial data for SSR:", error);
  }

  // JSON-LD Structured Data for Google Rich Results (ItemList & BreadcrumbList)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://rosterbetonpurwakarta.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Produk",
            "item": "https://rosterbetonpurwakarta.com/products",
          },
        ],
      },
      {
        "@type": "ItemList",
        "name": "Katalog Produk Roster Beton",
        "description": "Daftar produk roster beton berkualitas tinggi dari CV Roster Purwakarta",
        "numberOfItems": initialData?.pagination?.total_data || 0,
        "itemListElement": initialData?.data?.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": product.name,
          "url": `https://rosterbetonpurwakarta.com/products/${product.slug}`,
          "image": product.image,
        })) || [],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <ProdukClient initialData={initialData} initialCategories={initialCategories} />
      </main>
      <Footer />
    </div>
  );
}

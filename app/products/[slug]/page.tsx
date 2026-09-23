import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailClient from "@/components/ProductDetailClient";
import { Metadata } from "next";
import { fetchProductBySlug, fetchProducts } from "@/services/productService";
import { notFound } from "next/navigation";
import { Product } from "@/types";

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | CV Roster Purwakarta",
      description: "Halaman produk roster beton tidak ditemukan.",
    };
  }

  const categoryName =
    typeof product.category === "object"
      ? product.category?.name
      : product.category || "Roster Beton";

  const metaTitle =
    product.seo?.meta_title || `${product.name} | CV Roster Purwakarta`;
  const metaDescription =
    product.seo?.meta_description ||
    product.description ||
    `Jual ${product.name} kualitas terbaik langsung dari pabrik CV Roster Purwakarta. Hubungi kami untuk penawaran harga terbaik.`;
  const metaKeywords =
    product.seo?.meta_keywords ||
    `${product.name}, roster beton, roster ${categoryName}, roster purwakarta, harga roster beton`;
  const canonicalUrl =
    product.seo?.canonical_url || `https://rosterbetonpurwakarta.com/products/${slug}`;
  const ogImage = product.seo?.og_image || product.image;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: product.seo?.og_title || metaTitle,
      description: product.seo?.og_description || metaDescription,
      url: canonicalUrl,
      siteName: "CV Roster Purwakarta",
      locale: "id_ID",
      type: (product.seo?.og_type as "website" | "article") || "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo?.og_title || metaTitle,
      description: product.seo?.og_description || metaDescription,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  try {
    const res = await fetchProducts({ limit: 50 });
    if (res && res.data) {
      return res.data.map((p) => ({
        slug: p.slug,
      }));
    }
  } catch (error) {
    console.error("Error generating static params for products:", error);
  }
  return [];
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryName =
    typeof product.category === "object"
      ? product.category?.name
      : product.category || "Roster Beton";

  const categorySlug =
    typeof product.category === "object"
      ? product.category?.slug
      : "";

  // Fetch related products from category or general
  let relatedProducts: Product[] = [];
  try {
    const res = await fetchProducts({
      limit: 6,
      category: categorySlug || categoryName,
    });
    if (res && res.data) {
      relatedProducts = res.data.filter((p) => p.id !== product.id).slice(0, 4);
    }
  } catch (error) {
    console.error("Error fetching related products for detail page:", error);
  }

  // Schema.org Structured Data (Product + BreadcrumbList)
  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

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
          {
            "@type": "ListItem",
            "position": 3,
            "name": categoryName,
            "item": `https://rosterbetonpurwakarta.com/products?category=${encodeURIComponent(
              categoryName
            )}`,
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": product.name,
            "item": `https://rosterbetonpurwakarta.com/products/${product.slug}`,
          },
        ],
      },
      {
        "@type": "Product",
        "name": product.name,
        "image": galleryImages,
        "description": product.description,
        "sku": `ROSTER-${product.id}`,
        "brand": {
          "@type": "Brand",
          "name": "CV Roster Purwakarta",
        },
        "offers": {
          "@type": "Offer",
          "url": `https://rosterbetonpurwakarta.com/products/${product.slug}`,
          "priceCurrency": "IDR",
          "price": product.price || 0,
          "availability":
            (product.stock ?? 1) > 0
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          "itemCondition": "https://schema.org/NewCondition",
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD Schema for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <ProductDetailClient
          product={product}
          relatedProducts={relatedProducts}
        />
      </main>
      <Footer />
    </div>
  );
}

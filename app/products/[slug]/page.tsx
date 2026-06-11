import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailClient from "@/components/ProductDetailClient";
import { Metadata } from "next";
import productsData from "@/data/products.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | CV Roster Purwakarta",
    };
  }

  return {
    title: `${product.name} | CV Roster Purwakarta`,
    description: product.description,
    keywords: "roster beton, purwakarta, roster, beton",
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://rosterbetonpurwakarta.com/products/${slug}`,
      siteName: "CV Roster Purwakarta",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ProductDetailClient slug={slug} />
      </main>
      <Footer />
    </div>
  );
}

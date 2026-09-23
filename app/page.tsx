import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProducts from "@/components/FeaturedProducts";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { fetchProducts } from "@/services/productService";
import { Product } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pabrik Roster Beton Plered Purwakarta Berkualitas & Terlengkap | CV Roster Purwakarta",
  description:
    "Produsen dan supplier roster beton minimalis, klasik, floral, dan geometri berkualitas tinggi langsung dari pabrik CV Roster Purwakarta. Melayani pengiriman ke seluruh Jawa Barat & Jabodetabek.",
  keywords:
    "roster beton, pabrik roster purwakarta, roster plered, jual roster beton, harga roster beton, roster minimalis",
  alternates: {
    canonical: "https://rosterbetonpurwakarta.com",
  },
  openGraph: {
    title: "Pabrik Roster Beton Plered Purwakarta | CV Roster Purwakarta",
    description:
      "Produsen dan supplier terpercaya aneka motif roster beton presisi berkualitas tinggi langsung dari workshop pabrik.",
    url: "https://rosterbetonpurwakarta.com",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default async function Home() {
  let products: Product[] = [];

  try {
    const res = await fetchProducts({ limit: 8 });
    if (res && res.data) {
      products = res.data;
    }
  } catch (error) {
    console.error("Error fetching featured products for home page:", error);
  }

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CV Roster Purwakarta",
    "image": "https://rosterbetonpurwakarta.com/images/products/galprod-17.jpeg",
    "url": "https://rosterbetonpurwakarta.com",
    "telephone": "+6281234567890",
    "priceRange": "IDR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Plered No. 45",
      "addressLocality": "Plered",
      "addressRegion": "Jawa Barat",
      "postalCode": "41161",
      "addressCountry": "ID",
    },
    "description":
      "Pabrik produsen dan distributor roster beton berkualitas di Plered, Purwakarta.",
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts products={products} />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/GalleryClient";
import { Metadata } from "next";
import { fetchGalleries } from "@/services/galleryService";
import { GalleryItem } from "@/types";

export const metadata: Metadata = {
  title: "Galeri Foto Produk & Proyek Roster Beton | CV Roster Purwakarta",
  description:
    "Lihat dokumentasi foto katalog motif roster beton, aktivitas workshop pabrik presisi, dan hasil pemasangan proyek CV Roster Purwakarta.",
  keywords:
    "galeri roster beton, foto roster purwakarta, proyek roster beton, pabrik roster plered, katalog foto roster",
  alternates: {
    canonical: "https://rosterbetonpurwakarta.com/gallery",
  },
  openGraph: {
    title: "Galeri Foto Produk & Proyek Roster Beton | CV Roster Purwakarta",
    description:
      "Koleksi dokumentasi visual produk roster beton dan proyek pemasangan terpercaya dari CV Roster Purwakarta.",
    url: "https://rosterbetonpurwakarta.com/gallery",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default async function GalleryPage() {
  let initialGalleries: GalleryItem[] = [];

  try {
    initialGalleries = await fetchGalleries();
  } catch (error) {
    console.error("Error fetching galleries for SSR:", error);
  }

  // Schema.org Structured Data
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
            "name": "Galeri",
            "item": "https://rosterbetonpurwakarta.com/gallery",
          },
        ],
      },
      {
        "@type": "ImageGallery",
        "name": "Galeri Foto CV Roster Purwakarta",
        "description": "Dokumentasi produk dan proyek roster beton CV Roster Purwakarta",
        "image": initialGalleries.slice(0, 10).map((g) => g.src),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <GalleryClient initialGalleries={initialGalleries} />
      </main>
      <Footer />
    </div>
  );
}

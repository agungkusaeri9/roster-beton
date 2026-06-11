import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/GalleryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Roster Beton | CV Roster Purwakarta",
  description: "Lihat koleksi galeri produk dan proyek terbaik dari CV Roster Purwakarta. Berbagai motif roster beton berkualitas dan hasil proyek memuaskan.",
  keywords: "galeri roster beton, foto roster purwakarta, proyek roster beton, CV Roster Purwakarta",
  openGraph: {
    title: "Galeri Roster Beton | CV Roster Purwakarta",
    description: "Lihat koleksi galeri produk dan proyek terbaik dari CV Roster Purwakarta.",
    url: "https://rosterbetonpurwakarta.com/gallery",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <GalleryClient />
      </main>
      <Footer />
    </div>
  );
}

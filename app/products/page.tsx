import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProdukClient from "@/components/ProdukClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Roster Beton Berkualitas | CV Roster Purwakarta",
  description: "Koleksi lengkap roster beton berkualitas tinggi di CV Roster Purwakarta. Berbagai motif dan ukuran tersedia untuk kebutuhan konstruksi Anda di Plered, Purwakarta.",
  keywords: "roster beton, roster purwakarta, produk roster, pagar roster, beton precast, roster plered",
  openGraph: {
    title: "Produk Roster Beton Berkualitas | CV Roster Purwakarta",
    description: "Koleksi lengkap roster beton berkualitas tinggi di CV Roster Purwakarta. Berbagai motif dan ukuran tersedia.",
    url: "https://rosterbetonpurwakarta.com/products",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default function ProdukPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ProdukClient />
      </main>
      <Footer />
    </div>
  );
}

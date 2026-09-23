import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartClient from "@/components/CartClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keranjang Belanja Roster Beton | CV Roster Purwakarta",
  description:
    "Periksa dan kelola daftar pesanan roster beton berkualitas tinggi Anda. Pesan langsung via WhatsApp dengan harga pabrik bersaing.",
  keywords:
    "keranjang belanja roster, pesan roster beton, harga roster beton purwakarta, beli roster plered",
  alternates: {
    canonical: "https://rosterbetonpurwakarta.com/cart",
  },
  openGraph: {
    title: "Keranjang Belanja | CV Roster Purwakarta",
    description:
      "Kelola daftar pesanan roster beton pilihan Anda dan hubungi tim kami untuk pengiriman armada pabrik langsung ke lokasi proyek.",
    url: "https://rosterbetonpurwakarta.com/cart",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <CartClient />
      </main>
      <Footer />
    </div>
  );
}

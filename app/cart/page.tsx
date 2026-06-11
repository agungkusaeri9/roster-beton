import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartClient from "@/components/CartClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keranjang Belanja | CV Roster Purwakarta",
  description: "Lihat dan kelola keranjang belanja roster beton Anda. Pesan via WhatsApp untuk pengiriman cepat di Plered, Purwakarta.",
  keywords: "keranjang belanja, pesan roster beton, whatsapp roster, pengiriman roster",
  openGraph: {
    title: "Keranjang Belanja | CV Roster Purwakarta",
    description: "Kelola pesanan roster beton Anda dan hubungi kami via WhatsApp untuk proses pemesanan.",
    url: "https://rosterbetonpurwakarta.com/cart",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12">
        <CartClient />
      </main>
      <Footer />
    </div>
  );
}

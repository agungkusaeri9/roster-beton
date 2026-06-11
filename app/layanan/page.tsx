import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceClient from "@/components/ServiceClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan CV Roster Purwakarta",
  description: "Kami menyediakan berbagai layanan profesional mulai dari produksi, pengiriman, hingga pemasangan roster beton berkualitas tinggi.",
  keywords: "layanan roster beton, pemasangan roster, pengiriman roster, konsul roster beton",
  openGraph: {
    title: "Layanan CV Roster Purwakarta",
    description: "Kami menyediakan berbagai layanan profesional untuk kebutuhan proyek konstruksi Anda.",
    url: "https://rosterbetonpurwakarta.com/layanan",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default function LayananPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ServiceClient />
      </main>
      <Footer />
    </div>
  );
}

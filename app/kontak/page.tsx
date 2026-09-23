import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Alamat Pabrik Roster Plered Purwakarta | CV Roster Purwakarta",
  description:
    "Hubungi CV Roster Purwakarta untuk pemesanan roster beton presisi, konsultasi gratis, permintaan sampel, dan kunjungan workshop di Jl. Raya Plered, Purwakarta, Jawa Barat.",
  keywords:
    "kontak roster beton, telepon roster purwakarta, alamat pabrik roster plered, whatsapp cv roster, pemesanan roster beton",
  alternates: {
    canonical: "https://rosterbetonpurwakarta.com/kontak",
  },
  openGraph: {
    title: "Kontak & Alamat Pabrik Roster Plered Purwakarta | CV Roster Purwakarta",
    description:
      "Hubungi tim CV Roster Purwakarta via WhatsApp atau telepon untuk konsultasi pemesanan dan pengiriman langsung dari pabrik.",
    url: "https://rosterbetonpurwakarta.com/kontak",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://rosterbetonpurwakarta.com/images/products/galprod-17.jpeg",
        width: 1200,
        height: 630,
        alt: "Kontak CV Roster Purwakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak CV Roster Purwakarta",
    description:
      "Hubungi tim CV Roster Purwakarta via WhatsApp atau telepon untuk konsultasi pemesanan dan pengiriman.",
  },
};

export default function KontakPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://rosterbetonpurwakarta.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Kontak",
            item: "https://rosterbetonpurwakarta.com/kontak",
          },
        ],
      },
      {
        "@type": "ContactPage",
        name: "Kontak CV Roster Purwakarta",
        url: "https://rosterbetonpurwakarta.com/kontak",
        description:
          "Halaman informasi kontak resmi dan pemesanan produk CV Roster Purwakarta.",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <ContactClient />
      </main>
      <Footer />
    </div>
  );
}

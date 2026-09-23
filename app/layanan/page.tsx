import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceClient from "@/components/ServiceClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Pabrik, Pengiriman & Pasang Roster Beton | CV Roster Purwakarta",
  description:
    "Layanan profesional produksi roster beton presisi langsung dari pabrik, pengiriman bergaransi, konsultasi teknis gratis, cetakan custom motif, dan jasa pasang roster di Purwakarta & Jawa Barat.",
  keywords:
    "layanan roster beton, jasa pasang roster beton, pabrik roster plered, pengiriman roster purwakarta, cetakan custom roster, harga pasang roster",
  alternates: {
    canonical: "https://rosterbetonpurwakarta.com/layanan",
  },
  openGraph: {
    title: "Layanan Pabrik & Pasang Roster Beton | CV Roster Purwakarta",
    description:
      "Solusi menyeluruh roster beton: produksi presisi, pengiriman armada aman, konsultasi gratis, hingga pemasangan rapi.",
    url: "https://rosterbetonpurwakarta.com/layanan",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://rosterbetonpurwakarta.com/images/products/galprod-19.jpeg",
        width: 1200,
        height: 630,
        alt: "Layanan CV Roster Purwakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Pabrik & Pasang Roster Beton | CV Roster Purwakarta",
    description:
      "Solusi menyeluruh roster beton: produksi presisi, pengiriman armada aman, konsultasi gratis, hingga pemasangan rapi.",
  },
};

export default function LayananPage() {
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
            name: "Layanan",
            item: "https://rosterbetonpurwakarta.com/layanan",
          },
        ],
      },
      {
        "@type": "Service",
        serviceType: "Produksi dan Pemasangan Roster Beton",
        provider: {
          "@type": "Organization",
          name: "CV Roster Purwakarta",
          url: "https://rosterbetonpurwakarta.com",
        },
        areaServed: {
          "@type": "State",
          name: "Jawa Barat",
        },
        description:
          "Penyedia layanan produksi roster beton, pengiriman armada bergaransi, dan instalasi profesional di Jawa Barat.",
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
        <ServiceClient />
      </main>
      <Footer />
    </div>
  );
}

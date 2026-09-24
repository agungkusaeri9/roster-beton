import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsClient from "@/components/NewsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita CV Roster Purwakarta",
  description: "Temukan informasi terbaru tentang roster beton, tips konstruksi, dan proyek terbaru dari CV Roster Purwakarta.",
  keywords: "berita roster beton, tips konstruksi, proyek roster beton",
  openGraph: {
    title: "Berita CV Roster Purwakarta",
    description: "Temukan informasi terbaru tentang roster beton dan proyek kami.",
    url: "https://rosterbetonpurwakarta.com/news",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <NewsClient />
      </main>
      <Footer />
    </div>
  );
}

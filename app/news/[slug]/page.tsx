import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsDetailClient from "@/components/NewsDetailClient";
import { Metadata } from "next";
import { news } from "@/components/NewsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const currentNews = news.find((item) => item.slug === slug);

  if (!currentNews) {
    return {
      title: "Berita Tidak Ditemukan | CV Roster Purwakarta",
    };
  }

  return {
    title: `${currentNews.title} | CV Roster Purwakarta`,
    description: currentNews.excerpt,
    keywords: "roster beton, purwakarta, berita konstruksi",
    openGraph: {
      title: currentNews.title,
      description: currentNews.excerpt,
      url: `https://rosterbetonpurwakarta.com/news/${slug}`,
      siteName: "CV Roster Purwakarta",
      locale: "id_ID",
      type: "article",
      images: [
        {
          url: currentNews.image,
          width: 1200,
          height: 630,
          alt: currentNews.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <NewsDetailClient slug={slug} />
      </main>
      <Footer />
    </div>
  );
}

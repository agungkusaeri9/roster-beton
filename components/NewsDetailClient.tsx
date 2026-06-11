"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { news } from "./NewsClient";

export default function NewsDetailClient({ slug }: { slug: string }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Find the current news item by slug
  const currentNews = news.find((item) => item.slug === slug);

  if (!currentNews) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
            <Link href="/news" className="text-blue-500 hover:text-blue-600 font-semibold">
              Kembali ke Daftar Berita
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Filter recent news (exclude current)
  const recentNews = news.filter((item) => item.id !== currentNews.id).slice(0, 5);

  // Filter search results
  const searchResults = searchQuery
    ? news.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[400px] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={currentNews.image}
            alt={currentNews.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-gray-300 mb-4">{currentNews.date}</p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">{currentNews.title}</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-lg p-8">
              <div className="relative h-80 rounded-xl overflow-hidden mb-8">
                <Image
                  src={currentNews.image}
                  alt={currentNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: currentNews.content }}
              />
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Kembali ke Daftar Berita
                </Link>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Search Widget */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pencarian</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari berita..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchResults.length > 0 && (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-gray-500">Hasil pencarian:</p>
                    {searchResults.map((item) => (
                      <Link
                        key={item.id}
                        href={`/news/${item.slug}`}
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setSearchQuery("")}
                      >
                        <p className="text-sm font-semibold text-gray-900 line-clamp-2">{item.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                      </Link>
                    ))}
                  </div>
                )}
                {searchQuery && searchResults.length === 0 && (
                  <p className="mt-4 text-sm text-gray-500">Tidak ada berita yang ditemukan.</p>
                )}
              </div>

              {/* Recent News Widget */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Berita Terbaru</h3>
                <div className="space-y-4">
                  {recentNews.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="flex gap-4 group"
                    >
                      <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-500 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

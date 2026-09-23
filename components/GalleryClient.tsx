"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { GalleryItem } from "@/types";
import { fetchGalleries } from "@/services/galleryService";

interface GalleryClientProps {
  initialGalleries?: GalleryItem[];
}

interface CategoryOption {
  key: string;
  label: string;
}

const CATEGORY_TABS: CategoryOption[] = [
  { key: "Semua", label: "Semua Foto" },
  { key: "Produk", label: "Motif Produk" },
  { key: "Proyek", label: "Proyek & Fasad" },
  { key: "Produksi", label: "Workshop & Cetakan" },
  { key: "Layanan", label: "Pengiriman & Logistik" },
  { key: "Perusahaan", label: "Pabrik & Tim" },
];

export default function GalleryClient({
  initialGalleries = [],
}: GalleryClientProps) {
  const [galleries, setGalleries] = useState<GalleryItem[]>(initialGalleries);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isImageAnimating, setIsImageAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load from API if SSR was empty
  useEffect(() => {
    if (!initialGalleries || initialGalleries.length === 0) {
      setIsLoading(true);
      fetchGalleries()
        .then((data) => {
          if (data) setGalleries(data);
        })
        .finally(() => setIsLoading(false));
    }
  }, [initialGalleries]);

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Semua: galleries.length };
    galleries.forEach((item) => {
      const cat = item.category || "Lainnya";
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [galleries]);

  // Filter galleries based on active tab
  const filteredGallery = useMemo(() => {
    if (selectedCategory === "Semua") return galleries;
    return galleries.filter(
      (item) => item.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [galleries, selectedCategory]);

  // Lightbox keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredGallery]);

  // Lock body scroll on lightbox open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex === null || filteredGallery.length === 0) return;
    setIsImageAnimating(true);
    setTimeout(() => {
      setIsImageAnimating(false);
      setSelectedImageIndex((prev) =>
        prev === filteredGallery.length - 1 ? 0 : (prev as number) + 1
      );
    }, 100);
  };

  const prevImage = () => {
    if (selectedImageIndex === null || filteredGallery.length === 0) return;
    setIsImageAnimating(true);
    setTimeout(() => {
      setIsImageAnimating(false);
      setSelectedImageIndex((prev) =>
        prev === 0 ? filteredGallery.length - 1 : (prev as number) - 1
      );
    }, 100);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumb Navigation - Consistent max-w-7xl */}
      <div className="bg-white border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav
            className="flex text-xs sm:text-sm text-gray-500 items-center flex-wrap gap-1.5"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors py-1 px-1.5 rounded-md hover:bg-gray-100/60"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Beranda</span>
            </Link>

            <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>

            <span className="text-gray-900 font-medium py-1 px-1.5" aria-current="page">
              Galeri Foto
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Galeri Produk & Dokumentasi Proyek
            </h1>
            <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
              Dokumentasi foto motif roster beton, suasana workshop produksi Plered, dan hasil pemasangan nyata di berbagai proyek pelanggan.
            </p>
          </div>

          <div className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-xl border border-gray-200 self-start sm:self-auto font-medium">
            Total: <span className="font-bold text-gray-900">{filteredGallery.length}</span> Foto
          </div>
        </div>

        {/* Badge-style Category Filters (Identical to ProdukClient) */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORY_TABS.map((cat) => {
            const count = categoryCounts[cat.key] || 0;
            const isActive = selectedCategory === cat.key;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/80 shadow-sm"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-white/25 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Section Header Info & Reset */}
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 pt-1">
          <p>
            {isLoading ? (
              "Memuat galeri..."
            ) : (
              <>
                Menampilkan <span className="font-semibold text-gray-900">{filteredGallery.length}</span> dari{" "}
                <span className="font-semibold text-gray-900">{galleries.length}</span> dokumentasi foto
                {selectedCategory !== "Semua" && (
                  <span className="ml-1 text-blue-600 font-medium">
                    (Kategori: {CATEGORY_TABS.find((c) => c.key === selectedCategory)?.label || selectedCategory})
                  </span>
                )}
              </>
            )}
          </p>

          {selectedCategory !== "Semua" && (
            <button
              onClick={() => setSelectedCategory("Semua")}
              className="text-blue-600 hover:underline font-semibold"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl aspect-square border border-gray-100 shadow-sm animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredGallery.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Foto belum tersedia
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-4">
              Belum ada dokumentasi untuk kategori ini.
            </p>
            <button
              onClick={() => setSelectedCategory("Semua")}
              className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-sm"
            >
              Lihat Semua Foto
            </button>
          </div>
        )}

        {/* Photo Grid */}
        {!isLoading && filteredGallery.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id || index}
                onClick={() => openLightbox(index)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.09)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer aspect-square"
              >
                <Image
                  src={item.src}
                  alt={item.alt_text || item.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 sm:p-4 text-white">
                  <div className="self-end">
                    <span className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </span>
                  </div>

                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-blue-600 text-[10px] font-semibold mb-1 shadow-sm">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold line-clamp-1 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Always visible category badge (clean top left) */}
                <span className="absolute top-2.5 left-2.5 group-hover:opacity-0 transition-opacity duration-200 bg-white/90 backdrop-blur-md text-gray-800 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg border border-gray-200/50 shadow-sm">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold">
              Tertarik Menggunakan Motif Roster dari Galeri Ini?
            </h2>
            <p className="text-blue-200 text-xs sm:text-sm max-w-xl">
              Hubungi tim kami untuk menanyakan ketersediaan stok motif, estimasi harga pabrik, atau jadwal pengiriman langsung ke lokasi proyek Anda.
            </p>
          </div>

          <Link
            href="/kontak"
            className="px-6 py-2.5 bg-white text-blue-900 font-semibold text-xs sm:text-sm rounded-xl hover:bg-blue-50 transition-colors flex-shrink-0 shadow-sm"
          >
            Konsultasi Sekarang &rarr;
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredGallery[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Tutup foto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation - Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 active:scale-95"
            aria-label="Foto sebelumnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Navigation - Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 active:scale-95"
            aria-label="Foto berikutnya"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative w-full h-[65vh] sm:h-[75vh] transition-all duration-200 ${
                isImageAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
              }`}
            >
              <Image
                src={filteredGallery[selectedImageIndex].src}
                alt={
                  filteredGallery[selectedImageIndex].alt_text ||
                  filteredGallery[selectedImageIndex].title
                }
                fill
                unoptimized
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="mt-4 text-center text-white space-y-1">
              <div className="inline-flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-xs font-semibold">
                  {filteredGallery[selectedImageIndex].category}
                </span>
                <span className="text-xs text-gray-400">
                  {selectedImageIndex + 1} / {filteredGallery.length}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold">
                {filteredGallery[selectedImageIndex].title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

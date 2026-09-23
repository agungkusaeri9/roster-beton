"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useConfig } from "@/context/ConfigContext";
import { Product } from "@/types";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts?: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts = [],
}: ProductDetailClientProps) {
  const { cleanWhatsapp, getConfig } = useConfig();
  const companyName = getConfig("company_name", "CV Roster Purwakarta");
  // Extract gallery images safely
  const galleryImages: string[] =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : product.galleries && product.galleries.length > 0
      ? product.galleries.map((g) => g.image_url)
      : [product.image];

  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string>(
    galleryImages[0] || product.image || "/images/placeholder.jpg"
  );
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const [isImageAnimating, setIsImageAnimating] = useState(false);
  const { addToCart } = useCart();

  const categoryName =
    typeof product.category === "object"
      ? product.category?.name
      : product.category || "Roster Beton";

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIndex === null) return;

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
  }, [lightboxImageIndex]);

  // Lock body scroll on lightbox open
  useEffect(() => {
    if (lightboxImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxImageIndex]);

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const nextImage = () => {
    if (lightboxImageIndex === null || galleryImages.length === 0) return;
    setIsImageAnimating(true);
    setTimeout(() => {
      setIsImageAnimating(false);
      setLightboxImageIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : (prev as number) + 1
      );
    }, 100);
  };

  const prevImage = () => {
    if (lightboxImageIndex === null || galleryImages.length === 0) return;
    setIsImageAnimating(true);
    setTimeout(() => {
      setIsImageAnimating(false);
      setLightboxImageIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : (prev as number) - 1
      );
    }, 100);
  };

  const handleAddToCart = (item: Product = product) => {
    const itemCat =
      typeof item.category === "object"
        ? item.category?.name
        : item.category || "Roster Beton";

    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      category: itemCat,
      price: item.price,
      slug: item.slug,
      dimension: item.dimension,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
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

            <Link
              href="/products"
              className="text-gray-500 hover:text-blue-600 transition-colors py-1 px-1.5 rounded-md hover:bg-gray-100/60"
            >
              Produk
            </Link>

            {categoryName && (
              <>
                <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link
                  href={`/products?category=${encodeURIComponent(categoryName)}`}
                  className="text-gray-500 hover:text-blue-600 transition-colors py-1 px-1.5 rounded-md hover:bg-gray-100/60"
                >
                  {categoryName}
                </Link>
              </>
            )}

            <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>

            <span
              className="text-gray-900 font-medium py-1 px-1.5 truncate max-w-[220px] sm:max-w-none"
              aria-current="page"
            >
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Main Product Card */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 grid md:grid-cols-2 gap-10">
          {/* Image Gallery Column */}
          <div className="space-y-4">
            <div
              className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer group shadow-sm border border-gray-100"
              onClick={() =>
                openLightbox(
                  galleryImages.indexOf(selectedGalleryImage) >= 0
                    ? galleryImages.indexOf(selectedGalleryImage)
                    : 0
                )
              }
            >
              <Image
                src={selectedGalleryImage}
                alt={product.name}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/25">
                <div className="w-12 h-12 bg-blue-600/90 text-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGalleryImage(img)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedGalleryImage === img
                        ? "border-blue-600 shadow-sm ring-2 ring-blue-500/20"
                        : "border-gray-200 hover:border-gray-300 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details Column */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                  {categoryName}
                </span>
                {product.is_featured && (
                  <span className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
                    Produk Unggulan
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Price display */}
              {product.price ? (
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-blue-600">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-sm font-medium text-gray-500">/ pcs</span>
                </div>
              ) : null}

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                {product.dimension && (
                  <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500 block mb-0.5">Dimensi Produk</span>
                    <span className="font-semibold text-gray-900 text-sm">{product.dimension}</span>
                  </div>
                )}
                {product.weight ? (
                  <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-xs text-gray-500 block mb-0.5">Berat Satuan</span>
                    <span className="font-semibold text-gray-900 text-sm">{product.weight} kg</span>
                  </div>
                ) : null}
              </div>

              <div className="pt-2">
                <h2 className="text-sm font-bold text-gray-900 mb-1.5 uppercase tracking-wider text-xs">
                  Deskripsi Produk
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {product.description ||
                    "Roster beton presisi berkualitas tinggi, cocok untuk ventilasi udara dan estetika dinding bangunan modern."}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-6 border-t border-gray-100">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-[0.99] flex items-center justify-center gap-2.5 text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Tambah ke Keranjang
              </button>

              <a
                href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
                  `Halo ${companyName}, saya tertarik dengan produk ${product.name}. Mohon informasi harga dan ketersediaan stok.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-emerald-500/20 active:scale-[0.99] flex items-center justify-center gap-2.5 text-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                </svg>
                Pesan / Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Product Highlights & Features Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
            Keunggulan Produk CV Roster Purwakarta
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3.5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Bahan Semen Berkualitas</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Campuran pasir pilihan & semen bermutu tinggi menghasilkan roster padat, kokoh, dan tahan cuaca.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3.5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Presisi & Rapi</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Dicetak dengan cetakan presisi modern untuk hasil sudut siku yang rapi dan mempermudah pemasangan.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3.5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Langsung dari Produsen</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Harga bersaing tangan pertama langsung dari workshop produksi pabrik CV Roster Purwakarta.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3.5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Sirkulasi Udara Alami</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Rongga udara aerodinamis untuk sirkulasi udara sejuk optimal dan pencahayaan alami ruangan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Produk Terkait Section (Di Bawah Keunggulan Produk) */}
        {relatedProducts.length > 0 && (
          <section className="bg-white rounded-3xl shadow-sm border border-gray-100/90 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                  Koleksi Pilihan
                </span>
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Produk Terkait Lainnya
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Pilihan motif roster beton berkualitas tinggi dalam kategori {categoryName}
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-4 py-2.5 rounded-xl transition-all self-start sm:self-auto group"
              >
                <span>Lihat Semua Katalog</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => {
                const itemCat =
                  typeof item.category === "object"
                    ? item.category?.name
                    : item.category || "Roster Beton";

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-3 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Container with Floating Badges */}
                      <Link
                        href={`/products/${item.slug}`}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 block group/img mb-3.5"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          unoptimized
                          className="object-cover group-hover/img:scale-108 group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-gray-800 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                          {itemCat}
                        </span>

                        {item.is_featured && (
                          <span className="absolute top-2.5 right-2.5 bg-amber-400/90 text-gray-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            ★ Unggulan
                          </span>
                        )}
                      </Link>

                      {/* Content */}
                      <div className="px-1.5 space-y-1.5">
                        <Link href={`/products/${item.slug}`} className="block">
                          <h3 className="font-bold text-gray-900 text-sm hover:text-blue-600 transition-colors line-clamp-1">
                            {item.name}
                          </h3>
                        </Link>

                        <div className="flex items-center gap-2 text-[11px] text-gray-500">
                          {item.dimension ? (
                            <span>{item.dimension}</span>
                          ) : (
                            <span>Presisi Tinggi</span>
                          )}
                          <span>•</span>
                          <span>{item.weight ? `${item.weight} kg` : "Bahan Kuat"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action / Pricing Bar */}
                    <div className="px-1.5 pt-3.5 mt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <div>
                        {item.price ? (
                          <div>
                            <span className="text-[11px] text-gray-400 block leading-none">Harga</span>
                            <span className="font-extrabold text-blue-600 text-sm">
                              Rp {item.price.toLocaleString("id-ID")}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs font-semibold text-emerald-600">Hubungi Kami</span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {/* Quick Add to Cart button */}
                        <button
                          onClick={() => handleAddToCart(item)}
                          title="Tambah ke Keranjang"
                          className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </button>

                        {/* View Detail Link */}
                        <Link
                          href={`/products/${item.slug}`}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-all shadow-sm shadow-blue-500/10"
                        >
                          Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImageIndex !== null && galleryImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors z-20 bg-white/10 hover:bg-white/20 p-2.5 rounded-full"
            aria-label="Tutup foto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-20 bg-white/10 hover:bg-white/20 rounded-full p-3"
              aria-label="Foto sebelumnya"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {galleryImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-20 bg-white/10 hover:bg-white/20 rounded-full p-3"
              aria-label="Foto selanjutnya"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div
            className={`relative max-w-4xl max-h-[80vh] w-full transition-all duration-150 ${
              isImageAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh]">
              <Image
                src={galleryImages[lightboxImageIndex]}
                alt={`${product.name} - Foto ${lightboxImageIndex + 1}`}
                fill
                unoptimized
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                {categoryName}
              </span>
              <h3 className="text-white text-lg font-bold mt-0.5">
                {product.name}
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                Foto {lightboxImageIndex + 1} dari {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

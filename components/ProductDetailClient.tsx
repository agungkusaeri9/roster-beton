"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import productsData from "@/data/products.json";

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = productsData.find((p) => p.slug === slug);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(
    product?.image || ""
  );
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);
  const [isImageAnimating, setIsImageAnimating] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIndex === null || !product) return;

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
  }, [lightboxImageIndex, product]);

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
    if (lightboxImageIndex === null || !product?.gallery) return;
    setIsImageAnimating(true);
    setTimeout(() => {
      setIsImageAnimating(false);
      setLightboxImageIndex((prev) =>
        prev === product.gallery.length - 1 ? 0 : (prev as number) + 1
      );
    }, 100);
  };

  const prevImage = () => {
    if (lightboxImageIndex === null || !product?.gallery) return;
    setIsImageAnimating(true);
    setTimeout(() => {
      setIsImageAnimating(false);
      setLightboxImageIndex((prev) =>
        prev === 0 ? product.gallery.length - 1 : (prev as number) - 1
      );
    }, 100);
  };

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Produk Tidak Ditemukan
            </h1>
            <Link
              href="/products"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Kembali ke Daftar Produk
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const otherProducts = productsData.filter(
    (p) => p.id !== product.id
  );

  const filteredProducts = searchQuery
    ? otherProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : otherProducts.slice(0, 5);

  return (
    <div className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-blue-500">
              Produk
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Product Image & Info */}
            <section className="grid md:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer" onClick={() => openLightbox(0)}>
                  <Image
                    src={selectedGalleryImage}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="w-12 h-12 bg-blue-500/90 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.gallery?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGalleryImage(img)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedGalleryImage === img
                        ? "border-blue-500"
                        : "border-transparent hover:border-blue-300"
                        }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </section>

            {/* Product Gallery */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Galeri Produk
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {product.gallery?.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                    onClick={() => openLightbox(idx)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={img}
                        alt={`${product.name} - Galeri ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-blue-400 text-sm font-medium mb-1">
                        {product.category}
                      </span>
                      <h3 className="text-white font-semibold">{product.name}</h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-blue-500/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search Widget */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Cari Produk
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchQuery && filteredProducts.length > 0 && (
                <div className="mt-4 space-y-3">
                  {filteredProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 line-clamp-2">
                          {p.name}
                        </p>
                        <p className="text-xs text-gray-500">{p.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {searchQuery && filteredProducts.length === 0 && (
                <p className="mt-4 text-sm text-gray-500">
                  Produk tidak ditemukan.
                </p>
              )}
            </div>

            {/* Recent Products */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Produk Lainnya
              </h3>
              <div className="space-y-4">
                {filteredProducts.slice(0, 5).map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-16 h-16 relative rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-500 transition-colors">
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{p.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImageIndex !== null && product.gallery && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-10"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-10 bg-black/30 hover:bg-black/50 rounded-full p-3"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-10 bg-black/30 hover:bg-black/50 rounded-full p-3"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className={`relative max-w-5xl max-h-[85vh] w-full mx-4 transition-opacity duration-150 ${isImageAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={product.gallery[lightboxImageIndex]}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-blue-400 text-sm font-medium">
                {product.category}
              </span>
              <h3 className="text-white text-xl font-semibold mt-1">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {lightboxImageIndex + 1} dari {product.gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

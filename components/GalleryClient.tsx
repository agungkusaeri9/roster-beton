"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import galleryData from "@/data/gallery.json";

const categories = ["Semua", "Produk", "Proyek", "Produksi", "Layanan", "Perusahaan"];

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isImageAnimating, setIsImageAnimating] = useState(false);

  const filteredGallery = selectedCategory === "Semua"
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

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
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedImage]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    setIsImageAnimating(true);
    setTimeout(() => {
      setIsImageAnimating(false);
      setSelectedImage((prev) =>
        prev === filteredGallery.length - 1 ? 0 : (prev as number) + 1
      );
    }, 100);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setIsImageAnimating(true);
    setTimeout(() => {
      setIsImageAnimating(false);
      setSelectedImage((prev) =>
        prev === 0 ? filteredGallery.length - 1 : (prev as number) - 1
      );
    }, 100);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[400px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/galprod-20.jpeg"
            alt="Gallery Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Galeri Kami
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lihat koleksi produk dan proyek terbaik dari CV Roster Purwakarta
          </p>
        </div>
      </section>

      <div className="bg-gray-50">
        {/* Filter Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredGallery.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-blue-400 text-sm font-medium mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold">{item.title}</h3>
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
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
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
            className={`relative max-w-5xl max-h-[85vh] w-full mx-4 transition-opacity duration-150 ${
              isImageAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={filteredGallery[selectedImage].src}
                alt={filteredGallery[selectedImage].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-blue-400 text-sm font-medium">
                {filteredGallery[selectedImage].category}
              </span>
              <h3 className="text-white text-xl font-semibold mt-1">
                {filteredGallery[selectedImage].title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {selectedImage + 1} dari {filteredGallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

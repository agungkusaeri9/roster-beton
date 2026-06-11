"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProdukClient() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === "Semua"
    ? productsData
    : productsData.filter((product) => product.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[500px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/galprod-17.jpeg"
            alt="Roster Beton"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Koleksi Produk Roster Beton
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pilih berbagai macam roster beton berkualitas tinggi dengan desain menarik untuk kebutuhan konstruksi Anda.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        {/* Filter Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categoriesData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow block"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="p-2 text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Butuh Roster Beton Khusus?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Kami menerima pesanan roster beton dengan desain dan ukuran khusus sesuai kebutuhan proyek Anda.
            </p>
            <Link
              href="/kontak"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

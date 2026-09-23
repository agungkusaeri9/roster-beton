"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

interface FeaturedProductsProps {
  products?: Product[];
}

export default function FeaturedProducts({ products = [] }: FeaturedProductsProps) {
  const { addToCart } = useCart();
  const displayProducts = products.slice(0, 8);

  if (displayProducts.length === 0) {
    return null;
  }

  const handleAddToCart = (product: Product) => {
    const categoryName =
      typeof product.category === "object"
        ? product.category?.name
        : product.category || "Roster Beton";

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      category: categoryName,
      price: product.price,
      slug: product.slug,
      dimension: product.dimension,
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
              Katalog Unggulan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Produk Roster Beton Pilihan
            </h2>
            <p className="text-gray-500 text-sm mt-1 max-w-xl">
              Pilihan motif roster beton terpopuler dengan presisi sudut terbaik langsung dari pabrik CV Roster Purwakarta.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-white hover:bg-blue-50 px-4 py-2.5 rounded-xl border border-gray-200 transition-all self-start sm:self-auto group shadow-xs"
          >
            <span>Lihat Semua ({products.length > 0 ? products.length : "Katalog"})</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => {
            const categoryName =
              typeof product.category === "object"
                ? product.category?.name
                : product.category || "Roster Beton";

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-3.5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 block group/img mb-3.5"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      unoptimized
                      className="object-cover group-hover/img:scale-108 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-gray-800 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      {categoryName}
                    </span>

                    {product.is_featured && (
                      <span className="absolute top-2.5 right-2.5 bg-amber-400/90 text-gray-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        ★ Unggulan
                      </span>
                    )}
                  </Link>

                  {/* Title & Dimension */}
                  <div className="px-1 space-y-1">
                    <Link href={`/products/${product.slug}`} className="block">
                      <h3 className="font-bold text-gray-900 text-sm hover:text-blue-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span>{product.dimension || "Ukuran 20x20x10 cm"}</span>
                      <span>•</span>
                      <span>{product.weight ? `${product.weight} kg` : "Bahan Kuat"}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Price & Actions */}
                <div className="px-1 pt-3.5 mt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div>
                    {product.price ? (
                      <div>
                        <span className="text-[10px] text-gray-400 block leading-none">Harga</span>
                        <span className="font-extrabold text-blue-600 text-sm">
                          Rp {product.price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs font-semibold text-emerald-600">Hubungi Kami</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleAddToCart(product)}
                      title="Tambah ke Keranjang"
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>

                    <Link
                      href={`/products/${product.slug}`}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-all shadow-xs"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

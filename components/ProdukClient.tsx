"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { fetchProducts } from "@/services/productService";
import { fetchCategories } from "@/services/categoryService";
import { Product, Category, PaginationMeta, PaginatedProductsResponse } from "@/types";

const PAGE_SIZE = 12;
const INITIAL_CATEGORY_LIMIT = 6;

interface ProdukClientProps {
  initialData?: PaginatedProductsResponse | null;
  initialCategories?: Category[] | null;
}

export default function ProdukClient({ initialData, initialCategories }: ProdukClientProps) {
  const [products, setProducts] = useState<Product[]>(initialData?.data || []);
  const [categories, setCategories] = useState<Category[]>(initialCategories || []);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(initialData?.pagination.current_page || 1);
  const [pagination, setPagination] = useState<PaginationMeta>(
    initialData?.pagination || {
      current_page: 1,
      per_page: PAGE_SIZE,
      total_data: initialData?.data?.length || 0,
      total_pages: initialData?.pagination?.total_pages || 1,
    }
  );
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [isLoading, setIsLoading] = useState(!initialData);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isInitialMount = useRef(true);

  const { addToCart } = useCart();

  // Load categories if not provided via SSR
  useEffect(() => {
    if (!initialCategories || initialCategories.length === 0) {
      fetchCategories()
        .then((data) => {
          if (data && data.length > 0) {
            setCategories(data);
          }
        })
        .catch((err) => console.error("Failed to load categories:", err));
    }
  }, [initialCategories]);

  // Load initial page of a category or fresh reload
  const loadInitialProducts = useCallback(async (category: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchProducts({
        page: 1,
        limit: PAGE_SIZE,
        category: category === "Semua" ? "" : category,
      });

      if (res && res.data) {
        setProducts(res.data);
        setPagination(res.pagination);
        setCurrentPage(1);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error("Failed to load products:", err);
      setError("Gagal memuat produk dari server. Pastikan backend aktif.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load more products for next page
  const handleLoadMore = async () => {
    if (isLoadingMore || currentPage >= pagination.total_pages) return;

    setIsLoadingMore(true);
    const nextPage = currentPage + 1;
    try {
      const res = await fetchProducts({
        page: nextPage,
        limit: PAGE_SIZE,
        category: selectedCategory === "Semua" ? "" : selectedCategory,
      });

      if (res && res.data) {
        setProducts((prev) => [...prev, ...res.data]);
        setPagination(res.pagination);
        setCurrentPage(nextPage);
      }
    } catch (err) {
      console.error("Failed to load more products:", err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (initialData) return;
    }
    loadInitialProducts(selectedCategory);
  }, [selectedCategory, loadInitialProducts, initialData]);

  const handleCategoryChange = (categoryName: string) => {
    if (categoryName === selectedCategory) return;
    setSelectedCategory(categoryName);
  };

  const getCategoryName = (product: Product): string => {
    if (typeof product.category === "object" && product.category?.name) {
      return product.category.name;
    }
    return (product.category as string) || "Roster Beton";
  };

  const hasMore = currentPage < pagination.total_pages;

  // Filtered categories for badge display
  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, INITIAL_CATEGORY_LIMIT);

  // Hidden count
  const remainingCount = Math.max(0, categories.length - INITIAL_CATEGORY_LIMIT);

  // If active category is beyond the limit and collapsed, keep it visible
  const isSelectedHidden =
    !showAllCategories &&
    selectedCategory !== "Semua" &&
    !displayedCategories.some((c) => c.name === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumb Navigation */}
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
              Katalog Produk
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Clean Page Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Koleksi Produk Roster Beton
            </h1>
            <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
              Pilihan lengkap roster beton berkualitas, presisi tinggi, dan tahan cuaca langsung dari pabrik CV Roster Purwakarta.
            </p>
          </div>

          <div className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-xl border border-gray-200 self-start sm:self-auto font-medium">
            Total: <span className="font-bold text-gray-900">{pagination.total_data}</span> Produk
          </div>
        </div>

        {/* Badge-style Category Filters */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            {/* "Semua" Badge Button */}
            <button
              onClick={() => handleCategoryChange("Semua")}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === "Semua"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/80 shadow-sm"
              }`}
            >
              Semua
            </button>

            {/* Displayed Category Badges */}
            {displayedCategories.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/80 shadow-sm"
                  }`}
                  title={cat.description}
                >
                  {cat.name}
                </button>
              );
            })}

            {/* If selected category is hidden because of limit, show active badge */}
            {isSelectedHidden && (
              <button
                onClick={() => handleCategoryChange(selectedCategory)}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105 transition-all duration-200"
              >
                {selectedCategory}
              </button>
            )}

            {/* "Lainnya / Sembunyikan" Toggle Button */}
            {categories.length > INITIAL_CATEGORY_LIMIT && (
              <button
                onClick={() => setShowAllCategories((prev) => !prev)}
                className="px-4 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                title={showAllCategories ? "Sembunyikan kategori tambahan" : "Tampilkan semua kategori"}
              >
                {showAllCategories ? (
                  <>
                    <span>Sembunyikan</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>+{remainingCount} Kategori Lainnya</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Section Header Info & Reset */}
        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 pt-1">
          <p>
            {isLoading ? (
              "Memuat katalog produk..."
            ) : (
              <>
                Menampilkan <span className="font-semibold text-gray-900">{products.length}</span> dari{" "}
                <span className="font-semibold text-gray-900">{pagination.total_data}</span> produk
                {selectedCategory !== "Semua" && (
                  <span className="ml-1 text-blue-600 font-medium">
                    (Kategori: {selectedCategory})
                  </span>
                )}
              </>
            )}
          </p>

          {selectedCategory !== "Semua" && (
            <button
              onClick={() => handleCategoryChange("Semua")}
              className="text-blue-600 hover:underline font-semibold"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center my-4">
            <p className="text-red-600 font-medium mb-4">{error}</p>
            <button
              onClick={() => loadInitialProducts(selectedCategory)}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm shadow-sm"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(PAGE_SIZE)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-3 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] animate-pulse flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-100 rounded w-1/2 mb-3" />
                </div>
                <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                  <div className="h-5 bg-gray-200 rounded w-1/3" />
                  <div className="w-8 h-8 bg-gray-200 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && products.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center my-6 border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Produk Belum Tersedia</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
              Belum ada produk yang cocok dengan kategori &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => handleCategoryChange("Semua")}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm shadow-sm"
            >
              Lihat Semua Produk
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && !error && products.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => {
              const categoryName = getCategoryName(product);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl p-3 sm:p-3.5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container with Link */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="block relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-3 group/img"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover/img:scale-108 group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-gray-800 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg border border-gray-200/50 shadow-sm">
                        {categoryName}
                      </span>
                    </Link>

                    {/* Product Details */}
                    <div>
                      <Link href={`/products/${product.slug}`}>
                        <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                      {product.dimension && (
                        <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
                          {product.dimension}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100">
                    <div>
                      <span className="text-[10px] text-gray-400 block font-medium">Harga</span>
                      <span className="text-xs sm:text-sm font-bold text-blue-600">
                        {product.price
                          ? `Rp ${product.price.toLocaleString("id-ID")}`
                          : "Hubungi Kami"}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart({
                          id: product.id,
                          name: product.name,
                          image: product.image,
                          category: categoryName,
                          price: product.price,
                          slug: product.slug,
                          dimension: product.dimension,
                        });
                      }}
                      className="p-2 sm:p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm"
                      title="Tambah ke Keranjang"
                      aria-label={`Tambah ${product.name} ke keranjang`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button or Finished State */}
        {!isLoading && !error && products.length > 0 && (
          <div className="pt-6 text-center">
            {hasMore ? (
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoadingMore ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Memuat Produk Lainnya...</span>
                  </>
                ) : (
                  <>
                    <span>Muat Lebih Banyak Produk</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 text-gray-500 rounded-xl text-xs font-medium">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Semua {pagination.total_data} produk telah ditampilkan
              </div>
            )}
          </div>
        )}

        {/* Bottom Custom Order Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold">
              Butuh Motif atau Ukuran Roster Custom?
            </h2>
            <p className="text-blue-200 text-xs sm:text-sm max-w-xl">
              Kami melayani pembuatan cetakan roster beton custom untuk proyek arsitektur, perumahan, maupun komersial dalam jumlah besar.
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
    </div>
  );
}

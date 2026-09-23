"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useConfig } from "@/context/ConfigContext";

export default function CartClient() {
  const {
    cart,
    addToCart,
    removeFromCart,
    deleteFromCart,
    updateQuantity,
    clearCart,
  } = useCart();
  const { cleanWhatsapp, getConfig } = useConfig();

  const [deleteItem, setDeleteItem] = useState<{ id: number; name: string } | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const companyName = getConfig("company_name", "CV Roster Purwakarta");

  // Calculate totals
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const itemPrice = item.price || 0;
    return sum + itemPrice * item.quantity;
  }, 0);

  const whatsappMessage = () => {
    if (cart.length === 0) return "";

    let message = `Halo ${companyName}! Saya ingin memesan roster beton dengan rincian berikut:\n\n`;
    cart.forEach((item, index) => {
      const priceText = item.price
        ? ` @ Rp ${item.price.toLocaleString("id-ID")}`
        : "";
      const subtotalText = item.price
        ? ` = Rp ${(item.price * item.quantity).toLocaleString("id-ID")}`
        : "";
      message += `${index + 1}. *${item.name}* (${item.category || "Roster"}) - ${item.quantity} pcs${priceText}${subtotalText}\n`;
    });

    message += `\n*Total Jumlah:* ${totalItemsCount} pcs\n`;
    if (totalPrice > 0) {
      message += `*Estimasi Total Harga:* Rp ${totalPrice.toLocaleString("id-ID")}\n`;
    }
    message += `\nMohon informasi ketersediaan stok, estimasi ongkir ke alamat saya, dan metode pembayaran. Terima kasih!`;

    return encodeURIComponent(message);
  };

  const handleDelete = () => {
    if (deleteItem) {
      deleteFromCart(deleteItem.id);
      setDeleteItem(null);
    }
  };

  const handleClearAll = () => {
    clearCart();
    setShowClearConfirm(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
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

            <span className="text-gray-900 font-medium py-1 px-1.5" aria-current="page">
              Keranjang Belanja
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Page Title & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Keranjang Belanja
              </h1>
              {cart.length > 0 && (
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                  {cart.length} Jenis Produk
                </span>
              )}
            </div>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Periksa daftar pesanan roster beton Anda sebelum checkout via WhatsApp
            </p>
          </div>

          {cart.length > 0 && (
            <button
              onClick={() => setShowClearConfirm(true)}
              className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 py-2 px-3 rounded-xl transition-colors self-start sm:self-auto font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Kosongkan Keranjang</span>
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-3xl p-10 sm:p-16 text-center border border-gray-100 shadow-sm max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Keranjang Belanja Masih Kosong
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Anda belum menambahkan produk roster beton ke keranjang. Jelajahi berbagai pilihan motif minimalis dan klasik berkualitas tinggi kami.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-2xl transition-all shadow-md shadow-blue-500/20 active:scale-95"
            >
              <span>Mulai Belanja Roster</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        ) : (
          /* Cart Grid Layout */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => {
                const itemTotal = item.price ? item.price * item.quantity : 0;
                const detailUrl = item.slug ? `/products/${item.slug}` : "/products";

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                  >
                    {/* Product Image */}
                    <Link
                      href={detailUrl}
                      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100 block group"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                          {item.category || "Roster Beton"}
                        </span>
                        {item.dimension && (
                          <span className="text-[11px] text-gray-500">
                            • {item.dimension}
                          </span>
                        )}
                      </div>

                      <Link href={detailUrl} className="block group">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {item.name}
                        </h3>
                      </Link>

                      {item.price ? (
                        <div className="mt-1 flex items-baseline gap-1.5 text-xs text-gray-500">
                          <span>Harga satuan:</span>
                          <span className="font-semibold text-gray-800">
                            Rp {item.price.toLocaleString("id-ID")}
                          </span>
                        </div>
                      ) : (
                        <div className="mt-1 text-xs text-emerald-600 font-medium">
                          Harga konfirmasi via WhatsApp
                        </div>
                      )}

                      {/* Subtotal Display on mobile */}
                      {itemTotal > 0 && (
                        <div className="mt-2 sm:hidden text-xs">
                          <span className="text-gray-500">Subtotal: </span>
                          <span className="font-bold text-blue-600">
                            Rp {itemTotal.toLocaleString("id-ID")}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Quantity Controls & Delete */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                      {/* Subtotal on desktop */}
                      {itemTotal > 0 && (
                        <div className="hidden sm:block text-right">
                          <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Subtotal</span>
                          <span className="text-sm font-extrabold text-blue-600">
                            Rp {itemTotal.toLocaleString("id-ID")}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        {/* Counter */}
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl p-1">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-white shadow-xs text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
                            title="Kurang 1 pcs"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>

                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => {
                              const newQty = parseInt(e.target.value) || 1;
                              updateQuantity(item.id, Math.max(1, newQty));
                            }}
                            className="w-12 text-center bg-transparent border-none text-xs font-bold text-gray-900 focus:outline-none"
                          />

                          <button
                            onClick={() => addToCart(item)}
                            className="w-7 h-7 flex items-center justify-center rounded-lg bg-white shadow-xs text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                            title="Tambah 1 pcs"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Trash Button */}
                        <button
                          onClick={() => setDeleteItem({ id: item.id, name: item.name })}
                          className="w-9 h-9 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-600 flex items-center justify-center transition-colors"
                          title="Hapus dari keranjang"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Continue Shopping Link */}
              <div className="pt-4 flex justify-between items-center">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Tambah Produk Lainnya</span>
                </Link>
              </div>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm sticky top-24 space-y-6">
                <h2 className="text-lg font-extrabold text-gray-900 pb-4 border-b border-gray-100">
                  Ringkasan Pesanan
                </h2>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Jenis Produk</span>
                    <span className="font-semibold text-gray-900">{cart.length} item</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Total Jumlah Roster</span>
                    <span className="font-semibold text-gray-900">{totalItemsCount} pcs</span>
                  </div>

                  {totalPrice > 0 && (
                    <div className="flex justify-between items-baseline pt-3 border-t border-gray-100 text-base">
                      <span className="font-bold text-gray-900">Estimasi Total</span>
                      <span className="text-xl font-extrabold text-blue-600">
                        Rp {totalPrice.toLocaleString("id-ID")}
                      </span>
                    </div>
                  )}
                </div>

                {/* WhatsApp Checkout Button */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${cleanWhatsapp}?text=${whatsappMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md shadow-emerald-500/25 active:scale-[0.99] flex items-center justify-center gap-2.5 text-sm"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                    </svg>
                    <span>Pesan via WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-gray-400 text-center mt-2.5">
                    Format pesanan dan rincian item akan otomatis terisi di chat WhatsApp
                  </p>
                </div>

                {/* Additional Info Cards */}
                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <div className="p-3 bg-gray-50 rounded-xl flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
                      <strong>Pengiriman Armada:</strong> Melayani pengiriman langsung ke Purwakarta, Bandung, Jabodetabek & sekitarnya.
                    </span>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>
                      <strong>Pembayaran Fleksibel:</strong> Transfer Bank (BCA, Mandiri, BRI) & Tunai di workshop pabrik.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Delete Item Confirmation Modal */}
      {deleteItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-7 max-w-sm w-full animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1.5">Hapus Produk?</h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
              Apakah Anda yakin ingin menghapus &quot;{deleteItem.name}&quot; dari keranjang belanja?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteItem(null)}
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clear All Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-7 max-w-sm w-full animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1.5">Kosongkan Keranjang?</h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
              Seluruh daftar item roster yang telah Anda pilih akan dihapus dari keranjang.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleClearAll}
                className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                Kosongkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/products" },
    { name: "Layanan", href: "/layanan" },
    { name: "Galeri", href: "/gallery" },
    { name: "Kontak", href: "/kontak" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                R
              </div>
              <div>
                <span className="text-base sm:text-lg font-extrabold text-gray-900 tracking-tight block leading-tight group-hover:text-blue-600 transition-colors">
                  CV Roster
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium block">
                  Purwakarta
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                    active
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons (Cart & CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Icon Button */}
            <Link
              href="/cart"
              className="relative p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-gray-100/80 transition-all duration-200"
              title="Lihat Keranjang Belanja"
              aria-label="Keranjang belanja"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md shadow-blue-600/30 animate-scale-in">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Quick Contact CTA Button (Desktop) */}
            <Link
              href="/kontak"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-sm shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Hubungi Kami</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-100/80 transition-colors md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Expandable Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-5 shadow-lg space-y-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <Link
              href="/kontak"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors"
            >
              <span>Hubungi Kami / Konsultasi</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

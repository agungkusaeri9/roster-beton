"use client";

import Image from "next/image";
import Link from "next/link";
import { useConfig } from "@/context/ConfigContext";

export default function Hero() {
  const { cleanWhatsapp } = useConfig();

  return (
    <section className="relative bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Pabrik Roster Beton Plered, Purwakarta
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Produsen Roster Beton <span className="text-blue-600">Presisi & Berkualitas</span> Langsung dari Pabrik
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              CV Roster Purwakarta menyediakan aneka motif roster beton minimalis, klasik, dan modern dengan kualitas padat, kokoh, dan presisi tinggi untuk kebutuhan ventilasi dan estetika hunian Anda.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-gray-700 font-medium">
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Bahan Semen Pilihan</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sudut Siku Presisi</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100 col-span-2 sm:col-span-1">
                <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Harga Tangan Pertama</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-3">
              <Link
                href="/products"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-blue-500/20 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Lihat Katalog Produk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href={`https://wa.me/${cleanWhatsapp}?text=Halo%20CV%20Roster%20Purwakarta,%20saya%20ingin%20konsultasi%20pemesanan%20roster%20beton.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl text-sm transition-all border border-gray-200 text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.37c-.24.68-1.39 1.25-1.92 1.33-.51.08-1.18.11-1.9-.12-.44-.14-1.01-.33-1.74-.65-3.08-1.33-5.09-4.41-5.24-4.62-.16-.2-.16-.21-1.25-1.66 0-.01-.01-.01-.01-.02-.85-1.14-.85-2.28-.85-2.67 0-1.42.92-2.12 1.25-2.36.27-.2.62-.25.82-.25.2 0 .4 0 .58.01.19.01.44-.07.69.52.25.61.86 2.1.94 2.25.08.16.13.34.02.55-.1.21-.15.34-.3.51-.15.17-.32.39-.46.52-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.37 2.47 1.52.31.16.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.29.1 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.16 1.44z"/>
                </svg>
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100 group">
              <Image
                src="/images/products/galprod-17.jpeg"
                alt="Roster Beton Berkualitas CV Roster Purwakarta"
                fill
                priority
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/40 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-500 block">Koleksi Terlaris</span>
                  <span className="text-xs font-bold text-gray-900">Roster Beton Motif Minimalis</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-bold">
                  Produksi Pabrik
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

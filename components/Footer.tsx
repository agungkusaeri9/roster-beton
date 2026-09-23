"use client";

import Link from "next/link";
import { useConfig } from "@/context/ConfigContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { getConfig, cleanWhatsapp } = useConfig();

  const companyName = getConfig("company_name", "CV Roster Purwakarta");
  const companyTagline = getConfig(
    "company_tagline",
    "Pabrik spesialis pembuatan roster beton arsitektur berkualitas tinggi di Plered, Purwakarta."
  );
  const email = getConfig("email", "info@rosterbetonpurwakarta.com");
  const phone = getConfig("phone", "0812-3456-7890");
  const address = getConfig(
    "address",
    "Jl. Raya Plered No. 45, Kecamatan Plered, Kabupaten Purwakarta, Jawa Barat 41161"
  );
  const operationalWeekday = getConfig("operational_weekday", "Senin – Jumat: 08.00 – 17.00 WIB");
  const operationalSaturday = getConfig("operational_saturday", "Sabtu: 08.00 – 15.00 WIB");
  const operationalSunday = getConfig("operational_sunday", "Minggu & Hari Libur: WhatsApp Tetap Aktif");

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-850">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Profile (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                R
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block leading-tight">
                  {companyName}
                </span>
                <span className="text-[11px] text-blue-400 font-medium">
                  Produsen Roster Beton Presisi
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {companyTagline} Melayani pesanan eceran, proyek gedung, perumahan, hingga cetakan custom motif ke seluruh Jawa Barat dan sekitarnya.
            </p>

            {/* Quality Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[10px] font-semibold text-gray-300 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-lg">
                Pabrik Langsung
              </span>
              <span className="text-[10px] font-semibold text-gray-300 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-lg">
                Presisi Hidrolik
              </span>
              <span className="text-[10px] font-semibold text-gray-300 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-lg">
                Garansi Kirim Aman
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-gray-800 pb-2">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Galeri Foto & Proyek
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Keranjang Belanja
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories (3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-gray-800 pb-2">
              Kategori Populer
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/products?category=Minimalis"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Roster Motif Minimalis
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Klasik"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Roster Motif Klasik & Elegan
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Geometri"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Roster Motif Geometri Modern
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Motif+Floral"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Roster Motif Bunga / Floral
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Premium"
                  className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-150"
                >
                  Roster Kualitas Premium Halus
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-blue-400 hover:underline inline-block text-xs font-semibold"
                >
                  + Pesan Motif Custom &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Info (3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-gray-800 pb-2">
              Kontak Pabrik & Jam Kerja
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-xs leading-relaxed">
                  {address}
                </span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.37c-.24.68-1.39 1.25-1.92 1.33-.51.08-1.18.11-1.9-.12-.44-.14-1.01-.33-1.74-.65-3.08-1.33-5.09-4.41-5.24-4.62-.16-.2-.16-.21-1.25-1.66 0-.01-.01-.01-.01-.02-.85-1.14-.85-2.28-.85-2.67 0-1.42.92-2.12 1.25-2.36.27-.2.62-.25.82-.25.2 0 .4 0 .58.01.19.01.44-.07.69.52.25.61.86 2.1.94 2.25.08.16.13.34.02.55-.1.21-.15.34-.3.51-.15.17-.32.39-.46.52-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.37 2.47 1.52.31.16.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.29.1 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.16 1.44z"/>
                </svg>
                <a
                  href={`https://wa.me/${cleanWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
                >
                  {phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-300 hover:text-blue-400 text-xs transition-colors"
                >
                  {email}
                </a>
              </div>

              {/* Operational Hours Card */}
              <div className="pt-2">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-2.5 text-[11px] space-y-1 text-gray-400">
                  <div className="flex justify-between">
                    <span>Senin – Jumat</span>
                    <span className="text-gray-200 font-medium">{operationalWeekday.replace(/.*:\s*/, "")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="text-gray-200 font-medium">{operationalSaturday.replace(/.*:\s*/, "")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu & Libur</span>
                    <span className="text-emerald-400 font-medium">{operationalSunday.includes("WhatsApp") ? "WhatsApp Aktif" : operationalSunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Copyright & Notes) */}
        <div className="border-t border-gray-850 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {currentYear} <span className="text-gray-400 font-medium">{companyName}</span>. Seluruh hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-gray-600">Plered, Purwakarta, Jawa Barat</span>
            <span className="text-gray-700">•</span>
            <Link href="/kontak" className="text-gray-400 hover:text-gray-300 transition-colors">
              Bantuan & FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

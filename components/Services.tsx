"use client";

import Link from "next/link";
import { useConfig } from "@/context/ConfigContext";

export default function Services() {
  const { cleanWhatsapp } = useConfig();

  const services = [
    {
      title: "Produksi Roster Presisi",
      desc: "Pembuatan roster beton presisi tinggi dengan sudut siku 90 derajat yang rapi, padat, dan anti-retak.",
      icon: (
        <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Armada Pengiriman Pabrik",
      desc: "Pengiriman cepat dan aman menggunakan armada truk pabrik ke Purwakarta, Bandung, Jabodetabek & sekitarnya.",
      icon: (
        <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h8m-4 0v10M7 14h10a1 1 0 001-1v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4a1 1 0 001 1zM7 9h10a1 1 0 001-1V5a1 1 0 00-1-1H7a1 1 0 00-1 1v3a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      title: "Konsultasi Kebutuhan Volume",
      desc: "Bebas berkonsultasi untuk estimasi luas dinding, perhitungan jumlah pcs roster, serta pemilihan motif yang serasi.",
      icon: (
        <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Custom Motif & Skala Tender",
      desc: "Melayani pesanan volume besar untuk proyek perumahan, gedung komersial, masjid, dan tender konstruksi.",
      icon: (
        <svg className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
            Layanan & Keunggulan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Solusi Menyeluruh Kebutuhan Roster Anda
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Tidak hanya memasok produk, kami mendampingi kelancaran proyek konstruksi Anda mulai dari pemilihan motif hingga pengiriman ke lokasi.
          </p>
        </div>

        {/* 4 Service Cards with Uniform Color & No BG change on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center justify-between group"
            >
              <div className="space-y-4 flex flex-col items-center w-full">
                {/* Large Centered Icon (Uniform blue-50 and text-blue-600) */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {svc.icon}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Link */}
              <div className="pt-4 mt-4 border-t border-gray-100/80 w-full">
                <Link
                  href="/layanan"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group/link"
                >
                  <span>Selengkapnya</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Consultation Card */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Siap Memulai Proyek Konstruksi Anda?
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm max-w-xl leading-relaxed">
              Hubungi tim marketing kami sekarang untuk konsultasi gratis dan penawaran harga terbaik langsung dari pabrik CV Roster Purwakarta.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={`https://wa.me/${cleanWhatsapp}?text=Halo%20CV%20Roster%20Purwakarta,%20saya%20ingin%20konsultasi%20pemesanan%20roster%20beton.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:bg-blue-50 active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.37c-.24.68-1.39 1.25-1.92 1.33-.51.08-1.18.11-1.9-.12-.44-.14-1.01-.33-1.74-.65-3.08-1.33-5.09-4.41-5.24-4.62-.16-.2-.16-.21-1.25-1.66 0-.01-.01-.01-.01-.02-.85-1.14-.85-2.28-.85-2.67 0-1.42.92-2.12 1.25-2.36.27-.2.62-.25.82-.25.2 0 .4 0 .58.01.19.01.44-.07.69.52.25.61.86 2.1.94 2.25.08.16.13.34.02.55-.1.21-.15.34-.3.51-.15.17-.32.39-.46.52-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.37 2.47 1.52.31.16.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.29.1 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.16 1.44z"/>
              </svg>
              <span>Hubungi via WhatsApp</span>
            </a>

            <Link
              href="/kontak"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all border border-white/20 text-center"
            >
              Info Kontak
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

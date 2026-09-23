import Link from "next/link";

interface ServiceItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: (props: { className?: string }) => React.JSX.Element;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Produksi Roster Beton Presisi",
    tagline: "Kapasitas Ribuan Unit / Hari",
    description:
      "Memproduksi berbagai variasi motif roster arsitektural dan ukuran presisi menggunakan material semen berkualitas tinggi dengan mesin vibrasi hidrolik bertekanan.",
    features: [
      "Kepadatan tinggi, kokoh & tidak mudah retak",
      "Permukaan halus & siku presisi 90 derajat",
      "Pilihan puluhan motif modern, klasik, & geometri",
    ],
    icon: ({ className = "w-10 h-10" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Pengiriman Aman ke Lokasi",
    tagline: "Armada Sendiri & Bergaransi",
    description:
      "Layanan distribusi material langsung dari workshop Plered ke area Purwakarta, Karawang, Bandung Raya, Subang, Bekasi, dan seluruh wilayah Jawa Barat.",
    features: [
      "Armada pick-up & truk khusus pengiriman material",
      "Garansi ganti baru jika terdapat unit yang retak",
      "Jadwal pengiriman tepat waktu & fleksibel",
    ],
    icon: ({ className = "w-10 h-10" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h8m-4 0v10M7 14h10a1 1 0 001-1v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4a1 1 0 001 1zM7 9h10a1 1 0 001-1V5a1 1 0 00-1-1H7a1 1 0 00-1 1v3a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Jasa Pemasangan Profesional",
    tagline: "Tukang Berpengalaman & Rapi",
    description:
      "Layanan instalasi dinding partisi, pagar roster, hingga fasad gedung oleh tukang spesialis yang berpengalaman untuk hasil yang lurus, kuat, dan presisi.",
    features: [
      "Susunan nat semen simetris & lurus rapi",
      "Instalasi besi stek tulangan pengikat kokoh",
      "Finishing bersih siap proses pelapisan cat/coating",
    ],
    icon: ({ className = "w-10 h-10" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Konsultasi Teknis & Hitung Kebutuhan",
    tagline: "100% Gratis Tanpa Syarat",
    description:
      "Bantuan perhitungan luasan bidang dinding, estimasi total jumlah pcs roster yang presisi untuk meminimalkan sisa material, dan rekomendasi kombinasi motif.",
    features: [
      "Kalkulasi volume kebutuhan akurat & efisien",
      "Rekomendasi model motif sesuai konsep rumah",
      "Penawaran harga pabrik terbaik transparan",
    ],
    icon: ({ className = "w-10 h-10" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Desain Motif Custom & Cetakan Khusus",
    tagline: "Eksklusif Proyek & Arsitektur",
    description:
      "Menerima pesanan moulding cetakan baru dan motif kustom eksklusif untuk proyek arsitektur, gedung, hotel, villa, perumahan, maupun masjid.",
    features: [
      "Realisasi gambar 3D & sketsa desain arsitek",
      "Kerahasiaan cetakan motif eksklusif proyek Anda",
      "Ketebalan & spesifikasi dapat disesuaikan",
    ],
    icon: ({ className = "w-10 h-10" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Quality Control & Curing Standar",
    tagline: "Kualitas Terjamin Sebelum Dikirim",
    description:
      "Setiap batch produksi melewati masa pengeringan hidrasi yang optimal dan penyortiran ketat sehingga produk yang terkirim dalam kondisi terbaik.",
    features: [
      "Perawatan pengeringan bertahap menjaga mutu beton",
      "Sortir ketat keseragaman ukuran & tanpa rompal",
      "Palet kayu pelindung siap handling muat-bongkar",
    ],
    icon: ({ className = "w-10 h-10" }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const workSteps = [
  {
    step: "01",
    title: "Konsultasi Kebutuhan",
    desc: "Sampaikan ukuran dinding, pilihan motif, atau sketsa rencana proyek Anda kepada kami via WhatsApp atau telepon.",
  },
  {
    step: "02",
    title: "Penawaran & Sampel",
    desc: "Kami berikan estimasi jumlah unit, penawaran harga pabrik terbaik, serta foto detail/sampel produk jika diperlukan.",
  },
  {
    step: "03",
    title: "Produksi & Curing",
    desc: "Pesanan disiapkan langsung dari stok workshop atau diproduksi dengan quality control terjamin.",
  },
  {
    step: "04",
    title: "Pengiriman & Instalasi",
    desc: "Armada kami mengantarkan material aman sampai di lokasi proyek Anda, siap dipasang oleh tim ahli.",
  },
];

export default function ServiceClient() {
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
              Layanan Kami
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Layanan Pabrik & Konstruksi Roster Beton
            </h1>
            <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
              Solusi lengkap mulai dari produksi langsung dari pabrik, pengiriman bergaransi, konsultasi teknis gratis, hingga jasa pasang berpengalaman di Purwakarta dan sekitarnya.
            </p>
          </div>

          <div className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-xl border border-gray-200 self-start sm:self-auto font-medium">
            Total: <span className="font-bold text-gray-900">{services.length}</span> Layanan Unggulan
          </div>
        </div>

        {/* Services Grid (6 Cards with Uniform Centered Icons) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-center group"
              >
                <div className="space-y-5 flex flex-col items-center">
                  {/* Big Centered Icon Container (Uniform blue-50 and text-blue-600, no bg change on hover) */}
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-3xl flex items-center justify-center bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300" />
                  </div>

                  {/* Tagline Badge */}
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-500 bg-gray-100/80 px-3.5 py-1 rounded-full border border-gray-200/60 inline-block">
                    {service.tagline}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Features (Left-aligned within card) */}
                  <div className="w-full pt-4 border-t border-gray-100 space-y-2.5 text-left">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-gray-50 w-full">
                  <Link
                    href="/kontak"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border border-gray-200/80 hover:border-transparent shadow-sm"
                  >
                    <span>Konsultasi Layanan Ini</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow / Tahapan Pemesanan */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Tahapan Pemesanan & Layanan
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              Bagaimana Proses Kerjasama dengan Kami?
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              Alur pemesanan roster beton yang simpel, transparan, dan terpercaya mulai dari diskusi awal hingga barang diterima di lokasi proyek.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
            {workSteps.map((ws, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100/80 relative space-y-2 hover:border-blue-200 transition-colors"
              >
                <div className="text-2xl font-black text-blue-600 font-mono opacity-80">
                  {ws.step}
                </div>
                <h3 className="text-sm font-bold text-gray-900">{ws.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold">
              Siap Mewujudkan Fasad & Dinding Roster Impian Anda?
            </h2>
            <p className="text-blue-200 text-xs sm:text-sm max-w-xl">
              Hubungi tim marketing CV Roster Purwakarta sekarang untuk mendapatkan penawaran harga pabrik terbaik dan konsultasi teknis gratis.
            </p>
          </div>

          <Link
            href="/kontak"
            className="px-6 py-2.5 bg-white text-blue-900 font-semibold text-xs sm:text-sm rounded-xl hover:bg-blue-50 transition-colors flex-shrink-0 shadow-sm"
          >
            Hubungi Kami Sekarang &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

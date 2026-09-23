import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image & Badging Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-100">
              <Image
                src="/images/products/galprod-19.jpeg"
                alt="Workshop Produksi CV Roster Purwakarta"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 right-4 sm:bottom-6 sm:-right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-2xl font-extrabold text-blue-600 leading-none">5+ Tahun</div>
              <div className="text-xs text-gray-500 font-medium mt-1">Dedikasi Mutu & Layanan</div>
            </div>
          </div>

          {/* Text & Stats Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                Tentang Perusahaan
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                CV Roster Purwakarta
              </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Kami adalah produsen manufaktur roster beton terpercaya yang berlokasi di sentra kerajinan beton Plered, Purwakarta. Dengan perpaduan material semen pilihan bermutu tinggi dan teknik pencetakan presisi, kami menghasilkan roster beton yang tidak hanya kokoh dan tahan lama, namun juga bernilai estetika tinggi bagi arsitektur modern.
            </p>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-2xl font-extrabold text-blue-600">5+</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Tahun Pengalaman</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-2xl font-extrabold text-blue-600">1.000+</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Proyek Tersuplai</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-2xl font-extrabold text-blue-600">50+</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Pilihan Motif</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-2xl font-extrabold text-blue-600">100%</div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">Semen Bermutu</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/layanan"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <span>Pelajari lebih lanjut tentang workshop kami</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const services = [
  {
    id: 1,
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Produksi Roster Beton",
    description: "Memproduksi berbagai macam roster beton dengan motif dan ukuran sesuai kebutuhan Anda, dengan kualitas terbaik dan standar industri.",
    image: "/images/products/galprod-17.jpeg",
  },
  {
    id: 2,
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4 0v10M7 14h10a1 1 0 001-1v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4a1 1 0 001 1zM7 9h10a1 1 0 001-1V5a1 1 0 00-1-1H7a1 1 0 00-1 1v3a1 1 0 001 1z" />
      </svg>
    ),
    title: "Pengiriman ke Lokasi",
    description: "Layanan pengiriman produk roster beton ke seluruh wilayah Purwakarta dan sekitarnya dengan aman dan tepat waktu.",
    image: "/images/products/galprod-18.jpeg",
  },
  {
    id: 3,
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Pemasangan Roster",
    description: "Layanan pemasangan roster beton oleh tim profesional kami untuk hasil yang rapi, presisi, dan maksimal.",
    image: "/images/products/galprod-19.jpeg",
  },
  {
    id: 4,
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Konsultasi Gratis",
    description: "Konsultasi gratis untuk menentukan jenis, motif, dan jumlah roster beton yang sesuai dengan kebutuhan proyek Anda.",
    image: "/images/products/galprod-20.jpeg",
  },
  {
    id: 5,
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Desain Custom",
    description: "Layanan pembuatan desain roster beton sesuai dengan keinginan dan kebutuhan spesifik proyek Anda.",
    image: "/images/products/galprod-22.jpeg",
  },
  {
    id: 6,
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quality Control",
    description: "Proses quality control ketat untuk memastikan setiap produk roster beton yang keluar dari pabrik memenuhi standar kualitas tinggi.",
    image: "/images/products/galprod-23.jpeg",
  },
];

export default function ServiceClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[300px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/galprod-19.jpeg"
            alt="Layanan Kami"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan profesional untuk kebutuhan proyek konstruksi Anda
          </p>
        </div>
      </section>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Siap Mulai Proyek Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan proyek Anda!
          </p>
          <a
            href="/kontak"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}

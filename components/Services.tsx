export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami tidak hanya menyediakan produk berkualitas, tetapi juga layanan terbaik untuk mendukung proyek Anda.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-500 hover:text-white transition-colors group">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-blue-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
              Produksi Roster Beton
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200">
              Memproduksi berbagai macam roster beton dengan berbagai motif dan ukuran sesuai kebutuhan Anda.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-500 hover:text-white transition-colors group">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-blue-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-4 0v10M7 14h10a1 1 0 001-1v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4a1 1 0 001 1zM7 9h10a1 1 0 001-1V5a1 1 0 00-1-1H7a1 1 0 00-1 1v3a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
              Pengiriman
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200">
              Layanan pengiriman produk ke seluruh wilayah Purwakarta dan sekitarnya dengan aman dan tepat waktu.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-500 hover:text-white transition-colors group">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-blue-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
              Konsultasi
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200">
              Bebas konsultasi untuk menentukan jenis dan jumlah roster beton yang sesuai dengan proyek Anda.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-500 hover:text-white transition-colors group">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-blue-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
              Pemasangan
            </h3>
            <p className="text-gray-600 group-hover:text-gray-200">
              Layanan pemasangan roster beton oleh tim profesional untuk hasil yang rapi dan maksimal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

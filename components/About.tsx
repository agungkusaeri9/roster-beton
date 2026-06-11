import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <Image
              src="/images/products/galprod-19.jpeg"
              alt="Tentang CV Roster Purwakarta"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tentang Kami
            </h2>
            <p className="text-gray-600 mb-4">
              CV Roster Purwakarta adalah perusahaan yang bergerak di bidang produksi roster beton berkualitas. Berlokasi di Plered, Purwakarta, Jawa Barat, kami telah melayani berbagai proyek konstruksi baik skala kecil maupun besar.
            </p>
            <p className="text-gray-600 mb-6">
              Kami berkomitmen untuk menyediakan produk roster beton dengan kualitas terbaik, harga kompetitif, dan layanan yang memuaskan. Semua produk kami dibuat dengan standar kualitas tinggi untuk memastikan ketahanan dan keawetan.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500">5+</div>
                <div className="text-gray-500 text-sm">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500">1000+</div>
                <div className="text-gray-500 text-sm">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500">50+</div>
                <div className="text-gray-500 text-sm">Variasi Produk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

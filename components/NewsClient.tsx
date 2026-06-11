import Image from "next/image";
import Link from "next/link";

// Function to generate slug from title
const generateSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
};

export const news = [
    {
        id: 1,
        title: "Pengenalan Roster Beton: Material Inovatif untuk Konstruksi Modern",
        slug: "pengenalan-roster-beton-material-inovatif-untuk-konstruksi-modern",
        date: "10 Juni 2024",
        excerpt: "Roster beton merupakan material konstruksi yang populer karena keindahan, kekuatan, dan ekonomis. Temukan berbagai keunggulan dan kegunaannya!",
        image: "/images/products/galprod-17.jpeg",
        content: `
      <p>Roster beton merupakan material konstruksi yang telah lama populer di Indonesia, khususnya untuk penggunaan pada pagar, ventilasi, dan elemen dekoratif lainnya. Terbuat dari campuran semen, pasir, dan air yang dicetak dengan berbagai motif menarik, roster beton menawarkan kombinasi unik antara keindahan, kekuatan, dan ekonomis.</p>
      <h2>Keunggulan Roster Beton</h2>
      <ul>
        <li><strong>Kekuatan dan Daya Tahan Tinggi:</strong> Roster beton terkenal awet dan tahan terhadap cuaca, rayap, dan api, sehingga cocok untuk penggunaan luar ruangan.</li>
        <li><strong>Beragam Pilihan Motif:</strong> Tersedia berbagai motif mulai dari yang sederhana hingga yang rumit dan artistik, sesuai dengan selera dan kebutuhan proyek Anda.</li>
        <li><strong>Harga Ekonomis:</strong> Dibanding material dekoratif lain seperti kayu atau besi, roster beton menawarkan harga yang lebih terjangkau namun tetap berkualitas tinggi.</li>
        <li><strong>Ventilasi Alami:</strong> Struktur roster beton memungkinkan udara dan cahaya masuk dengan baik, membuat ruangan terasa lebih sejuk dan hemat energi.</li>
      </ul>
      <h2>Penggunaan Roster Beton</h2>
      <p>Roster beton dapat digunakan untuk berbagai kebutuhan, antara lain:</p>
      <ul>
        <li>Pagar rumah atau gedung</li>
        <li>Ventilasi dinding</li>
        <li>Elemen dekoratif interior dan eksterior</li>
        <li>Pembatas ruangan</li>
        <li>Railing balkon</li>
      </ul>
    `,
    },
    {
        id: 2,
        title: "Tips Memilih Motif Roster Beton yang Sesuai untuk Rumah Anda",
        slug: "tips-memilih-motif-roster-beton-yang-sesuai-untuk-rumah-anda",
        date: "8 Juni 2024",
        excerpt: "Memilih motif roster beton yang tepat bisa membuat rumah Anda terlihat lebih menarik. Berikut tips untuk memilihnya!",
        image: "/images/products/galprod-20.jpeg",
        content: `
      <p>Memilih motif roster beton yang tepat sangat penting untuk menunjang keindahan rumah Anda. Motif yang sesuai akan membuat rumah terlihat lebih harmonis dan menarik. Berikut adalah beberapa tips yang bisa Anda pertimbangkan:</p>
      <h2>1. Sesuaikan dengan Gaya Arsitektur Rumah</h2>
      <p>Pilihlah motif roster yang sesuai dengan gaya arsitektur rumah Anda. Misalnya, jika rumah Anda bergaya modern minimalis, pilihlah motif roster yang sederhana dan bersih. Sedangkan jika rumah bergaya tradisional, pilihlah motif yang lebih rumit dan klasik.</p>
      <h2>2. Pertimbangkan Fungsi Utama</h2>
      <p>Jika roster beton digunakan sebagai pagar, pilihlah motif yang tidak terlalu transparan untuk menjaga privasi. Namun jika digunakan sebagai ventilasi, pilihlah motif yang memungkinkan udara dan cahaya masuk dengan baik.</p>
      <h2>3. Ukuran dan Proporsi</h2>
      <p>Pastikan ukuran roster beton sesuai dengan area yang akan dipasang. Ukuran yang terlalu besar atau kecil bisa membuat tampilan tidak seimbang.</p>
      <h2>4. Konsultasikan dengan Ahli</h2>
      <p>Jika Anda ragu, jangan ragu untuk berkonsultasi dengan kami. Kami siap membantu Anda memilih motif roster beton yang paling sesuai dengan kebutuhan dan selera Anda.</p>
    `,
    },
    {
        id: 3,
        title: "Kelebihan Roster Beton Dibanding Material Konvensional Lainnya",
        slug: "kelebihan-roster-beton-dibanding-material-konvensional-lainnya",
        date: "5 Juni 2024",
        excerpt: "Dibanding dengan kayu atau besi, roster beton memiliki banyak kelebihan yang tidak boleh dilewatkan!",
        image: "/images/products/galprod-22.jpeg",
        content: `
      <p>Roster beton menjadi pilihan favorit banyak orang karena memiliki berbagai kelebihan dibanding material konvensional lainnya seperti kayu, besi, atau genteng tanah.</p>
      <h2>Kelebihan Roster Beton</h2>
      <ul>
        <li><strong>Tahan Rayap:</strong> Tidak seperti kayu yang mudah dimakan rayap, roster beton 100% tahan rayap.</li>
        <li><strong>Tahan Api:</strong> Roster beton tidak mudah terbakar, sehingga lebih aman untuk digunakan.</li>
        <li><strong>Tahan Cuaca:</strong> Tidak mudah lapuk atau karat terkena hujan dan panas.</li>
        <li><strong>Perawatan Mudah:</strong> Cukup dibersihkan dengan air dan sabun secara rutin.</li>
        <li><strong>Harga Terjangkau:</strong> Lebih ekonomis dibanding kayu atau besi.</li>
        <li><strong>Beragam Motif:</strong> Tersedia banyak pilihan motif dan ukuran.</li>
      </ul>
    `,
    },
    {
        id: 4,
        title: "Perawatan Roster Beton agar Tetap Awet dan Indah",
        slug: "perawatan-roster-beton-agar-tetap-awet-dan-indah",
        date: "1 Juni 2024",
        excerpt: "Meskipun roster beton terkenal awet, perawatan rutin tetap dibutuhkan untuk menjaga keindahannya selama bertahun-tahun.",
        image: "/images/products/galprod-23.jpeg",
        content: `
      <p>Perawatan yang tepat akan membuat roster beton Anda tetap terlihat seperti baru meskipun telah bertahun-tahun digunakan.</p>
      <h2>Tips Perawatan Roster Beton</h2>
      <ul>
        <li><strong>Bersihkan Secara Rutin:</strong> Bersihkan roster beton dengan air dan sikat lembut setidaknya sebulan sekali.</li>
        <li><strong>Hindari Bahan Kimia Keras:</strong> Jangan gunakan bahan kimia keras yang bisa merusak permukaan dan warna roster.</li>
        <li><strong>Cek Retakan:</strong> Secara rutin cek apakah ada retakan atau kerusakan pada roster.</li>
        <li><strong>Cat Ulang jika Diperlukan:</strong> Jika warna mulai memudar, Anda bisa mengecatnya dengan cat khusus beton.</li>
      </ul>
    `,
    },
    {
        id: 5,
        title: "Inovasi Motif Roster Beton Terbaru di Tahun 2024",
        slug: "inovasi-motif-roster-beton-terbaru-di-tahun-2024",
        date: "28 Mei 2024",
        excerpt: "Tahun ini muncul berbagai motif roster beton baru yang modern dan menarik untuk berbagai jenis bangunan!",
        image: "/images/products/galprod-24.jpeg",
        content: `
      <p>Tahun 2024 membawa banyak inovasi baru dalam dunia roster beton. Dari motif minimalis modern hingga motif tradisional dengan sentuhan baru, semua tersedia untuk kebutuhan Anda!</p>
      <h2>Motif Populer di Tahun 2024</h2>
      <ul>
        <li>Motif Geometris: Kotak, segitiga, dan lingkaran yang simple namun menarik.</li>
        <li>Motif Alami: Bunga, daun, dan motif alam lainnya.</li>
        <li>Motif Minimalis: Garis-garis sederhana yang cocok untuk rumah modern.</li>
        <li>Motif Batik: Motif batik yang artistik dan penuh budaya.</li>
      </ul>
    `,
    },
    {
        id: 6,
        title: "Penggunaan Roster Beton pada Proyek Komersial",
        slug: "penggunaan-roster-beton-pada-proyek-komersial",
        date: "25 Mei 2024",
        excerpt: "Tidak hanya untuk rumah, roster beton juga banyak digunakan pada proyek komersial seperti toko dan kantor!",
        image: "/images/products/galprod-25.jpeg",
        content: `
      <p>Roster beton bukan hanya untuk penggunaan residensial saja. Banyak proyek komersial seperti toko, kantor, dan gedung perkantoran yang menggunakan roster beton sebagai elemen dekoratif dan fungsional.</p>
      <h2>Keuntungan Menggunakan Roster Beton pada Proyek Komersial</h2>
      <ul>
        <li>Memberikan kesan profesional dan elegan.</li>
        <li>Menghemat biaya pendinginan ruangan karena ventilasi yang baik.</li>
        <li>Tahan lama dan perawatan mudah.</li>
        <li>Harga yang terjangkau untuk skala besar.</li>
      </ul>
    `,
    },
    {
        id: 7,
        title: "Panduan Pemasangan Roster Beton yang Benar dan Aman",
        slug: "panduan-pemasangan-roster-beton-yang-benar-dan-aman",
        date: "20 Mei 2024",
        excerpt: "Pemasangan roster beton harus dilakukan dengan benar agar hasilnya rapi dan aman. Temukan panduan lengkapnya di sini!",
        image: "/images/products/galprod-19.jpeg",
        content: `
      <p>Pemasangan roster beton yang benar sangat penting untuk memastikan keamanan dan keindahan hasil akhir. Berikut adalah panduan singkatnya:</p>
      <h2>Langkah-langkah Pemasangan</h2>
      <ol>
        <li>Siapkan permukaan dinding yang rata dan bersih.</li>
        <li>Siapkan adukan semen pasir yang tidak terlalu cair dan tidak terlalu kental.</li>
        <li>Pasang roster satu per satu dengan rapi dan pastikan posisinya rata.</li>
        <li>Gunakan penggaris dan waterpass untuk memastikan kerapihan.</li>
        <li>Biarkan adukan mengering selama minimal 24 jam sebelum disentuh.</li>
      </ol>
    `,
    },
    {
        id: 8,
        title: "Roster Beton sebagai Elemen Ventilasi Alami",
        slug: "roster-beton-sebagai-elemen-ventilasi-alami",
        date: "15 Mei 2024",
        excerpt: "Roster beton tidak hanya dekoratif, tapi juga berfungsi sebagai ventilasi alami yang hemat energi!",
        image: "/images/products/galprod-26.jpeg",
        content: `
      <p>Salah satu keuntungan utama roster beton adalah kemampuannya sebagai ventilasi alami yang sangat baik. Struktur roster memungkinkan udara segar masuk dan udara panas keluar tanpa membutuhkan listrik.</p>
      <h2>Manfaat Ventilasi Alami dengan Roster Beton</h2>
      <ul>
        <li>Menghemat biaya listrik karena tidak membutuhkan AC atau kipas angin sepanjang hari.</li>
        <li>Menjaga kualitas udara di dalam ruangan tetap segar.</li>
        <li>Mengurangi kelembapan yang bisa menyebabkan jamur.</li>
      </ul>
    `,
    },
    {
        id: 9,
        title: "Harga Roster Beton di Tahun 2024: Faktor yang Mempengaruhinya",
        slug: "harga-roster-beton-di-tahun-2024-faktor-yang-mempengaruhinya",
        date: "10 Mei 2024",
        excerpt: "Harga roster beton bervariasi, tergantung pada motif, ukuran, dan kualitas. Berikut penjelasan lengkapnya!",
        image: "/images/products/galprod-50.jpeg",
        content: `
      <p>Harga roster beton di tahun 2024 bervariasi tergantung pada beberapa faktor penting. Penting untuk memahami faktor-faktor ini agar Anda bisa mendapatkan harga yang sesuai dengan budget dan kualitas yang diinginkan.</p>
      <h2>Faktor yang Mempengaruhi Harga</h2>
      <ul>
        <li><strong>Motif:</strong> Motif yang rumit biasanya lebih mahal.</li>
        <li><strong>Ukuran:</strong> Ukuran yang lebih besar membutuhkan material lebih banyak, sehingga harganya lebih mahal.</li>
        <li><strong>Kualitas:</strong> Kualitas bahan dan proses produksi mempengaruhi harga.</li>
        <li><strong>Jumlah Pesanan:</strong> Pemesanan dalam jumlah besar biasanya mendapatkan diskon khusus.</li>
      </ul>
    `,
    },
    {
        id: 10,
        title: "Proyek Terbaru CV Roster Purwakarta di Wilayah Purwakarta",
        slug: "proyek-terbaru-cv-roster-purwakarta-di-wilayah-purwakarta",
        date: "5 Mei 2024",
        excerpt: "Lihat beberapa proyek terbaru yang kami kerjakan di sekitar Purwakarta dan sekitarnya!",
        image: "/images/products/galprod-48.jpeg",
        content: `
      <p>Kami telah mengerjakan banyak proyek di wilayah Purwakarta dan sekitarnya. Berikut adalah beberapa proyek terbaru kami yang bisa menjadi referensi Anda:</p>
      <h2>Proyek Terbaru</h2>
      <ul>
        <li>Pemasangan roster beton pada pagar rumah di Perumahan Permata, Purwakarta.</li>
        <li>Proyek ventilasi gedung perkantoran di Pusat Bisnis Purwakarta.</li>
        <li>Pagar sekolah di SMA Negeri 2 Purwakarta.</li>
        <li>Renovasi pagar masjid di Plered, Purwakarta.</li>
      </ul>
    `,
    },
];

export default function NewsClient() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[300px] flex items-center">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/products/galprod-26.jpeg"
                        alt="Berita Terbaru"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Berita Terbaru</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Temukan informasi terbaru tentang roster beton dan proyek kami
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {news.map((item) => (
                            <Link
                                key={item.id}
                                href={`/news/${item.slug}`}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-3 mb-4">{item.excerpt}</p>
                                    <div className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center gap-2">
                                        Baca Selengkapnya
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

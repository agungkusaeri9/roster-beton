import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[500px] flex items-center">
            <div className="absolute inset-0 opacity-20">
                <Image
                    src="/images/products/galprod-17.jpeg"
                    alt="Roster Beton"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Roster Beton Berkualitas
                            <span className="text-blue-400 block">Di Plered Purwakarta</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-lg">
                            CV Roster Purwakarta menyediakan berbagai macam roster beton berkualitas tinggi untuk kebutuhan konstruksi Anda. Produk awet, kokoh, dan harga terjangkau.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/products"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                            >
                                Lihat Produk
                            </Link>
                            <Link
                                href="/kontak"
                                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-80 lg:h-96">
                        <Image
                            src="/images/products/galprod-18.jpeg"
                            alt="Produk Roster Beton"
                            fill
                            className="object-cover rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

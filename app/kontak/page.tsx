import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontak CV Roster Purwakarta",
    description: "Hubungi CV Roster Purwakarta untuk informasi lebih lanjut tentang produk dan layanan kami. Kami siap membantu Anda!",
    keywords: "kontak roster beton, telepon roster purwakarta, alamat roster beton",
    openGraph: {
        title: "Kontak CV Roster Purwakarta",
        description: "Hubungi CV Roster Purwakarta untuk informasi lebih lanjut tentang produk dan layanan kami.",
        url: "https://rosterbetonpurwakarta.com/kontak",
        siteName: "CV Roster Purwakarta",
        locale: "id_ID",
        type: "website",
    },
};

export default function KontakPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <ContactClient />
            </main>
            <Footer />
        </div>
    );
}

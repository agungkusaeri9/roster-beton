import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BottomNavigation from "@/components/BottomNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Roster Purwakarta | Roster Beton Berkualitas di Plered Purwakarta",
  description: "CV Roster Purwakarta menyediakan roster beton berkualitas tinggi di Plered, Purwakarta, Jawa Barat. Produk berkualitas, harga terjangkau, layanan profesional. Hubungi kami sekarang!",
  keywords: "roster beton, roster purwakarta, roster plered, beton precast, pagar beton, pagar roster, CV Roster Purwakarta",
  openGraph: {
    title: "CV Roster Purwakarta | Roster Beton Berkualitas di Plered Purwakarta",
    description: "CV Roster Purwakarta menyediakan roster beton berkualitas tinggi di Plered, Purwakarta, Jawa Barat. Produk berkualitas, harga terjangkau, layanan profesional.",
    url: "https://rosterbetonpurwakarta.com",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        <ToastProvider>
          <CartProvider>
            {children}
            <FloatingWhatsApp />
            <BottomNavigation />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

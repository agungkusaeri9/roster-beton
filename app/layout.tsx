import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import { ConfigProvider } from "@/context/ConfigContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BottomNavigation from "@/components/BottomNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rosterbetonpurwakarta.com"),
  title: {
    default: "CV Roster Purwakarta | Pabrik Roster Beton Berkualitas di Plered",
    template: "%s | CV Roster Purwakarta",
  },
  description:
    "CV Roster Purwakarta adalah pabrik manufaktur dan supplier roster beton berkualitas tinggi di Plered, Purwakarta, Jawa Barat. Siku presisi, padat, kokoh, melayani kirim ke seluruh Jawa Barat & Jabodetabek.",
  keywords: [
    "roster beton",
    "roster purwakarta",
    "pabrik roster plered",
    "jual roster beton",
    "harga roster beton",
    "roster minimalis",
    "roster beton modern",
    "ventilasi beton",
    "CV Roster Purwakarta",
  ],
  authors: [{ name: "CV Roster Purwakarta", url: "https://rosterbetonpurwakarta.com" }],
  creator: "CV Roster Purwakarta",
  publisher: "CV Roster Purwakarta",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CV Roster Purwakarta | Pabrik Roster Beton Berkualitas",
    description:
      "Produsen spesialis aneka motif roster beton arsitektur presisi & kokoh langsung dari pabrik di Plered, Purwakarta.",
    url: "https://rosterbetonpurwakarta.com",
    siteName: "CV Roster Purwakarta",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Roster Purwakarta | Pabrik Roster Beton Berkualitas",
    description:
      "Produsen spesialis aneka motif roster beton arsitektur presisi & kokoh langsung dari pabrik di Plered, Purwakarta.",
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
        <ConfigProvider>
          <ToastProvider>
            <CartProvider>
              {children}
              <FloatingWhatsApp />
              <BottomNavigation />
            </CartProvider>
          </ToastProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}

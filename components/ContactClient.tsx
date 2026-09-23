"use client";

import { useState } from "react";
import Link from "next/link";
import { useConfig } from "@/context/ConfigContext";

export default function ContactClient() {
  const { getConfig, cleanWhatsapp } = useConfig();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Pemesanan Roster",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic business info from database
  const businessAddress = getConfig(
    "address",
    "Jl. Raya Plered No. 45, Kecamatan Plered, Kabupaten Purwakarta, Jawa Barat 41161"
  );
  const businessPhone = getConfig("phone", "0812-3456-7890");
  const businessWhatsapp = getConfig("whatsapp", "081234567890");
  const businessEmail = getConfig("email", "info@rosterbetonpurwakarta.com");
  const operationalWeekday = getConfig("operational_weekday", "Senin – Jumat: 08.00 – 17.00 WIB");
  const operationalSaturday = getConfig("operational_saturday", "Sabtu: 08.00 – 15.00 WIB");
  const operationalSunday = getConfig("operational_sunday", "Minggu & Hari Libur: WhatsApp Tetap Aktif");
  const googleMapsUrl = getConfig(
    "google_maps_url",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.278534430604!2d107.4491153749726!3d-6.511323763642216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69123456789abcd!2sPlered%2C%20Purwakarta%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
  );
  const googleMapsDirectionUrl = getConfig(
    "google_maps_direction_url",
    "https://maps.google.com/?q=Plered+Purwakarta"
  );

  const topics = [
    "Pemesanan Roster",
    "Konsultasi Ukuran & Motif",
    "Penawaran Proyek / Tender",
    "Kunjungan Workshop",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo CV Roster Purwakarta, perkenalkan saya *${formData.name}*.\n\n*Keperluan:* ${formData.topic}\n*Email:* ${formData.email || "-"}\n*Telepon:* ${formData.phone}\n*Pesan:* ${formData.message}\n\nMohon info dan tanggapan dari tim CV Roster. Terima kasih!`;
    const waUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
      text
    )}`;

    setIsSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Breadcrumb Navigation - Consistent max-w-7xl */}
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
              Kontak
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Simple & Clean Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-gray-500 text-sm mt-1.5 max-w-2xl">
            Silakan hubungi kami untuk informasi produk, penawaran harga pabrik, konsultasi desain custom, atau kunjungan langsung ke workshop kami di Plered, Purwakarta.
          </p>
        </div>

        {/* 2-Column Grid (Consistent max-w-7xl) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels & Operational Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-base font-bold text-gray-900 pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>Informasi Kontak Pabrik</span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                  Respon Cepat
                </span>
              </h2>

              <div className="space-y-4 text-sm">
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.37c-.24.68-1.39 1.25-1.92 1.33-.51.08-1.18.11-1.9-.12-.44-.14-1.01-.33-1.74-.65-3.08-1.33-5.09-4.41-5.24-4.62-.16-.2-.16-.21-1.25-1.66 0-.01-.01-.01-.01-.02-.85-1.14-.85-2.28-.85-2.67 0-1.42.92-2.12 1.25-2.36.27-.2.62-.25.82-.25.2 0 .4 0 .58.01.19.01.44-.07.69.52.25.61.86 2.1.94 2.25.08.16.13.34.02.55-.1.21-.15.34-.3.51-.15.17-.32.39-.46.52-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.37 2.47 1.52.31.16.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.29.1 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.16 1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">WhatsApp / Konsultasi Cepat</span>
                    <a
                      href={`https://wa.me/${cleanWhatsapp}?text=Halo%20CV%20Roster%20Purwakarta,%20saya%20ingin%20konsultasi%20pemesanan%20roster%20beton.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {businessWhatsapp}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Telepon Kantor Pabrik</span>
                    <a
                      href={`tel:${businessPhone.replace(/\s+/g, "")}`}
                      className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {businessPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Email Resmi</span>
                    <a
                      href={`mailto:${businessEmail}`}
                      className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {businessEmail}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Alamat Workshop & Gudang</span>
                    <span className="font-medium text-gray-800 leading-relaxed block">{businessAddress}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Operational Hours Card (Kelihatan Jelas & Rapi) */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Jam Operasional Pabrik & Pelayanan
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Buka Setiap Hari Kerja
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900 block">Senin – Jumat</span>
                    <span className="text-[11px] text-gray-500">Produksi & Pengiriman Armada</span>
                  </div>
                  <span className="font-bold text-gray-900 text-xs sm:text-sm">
                    08.00 – 17.00 WIB
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900 block">Sabtu</span>
                    <span className="text-[11px] text-gray-500">Workshop & Konsultasi</span>
                  </div>
                  <span className="font-bold text-gray-900 text-xs sm:text-sm">
                    08.00 – 15.00 WIB
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/50 border border-blue-100/60">
                  <div>
                    <span className="font-semibold text-gray-900 block">Minggu & Hari Libur</span>
                    <span className="text-[11px] text-gray-500">Layanan Chat Online</span>
                  </div>
                  <span className="font-bold text-blue-600 text-xs sm:text-sm flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.37c-.24.68-1.39 1.25-1.92 1.33-.51.08-1.18.11-1.9-.12-.44-.14-1.01-.33-1.74-.65-3.08-1.33-5.09-4.41-5.24-4.62-.16-.2-.16-.21-1.25-1.66 0-.01-.01-.01-.01-.02-.85-1.14-.85-2.28-.85-2.67 0-1.42.92-2.12 1.25-2.36.27-.2.62-.25.82-.25.2 0 .4 0 .58.01.19.01.44-.07.69.52.25.61.86 2.1.94 2.25.08.16.13.34.02.55-.1.21-.15.34-.3.51-.15.17-.32.39-.46.52-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.37 2.47 1.52.31.16.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.29.1 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.16 1.44z"/>
                    </svg>
                    WhatsApp Aktif 24 Jam
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">Lokasi Workshop di Google Maps</span>
                <a
                  href={googleMapsDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Buka Rute Navigasi</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="rounded-xl overflow-hidden aspect-video bg-gray-100 border border-gray-100">
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi CV Roster Purwakarta"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 pb-1">
                  Kirim Pesan & Konsultasi Proyek
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Isi formulir di bawah ini untuk terhubung langsung dengan admin kami via WhatsApp.
                </p>
              </div>

              {isSubmitted && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm p-4 rounded-xl flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold block">Pesan Berhasil Disiapkan!</span>
                    <span>WhatsApp telah dibuka. Jika belum terbuka otomatis, silakan klik tombol kirim lagi.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-gray-700">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 bg-gray-50/50 focus:bg-white"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-gray-700">
                      Nomor WhatsApp / HP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Contoh: 08123456789"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-gray-700">
                      Email <span className="text-gray-400 font-normal">(Opsional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 bg-gray-50/50 focus:bg-white"
                    />
                  </div>

                  {/* Topic */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-gray-700">
                      Keperluan / Topik
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 bg-gray-50/50 focus:bg-white"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block font-semibold text-gray-700">
                    Pesan / Rincian Kebutuhan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan motif yang diminati, estimasi jumlah roster, atau ukuran dinding proyek Anda..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 bg-gray-50/50 focus:bg-white resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md shadow-blue-500/20 active:scale-[0.99] flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.79 14.37c-.24.68-1.39 1.25-1.92 1.33-.51.08-1.18.11-1.9-.12-.44-.14-1.01-.33-1.74-.65-3.08-1.33-5.09-4.41-5.24-4.62-.16-.2-.16-.21-1.25-1.66 0-.01-.01-.01-.01-.02-.85-1.14-.85-2.28-.85-2.67 0-1.42.92-2.12 1.25-2.36.27-.2.62-.25.82-.25.2 0 .4 0 .58.01.19.01.44-.07.69.52.25.61.86 2.1.94 2.25.08.16.13.34.02.55-.1.21-.15.34-.3.51-.15.17-.32.39-.46.52-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.16 1.37 2.47 1.52.31.16.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.29.1 1.83.86 2.14 1.02.31.15.52.23.6.36.08.13.08.76-.16 1.44z"/>
                  </svg>
                  <span>Kirim Pesan Langsung via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

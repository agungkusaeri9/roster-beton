"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigMap } from "@/types";
import { fetchConfigs } from "@/services/configService";

// Default fallback values
const DEFAULT_CONFIGS: ConfigMap = {
  company_name: "CV Roster Purwakarta",
  company_tagline: "Produsen Roster Beton Presisi & Berkualitas di Plered, Purwakarta",
  email: "info@rosterbetonpurwakarta.com",
  phone: "0812-3456-7890",
  whatsapp: "081234567890",
  address: "Jl. Raya Plered No. 45, Kecamatan Plered, Kabupaten Purwakarta, Jawa Barat 41161",
  operational_weekday: "Senin – Jumat: 08.00 – 17.00 WIB",
  operational_saturday: "Sabtu: 08.00 – 15.00 WIB",
  operational_sunday: "Minggu & Hari Libur: WhatsApp Tetap Aktif",
  google_maps_url:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.278534430604!2d107.4491153749726!3d-6.511323763642216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69123456789abcd!2sPlered%2C%20Purwakarta%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid",
  google_maps_direction_url: "https://maps.google.com/?q=Plered+Purwakarta",
};

interface ConfigContextType {
  configs: ConfigMap;
  getConfig: (key: string, fallback?: string) => string;
  cleanWhatsapp: string;
  isLoading: boolean;
}

const ConfigContext = createContext<ConfigContextType>({
  configs: DEFAULT_CONFIGS,
  getConfig: (key, fallback = "") => DEFAULT_CONFIGS[key] || fallback,
  cleanWhatsapp: "6281234567890",
  isLoading: true,
});

export function ConfigProvider({
  children,
  initialConfigs,
}: {
  children: React.ReactNode;
  initialConfigs?: ConfigMap | null;
}) {
  const [configs, setConfigs] = useState<ConfigMap>(initialConfigs || DEFAULT_CONFIGS);
  const [isLoading, setIsLoading] = useState(!initialConfigs);

  useEffect(() => {
    fetchConfigs()
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setConfigs((prev) => ({ ...prev, ...data }));
        }
      })
      .catch((err) => console.error("Failed to load configs from backend:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const getConfig = (key: string, fallback: string = ""): string => {
    return configs[key] || DEFAULT_CONFIGS[key] || fallback;
  };

  const rawWhatsapp = getConfig("whatsapp", "081234567890");
  let cleanWhatsapp = rawWhatsapp.replace(/\D/g, "");
  if (cleanWhatsapp.startsWith("0")) {
    cleanWhatsapp = "62" + cleanWhatsapp.slice(1);
  }

  return (
    <ConfigContext.Provider
      value={{
        configs,
        getConfig,
        cleanWhatsapp,
        isLoading,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  return useContext(ConfigContext);
}

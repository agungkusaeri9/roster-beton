import apiClient from "@/lib/axios";
import { Config, ConfigMap, APIResponse } from "@/types";

/**
 * Fetch all configs as a key-value dictionary map: { [key]: value }
 */
export async function fetchConfigs(): Promise<ConfigMap> {
  try {
    const response = await apiClient.get<APIResponse<ConfigMap>>("/configs");
    return response.data?.data || {};
  } catch (error) {
    console.error("Error fetching configs map:", error);
    return {};
  }
}

/**
 * Fetch all configs as an array list of Config entities
 */
export async function fetchConfigsList(): Promise<Config[]> {
  try {
    const response = await apiClient.get<APIResponse<Config[]>>("/configs?format=list");
    return response.data?.data || [];
  } catch (error) {
    console.error("Error fetching configs list:", error);
    return [];
  }
}

/**
 * Fetch a single config item by its key
 */
export async function fetchConfigByKey(key: string): Promise<Config | null> {
  try {
    const response = await apiClient.get<APIResponse<Config>>(`/configs/${key}`);
    return response.data?.data || null;
  } catch (error) {
    console.error(`Error fetching config for key '${key}':`, error);
    return null;
  }
}

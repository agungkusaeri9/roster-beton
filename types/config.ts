export interface Config {
  id: number;
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
}

export type ConfigMap = Record<string, string>;

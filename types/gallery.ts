export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  alt_text?: string;
  sort_order?: number;
  created_at?: string;
  updated_at?: string;
}

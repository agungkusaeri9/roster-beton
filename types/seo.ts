export interface SEO {
  id: number;
  reference_type: string;
  reference_id: number;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  canonical_url?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_type?: string;
  structured_data?: string;
}

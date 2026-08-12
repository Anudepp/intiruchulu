export interface ComboItem {
  productId: string;
  quantity: number;
  weight?: string; // e.g., "250g" or "250 grams"
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  image: string;
  items: ComboItem[];
  originalPrice: number;
  comboPrice: number;
  isAvailable: boolean;
}
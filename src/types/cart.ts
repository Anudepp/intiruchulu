export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  weight: string;
}

export interface CartState {
  items: CartItem[];
}
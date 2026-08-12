
export type CartItemType = "product" | "combo";
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  weight: string;
  type?: CartItemType;
}

export interface CartItemIdentifier {
  id: string;
  weight: string;
}

export interface CartState {
  items: CartItem[];
}


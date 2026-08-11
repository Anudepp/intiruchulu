export interface ProductQuantity {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  nameTelugu: string;
  nameEnglish: string;
  category: "podis" | "pacchadi" | "staples";
  image: string;
  ingredients: string[];
  //processOfMaking: string[];
  quantities: ProductQuantity[];
  flavorProfile: string;
  servingSuggestions: string[];
  storageInstructions: string[];
}
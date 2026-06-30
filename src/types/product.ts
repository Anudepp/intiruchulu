export interface Product {
  id: string;
  nameTelugu: string;
  nameEnglish: string;
  basePrice: number;
  category: "podis" | "pacchadi" | "staples";
  image: string;
}
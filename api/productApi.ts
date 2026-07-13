import apiClient from "./apiClient";
import type { Product } from "../src/types/product";

export async function getProducts(): Promise<Product[]> {
  const response = await apiClient.get<Product[]>("/products");
  return response.data;
}
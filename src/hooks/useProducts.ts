import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../../api/productApi";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}
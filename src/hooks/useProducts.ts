import { useCallback, useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../../api/productApi";
import { getApiErrorMessage } from "../../api/errorHandler";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
  setError(getApiErrorMessage(error));
} finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
}
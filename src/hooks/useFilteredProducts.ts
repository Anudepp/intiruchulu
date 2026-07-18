import { useMemo } from "react";
import type { Product } from "../types/product";
import { filterProducts } from "../utils/filterProducts";

export function useFilteredProducts(
  products: Product[],
  searchQuery: string
) {
  return useMemo(() => {
    return filterProducts(products, searchQuery);
  }, [products, searchQuery]);
}
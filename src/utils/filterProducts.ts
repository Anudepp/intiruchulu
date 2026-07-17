import type { Product } from "../types/product";

export function filterProducts(
  products: Product[],
  searchQuery: string
): Product[] {
  const query = searchQuery.trim().toLowerCase();

  if (!query) {
    return products;
  }

  return products.filter((product) => {
    return (
      product.nameEnglish.toLowerCase().includes(query) ||
      product.nameTelugu.toLowerCase().includes(query)
    );
  });
}
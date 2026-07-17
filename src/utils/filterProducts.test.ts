import { describe, expect, it } from "vitest";
import { filterProducts } from "./filterProducts";
import { products } from "../data/products";

describe("filterProducts", () => {
  it("returns all products when the search query is empty", () => {
    const result = filterProducts(products, "");

    expect(result).toEqual(products);
  });

  it("filters products by English name", () => {
    const result = filterProducts(products, "garlic");

    expect(result).toHaveLength(1);
    expect(result[0].nameEnglish).toBe("Garlic Chili Powder");
  });

  it("filters products by Telugu name", () => {
    const result = filterProducts(products, "గోంగూర");

    expect(result).toHaveLength(1);
    expect(result[0].nameEnglish).toBe("Gongura Pickle");
  });

  it("performs a case-insensitive search", () => {
    const result = filterProducts(products, "GARLIC");

    expect(result).toHaveLength(1);
    expect(result[0].nameEnglish).toBe("Garlic Chili Powder");
  });

  it("returns an empty array when no products match", () => {
    const result = filterProducts(products, "xyz123");

    expect(result).toEqual([]);
  });
});
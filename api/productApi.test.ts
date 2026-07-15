import { describe, it, expect, vi, beforeEach } from "vitest";
import apiClient from "./apiClient";
import { getProducts } from "./productApi";

vi.mock("./apiClient", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("productApi", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return products from the API", async () => {
    const mockProducts = [
      {
        id: "karivepaku-podi",
        nameEnglish: "Curry leaves powder",
        nameTelugu: "కరివేపాకు పొడి",
        basePrice: 700,
        category: "podis",
        image: "/menu/KarivepakuPodi.png",
      },
    ];

    vi.mocked(apiClient.get).mockResolvedValue({
      data: mockProducts,
    });

    const products = await getProducts();

    expect(apiClient.get).toHaveBeenCalledWith("/products");
    expect(products).toEqual(mockProducts);
  });

  it("should throw an error when the API request fails", async () => {
    vi.mocked(apiClient.get).mockRejectedValue(
      new Error("Network Error")
    );

    await expect(getProducts()).rejects.toThrow(
      "Network Error"
    );
  });
});
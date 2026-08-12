import type { Combo } from "../types/combo";

export const combos: Combo[] = [
  {
    id: "andhra-essentials",
    name: "Andhra Essentials Combo",
    description:
      "A delicious combination of our most-loved podi and pickle favorites.",
    image: "/combos/AndhraEssentials.png",
    items: [
      {
        productId: "pappula-podi",
        quantity: 1,
        weight: "250g",
      },
      {
        productId: "charu-podi",
        quantity: 1,
        weight: "250g",
      },
      {
        productId: "gongura-pickle",
        quantity: 1,
        weight: "250g",
      },
    ],
    originalPrice: 525,
    comboPrice: 475,
    isAvailable: true,
  },
  {
    id: "podi-lovers",
    name: "Podi Lovers Combo",
    description:
      "A flavorful selection of traditional podis for everyday meals.",
    image: "/combos/PodiLovers.png",
    items: [
      {
        productId: "pappula-podi",
        quantity: 1,
        weight: "250g",
      },
      {
        productId: "vellulli-karam",
        quantity: 1,
        weight: "250g",
      },
      {
        productId: "charu-podi",
        quantity: 1,
        weight: "250g",
      },
    ],
    originalPrice: 525,
    comboPrice: 475,
    isAvailable: true,
  },
  {
    id: "pickle-favorites",
    name: "Pickle Favorites Combo",
    description:
      "Three of our popular homemade pickles together in one delicious combo.",
    image: "/combos/PickleFavorites.png",
    items: [
      {
        productId: "gongura-pickle",
        quantity: 1,
        weight: "250g",
      },
      {
        productId: "kotthimera-pickle",
        quantity: 1,
        weight: "250g",
      },
      {
        productId: "tomato-pickle",
        quantity: 1,
        weight: "250g",
      },
    ],
    originalPrice: 525,
    comboPrice: 475,
    isAvailable: true,
  },
];
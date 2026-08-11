import { useState } from "react";
import { ArrowLeft, ChevronDown, Minus, Plus, ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { products } from "../data/products";
import { useAppDispatch } from "../hooks/redux";
import { addToCart } from "../store/slices/cartSlice";
import { formatCurrency } from "../utils/currency";

type ProductTab =
  | "ingredients"
  | "flavorProfile"
  | "servingSuggestions"
  | "storageInstructions";

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const product = products.find((item) => item.id === productId);

  const [selectedQuantity, setSelectedQuantity] = useState(
    product?.quantities[1]
  );
  const [itemQuantity, setItemQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<ProductTab>("ingredients");
  
  // Controls expanded sections for mobile accordion
  const [openSections, setOpenSections] = useState<Record<ProductTab, boolean>>({
    ingredients: true,
    flavorProfile: false,
    servingSuggestions: false,
    storageInstructions: false,
  });

  if (!product) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-black text-emerald-950">
            Product not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The product you are looking for is no longer available.
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 text-sm font-bold text-amber-300 transition hover:bg-emerald-900"
          >
            <ArrowLeft size={16} />
            Back to Menu
          </button>
        </div>
      </section>
    );
  }

  const currentQuantity = selectedQuantity ?? product.quantities[0];
  const totalPrice = currentQuantity.price * itemQuantity;

  const increaseQuantity = () => {
    setItemQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setItemQuantity((previous) => Math.max(1, previous - 1));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.nameEnglish,
        image: product.image,
        price: currentQuantity.price,
        quantity: itemQuantity,
        weight: currentQuantity.weight,
      })
    );

    toast.success(`${product.nameEnglish} added to cart!`);
    setItemQuantity(1);
  };

  const toggleSection = (section: ProductTab) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections: { id: ProductTab; label: string }[] = [
    { id: "ingredients", label: "Ingredients" },
    { id: "flavorProfile", label: "Flavor Profile" },
    { id: "servingSuggestions", label: "Serving Suggestions" },
    { id: "storageInstructions", label: "Storage Instructions" },
  ];

  const renderSectionContent = (id: ProductTab) => {
    switch (id) {
      case "ingredients":
        return (
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.ingredients.map((ingredient) => (
              <li
                key={ingredient}
                className="rounded-xl bg-emerald-50/70 px-4 py-3 text-sm font-medium text-emerald-950"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        );
      case "flavorProfile":
        return (
          <p className="rounded-xl bg-emerald-50/60 p-4 text-sm leading-6 text-emerald-950/80">
            {product.flavorProfile}
          </p>
        );
      case "servingSuggestions":
        return (
          <ul className="space-y-3">
            {product.servingSuggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="flex items-center gap-3 rounded-xl bg-emerald-50/60 p-4 text-sm font-medium text-emerald-950/80"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-800 shrink-0" />
                {suggestion}
              </li>
            ))}
          </ul>
        );
      case "storageInstructions":
        return (
          <ul className="space-y-3">
            {product.storageInstructions.map((instruction) => (
              <li
                key={instruction}
                className="flex items-center gap-3 rounded-xl bg-emerald-50/60 p-4 text-sm font-medium text-emerald-950/80"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-800 shrink-0" />
                {instruction}
              </li>
            ))}
          </ul>
        );
    }
  };

  return (
    <section className="bg-[#f8f5ef] py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/menu")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition hover:text-emerald-700"
        >
          <ArrowLeft size={17} />
          Back to Menu
        </button>

        {/* Product Overview */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="flex items-start justify-center">
            <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm">
              <img
                src={product.image}
                alt={product.nameEnglish}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            {/* Category */}
            <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
              {product.category}
            </span>

            {/* Product Name */}
            <div className="mt-4">
              <h1 className="font-telugu text-3xl font-black leading-tight text-emerald-950 md:text-4xl">
                {product.nameTelugu}
              </h1>

              <p className="mt-2 text-lg font-semibold text-emerald-800/70">
                {product.nameEnglish}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-950">
                  Select Quantity
                </h2>

                <span className="text-sm font-bold text-emerald-800">
                  {currentQuantity.weight}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {product.quantities.map((quantity) => {
                  const isSelected =
                    quantity.weight === currentQuantity.weight;

                  return (
                    <button
                      key={quantity.weight}
                      type="button"
                      onClick={() => setSelectedQuantity(quantity)}
                      aria-pressed={isSelected}
                      className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                        isSelected
                          ? "border-emerald-800 bg-emerald-800 text-amber-300 shadow-sm"
                          : "border-emerald-900/10 bg-white text-emerald-900 hover:border-emerald-700/40"
                      }`}
                    >
                      <span className="block">{quantity.weight}</span>
                      <span
                        className={`mt-1 block text-xs ${
                          isSelected
                            ? "text-amber-200"
                            : "text-emerald-800/60"
                        }`}
                      >
                        {formatCurrency(quantity.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Item Quantity */}
            <div className="mt-6">
              <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-950">
                Number of Items
              </h2>

              <div className="mt-3 flex w-fit items-center rounded-xl border border-emerald-900/10 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-900 transition hover:bg-emerald-50"
                >
                  <Minus size={16} />
                </button>

                <span
                  data-testid="product-detail-quantity"
                  className="min-w-10 text-center text-sm font-black text-emerald-950"
                >
                  {itemQuantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-900 transition hover:bg-emerald-50"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="mt-8 border-t border-emerald-900/10 pt-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Total Price
                  </p>

                  <p
                    data-testid="product-detail-total"
                    className="mt-1 text-3xl font-black text-orange-600"
                  >
                    {formatCurrency(totalPrice)}
                  </p>
                </div>

                <p className="text-right text-xs text-gray-500">
                  {currentQuantity.weight} × {itemQuantity}
                </p>
              </div>
            </div>

            {/* Add To Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 px-5 py-3.5 text-sm font-bold text-amber-300 shadow-sm transition hover:bg-emerald-900 active:scale-[0.99]"
            >
              <ShoppingCart size={18} />
              Add to Cart — {formatCurrency(totalPrice)}
            </button>
          </div>
        </div>

        {/* Product Details - Responsive Container */}
        <div className="mt-12 rounded-3xl border border-emerald-900/10 bg-white p-5 shadow-sm md:p-8">
          
          {/* ========================================================= */}
          {/* MOBILE VIEW: Collapsible Accordion (sm:hidden)            */}
          {/* ========================================================= */}
          <div className="divide-y divide-gray-100 sm:hidden">
            {sections.map((section) => {
              const isOpen = openSections[section.id];
              return (
                <div key={section.id} className="py-3 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="flex w-full items-center justify-between py-2 text-left font-black text-emerald-950"
                  >
                    <span className="text-base">{section.label}</span>
                    <ChevronDown
                      size={18}
                      className={`text-emerald-800 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-1">
                      {renderSectionContent(section.id)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* DESKTOP VIEW: Horizontal Tabs (hidden sm:block)           */}
          {/* ========================================================= */}
          <div className="hidden sm:block">
            {/* Tabs Header */}
            <div className="flex border-b border-gray-100">
              {sections.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 pb-3 text-sm font-bold transition ${
                    activeTab === tab.id
                      ? "text-emerald-900"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {tab.label}

                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-800" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="pt-6">
              <h2 className="text-lg font-black text-emerald-950 mb-4">
                {sections.find((s) => s.id === activeTab)?.label}
              </h2>
              {renderSectionContent(activeTab)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { products } from "../data/products";
import { useAppDispatch } from "../hooks/redux";
import { addToCart } from "../store/slices/cartSlice";
import { formatCurrency } from "../utils/currency";

type ProductTab = "ingredients" | "process";

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

  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
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

  return (
    <section className="bg-[#f8f5ef] py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* Product Details Tabs */}
        <div className="mt-12 rounded-3xl border border-emerald-900/10 bg-white p-5 shadow-sm md:p-8">

          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            <button
              type="button"
              onClick={() => setActiveTab("ingredients")}
              className={`relative px-4 pb-3 text-sm font-bold transition ${
                activeTab === "ingredients"
                  ? "text-emerald-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              Ingredients

              {activeTab === "ingredients" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-800" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("process")}
              className={`relative px-4 pb-3 text-sm font-bold transition ${
                activeTab === "process"
                  ? "text-emerald-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              Process of Making

              {activeTab === "process" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-800" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="pt-6">
            {activeTab === "ingredients" ? (
              <div>
                <h2 className="text-lg font-black text-emerald-950">
                  Ingredients
                </h2>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {product.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="rounded-xl bg-emerald-50/70 px-4 py-3 text-sm font-medium text-emerald-950"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-black text-emerald-950">
                  Process of Making
                </h2>

                <ol className="mt-4 space-y-3">
                  {product.processOfMaking.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-3 rounded-xl bg-emerald-50/60 p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-amber-300">
                        {index + 1}
                      </span>

                      <p className="pt-1 text-sm leading-6 text-emerald-950/80">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
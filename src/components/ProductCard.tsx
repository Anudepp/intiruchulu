import { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { addToCart } from "../store/slices/cartSlice";
import type { Product } from "../types/product";
import toast from "react-hot-toast";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(
    product.quantities[1]
  );
  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isPerPiece = product.nameEnglish === "Chapathis";

  const isAvailable = product.availability === "available";
  const isSeasonal = product.availability === "seasonal";
  const isUnavailable = !isAvailable;

  const displayPrice = isPerPiece
    ? selectedQuantity.price
    : selectedQuantity.price;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!isAvailable) {
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.nameEnglish,
        image: product.image,
        price: displayPrice,
        quantity,
        weight: selectedQuantity.weight,
      })
    );

    toast.success(`${product.nameEnglish} added to cart!`);

    // Reset quantity after adding
    setQuantity(1);

    // Reset weight back to default (250g for regular products)
    if (!isPerPiece) {
      setSelectedQuantity(product.quantities[1]);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-emerald-900/10 p-2.5 md:p-3.5 flex flex-col justify-between transition-all hover:border-emerald-700/30 hover:shadow-md group relative">
      {/* IMAGE CONTAINER WITH TOP BADGES */}
        <button
    type="button"
    onClick={() => { if (isAvailable) navigate(`/product/${product.id}`); }}
    aria-label={`View ${product.nameEnglish}`}
    className="relative aspect-square w-full rounded-xl overflow-hidden bg-emerald-50/40 mb-2.5 cursor-pointer"
  >
    <img
      src={product.image}
      alt={product.nameEnglish}
      className={`w-full h-full object-cover object-center transition-transform duration-300 ${
        isUnavailable ? "grayscale opacity-75" : "group-hover:scale-105"
      }`}
      loading="lazy"
    />

    {/* STARTING PRICE BADGE */}
    {isAvailable && !isPerPiece && (
      <div className="absolute top-2 left-2 bg-emerald-950/85 backdrop-blur-md text-amber-300 px-2 py-0.5 rounded-md text-[9px] md:text-[10px] font-semibold tracking-tight shadow-sm border border-amber-400/20">
        Starts ₹{product.quantities[0].price}
      </div>
    )}

    {/* AVAILABILITY BADGE */}
    {isUnavailable && (
      <div className="absolute top-2 left-2 bg-emerald-950/90 backdrop-blur-md text-amber-300 px-2 py-1 rounded-md text-[9px] md:text-[10px] font-semibold tracking-tight shadow-sm border border-amber-400/20">
        {isSeasonal ? "SEASONAL" : "OUT OF STOCK"}
      </div>
    )}
  </button>

      {/* CONTENT BLOCK */}
      <div className="flex flex-col flex-1">
        {/* NAMES */}
        <div className="min-h-[44px]">
          <h3 className="font-telugu font-bold text-sm md:text-base text-emerald-950 line-clamp-1 leading-tight">
            {product.nameTelugu}
          </h3>

          <p className="text-[11px] md:text-xs text-emerald-800/70 font-medium truncate mt-0.5">
            {product.nameEnglish}
          </p>
        </div>

        {/* AVAILABILITY MESSAGE */}
        {isUnavailable ? (
          <div className="my-2.5 border-t border-emerald-100/60 pt-2.5">
            <span className="text-xs font-semibold text-amber-700">
              {isSeasonal
                ? "Seasonal Product"
                : "Currently Out of Stock"}
            </span>

            <p className="text-[10px] md:text-[11px] text-emerald-800/70 mt-1 leading-relaxed">
              {product.availabilityMessage ??
                (isSeasonal
                  ? "Available during the appropriate season."
                  : "Please check back later.")}
            </p>
          </div>
        ) : (
          <>
            {/* QUANTITY SELECTOR */}
            {!isPerPiece && (
              <div className="my-2.5">
                <div className="grid grid-cols-4 gap-1 bg-emerald-50/80 p-1 rounded-lg border border-emerald-100/50">
                  {product.quantities.map((option) => (
                    <button
                      key={option.weight}
                      onClick={() => setSelectedQuantity(option)}
                      aria-pressed={
                        selectedQuantity.weight === option.weight
                      }
                      className={`py-1 rounded-md text-[10px] font-bold transition-all ${
                        selectedQuantity.weight === option.weight
                          ? "bg-emerald-800 text-amber-300 shadow-sm"
                          : "text-emerald-900/60 hover:text-emerald-900"
                      }`}
                    >
                      {option.weight}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* QUANTITY CONTROL & PRICE ROW */}
            <div className="mt-auto pt-2 flex items-center justify-between border-t border-emerald-100/60">
              <div>
                <span className="text-[9px] text-emerald-800/60 font-medium uppercase block">
                  {selectedQuantity.weight}
                </span>

                <span className="text-base md:text-lg font-bold text-emerald-950">
                  ₹{displayPrice}
                </span>
              </div>

              {/* COMPACT QUANTITY TOGGLE */}
              <div className="flex items-center bg-emerald-50/80 rounded-lg border border-emerald-200/60 p-0.5">
                <button
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                  className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-emerald-900 hover:bg-white rounded-md transition font-bold"
                >
                  <Minus size={12} />
                </button>

                <span
                  data-testid="quantity-display"
                  className="px-2 font-bold text-xs md:text-sm text-emerald-950 min-w-[18px] text-center"
                >
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                  className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center text-emerald-900 hover:bg-white rounded-md transition font-bold"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ADD TO CART BUTTON */}
      <button
        onClick={handleAddToCart}
        disabled={!isAvailable}
        className={`mt-3 w-full transition-all text-xs md:text-sm font-semibold shadow-sm flex items-center justify-center gap-1.5 py-2 rounded-xl border ${
          isAvailable
            ? "bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] text-amber-300 border-emerald-700/50"
            : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
        }`}
      >
        <span>
          {isAvailable
            ? "Add to Cart"
            : isSeasonal
              ? "Currently Unavailable"
              : "Out of Stock"}
        </span>
      </button>
    </div>
  );
}
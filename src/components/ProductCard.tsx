import { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { addToCart } from "../store/slices/cartSlice";
import type { Product } from "../types/product";
import toast from "react-hot-toast";
import { Plus, Minus } from "lucide-react";

const weightOptions = [
  { label: "100g", factor: 0.1 },
  { label: "250g", factor: 0.25 },
  { label: "500g", factor: 0.5 },
  { label: "1kg", factor: 1.0 },
];

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedWeight, setSelectedWeight] = useState(weightOptions[1]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const isPerPiece = product.nameEnglish === "Chapathis";

  const displayPrice = isPerPiece
    ? product.basePrice
    : Math.round(product.basePrice * selectedWeight.factor);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.nameEnglish,
        image: product.image,
        price: displayPrice,
        quantity,
        weight: isPerPiece ? "Per Piece" : selectedWeight.label,
      })
    );
    toast.success(`${product.nameEnglish} added to cart!`);

    // Reset quantity after adding
    setQuantity(1);

    // Reset weight back to default (except Chapathis)
    if (!isPerPiece) {
      setSelectedWeight(weightOptions[1]);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-emerald-900/10 p-2.5 md:p-3.5 flex flex-col justify-between transition-all hover:border-emerald-700/30 hover:shadow-md group relative">
      
      {/* IMAGE CONTAINER WITH TOP BADGES */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-emerald-50/40 mb-2.5">
        <img
          src={product.image}
          alt={product.nameEnglish}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {!isPerPiece && (
          <div className="absolute top-2 left-2 bg-emerald-950/85 backdrop-blur-md text-amber-300 px-2 py-0.5 rounded-md text-[9px] md:text-[10px] font-semibold tracking-tight shadow-sm border border-amber-400/20">
            Starts ₹{Math.round(product.basePrice * 0.1)}
          </div>
        )}
      </div>

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

        {/* WEIGHT PILL SELECTOR */}
        {!isPerPiece && (
          <div className="my-2.5">
            <div className="grid grid-cols-4 gap-1 bg-emerald-50/80 p-1 rounded-lg border border-emerald-100/50">
              {weightOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setSelectedWeight(opt)}
                  aria-pressed={selectedWeight.label === opt.label}
                  className={`py-1 rounded-md text-[10px] font-bold transition-all ${
                    selectedWeight.label === opt.label
                      ? "bg-emerald-800 text-amber-300 shadow-sm"
                      : "text-emerald-900/60 hover:text-emerald-900"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* QUANTITY CONTROL & PRICE ROW */}
        <div className="mt-auto pt-2 flex items-center justify-between border-t border-emerald-100/60">
          <div>
            <span className="text-[9px] text-emerald-800/60 font-medium uppercase block">
              {isPerPiece ? "Per Piece" : selectedWeight.label}
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
      </div>

      {/* COMPACT ADD TO CART BUTTON */}
      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] transition-all text-amber-300 py-2 rounded-xl text-xs md:text-sm font-semibold shadow-sm flex items-center justify-center gap-1.5 border border-emerald-700/50"
      >
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
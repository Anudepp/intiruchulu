import { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { addToCart } from "../store/slices/cartSlice";
import type { Product } from "../types/product";
import toast from "react-hot-toast";

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
    <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all active:scale-[0.98] md:hover:shadow-xl md:hover:shadow-orange-100/50 group">
      <div className="relative aspect-square w-full overflow-hidden bg-orange-50/30">
        <img
          src={product.image}
          alt={product.nameEnglish}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {!isPerPiece && (
          <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-orange-600/90 backdrop-blur-sm text-white px-2 py-1 md:px-3 md:py-1 rounded-lg md:rounded-full text-[8px] md:text-[10px] font-black shadow-lg">
            Starts ₹{Math.round(product.basePrice * 0.1)}
          </div>
        )}
      </div>

      <div className="p-3 md:p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-telugu font-bold text-lg md:text-xl text-gray-900 leading-tight">
            {product.nameTelugu}
          </h3>

          <p className="text-[9px] md:text-[11px] text-orange-600 font-black uppercase tracking-widest mt-0.5">
            {product.nameEnglish}
          </p>
        </div>

<div className="mt-auto flex flex-col gap-4">          {!isPerPiece && (
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-1.5">
                {weightOptions.map((opt, idx) => (
                  <button
                    key={opt.label}
onClick={() => setSelectedWeight(opt)}                    className={`py-1.5 md:py-2 rounded-lg md:rounded-xl text-[9px] md:text-[11px] font-black transition-all border ${
selectedWeight.label === opt.label                        ? "bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-200"
                        : "bg-white border-gray-100 text-gray-500 hover:border-orange-200 hover:bg-orange-50/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

<div className="pt-3 border-t border-gray-50">            <div className="mb-4">
  <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase mb-2">
    Quantity
  </p>

  <div className="flex items-center justify-between border border-gray-200 rounded-xl overflow-hidden">
    <button
                onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
      className="px-4 py-2 text-lg font-bold hover:bg-orange-50 transition"
    >
      −
    </button>

    <span className="font-black text-lg">
      {quantity}
    </span>

    <button
                onClick={increaseQuantity}
                  aria-label="Increase quantity"
      className="px-4 py-2 text-lg font-bold hover:bg-orange-50 transition"
    >
      +
                </button>
                
  </div>
</div>
            <div>
              <span className="text-[8px] md:text-[10px] text-gray-400 font-black uppercase block mb-0.5">
                {isPerPiece ? "Per Piece" : "Price"}
              </span>

              <div className="flex items-center gap-1.5">
                <span className="text-xl md:text-2xl font-black text-gray-900">
                  ₹{displayPrice}
                </span>

                {!isPerPiece && (
                  <span className="text-[8px] md:text-[10px] text-orange-600 font-bold bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100">
                    {selectedWeight.label}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
          onClick={handleAddToCart}
  className="mt-4 w-full bg-orange-600 hover:bg-orange-700 active:scale-95 transition-all text-white py-3 rounded-xl font-bold shadow-md"
>
  Add to Cart
</button>
    </div>
  );
}
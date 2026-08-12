import type { Combo } from "../types/combo";
import { useAppDispatch } from "../hooks/redux";
import { addComboToCart } from "../store/slices/cartSlice";
import toast from "react-hot-toast";
import { products } from "../data/products";

interface ComboCardProps {
  combo: Combo;
}

export default function ComboCard({ combo }: ComboCardProps) {
  const dispatch = useAppDispatch();

  const savings = combo.originalPrice - combo.comboPrice;
const handleAddToCart = () => {
  if (!combo.isAvailable) {
    toast.error("This combo is currently unavailable.");
    return;
  }

  dispatch(
    addComboToCart({
      id: combo.id,
      name: combo.name,
      image: combo.image,
      price: combo.comboPrice,
      quantity: 1,
    })
  );

  toast.success(`${combo.name} added to cart!`);
};

  return (
    <div className="bg-white rounded-2xl border border-emerald-900/10 overflow-hidden flex flex-col transition-all hover:border-emerald-700/30 hover:shadow-md group">
      {/* IMAGE */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-emerald-50/40">
        <img
          src={combo.image}
          alt={combo.name}
          className={`w-full h-full object-cover object-center transition-transform duration-300 ${
            combo.isAvailable
              ? "group-hover:scale-105"
              : "grayscale opacity-60"
          }`}
          loading="lazy"
        />

        {/* COMBO BADGE */}
        <div className="absolute top-2 left-2 bg-emerald-950/90 text-amber-300 px-2.5 py-1 rounded-md text-[9px] md:text-[10px] font-bold tracking-tight shadow-sm">
          🎁 Combo Pack
        </div>

        {/* UNAVAILABLE BADGE */}
        {!combo.isAvailable && (
          <div className="absolute top-2 right-2 bg-gray-800/90 text-white px-2 py-1 rounded-md text-[9px] md:text-[10px] font-semibold tracking-tight shadow-sm">
            Currently Unavailable
          </div>
        )}

        {/* SAVINGS BADGE */}
        {combo.isAvailable && savings > 0 && (
          <div className="absolute bottom-2 right-2 bg-amber-400 text-emerald-950 px-2 py-1 rounded-md text-[9px] md:text-[10px] font-bold shadow-sm">
            Save ₹{savings}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3.5 flex flex-col flex-1">
        {/* NAME */}
        <div>
          <h3 className="font-bold text-base md:text-lg text-emerald-950 leading-tight">
            {combo.name}
          </h3>

          <p className="text-[11px] md:text-xs text-emerald-800/70 font-medium mt-1 line-clamp-2">
            {combo.description}
          </p>
        </div>

        {/* INCLUDED PRODUCTS */}
    {/* INCLUDED PRODUCTS */}
<div className="mt-3">
  <p className="text-[9px] uppercase tracking-wide font-bold text-emerald-800/60 mb-1.5">
    Includes
  </p>

  <div className="space-y-1">
    {combo.items.map((item) => (
      <div
        key={item.productId}
        className="flex items-center justify-between text-xs text-emerald-950"
      >
        <span className="truncate">
          •{" "}
          {products.find((product) => product.id === item.productId)
            ?.nameEnglish ?? item.productId}
          {item.weight && (
            <span className="text-emerald-800/60 text-[11px] font-normal ml-1">
              ({item.weight})
            </span>
          )}
        </span>

        {item.quantity > 1 && (
          <span className="text-emerald-800/60 ml-2 font-medium">
            ×{item.quantity}
          </span>
        )}
      </div>
    ))}
  </div>
</div>

        {/* PRICE */}
        <div className="mt-4 pt-3 border-t border-emerald-100/60">
          <div className="flex items-end gap-2">
            <span className="text-xs text-emerald-800/50 line-through">
              ₹{combo.originalPrice}
            </span>

            <span className="text-xl md:text-2xl font-bold text-emerald-950">
              ₹{combo.comboPrice}
            </span>
          </div>

          {savings > 0 && combo.isAvailable && (
            <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">
              You save ₹{savings}
            </p>
          )}
        </div>

        {/* ADD COMBO */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!combo.isAvailable}
          className={`mt-4 w-full py-2.5 rounded-xl text-xs md:text-sm font-semibold shadow-sm border transition-all ${
            combo.isAvailable
              ? "bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] text-amber-300 border-emerald-700/50"
              : "bg-gray-300 text-gray-600 border-gray-300 cursor-not-allowed"
          }`}
        >
          {combo.isAvailable ? "Add Combo to Cart" : "Currently Unavailable"}
        </button>
      </div>
    </div>
  );
}
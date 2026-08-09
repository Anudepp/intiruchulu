import { Trash2, Plus, Minus } from "lucide-react";
import { useAppDispatch } from "../hooks/redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";
import type { CartItem as CartItemType } from "../types/cart";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();
  const subtotal = item.price * item.quantity;

  return (
    <div className="bg-white rounded-2xl border border-emerald-900/10 p-3.5 md:p-4 shadow-sm hover:border-emerald-700/30 transition-all">
      {/* Main Container: Stacked layout on mobile, single row on desktop */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
        
        {/* Top Section on Mobile / Left Section on Desktop */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Image */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-emerald-50/40 shrink-0 border border-emerald-100/50">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-bold text-sm md:text-base text-emerald-950 leading-snug truncate">
              {item.name}
            </h3>

            <div className="mt-1 flex items-center gap-2">
              <span className="inline-block text-[10px] md:text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/60">
                {item.weight}
              </span>
            </div>

            <p className="text-xs text-emerald-800/60 font-medium mt-1">
              ₹{item.price} × {item.quantity}
            </p>
          </div>
        </div>

        {/* Divider line for mobile layout */}
        <hr className="border-emerald-100/60 md:hidden my-0.5" />

        {/* Bottom Bar on Mobile / Right Controls on Desktop */}
        <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4 shrink-0">
          
          {/* Quantity Controls */}
          <div className="flex items-center bg-emerald-50/80 rounded-lg border border-emerald-200/60 p-0.5">
            <button
              aria-label="Decrease quantity"
              onClick={() =>
                dispatch(
                  decreaseQuantity({
                    id: item.id,
                    weight: item.weight,
                  })
                )
              }
              className="w-7 h-7 flex items-center justify-center text-emerald-900 hover:bg-white rounded-md transition font-bold"
            >
              <Minus size={12} />
            </button>

            <span className="px-2 font-bold text-xs md:text-sm text-emerald-950 min-w-[24px] text-center">
              {item.quantity}
            </span>

            <button
              aria-label="Increase quantity"
              onClick={() =>
                dispatch(
                  increaseQuantity({
                    id: item.id,
                    weight: item.weight,
                  })
                )
              }
              className="w-7 h-7 flex items-center justify-center text-emerald-900 hover:bg-white rounded-md transition font-bold"
            >
              <Plus size={12} />
            </button>
          </div>

          {/* Subtotal & Delete Action */}
          <div className="flex items-center gap-3 text-right">
            <p className="font-bold text-base md:text-lg text-emerald-950">
              ₹{subtotal.toLocaleString("en-IN")}
            </p>

            <button
              aria-label="Remove item"
              onClick={() =>
                dispatch(
                  removeFromCart({
                    id: item.id,
                    weight: item.weight,
                  })
                )
              }
              className="text-stone-400 hover:text-rose-600 transition-colors p-1"
            >
              <Trash2 size={16} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
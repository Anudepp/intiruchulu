import { Trash2 } from "lucide-react";
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
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex gap-4 items-center">

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 rounded-xl object-cover"
      />

      {/* Product Details */}
      <div className="flex-1">

        <h3 className="font-bold text-lg text-gray-900">
          {item.name}
        </h3>

        <p className="text-sm text-orange-600 font-semibold mt-1">
          {item.weight}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          ₹{item.price} × {item.quantity}
        </p>

      </div>

      {/* Quantity */}
      <div className="flex flex-col items-center gap-2">

<button
  onClick={() => dispatch(
  increaseQuantity({
    id: item.id,
    weight: item.weight,
  })
)}
  className="w-8 h-8 rounded-full border border-gray-300 hover:bg-orange-50 transition"
>
  +
</button>

        <span className="font-bold">
          {item.quantity}
        </span>

<button
  onClick={() => dispatch(
  decreaseQuantity({
    id: item.id,
    weight: item.weight,
  })
)}
  className="w-8 h-8 rounded-full border border-gray-300 hover:bg-orange-50 transition"
>
  −
</button>

      </div>

      {/* Subtotal */}
      <div className="text-right">

        <p className="font-black text-lg">
          ₹{item.price * item.quantity}
        </p>

<button
  onClick={() => dispatch(
  removeFromCart({
    id: item.id,
    weight: item.weight,
  })
)}
  className="mt-4 text-red-500 hover:text-red-700 transition"
>
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}
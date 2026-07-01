import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

interface CartIconProps {
  className?: string;
  iconClassName?: string;
}

export default function CartIcon({
  className = "",
  iconClassName = "",
}: CartIconProps) {
  const items = useAppSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      to="/cart"
      className={`relative block ${className}`}
    >
      <ShoppingCart
        size={20}
        className={`transition-colors ${iconClassName}`}
      />

      {totalItems > 0 && (
        <span
          className="
            absolute
            -top-2
            -right-2
            min-w-[20px]
            h-5
            px-1
            rounded-full
            bg-orange-600
            text-white
            text-[10px]
            font-bold
            flex
            items-center
            justify-center
          "
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}
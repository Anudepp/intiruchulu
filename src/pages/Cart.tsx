import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, ShoppingBag } from "lucide-react";
import { useAppSelector } from "../hooks/redux";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="min-h-screen bg-emerald-50/30">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-3.5 md:px-4 py-5 md:py-10">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-emerald-800/80 hover:text-emerald-950 mb-4 md:mb-8 text-xs md:text-sm font-bold transition-colors"
        >
          <ArrowLeft size={16} className="md:w-[18px] md:h-[18px]" />
          Back to Menu
        </Link>

        <div className="flex items-center gap-2.5 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-100/80 border border-emerald-200/60 flex items-center justify-center text-emerald-950 shadow-sm">
            <ShoppingCart size={22} className="md:w-7 md:h-7" />
          </div>

          <div>
            <h1 className="text-2xl md:text-4xl font-black text-emerald-950">
              My Cart
            </h1>
            <p className="text-[10px] md:text-xs font-bold text-emerald-800/70 uppercase tracking-wider">
              {cartItems.length} {cartItems.length === 1 ? 'item selected' : 'items selected'}
            </p>
          </div>
        </div>
      </header>

      {/* Cart Content */}
      <main className="max-w-6xl mx-auto px-3.5 md:px-4 pb-12 md:pb-20">
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-16 text-center border border-emerald-900/10 shadow-sm max-w-md mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 border border-emerald-200/60 rounded-2xl flex items-center justify-center mx-auto text-emerald-800/40 mb-4 md:mb-6">
              <ShoppingBag size={36} className="md:w-12 md:h-12" />
            </div>

            <h2 className="text-xl md:text-2xl font-black text-emerald-950">
              Your cart is empty
            </h2>

            <p className="text-emerald-800/70 text-xs md:text-sm mt-1.5 md:mt-2 font-medium">
              Explore our authentic homemade Andhra & Telangana delicacies.
            </p>

            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 mt-6 bg-emerald-950 hover:bg-emerald-900 text-amber-300 px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-bold text-xs md:text-sm shadow-md transition-all active:scale-95"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-5 md:gap-8 items-start">
            {/* Left Side - Cart Items */}
            <div className="lg:col-span-2 space-y-3 md:space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={`${item.id}-${item.weight}`}
                  item={item}
                />
              ))}
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:sticky lg:top-24">
              <CartSummary />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
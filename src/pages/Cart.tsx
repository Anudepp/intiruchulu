import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useAppSelector } from "../hooks/redux";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-10">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 mb-8 font-bold"
        >
          <ArrowLeft size={18} />
          Back to Menu
        </Link>

        <div className="flex items-center gap-3">
          <ShoppingCart
            className="text-orange-600"
            size={34}
          />

          <h1 className="text-4xl font-black text-gray-900">
            My Cart
          </h1>
        </div>
      </header>

      {/* Cart Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-sm">
            <ShoppingCart
              size={70}
              className="mx-auto text-gray-300"
            />

            <h2 className="text-2xl font-bold mt-6">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some delicious homemade items.
            </p>

            <Link
              to="/menu"
              className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={`${item.id}-${item.weight}`}
                  item={item}
                />
              ))}
            </div>

            {/* Right Side - Order Summary */}
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
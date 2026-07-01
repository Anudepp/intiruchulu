import { useAppSelector } from "../hooks/redux";

export default function CartSummary() {
  const items = useAppSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sticky top-24">
      <h2 className="text-xl font-black text-gray-900 mb-6">
        Order Summary
      </h2>

      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-500">
            Items
          </span>

          <span className="font-bold">
            {totalItems}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-bold">
            ₹{subtotal}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Delivery
          </span>

          <span className="text-green-600 font-bold">
            FREE
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-black">
          <span>Total</span>

          <span className="text-orange-600">
            ₹{subtotal}
          </span>
        </div>

      </div>
    </div>
  );
}
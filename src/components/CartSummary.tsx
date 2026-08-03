import { useAppSelector } from "../hooks/redux";
import { formatCurrency } from "../utils/currency";

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

      <div className="space-y-3.5 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Items ({totalItems})</span>
          <span className="font-bold">{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500">Delivery Charges</span>
          <span className="text-gray-800 font-semibold text-xs bg-gray-100 px-2.5 py-1 rounded-md">
            As per courier partner
          </span>
        </div>

        <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl text-[11px] text-amber-900 leading-relaxed">
          <span className="font-semibold block mb-0.5">Shipping Note:</span>
          Delivery charges vary based on order weight, distance, and rates charged by our courier partners at dispatch.
        </div>

        <hr className="border-gray-100 my-2" />

        <div className="flex justify-between items-end text-lg font-black">
          <div className="flex flex-col">
            <span>Items Total</span>
            <span className="text-[11px] font-normal text-gray-500">
              (Excl. delivery charges)
            </span>
          </div>

          <span className="text-orange-600">{formatCurrency(subtotal)}</span>
        </div>
      </div>
    </div>
  );
}
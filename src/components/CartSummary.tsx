import { useAppSelector } from "../hooks/redux";
import { formatCurrency } from "../utils/currency";
import { useCallback } from "react";

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

const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
 const handleWhatsAppClick = useCallback(() => {
  const itemList = items
    .map((item) => {
      const title =
        "title" in item && typeof item.title === "string"
          ? item.title
          : item.name;

      const variantInfo =
        "weight" in item && typeof item.weight === "string"
          ? item.weight
          : "variant" in item && typeof item.variant === "string"
          ? item.variant
          : "unit" in item && typeof item.unit === "string"
          ? item.unit
          : "size" in item && typeof item.size === "string"
          ? item.size
          : undefined;

      const nameWithVariant = variantInfo
        ? `${title} (${variantInfo})`
        : title;

      return `• ${nameWithVariant} x ${item.quantity} - ${formatCurrency(
        item.price * item.quantity
      )}`;
    })
    .join("\n");

  const message = `Hello Suneetha I would like to place an order:

*Order Details:*
${itemList}

*Total Items:* ${totalItems}
*Items Subtotal:* ${formatCurrency(subtotal)} + delivery charges

Please let me know the delivery details and next steps.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}, [items, subtotal, totalItems, phoneNumber]);

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

        {/* WhatsApp CTA Button */}
        <button
          onClick={handleWhatsAppClick}
          disabled={items.length === 0}
          className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
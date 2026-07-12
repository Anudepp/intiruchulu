import { useState } from 'react';

export default function PromoBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-orange-600 text-white text-center text-xs sm:text-sm font-semibold py-2 px-4 flex items-center justify-center relative">
      
      <span>
        🎉 Get up to <span className="font-bold">10% OFF</span> on orders above ₹1499
      </span>

      {/* Close button (optional but good UX) */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 text-white/80 hover:text-white"
      >
      </button>
    </div>
  );
}
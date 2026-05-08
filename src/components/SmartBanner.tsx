import { useEffect, useState } from "react";
import { getTimeBanner } from "../utils/timeBanner";

export default function SmartBanner() {
  const [visible, setVisible] = useState(true);

  const banner = getTimeBanner();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="w-full flex justify-center animate-bannerReveal">
      
      <div
        className="
          relative
          overflow-hidden
          w-full
          max-w-2xl
          rounded-2xl
          border
          border-white/10
          bg-[#111111]/95
          backdrop-blur-xl
          px-4
          md:px-5
          py-3
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          flex
          items-center
          justify-between
        "
      >
        {/* SHIMMER EFFECT */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="animate-shimmer absolute top-0 left-[-120%] h-full w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
        </div>

        {/* LEFT CONTENT */}
        <div className="flex items-center gap-3 min-w-0 relative z-10">

          {/* GLOW DOT */}
          <div className="relative shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-orange-400 blur-sm opacity-70" />
          </div>

          {/* TEXT */}
          <div className="min-w-0">
            <p className="text-[11px] md:text-sm font-bold text-white truncate tracking-wide">
              {banner.title}
            </p>

            <p className="text-[9px] md:text-xs text-gray-300 truncate mt-0.5">
              {banner.subtitle}
            </p>
          </div>
        </div>

        {/* RIGHT TAG */}
        <div className="hidden md:flex items-center ml-4 relative z-10">
          <div className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/20 text-[10px] font-semibold text-orange-300 whitespace-nowrap">
            Fresh Homemade ✨
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Globe, Truck } from 'lucide-react';

interface ShippingBadgeProps {
  className?: string;
  isMobileBar?: boolean;
}

export default function ShippingBadge({ className = "", isMobileBar = false }: ShippingBadgeProps) {
  // Mobile Top Bar version
  if (isMobileBar) {
    return (
      <div className="bg-gray-950 py-2.5 px-4 w-full flex items-center justify-center gap-3 border-b border-orange-500/20">
        <Truck size={14} className="text-orange-500 animate-delivery" />
        <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
          Shipping Pan-India & International
        </p>
        <Globe size={12} className="text-gray-500 animate-spin-slow" />
      </div>
    );
  }

  // Desktop Floating version
  return (
    <div className={`
      flex items-center gap-4 px-5 py-3 
      bg-gray-900/95 backdrop-blur-md 
      border border-orange-500/30 
      rounded-2xl shadow-2xl shadow-orange-900/20
      group transition-all hover:translate-y-[-4px]
      ${className}
    `}>
      <div className="relative flex items-center justify-center bg-orange-600 p-2 rounded-xl">
        <Truck size={18} className="text-white animate-delivery" />
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-black text-white uppercase tracking-wider">
            Worldwide Delivery
          </span>
          <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
        </div>
        <span className="text-[9px] font-bold text-orange-400 uppercase tracking-[0.2em] mt-0.5">
          India & Abroad
        </span>
      </div>

      <div className="ml-2 border-l border-gray-700 pl-4">
        <Globe size={18} className="text-gray-400 group-hover:text-orange-500 transition-colors animate-spin-slow" />
      </div>
    </div>
  );
}
import { Phone, MapPin, Sparkles, Clock, MessageCircle } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge'; 

export default function Contact() {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const rawPhoneNumber = phoneNumber.replace(/[^0-9]/g, ''); 
  
  const whatsappMessage = encodeURIComponent(
    "Hello, Suneetha , I am interested in your products and would like to place an  order"
  );
  
  const whatsappUrl = `https://wa.me/${rawPhoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-white min-h-screen animate-page relative">
      {/* 1. MOBILE STICKY TOP BAR */}
      <div className="md:hidden sticky top-0 z-[100] shadow-md">
        <ShippingBadge isMobileBar={true} />
      </div>

      {/* Header Area */}
      <div className="bg-gradient-to-b from-emerald-50/70 via-white to-transparent py-8 md:py-20 px-3.5 text-center border-b border-emerald-900/10">
        <div className="inline-flex items-center gap-1.5 bg-emerald-100/70 border border-emerald-200/60 text-emerald-950 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-3 md:mb-6 shadow-sm">
          <span className="animate-pulse"><Sparkles size={14} className="text-amber-500" /></span>
          Get in touch with us
        </div>
        <h1 className="text-4xl md:text-7xl font-telugu font-black text-emerald-950 mb-1.5 md:mb-4">సంప్రదించండి</h1>
        <p className="text-emerald-800/80 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">Contact Details</p>
      </div>

      {/* 2. DESKTOP FLOATING BADGE */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-bounce-slow">
        <ShippingBadge />
      </div>

      <div className="max-w-4xl mx-auto px-3.5 md:px-4 -mt-6 md:-mt-12 pb-10 md:pb-20">
        <div className="bg-white rounded-2xl md:rounded-[3rem] shadow-xl md:shadow-2xl shadow-emerald-950/5 overflow-hidden border border-emerald-900/10 p-5 md:p-14">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            
            {/* Left Column: Personal Contact */}
            <div className="space-y-6 md:space-y-10">
              <div>
                <h2 className="text-xs md:text-sm font-black text-emerald-800 uppercase tracking-widest mb-1 md:mb-2">Owner & Primary Contact</h2>
                <h3 className="text-2xl md:text-3xl font-black text-emerald-950">Suneetha Debbata</h3>
                <div className="h-1 md:h-1.5 w-10 md:w-12 bg-amber-400 rounded-full mt-2 md:mt-4" />
              </div>

              <div className="space-y-4 md:space-y-8">
                {/* Domestic Contact */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <span className="text-[9px] font-black bg-emerald-100/80 text-emerald-950 border border-emerald-200/60 px-2 py-0.5 rounded uppercase tracking-tighter">
                      Orders within India
                    </span>
                  </div>
                  <a 
                    href={`tel:${rawPhoneNumber}`} 
                    className="flex items-center gap-3 md:gap-4 group transition-all active:scale-95 w-fit"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800 group-hover:bg-emerald-800 group-hover:text-amber-300 transition-all shadow-sm">
                      <Phone size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] font-black text-emerald-800/60 uppercase tracking-wider">Phone Number</p>
                      <p className="text-base md:text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                        {phoneNumber}
                      </p>
                    </div>
                  </a>
                </div>

                {/* International Contact / WhatsApp */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <span className="text-[9px] font-black bg-emerald-950 text-amber-300 px-2 py-0.5 rounded uppercase tracking-tighter shadow-sm">
                      Ordering from Abroad
                    </span>
                  </div>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 w-fit group transition-all active:scale-95 cursor-pointer"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-900 flex items-center justify-center text-amber-300 group-hover:bg-emerald-800 transition-all shadow-sm border border-emerald-700/50">
                      <MessageCircle size={20} className="md:w-6 md:h-6" fill="currentColor" fillOpacity="0.2" />
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] font-black text-emerald-800/60 uppercase tracking-wider">WhatsApp Contact</p>
                      <p className="text-base md:text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                        {phoneNumber}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Location & Hours */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-emerald-50/40 rounded-xl md:rounded-[2rem] p-4 md:p-8 space-y-4 md:space-y-6 border border-emerald-900/10">
                <div className="flex items-start gap-3 md:gap-4">
                  <MapPin size={20} className="text-emerald-800 shrink-0 mt-0.5 md:w-6 md:h-6" />
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-emerald-800/60 uppercase tracking-wider mb-0.5 md:mb-1">Business Location</p>
                    <p className="text-emerald-950 font-bold text-sm md:text-base leading-relaxed">
                      Hanamkonda, Warangal,<br />
                      Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 pt-3 md:pt-4 border-t border-emerald-200/50">
                  <Clock size={20} className="text-emerald-800 shrink-0 mt-0.5 md:w-6 md:h-6" />
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-emerald-800/60 uppercase tracking-wider mb-0.5 md:mb-1">Availability</p>
                    <p className="text-emerald-950 font-bold text-xs md:text-base leading-relaxed">
                      🌍 Serving customers across India & abroad
                    </p>
                    <p className="text-emerald-800/80 text-xs md:text-sm mt-1 font-medium italic">
                      Available on call & WhatsApp for all time zones.
                    </p>
                    <p className="text-emerald-800 text-[11px] md:text-xs mt-2 font-bold">
                      Quick responses guaranteed ✨
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Branding */}
          <div className="mt-8 md:mt-16 pt-4 md:pt-8 border-t border-emerald-900/10 text-center">
            <p className="text-emerald-800/70 text-xs md:text-sm font-medium leading-relaxed">
              Thank you for choosing <span className="text-emerald-950 font-bold font-telugu">ఇంటి రుచులు</span>. <br /> 
              Handcrafted with tradition since 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
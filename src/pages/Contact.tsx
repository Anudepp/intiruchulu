import { Phone, MapPin, Sparkles, Clock } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge'; // Ensure path is correct

export default function Contact() {
  const phoneNumber = "+918499962882";

  return (
    <div className="bg-white min-h-screen animate-page relative">
      {/* 1. MOBILE STICKY TOP BAR */}
      <div className="md:hidden sticky top-0 z-[100] shadow-md">
        <ShippingBadge isMobileBar={true} />
      </div>

      {/* Header Area */}
      <div className="bg-orange-50/50 py-24 px-4 text-center border-b border-orange-100">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
          <Sparkles size={14} />
          Get in touch with us
        </div>
        <h1 className="text-6xl md:text-7xl font-telugu font-black text-gray-900 mb-4">సంప్రదించండి</h1>
        <p className="text-orange-600 font-black tracking-[0.3em] uppercase text-xs">Contact Details</p>
      </div>

      {/* 2. DESKTOP FLOATING BADGE */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50 animate-bounce-slow">
        <ShippingBadge />
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-16 pb-20">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-orange-900/10 overflow-hidden border border-gray-100 p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column: Personal Contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-black text-orange-600 uppercase tracking-widest mb-2">Owner & Primary Contact</h2>
                <h3 className="text-3xl font-black text-gray-900">Suneetha Debbata</h3>
                <div className="h-1.5 w-12 bg-orange-500 rounded-full mt-4" />
              </div>

              <div className="space-y-6">
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="flex items-center gap-4 group transition-all active:scale-95 w-fit"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Phone Number</p>
                    <p className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      +91 8499962882
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Location & Hours */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-[2rem] p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-orange-600 shrink-0 mt-1" />
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">Business Location</p>
                    <p className="text-gray-800 font-bold leading-relaxed">
                      Hanamkonda, Warangal,<br />
                      Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                  <Clock size={24} className="text-orange-600 shrink-0 mt-1" />
<div>

  <p className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-1">

    Availability

  </p>

  <p className="text-gray-800 font-bold leading-relaxed">

    🌍 Serving customers across India & abroad

  </p>

  <p className="text-gray-600 text-sm mt-1 font-medium">

    We’re available on call & WhatsApp — regardless of your time zone.

  </p>

  <p className="text-orange-600 text-xs mt-2 font-bold">

    Quick responses guaranteed ✨

  </p>

</div>
                </div>
              </div>
            </div>

          </div>
          

          {/* Bottom Branding */}
          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-sm font-medium">
              Thank you for choosing <span className="text-orange-600 font-bold font-telugu">ఇంటి రుచులు</span>. <br /> 
              Handcrafted with tradition since 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

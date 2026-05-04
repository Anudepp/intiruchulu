import { MessageCircle, Phone, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Decorative Hero Area */}
      <div className="bg-brand-50 py-16 px-4 text-center border-b border-brand-100">
        <h1 className="text-5xl font-telugu font-black text-brand-700 mb-2">సంప్రదించండి</h1>
        <p className="text-gray-500 font-medium tracking-widest uppercase text-xs">Get in Touch</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-brand-900/5 overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">

                        {/* Right: The Action Side */}
            <div className="p-12 space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-black text-brand-600 tracking-[0.2em] uppercase">Primary Contact</p>
                <h3 className="text-2xl font-bold text-gray-900">Suneetha Debbata</h3>
              </div>

              <div className="space-y-3">
                
                <a href="tel:+919999999999" className="flex items-center gap-4 p-5 bg-gray-50 text-gray-700 border border-gray-100 rounded-2xl font-bold hover:bg-gray-100 transition-all">
                  <Phone size={24} className="text-brand-600" />
                  <span>Call +91 99999-99999</span>
                </a>
              </div>

              <div className="pt-8 border-t border-gray-100">
              </div>
            </div>
            
            {/* Left: The "Vibe" Side */}
            <div className="p-12 bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-bold leading-tight">
                  From our kitchen <br />to your table.
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Every pickle, powder, and chapathi is made fresh to order. For the best experience, we recommend chatting with us directly on WhatsApp.
                </p>
                
                <div className="pt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                      <Send size={18} />
                    </div>
                    <span className="text-sm font-medium">Hanamkonda, Warangal</span>
                  </div>
                </div>
              </div>

              {/* Decorative Watermark */}
              <div className="absolute -bottom-10 -right-10 text-white/5 font-telugu text-[10rem] pointer-events-none select-none">
                రుచి
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
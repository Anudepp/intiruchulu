import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Heart, Sparkles } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge';

const values = [
  { 
    icon: CheckCircle, 
    title: 'Quality First', 
    desc: 'Every batch is prepared with the highest standards of hygiene and freshness.' 
  },
  { 
    icon: Users, 
    title: 'Family Recipes', 
    desc: 'Our recipes have been cherished and perfected over generations in Telugu households.' 
  },
  { 
    icon: Award, 
    title: 'No Preservatives', 
    desc: 'We use zero artificial preservatives — only natural ingredients and traditional methods.' 
  },
  { 
    icon: Clock, 
    title: 'Made Fresh', 
    desc: 'Small batch production ensures every order is freshly made and delivered promptly.' 
  },
];

export default function About() {
  return (
    <div className="animate-page overflow-x-hidden relative bg-white">
      {/* 1. MOBILE STICKY TOP BAR */}
      <div className="md:hidden sticky top-0 z-[100] shadow-md">
        <ShippingBadge isMobileBar={true} />
      </div>

      {/* Hero Section */}
      <section className="relative py-8 md:py-24 bg-gradient-to-br from-emerald-50/60 via-white to-transparent">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-4 md:space-y-8">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100/70 border border-emerald-200/60 text-emerald-950 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-xs font-black uppercase tracking-widest shadow-sm">
                <Sparkles size={14} className="text-amber-500" />
                Our Journey
              </div>
              
              <h1 className="text-3xl md:text-6xl font-black text-emerald-950 leading-tight md:leading-[1.1]">
                About <span className="font-telugu text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-950">ఇంటి రుచులు</span>
              </h1>

              <div className="space-y-3 md:space-y-6 text-sm md:text-lg text-emerald-900/80 leading-relaxed font-medium">
                <p>
                  <span className="font-telugu font-bold text-emerald-950 text-base md:text-xl">Inti ruchulu</span> (Inti Ruchulu) translates to "the flavors of home." We are a small, passionate family-run team dedicated to preserving the authentic soul of Telugu kitchens.
                </p>
                <p>
                  Our mission is simple: to bring the rich, traditional flavors of Telangana to your dining table. From aromatic podis to tangy pickles and soft chapathis, every product is handcrafted with love.
                </p>
              </div>

              <div className="pt-2">
                <Link 
                  to="/menu" 
                  className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3.5 md:px-8 md:py-4 bg-emerald-800 hover:bg-emerald-900 text-amber-300 font-bold text-sm md:text-base rounded-xl md:rounded-2xl border border-emerald-700/50 transition-all shadow-md active:scale-95 w-full sm:w-auto"
                >
                  Explore Our Creations <ArrowRight size={18} className="md:w-5 md:h-5" />
                </Link>
              </div>
            </div>

            <div className="relative mt-2 md:mt-0">
              <div className="aspect-square relative group max-w-[280px] sm:max-w-md mx-auto w-full">
                <div className="absolute inset-0 bg-emerald-200/50 rounded-2xl md:rounded-[3rem] rotate-3 md:rotate-6 scale-95 blur-xl md:blur-2xl opacity-40 group-hover:rotate-6 transition-transform duration-700" />
                
                <div className="relative h-full bg-white rounded-2xl md:rounded-[3rem] border-4 md:border-8 border-emerald-50 shadow-lg md:shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 text-center">
                  <Heart size={36} className="text-emerald-800 mb-3 md:mb-6 animate-pulse md:w-12 md:h-12" />
                  <div className="text-5xl md:text-8xl font-telugu font-black text-emerald-950/10 leading-none select-none">
                    ఇంటి <br /> రుచులు
                  </div>
                  <div className="mt-4 md:mt-8 space-y-0.5 md:space-y-1">
                    <p className="text-emerald-900/60 font-black tracking-widest uppercase text-[10px] md:text-sm">ESTABLISHED</p>
                    <p className="text-emerald-800 font-black text-xl md:text-2xl">2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESKTOP FLOATING BADGE */}
      <div className="hidden md:block fixed bottom-8 left-8 z-50 animate-bounce-slow">
        <ShippingBadge />
      </div>

      {/* Values */}
      <section className="py-8 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3.5 md:px-4">
          <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-4xl font-black text-emerald-950 italic">Our Core Values</h2>
            <div className="h-1 md:h-1.5 w-16 md:w-20 bg-amber-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-8">
            {values.map((v) => (
              <div 
                key={v.title} 
                className="p-4 md:p-10 rounded-xl md:rounded-[2.5rem] bg-emerald-50/40 border border-emerald-900/10 hover:border-emerald-700/30 hover:bg-white hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-6 rounded-lg md:rounded-2xl bg-white border border-emerald-100/80 shadow-sm flex items-center justify-center text-emerald-800 group-hover:scale-110 transition-transform">
                  <v.icon size={20} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-emerald-950 mb-1 md:mb-3">{v.title}</h3>
                <p className="text-emerald-800/70 text-xs md:text-sm leading-normal md:leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 md:py-24 bg-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-3xl mx-auto px-3.5 md:px-4 relative z-10">
          <div className="text-center space-y-6 md:space-y-10">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-2xl md:text-5xl font-black text-white leading-tight">
                Every Jar Tells a <br /> <span className="text-amber-300">Traditional Story</span>
              </h2>
              <div className="h-1 w-12 bg-amber-400 mx-auto rounded-full" />
            </div>

            <div className="space-y-4 md:space-y-8 text-sm md:text-xl text-emerald-100/90 leading-relaxed font-medium italic">
              <p>
                "Growing up in a traditional Telugu household, the kitchen was the heartbeat of our home. The aroma of freshly roasted spices and the sizzle of the tempering defined our afternoons."
              </p>
              <p>
                <span className="text-white font-bold">ఇంటి రుచులు</span> was born from a simple observation: in the rush of modern life, we were losing the authentic, preservative-free flavors our mothers and grandmothers mastered.
              </p>
              <p>
                Today, we prepare every powder and pickle the way it should be — with patience, hand-picked ingredients, and zero shortcuts. Because everyone deserves a genuine taste of home.
              </p>
            </div>

            <div className="pt-2 md:pt-8">
              <div className="inline-block p-0.5 rounded-xl md:rounded-2xl bg-gradient-to-r from-emerald-700 via-amber-400 to-emerald-700">
                <div className="px-5 py-2.5 md:px-6 md:py-3 bg-emerald-950 rounded-[10px] md:rounded-xl">
                  <p className="text-amber-300 font-telugu text-base md:text-lg font-bold">అచ్చమైన తెలుగు రుచి</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
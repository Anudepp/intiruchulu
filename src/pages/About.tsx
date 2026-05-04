import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Heart, Sparkles } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge'; // Ensure path is correct

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
    <div className="animate-page overflow-x-hidden relative">
      {/* 1. MOBILE STICKY TOP BAR - Keeps shipping in mind while reading the story */}
      <div className="md:hidden sticky top-0 z-[100] shadow-md">
        <ShippingBadge isMobileBar={true} />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-50 via-white to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <Sparkles size={14} />
                Our Journey
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1]">
                About <span className="font-telugu text-orange-600">ఇంటి రుచులు</span>
              </h1>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  <span className="font-telugu font-bold text-orange-700 text-xl">ఇంటి రుచులు</span> (Inti Ruchulu) translates to "the flavors of home." We are a small, passionate family-run team dedicated to preserving the authentic soul of Telugu kitchens.
                </p>
                <p>
                  Our mission is simple: to bring the rich, traditional flavors of Telangana to your dining table. From aromatic podis to tangy pickles and soft chapathis, every product is handcrafted with love.
                </p>
              </div>

              <Link to="/menu" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                Explore Our Creations <ArrowRight size={20} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square relative group">
                <div className="absolute inset-0 bg-orange-200 rounded-[3rem] rotate-6 scale-95 blur-2xl opacity-30 group-hover:rotate-12 transition-transform duration-700" />
                
                <div className="relative h-full bg-white rounded-[3rem] border-8 border-orange-50 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-12 text-center">
                  <Heart size={48} className="text-orange-600 mb-6 animate-pulse" />
                  <div className="text-7xl md:text-8xl font-telugu font-black text-orange-600/10 leading-none select-none">
                    ఇంటి <br /> రుచులు
                  </div>
                  <div className="mt-8 space-y-1">
                    <p className="text-gray-900 font-black tracking-widest uppercase text-sm">ESTABLISHED</p>
                    <p className="text-orange-600 font-black text-2xl">2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESKTOP FLOATING BADGE - Fixed position */}
      <div className="hidden md:block fixed bottom-8 left-8 z-50 animate-bounce-slow">
        <ShippingBadge />
      </div>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-gray-900 italic">Our Core Values</h2>
            <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-10 rounded-[2.5rem] bg-orange-50/50 border border-orange-100/50 hover:bg-white hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300 group text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                  <v.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Every Jar Tells a <br /> <span className="text-orange-500">Traditional Story</span></h2>
              <div className="h-1 w-12 bg-orange-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-medium italic">
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

            <div className="pt-8">
              <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600">
                <div className="px-6 py-3 bg-gray-900 rounded-xl">
                  <p className="text-white font-telugu text-lg">అచ్చమైన తెలుగు రుచి</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
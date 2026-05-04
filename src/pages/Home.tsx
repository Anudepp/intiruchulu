import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Flame, Heart, Star, Sparkles } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge';

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    desc: 'Made with fresh, hand-picked ingredients — no preservatives, no artificial flavors.',
  },
  {
    icon: Flame,
    title: 'Authentic Telugu Taste',
    desc: 'Traditional recipes passed down through generations, crafted with love and care.',
  },
  {
    icon: Heart,
    title: 'Made at Home',
    desc: 'Every product is homemade in small batches to ensure the highest quality and freshness.',
  },
];

const categories = [
  {
    title: 'Authentic Pickles',
    teluguTitle: 'ఆవకాయ & పచ్చళ్ళు',
    image: '/menu/MamidikayaPacchadi.png', 
    link: '/menu',
  },
  {
    title: 'Edible Powders',
    teluguTitle: 'కారం పొడులు',
    image: '/menu/KarivepakuPodi.png', 
    link: '/menu',
  },
  {
    title: 'Soft Chapathis',
    teluguTitle: 'చపాతీలు',
    image: '/menu/Chapathi.png',
    link: '/menu',
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      {/* 1. MOBILE ONLY TOP BAR */}
      <div className="md:hidden sticky top-0 z-[100]">
        <ShippingBadge isMobileBar={true} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-orange-50 via-white to-transparent pt-12 md:pt-0">
        <div className="absolute top-20 left-[10%] animate-bounce opacity-20 hidden md:block">
          <Leaf className="text-green-600 rotate-12" size={40} />
        </div>
        <div className="absolute bottom-40 right-[5%] animate-pulse opacity-20 hidden md:block">
          <Flame className="text-orange-500 -rotate-12" size={48} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-sm">
                <Sparkles size={16} className="animate-pulse" />
                Purely Homemade
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Experience the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Legacy of Taste
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
                తరతరాలుగా వస్తున్న సాంప్రదాయ పద్ధతులతో, ఇంట్లోనే తయారుచేసిన అచ్చమైన 
                <span className="text-orange-700 font-bold font-telugu mx-1">తెలుగు ఇంటి రుచులు</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link 
                  to="/menu" 
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 transition-all shadow-[0_10px_20px_-5px_rgba(234,88,12,0.4)] active:scale-95"
                >
                  Explore Menu <ArrowRight size={20} />
                </Link>
                <div className="flex items-center gap-2 text-gray-500 font-semibold">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-orange-200 border-2 border-white flex items-center justify-center text-[10px]">❤</div>
                    ))}
                  </div>
                  <span className="text-sm">Trusted by Families</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative aspect-square max-w-[450px] mx-auto transition-transform duration-700 group-hover:rotate-2">
                <div className="absolute inset-0 bg-orange-200 rounded-[3rem] rotate-6 scale-95 blur-sm opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-red-500 rounded-[3rem] -rotate-3 shadow-2xl" />
                
                <div className="relative h-full bg-white rounded-[2.8rem] overflow-hidden p-4 flex flex-col items-center justify-center border-4 border-orange-50">
                   <div className="text-center">
                      <span className="block text-orange-200 text-2xl font-telugu opacity-40 italic">Authentic</span>
                      <h2 className="text-6xl md:text-8xl font-telugu font-black text-orange-600 leading-none">
                        ఇంటి <br /> రుచులు
                      </h2>
                      <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full" />
                   </div>
                   <div className="absolute top-4 right-4 text-orange-100 rotate-45"><Star size={40} fill="currentColor" /></div>
                   <div className="absolute bottom-8 left-8 text-orange-50 -rotate-12"><Heart size={60} fill="currentColor" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESKTOP ONLY FLOATING BADGE (Fixed Bottom-Left) */}
      <div className="hidden md:block fixed bottom-8 left-8 z-50 animate-bounce-slow">
        <ShippingBadge />
      </div>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="text-left">
              <h2 className="text-4xl font-black text-gray-900 mb-2">Our Specialties</h2>
              <p className="text-gray-500 font-medium">Handcrafted with premium ingredients</p>
            </div>
            <Link to="/menu" className="text-orange-600 font-bold flex items-center gap-2 border-b-2 border-orange-100 hover:border-orange-600 transition-all">
              View all items <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.title} 
                to={cat.link}
                className="group relative h-[400px] overflow-hidden rounded-[2.5rem] shadow-xl"
              >
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-orange-400 font-telugu text-xl font-bold mb-1">{cat.teluguTitle}</p>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-10 rounded-[2rem] border border-orange-100/50 shadow-sm">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                  <f.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden bg-gray-900 py-16 px-8 text-center shadow-2xl">
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'radial-gradient(#ea580c 1px, transparent 0)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              From our kitchen to <br /> 
              <span className="text-orange-500 italic">Anywhere in the World</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto font-medium">
              We safely pack and ship our authentic homemade delicacies across India and overseas.
            </p>
            <Link to="/menu" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-black rounded-2xl hover:bg-orange-500 hover:text-white transition-all shadow-xl">
              ORDER NOW <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
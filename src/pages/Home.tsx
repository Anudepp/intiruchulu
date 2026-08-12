import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Flame, Heart, Sparkles, Gift } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge';
import ProductCarousel from "../components/ProductCarousel";
import ComboCard from "../components/ComboCard"; // Import ComboCard
import { combos } from "../data/combos"; // Adjust path to where your combos data/type resides

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
    link: '/menu#pickles',
  },
  {
    title: 'Edible Powders',
    teluguTitle: 'కారం పొడులు',
    image: '/menu/KarivepakuPodi.png',
    link: '/menu#powders',
  },
  {
    title: 'Soft Chapathis',
    teluguTitle: 'చపాతీలు',
    image: '/menu/Chapathi.png',
    link: '/menu#staples',
  },
];

const productCarousel = [
  { title: "Curry leaves powder", telugu: "కరివేపాకు పొడి", image: "/menu/KarivepakuPodi.png", link: "/menu#powders" },
  { title: "Garlic Chili Powder", telugu: "వెల్లుల్లి కారం", image: "/menu/VellulliKaram.png", link: "/menu#powders" },
  { title: "Moringa Leaves Powder", telugu: "మునగాకు పొడి", image: "/menu/MunagakuPodi.png", link: "/menu#powders" },
  { title: "Pappula Podi", telugu: "పప్పుల పొడి", image: "/menu/PappulaPodi.png", link: "/menu#powders" },
  { title: "Sesame Seeds Powder", telugu: "నువ్వుల పొడి", image: "/menu/NuvvulaPodi.png", link: "/menu#powders" },
  { title: "Flaxseed Powder", telugu: "అవిసెగింజల పొడి", image: "/menu/AvisaginjalaPodi.png", link: "/menu#powders" },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Inline Animation Styles */}
      <style>{`
        @keyframes autoShimmer {
          0% { transform: translateX(-150%) skewX(-25deg); }
          30%, 100% { transform: translateX(150%) skewX(-25deg); }
        }
        .animate-auto-shimmer {
          animation: autoShimmer 3s infinite linear;
        }
      `}</style>

      {/* Mobile Shipping Bar */}
      <div className="md:hidden sticky top-0 z-50">
        <ShippingBadge isMobileBar />
      </div>

      {/* HERO */}
      <section className="relative flex items-center bg-gradient-to-b from-emerald-50/60 via-white to-transparent py-5 md:py-16">
        <div className="max-w-7xl mx-auto px-3.5 md:px-4 w-full">

          <div className="inline-flex items-center gap-1.5 bg-emerald-100/70 border border-emerald-200/60 text-emerald-950 px-3 py-1 md:px-4 md:py-2 rounded-full text-[11px] md:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkles size={14} className="text-amber-500 animate-pulse md:w-4 md:h-4" />
            Purely Homemade
          </div>

          <h1 className="text-3xl md:text-7xl font-extrabold text-emerald-950 tracking-tight leading-tight mt-2.5 md:mt-4">
            Experience the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-950">
              Legacy of Taste
            </span>
          </h1>

          <p className="text-sm md:text-xl text-emerald-900/80 leading-snug md:leading-relaxed max-w-lg mt-2 md:mt-4">
            తరతరాలుగా వస్తున్న సాంప్రదాయ పద్ధతులతో, ఇంట్లోనే తయారుచేసిన అచ్చమైన
            <span className="text-emerald-950 font-bold font-telugu mx-1">
              తెలుగు ఇంటి రుచులు
            </span>.
          </p>

          <div className="mt-4 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              to="/menu#powders"
              className="group relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 px-6 py-3.5 md:px-10 md:py-5 bg-emerald-800 hover:bg-emerald-900 text-amber-300 font-bold rounded-xl md:rounded-2xl shadow-md border border-emerald-700/50 active:scale-95 transition-all duration-300"
            >
              {/* The Auto-Shining Layer */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="animate-auto-shimmer absolute inset-0 w-[120%] h-full bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />
              </div>
              
              <span className="relative flex items-center gap-2 md:gap-3 text-base md:text-xl tracking-tight">
                Explore Menu 
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300 md:w-6 md:h-6" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SWIGGY-STYLE CAROUSEL */}
      <section className="py-3 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-emerald-950 px-3.5 md:px-4 mb-2 md:mb-4">
            Popular Items
          </h2>
          <ProductCarousel items={productCarousel} />
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-3.5 md:px-4">
          <div className="mb-4 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-emerald-950 mb-0.5 md:mb-2">
              Our Specialties
            </h2>
            <p className="text-xs md:text-base text-emerald-800/70 font-medium">
              Handcrafted with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group relative h-28 md:h-[400px] overflow-hidden rounded-xl md:rounded-[2.5rem] shadow-sm md:shadow-md border border-emerald-900/10 hover:border-emerald-700/30 transition-all duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-2.5 md:p-8">
                  <p className="text-amber-300 font-telugu text-xs md:text-xl font-bold leading-tight">
                    {cat.teluguTitle}
                  </p>
                  <h3 className="text-white text-sm md:text-3xl font-bold leading-tight">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL COMBO PACKS SECTION */}
      {combos && combos.length > 0 && (
        <section className="py-8 md:py-16 bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/20">
          <div className="max-w-7xl mx-auto px-3.5 md:px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-amber-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <Gift size={16} /> Save Big with Bundles
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-emerald-950">
                  Special Combo Packs
                </h2>
                <p className="text-xs md:text-base text-emerald-800/70 font-medium mt-1">
                  Curated combinations of your favorite Telugu delicacies at discounted prices
                </p>
              </div>
              <Link
                to="/menu#combos"
                className="hidden md:inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-950 font-bold text-sm transition"
              >
                View All Products <ArrowRight size={16} />
              </Link>
            </div>

            {/* Responsive Grid for Combos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {combos.slice(0, 3).map((combo) => (
                <ComboCard key={combo.id} combo={combo} />
              ))}
            </div>

            <div className="mt-6 text-center md:hidden">
              <Link
                to="/menu#combos"
                className="inline-flex items-center gap-2 text-emerald-800 font-bold text-sm"
              >
                View All Products <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-6 md:py-14 bg-emerald-50/40">
        <div className="max-w-7xl mx-auto px-3.5 md:px-4 grid md:grid-cols-3 gap-3 md:gap-6">
          {features.map((f) => (
            <div 
              key={f.title} 
              className="bg-white p-4 md:p-10 rounded-xl md:rounded-2xl shadow-sm border border-emerald-900/10 hover:border-emerald-700/30 hover:shadow-md transition-all duration-300 flex md:block items-center gap-3 md:gap-0"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 md:mb-5 shrink-0 rounded-lg md:rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800">
                <f.icon size={20} className="md:w-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-bold text-emerald-950 mb-0.5 md:mb-2">{f.title}</h3>
                <p className="text-xs md:text-base text-emerald-800/70 leading-normal md:leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-3.5 md:px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden bg-emerald-950 py-8 px-4 md:py-14 md:px-10 text-center shadow-xl border border-emerald-900/30">
          <div className="space-y-3 md:space-y-6">
            <h2 className="text-2xl md:text-5xl font-black text-white leading-tight">
              From our kitchen to <br />
              <span className="text-amber-300 italic">Anywhere in the World</span>
            </h2>
            <p className="text-emerald-100/80 text-xs md:text-lg max-w-lg mx-auto leading-relaxed">
              We safely pack and ship our authentic homemade delicacies across India and overseas.
            </p>
            <Link
              to="/menu#powders"
              className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-emerald-800 hover:bg-emerald-900 text-amber-300 text-xs md:text-base font-bold rounded-xl md:rounded-2xl active:scale-95 transition border border-emerald-700/50 shadow-md"
            >
              ORDER NOW <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
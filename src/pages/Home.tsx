import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Flame, Heart, Gift } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge';
import ProductCarousel from "../components/ProductCarousel";
import ComboCard from "../components/ComboCard";
import { combos } from "../data/combos";

const FEATURES = [
  {
    icon: Leaf,
    title: '100% Natural Ingredients',
    desc: 'Fresh, hand-picked ingredients sourced locally. Zero preservatives or artificial flavors.',
  },
  {
    icon: Flame,
    title: 'Authentic Telugu Recipes',
    desc: 'Time-tested family recipes passed down across generations, prepared traditional style.',
  },
  {
    icon: Heart,
    title: 'Small-Batch Prepared',
    desc: 'Handcrafted in small batches at home to maintain uncompromising taste and quality.',
  },
];

const CATEGORIES = [
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
    title: 'Home Made Pure Ghee',
    teluguTitle: 'ఇంట్లో తయారుచేసిన నెయ్యి',
    image: '/menu/PureGhee.png',
    link: '/menu#staples',
  },
];

const CAROUSEL_ITEMS = [
  { title: "Curry leaves powder", telugu: "కరివేపాకు పొడి", image: "/menu/KarivepakuPodi.png", link: "/menu#powders" },
  { title: "Garlic Chili Powder", telugu: "వెల్లుల్లి కారం", image: "/menu/VellulliKaram.png", link: "/menu#powders" },
  { title: "Moringa Leaves Powder", telugu: "మునగాకు పొడి", image: "/menu/MunagakuPodi.png", link: "/menu#powders" },
  { title: "Pappula Podi", telugu: "పప్పుల పొడి", image: "/menu/PappulaPodi.png", link: "/menu#powders" },
  { title: "Sesame Seeds Powder", telugu: "నువ్వుల పొడి", image: "/menu/NuvvulaPodi.png", link: "/menu#powders" },
  { title: "Flaxseed Powder", telugu: "అవిసెగింజల పొడి", image: "/menu/AvisaginjalaPodi.png", link: "/menu#powders" },
];

export default function Home() {
  const featuredCombos = combos?.slice(0, 3) ?? [];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Mobile Shipping Header */}
      <div className="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
        <ShippingBadge isMobileBar />
      </div>

      {/* Hero */}
      <section className="pt-10 pb-16 md:pt-20 md:pb-24 border-b border-stone-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-md mb-6">
              Purely Homemade
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
              Experience the legacy of authentic Telugu taste.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              తరతరాలుగా వస్తున్న సాంప్రదాయ పద్ధతులతో, ఇంట్లోనే తయారుచేసిన అచ్చమైన{' '}
              <span className="font-semibold text-stone-900 font-telugu">
                తెలుగు ఇంటి రుచులు
              </span>.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/menu#combos"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-900 hover:bg-emerald-950 text-amber-300 font-medium rounded-lg shadow-sm hover:shadow transition-all duration-200 group text-sm md:text-base"
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Items / Swiggy-style Carousel */}
      <section className="py-10 md:py-14 bg-white border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight mb-6">
            Popular Items
          </h2>
          

<ProductCarousel items={CAROUSEL_ITEMS} />
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
              Our Specialties
            </h2>
            <p className="text-sm md:text-base text-stone-500 mt-1">
              Handcrafted in small batches using traditional methods
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group relative bg-white border border-stone-200/90 rounded-xl overflow-hidden hover:border-emerald-800/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-emerald-800 font-telugu text-sm font-semibold block mb-0.5">
                      {cat.teluguTitle}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center text-xs font-semibold text-stone-500 group-hover:text-emerald-900">
                    Browse category <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Special Combo Packs */}
      {featuredCombos.length > 0 && (
        <section className="py-14 md:py-20 bg-stone-100/70 border-y border-stone-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10">
              <div>
                <span className="inline-flex items-center gap-1.5 text-amber-800 font-semibold text-xs uppercase tracking-wider mb-2">
                  <Gift size={14} /> Curated Bundles
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                  Special Combo Packs
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Enjoy our favorite Telugu delicacies combined at discounted prices
                </p>
              </div>

              <Link
                to="/menu#combos"
                className="hidden md:inline-flex items-center gap-1.5 text-emerald-900 hover:text-emerald-950 font-semibold text-sm transition-colors mt-4 md:mt-0"
              >
                View all combo packs <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCombos.map((combo) => (
                <ComboCard key={combo.id} combo={combo} />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                to="/menu#combos"
                className="inline-flex items-center gap-2 text-emerald-900 font-semibold text-sm bg-white px-5 py-2.5 rounded-lg border border-stone-200"
              >
                View all combo packs <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* Value Propositions / Features */}
      <section className="py-14 md:py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 mb-4">
                  <f.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Shipping CTA */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-emerald-950 text-white rounded-2xl p-8 md:p-14 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                From our kitchen to <br />
                <span className="text-amber-300 font-serif italic">anywhere in the world</span>
              </h2>
              <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                We safely package and ship our authentic homemade delicacies across India and overseas.
              </p>
              <div className="pt-4">
                <Link
                  to="/menu#powders"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-medium rounded-lg text-sm md:text-base transition-colors"
                >
                  ORDER NOW <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
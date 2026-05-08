import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Flame, Heart, Sparkles } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge';
import ProductCarousel from "../components/ProductCarousel";
import { useEffect } from 'react';
import { enableAudio, playTap, playSwoosh } from '../utils/sound';
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
  useEffect(() => {

  const enable = () => {

    enableAudio();

    window.removeEventListener('click', enable);

    window.removeEventListener('touchstart', enable);

  };

  window.addEventListener('click', enable);

  window.addEventListener('touchstart', enable);

  return () => {

    window.removeEventListener('click', enable);

    window.removeEventListener('touchstart', enable);

  };

}, []);
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
      <section className="relative min-h-[65vh] md:min-h-[90vh] flex items-center bg-gradient-to-b from-orange-50 via-white to-transparent pt-8 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 w-full">

          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkles size={16} className="animate-pulse" />
            Purely Homemade
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mt-4">
            Experience the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Legacy of Taste
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-lg mt-4">
            తరతరాలుగా వస్తున్న సాంప్రదాయ పద్ధతులతో, ఇంట్లోనే తయారుచేసిన అచ్చమైన
            <span className="text-orange-700 font-bold font-telugu mx-1">
              తెలుగు ఇంటి రుచులు
            </span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/menu#powders"
              onClick={() => playSwoosh()}
              className="group relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-black rounded-2xl shadow-xl shadow-orange-200 hover:shadow-orange-400 active:scale-95 transition-all duration-300"
            >
              {/* The Auto-Shining Layer */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="animate-auto-shimmer absolute inset-0 w-[120%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
              
              <span className="relative flex items-center gap-3 text-lg md:text-xl tracking-tight">
                Explore Menu 
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 🔥 SWIGGY-STYLE CAROUSEL */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 px-4 mb-4">
            Popular Items
          </h2>
          <ProductCarousel items={productCarousel} />
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Our Specialties
            </h2>
            <p className="text-gray-500 font-medium">
              Handcrafted with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                onClick={() => playTap()}
                to={cat.link}
                className="group relative h-44 md:h-[400px] overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-lg"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 md:p-8">
                  <p className="text-orange-400 font-telugu text-sm md:text-xl font-bold">
                    {cat.teluguTitle}
                  </p>
                  <h3 className="text-white text-lg md:text-3xl font-bold">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-orange-100/50">
              <div className="w-14 h-14 mb-5 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                <f.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gray-900 py-14 px-6 md:px-10 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              From our kitchen to <br />
              <span className="text-orange-500 italic">Anywhere in the World</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto">
              We safely pack and ship our authentic homemade delicacies across India and overseas.
            </p>
            <Link
              to="/menu#powders"
               onClick={() => playSwoosh()}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-black rounded-2xl active:scale-95 transition"
            >
              ORDER NOW <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
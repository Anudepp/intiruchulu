import { MessageCircle, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

// Types for better development (if using TypeScript)
interface Product {
  nameTelugu: string;
  nameEnglish: string;
  price: string;
  unit: string;
  category: 'podis' | 'pacchadi' | 'chapathi';
  image: string;
}

const products: Product[] = [
  {
    nameTelugu: 'కరివేపాకు పొడి',
    nameEnglish: 'Karivepaku Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: '/menu/KarivepakuPodi.png', 
  },
  {
    nameTelugu: 'వెల్లుల్లి కారం',
    nameEnglish: 'Velulli Kaaram',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: '/menu/VellulliKaram.png',
  },
  {
    nameTelugu: 'మునగాకు పొడి',
    nameEnglish: 'Munagaku Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: '/menu/MunagakuPodi.png',
  },
  {
    nameTelugu: 'పప్పుల పొడి',
    nameEnglish: 'Pappula Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: '/menu/PappulaPodi.png',
  },
  {
    nameTelugu: 'నువ్వుల పొడి',
    nameEnglish: 'Nuvvula Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: '/menu/NuvvulaPodi.png',
  },
  {
    nameTelugu: 'అవిసెగింజల పొడి',
    nameEnglish: 'Avisaginjala Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: '/menu/AvisaginjalaPodi.png',
  },
  {
    nameTelugu: 'గోంగూర పచ్చడి',
    nameEnglish: 'Gongura Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: '/menu/GonguraPacchadi.png',
  },
  {
    nameTelugu: 'కొత్తిమీర పచ్చడి',
    nameEnglish: 'Kotthimera Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: '/menu/KotthimeraPacchadi.png',
  },
  {
    nameTelugu: 'మీల్ మేకర్ పచ్చడి',
    nameEnglish: 'Meal Maker Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: '/menu/MealMakerPacchadi.png',
  },
  {
    nameTelugu: 'టొమాటో పచ్చడి',
    nameEnglish: 'Tomato Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: '/menu/TomatoPacchadi.png',
  },
  {
    nameTelugu: 'మామిడికాయ బెల్లం పచ్చడి',
    nameEnglish: 'Mamidikaya Bellam Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: '/menu/MamidikayaBellamPacchadi.png',
  },
  {
    nameTelugu: 'మామిడికాయ పచ్చడి',
    nameEnglish: 'Mamidikaya Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: '/menu/MamidikayaPacchadi.png',
  },
  {
    nameTelugu: 'చపాతీలు',
    nameEnglish: 'Chapathis',
    price: '12',
    unit: 'per piece',
    category: 'chapathi',
    image: '/menu/Chapathi.png',
  },
];

const categories = [
  { key: 'all', label: 'All Items' },
  { key: 'podis', label: 'Podis (పొడి)' },
  { key: 'pacchadi', label: 'Pacchadi (పచ్చడి)' },
  { key: 'chapathi', label: 'Chapathis (చపాతీలు)' },
];

function ProductCard({ product }: { product: Product }) {
  const phoneNumber = '919347977431';
  const message = encodeURIComponent(`Hi! I would like to order ${product.nameTelugu} (${product.nameEnglish}).`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
      {/* 4:3 Aspect Ratio Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.nameEnglish}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="backdrop-blur-md bg-white/30 text-white text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-full border border-white/20">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-white to-orange-50/20">
        <div className="mb-4">
          <h3 className="font-telugu font-bold text-2xl text-gray-800 group-hover:text-orange-600 transition-colors">
            {product.nameTelugu}
          </h3>
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {product.nameEnglish}
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Best Price</span>
            <div className="flex items-baseline">
              <span className="text-3xl font-black text-gray-900">₹{product.price}</span>
              <span className="text-xs text-gray-500 ml-1 font-medium">{product.unit}</span>
            </div>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl shadow-green-100 transition-all active:scale-95"
          >
            <MessageCircle size={20} />
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');

  const SectionLayout = ({ title, teluguTitle, desc, items }: any) => (
    <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="mb-10 text-center md:text-left border-l-0 md:border-l-8 border-orange-600 md:pl-6">
        <h2 className="text-4xl font-black text-gray-900">
          {title} <span className="font-telugu text-orange-600 ml-2">{teluguTitle}</span>
        </h2>
        <p className="text-gray-500 text-lg font-medium mt-2">{desc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((product: Product) => (
          <ProductCard key={product.nameEnglish} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Space for Navbar Padding */}
      <div className="h-16 md:h-20" />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-orange-50/40 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-100/30 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <ShoppingBag size={14} />
            Authentic & Homemade
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Our <span className="text-orange-600">Flavorful</span> Menu
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            From our family kitchen to your table—discover the true essence of Telugu tradition in every bite.
          </p>
        </div>
      </section>

      {/* Sticky Tab Filter */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex justify-center gap-3 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap tracking-wide ${
                  activeTab === cat.key 
                  ? 'bg-orange-600 text-white shadow-2xl shadow-orange-200 ring-4 ring-orange-100' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {(activeTab === 'all' || activeTab === 'podis') && (
          <SectionLayout 
            title="Signature Podis" 
            teluguTitle="పొడిలు" 
            desc="Freshly ground aromatic spices. Perfect with hot rice, idli, or dosa."
            items={products.filter(p => p.category === 'podis')} 
          />
        )}

        {(activeTab === 'all' || activeTab === 'pacchadi') && (
          <SectionLayout 
            title="Classic Pacchadi" 
            teluguTitle="పచ్చడి" 
            desc="Tangy, spicy, and perfectly cured pickles made using age-old recipes."
            items={products.filter(p => p.category === 'pacchadi')} 
          />
        )}

        {(activeTab === 'all' || activeTab === 'chapathi') && (
          <SectionLayout 
            title="Daily Staples" 
            teluguTitle="చపాతీలు" 
            desc="Soft, fluffy chapathis made with premium whole wheat flour."
            items={products.filter(p => p.category === 'chapathi')} 
          />
        )}
      </main>

      {/* Bottom WhatsApp CTA */}
      <section className="py-20 bg-gray-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Want something custom?</h2>
          <p className="text-gray-400 text-lg mb-10 font-medium">We take bulk orders and party catering requests. Let's discuss your requirements!</p>
          <a
            href="https://wa.me/919347977431"
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 text-white font-black rounded-3xl hover:bg-green-600 transition-all shadow-2xl shadow-green-900/20 active:scale-95"
          >
            <MessageCircle size={24} />
            Chat With Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
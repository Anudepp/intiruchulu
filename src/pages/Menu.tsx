import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  nameTelugu: string;
  nameEnglish: string;
  basePrice: number;
  category: 'podis' | 'pacchadi' | 'staples';
  image: string;
}

const weightOptions = [
  { label: '100g', factor: 0.1 },
  { label: '250g', factor: 0.25 },
  { label: '500g', factor: 0.5 },
  { label: '1kg', factor: 1.0 },
];

const products: Product[] = [
  // Podis
  { nameTelugu: 'కరివేపాకు పొడి', nameEnglish: 'Curry leaves powder', basePrice: 600, category: 'podis', image: '/menu/KarivepakuPodi.png' },
  { nameTelugu: 'వెల్లుల్లి కారం', nameEnglish: 'Garlic Chili Powder', basePrice: 600, category: 'podis', image: '/menu/VellulliKaram.png' },
  { nameTelugu: 'మునగాకు పొడి', nameEnglish: 'Moringa Leaves Powder', basePrice: 600, category: 'podis', image: '/menu/MunagakuPodi.png' },
  { nameTelugu: 'పప్పుల పొడి', nameEnglish: 'Pappula Podi', basePrice: 600, category: 'podis', image: '/menu/PappulaPodi.png' },
  { nameTelugu: 'నువ్వుల పొడి', nameEnglish: 'Sesame Seeds Powder', basePrice: 600, category: 'podis', image: '/menu/NuvvulaPodi.png' },
  { nameTelugu: 'అవిసెగింజల పొడి', nameEnglish: 'Flaxseed Powder', basePrice: 600, category: 'podis', image: '/menu/AvisaginjalaPodi.png' },
  { nameTelugu: 'చారు పొడి', nameEnglish: 'Rasam Powder', basePrice: 600, category: 'podis', image: '/menu/ChaaruPodi.png' },

  // Pacchadis
  { nameTelugu: 'గోంగూర పచ్చడి', nameEnglish: 'Gongura Pickle', basePrice: 500, category: 'pacchadi', image: '/menu/GonguraPacchadi.png' },
  { nameTelugu: 'కొత్తిమీర పచ్చడి', nameEnglish: 'Kotthimera Pickle', basePrice: 500, category: 'pacchadi', image: '/menu/KotthimeraPacchadi.png' },
  { nameTelugu: 'మీల్ మేకర్ పచ్చడి', nameEnglish: 'Meal Maker Pickle', basePrice: 500, category: 'pacchadi', image: '/menu/MealMakerPacchadi.png' },
  { nameTelugu: 'టొమాటో పచ్చడి', nameEnglish: 'Tomato Pickle', basePrice: 500, category: 'pacchadi', image: '/menu/TomatoPacchadi.png' },
  { nameTelugu: 'మామిడికాయ బెల్లం పచ్చడి', nameEnglish: 'Mongo Jaggery Pickle', basePrice: 500, category: 'pacchadi', image: '/menu/MamidikayaBellamPacchadi.png' },
  { nameTelugu: 'మామిడికాయ పచ్చడి', nameEnglish: 'Mango Pickle', basePrice: 500, category: 'pacchadi', image: '/menu/MamidikayaPacchadi.png' },
  
  // Daily Staples
  { nameTelugu: 'పులిహోర పులుసు', nameEnglish: 'Tamarind Rice Paste', basePrice: 600, category: 'staples', image: '/menu/PulihoraPulusu.png' },
  { nameTelugu: 'చపాతీలు', nameEnglish: 'Chapathis', basePrice: 12, category: 'staples', image: '/menu/Chapathi.png' },
];

function ProductCard({ product }: { product: Product }) {
  const [selectedIdx, setSelectedIdx] = useState(1); 
  const isPerPiece = product.nameEnglish === 'Chapathis';
  
  const displayPrice = isPerPiece 
    ? product.basePrice 
    : Math.round(product.basePrice * weightOptions[selectedIdx].factor);

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-xl hover:shadow-orange-100/50 group">
      <div className="relative aspect-[16/13] w-full overflow-hidden bg-orange-50/30">
        <img
          src={product.image}
          alt={product.nameEnglish}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {!isPerPiece && (
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-[10px] font-black shadow-lg">
            Starts ₹{Math.round(product.basePrice * 0.1)}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-telugu font-bold text-xl text-gray-900 leading-tight">
            {product.nameTelugu}
          </h3>
          <p className="text-[11px] text-orange-600 font-black uppercase tracking-widest mt-1">
            {product.nameEnglish}
          </p>
        </div>

        <div className="mt-auto">
          {!isPerPiece && (
            <div className="mb-5">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-3 ml-1 tracking-wider">
                Select Quantity
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {weightOptions.map((opt, idx) => (
                  <button
                    key={opt.label}
                    onClick={() => setSelectedIdx(idx)}
                    className={`py-2 rounded-xl text-[11px] font-black transition-all border active:scale-90 ${
                      selectedIdx === idx
                        ? 'bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-200'
                        : 'bg-white border-gray-100 text-gray-500 hover:border-orange-200 hover:bg-orange-50/30'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-gray-400 font-black uppercase block mb-0.5">
                {isPerPiece ? 'Per Piece' : 'Price'}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-gray-900">₹{displayPrice}</span>
                {!isPerPiece && (
                  <span className="text-[10px] text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded-lg border border-orange-100">
                    {weightOptions[selectedIdx].label}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const phoneNumber = "+918499962882"; 

  const SectionLayout = ({ title, teluguTitle, items }: any) => {
    if (items.length === 0) return null;
    return (
      <div className="mb-20">
        <div className="mb-8 flex flex-col border-l-[6px] border-orange-600 pl-6">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight italic">
            {title}
          </h2>
          <span className="font-telugu text-orange-600 text-xl mt-1 font-bold">{teluguTitle}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {items.map((product: Product) => (
            <ProductCard key={product.nameEnglish} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white animate-page relative">
      <header className="pt-12 pb-10 px-4 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-all text-sm font-bold mb-8 active:translate-x-[-4px]"
        >
          <ArrowLeft size={16} /> BACK TO HOME
        </Link>
        
        <div className="flex items-center gap-2 text-orange-600 mb-3 text-xs font-black uppercase tracking-[0.25em]">
          <ShoppingBag size={14} className="animate-bounce" />
          Fresh & Homemade
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
          Our <span className="text-orange-600 italic">Menu</span>
        </h1>
        
        <p className="text-gray-500 mt-4 text-base max-w-lg font-medium leading-relaxed">
          Authentic Telugu flavors prepared with love. From our family kitchen to your table.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-32">
        <SectionLayout 
          title="Traditional Powders" 
          teluguTitle="పొడిలు" 
          items={products.filter(p => p.category === 'podis')} 
        />

        <SectionLayout 
          title="Authentic Pickles" 
          teluguTitle="పచ్చడి" 
          items={products.filter(p => p.category === 'pacchadi')} 
        />

        <SectionLayout 
          title="Daily Staples" 
          teluguTitle="రోజువారీ వంటలు" 
          items={products.filter(p => p.category === 'staples')} 
        />
        
        <div className="mt-16 p-12 bg-orange-50/50 rounded-[3rem] border-2 border-dashed border-orange-200 text-center">
          <p className="text-orange-900 text-xl font-bold font-telugu italic">
            "బల్క్ ఆర్డర్లు లేదా మరిన్ని వివరాల కోసం మమ్మల్ని సంప్రదించండి!"
          </p>
        </div>
      </main>

      {/* Optimized Floating Button - Pill style on mobile, shifted right */}
      <div className="fixed bottom-6 right-4 md:right-8 z-50 pointer-events-none">
        <a 
          href={`tel:${phoneNumber}`}
          className="pointer-events-auto flex items-center gap-2 md:gap-3 bg-gray-900 text-white px-5 py-3 md:px-8 md:py-4 rounded-full md:rounded-2xl shadow-2xl shadow-orange-900/40 hover:bg-orange-600 active:scale-95 transition-all duration-300 group"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:hidden" />
            <Phone size={16} className="relative fill-white md:w-5 md:h-5" />
          </div>
          
          <span className="font-black text-[10px] md:text-sm uppercase tracking-[0.15em] md:tracking-widest whitespace-nowrap">
            Call to Order
          </span>
        </a>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
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
  
  // Daily Staples (Including Pulusu)
  { nameTelugu: 'పులిహోర పులుసు', nameEnglish: 'Tamarind Rice Paste ', basePrice: 600, category: 'staples', image: '/menu/PulihoraPulusu.png' },
  { nameTelugu: 'చపాతీలు', nameEnglish: 'Chapathis', basePrice: 12, category: 'staples', image: '/menu/Chapathi.png' },
];

function ProductCard({ product }: { product: Product }) {
  const [selectedIdx, setSelectedIdx] = useState(1); 
  // We check for "Chapathis" specifically for the per-piece pricing logic
  const isPerPiece = product.nameEnglish === 'Chapathis';
  
  const displayPrice = isPerPiece 
    ? product.basePrice 
    : Math.round(product.basePrice * weightOptions[selectedIdx].factor);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-lg">
      <div className="relative aspect-[16/13] w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.nameEnglish}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {!isPerPiece && (
          <div className="absolute top-3 right-3 bg-orange-600 text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg animate-pulse">
            Starts ₹{Math.round(product.basePrice * 0.1)}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-telugu font-bold text-lg text-gray-800 leading-tight">
            {product.nameTelugu}
          </h3>
          <p className="text-[11px] text-orange-600/70 uppercase tracking-widest font-bold mt-1">
            {product.nameEnglish}
          </p>
        </div>

        <div className="mt-auto">
          {!isPerPiece && (
            <div className="mb-5">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-2 ml-1 tracking-wider">
                Select Quantity
              </p>
              <div className="flex flex-wrap gap-1.5">
                {weightOptions.map((opt, idx) => (
                  <button
                    key={opt.label}
                    onClick={() => setSelectedIdx(idx)}
                    className={`flex-1 py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all border ${
                      selectedIdx === idx
                        ? 'bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-100'
                        : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">
                {isPerPiece ? 'Per Piece' : 'Total Price'}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black text-gray-900">₹{displayPrice}</span>
                {!isPerPiece && (
                  <span className="text-[10px] text-gray-500 font-medium bg-gray-100 px-1.5 py-0.5 rounded">
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
  const SectionLayout = ({ title, teluguTitle, items }: any) => {
    if (items.length === 0) return null;
    return (
      <div className="mb-14">
        <div className="mb-6 flex flex-col border-l-4 border-orange-500 pl-4">
          <h2 className="text-2xl font-black text-gray-900 leading-none">
            {title}
          </h2>
          <span className="font-telugu text-orange-600 text-lg mt-1">{teluguTitle}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((product: Product) => (
            <ProductCard key={product.nameEnglish} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <header className="pt-10 pb-6 px-4 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-colors text-sm font-medium mb-6"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="flex items-center gap-2 text-orange-600 mb-2 text-[11px] font-bold uppercase tracking-[0.2em]">
          <ShoppingBag size={14} />
          Fresh & Homemade
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Our <span className="text-orange-600">Menu</span>
        </h1>
        
        <p className="text-gray-500 mt-2 text-sm max-w-md">
          Authentic Telugu flavors prepared in small batches. Select your preferred quantity to see the price.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-20">
        <SectionLayout 
          title="Podis" 
          teluguTitle="పొడిలు" 
          items={products.filter(p => p.category === 'podis')} 
        />

        <SectionLayout 
          title="Pacchadi" 
          teluguTitle="పచ్చడి" 
          items={products.filter(p => p.category === 'pacchadi')} 
        />

        <SectionLayout 
          title="Daily Staples" 
          teluguTitle="రోజువారీ వంటలు" 
          items={products.filter(p => p.category === 'staples')} 
        />
        
        <div className="mt-10 p-8 bg-white rounded-3xl border border-dashed border-gray-200 text-center">
          <p className="text-gray-600 font-medium font-telugu">
            బల్క్ ఆర్డర్లు లేదా మరిన్ని వివరాల కోసం మమ్మల్ని సంప్రదించండి!
          </p>
        </div>
      </main>
    </div>
  );
}
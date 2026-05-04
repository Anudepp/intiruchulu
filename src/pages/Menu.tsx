import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  nameTelugu: string;
  nameEnglish: string;
  basePrice: number;
  category: 'podis' | 'pacchadi' | 'chapathi';
  image: string;
}

const weightOptions = [
  { label: '100g', factor: 0.1 },
  { label: '250g', factor: 0.25 },
  { label: '500g', factor: 0.5 },
  { label: '1kg', factor: 1.0 },
];

const products: Product[] = [
  { nameTelugu: 'కరివేపాకు పొడి', nameEnglish: 'Karivepaku Podi', basePrice: 600, category: 'podis', image: '/menu/KarivepakuPodi.png' },
  { nameTelugu: 'వెల్లుల్లి కారం', nameEnglish: 'Velulli Kaaram', basePrice: 600, category: 'podis', image: '/menu/VellulliKaram.png' },
  { nameTelugu: 'మునగాకు పొడి', nameEnglish: 'Munagaku Podi', basePrice: 600, category: 'podis', image: '/menu/MunagakuPodi.png' },
  { nameTelugu: 'పప్పుల పొడి', nameEnglish: 'Pappula Podi', basePrice: 600, category: 'podis', image: '/menu/PappulaPodi.png' },
  { nameTelugu: 'నువ్వుల పొడి', nameEnglish: 'Nuvvula Podi', basePrice: 600, category: 'podis', image: '/menu/NuvvulaPodi.png' },
  { nameTelugu: 'అవిసెగింజల పొడి', nameEnglish: 'Avisaginjala Podi', basePrice: 600, category: 'podis', image: '/menu/AvisaginjalaPodi.png' },
  { nameTelugu: 'గోంగూర పచ్చడి', nameEnglish: 'Gongura Pacchadi', basePrice: 500, category: 'pacchadi', image: '/menu/GonguraPacchadi.png' },
  { nameTelugu: 'కొత్తిమీర పచ్చడి', nameEnglish: 'Kotthimera Pacchadi', basePrice: 500, category: 'pacchadi', image: '/menu/KotthimeraPacchadi.png' },
  { nameTelugu: 'మీల్ మేకర్ పచ్చడి', nameEnglish: 'Meal Maker Pacchadi', basePrice: 500, category: 'pacchadi', image: '/menu/MealMakerPacchadi.png' },
  { nameTelugu: 'టొమాటో పచ్చడి', nameEnglish: 'Tomato Pacchadi', basePrice: 500, category: 'pacchadi', image: '/menu/TomatoPacchadi.png' },
  { nameTelugu: 'మామిడికాయ బెల్లం పచ్చడి', nameEnglish: 'Mamidikaya Bellam Pacchadi', basePrice: 500, category: 'pacchadi', image: '/menu/MamidikayaBellamPacchadi.png' },
  { nameTelugu: 'మామిడికాయ పచ్చడి', nameEnglish: 'Mamidikaya Pacchadi', basePrice: 500, category: 'pacchadi', image: '/menu/MamidikayaPacchadi.png' },
  { nameTelugu: 'చపాతీలు', nameEnglish: 'Chapathis', basePrice: 12, category: 'chapathi', image: '/menu/Chapathi.png' },
];

function ProductCard({ product }: { product: Product }) {
  const [selectedIdx, setSelectedIdx] = useState(1); // Default to 250g
  const isChapathi = product.category === 'chapathi';
  
  const displayPrice = isChapathi 
    ? product.basePrice 
    : Math.round(product.basePrice * weightOptions[selectedIdx].factor);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-orange-100">
      {/* Image Section */}
      <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.nameEnglish}
        />
        {!isChapathi && (
          <div className="absolute top-3 right-3 bg-orange-600 text-white px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg animate-pulse">
            Starts ₹{Math.round(product.basePrice * 0.1)}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Product Names */}
        <div className="mb-4">
          <h3 className="font-telugu font-bold text-lg text-gray-800 leading-tight">
            {product.nameTelugu}
          </h3>
          <p className="text-[11px] text-orange-600/70 uppercase tracking-widest font-bold mt-1">
            {product.nameEnglish}
          </p>
        </div>

        <div className="mt-auto">
          {/* Custom Weight Selector (Segmented Chips) */}
          {!isChapathi && (
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

          {/* Pricing Info */}
          <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block mb-0.5">
                {isChapathi ? 'Per Piece' : 'Total Price'}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black text-gray-900">₹{displayPrice}</span>
                {!isChapathi && (
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
  const SectionLayout = ({ title, teluguTitle, items }: any) => (
    <div className="mb-14">
      {/* Decorative Section Header */}
      <div className="mb-6 flex flex-col border-l-4 border-orange-500 pl-4">
        <h2 className="text-2xl font-black text-gray-900 leading-none">
          {title}
        </h2>
        <span className="font-telugu text-orange-600 text-lg mt-1">{teluguTitle}</span>
      </div>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((product: Product) => (
          <ProductCard key={product.nameEnglish} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header Area */}
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

      {/* Main Content Area */}
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
          teluguTitle="చపాతీలు" 
          items={products.filter(p => p.category === 'chapathi')} 
        />
        
        {/* Optional: Simple Notice at bottom */}
        <div className="mt-10 p-8 bg-white rounded-3xl border border-dashed border-gray-200 text-center">
          <p className="text-gray-600 font-medium">
            Contact us for bulk orders or customized spice levels!
          </p>
        </div>
      </main>
    </div>
  );
}
import { ShoppingBag, ArrowLeft, Phone } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge'; 
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SmartBanner from "../components/SmartBanner";
import type { Product } from "../types/product";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";







export default function Menu() {
  const phoneNumber = "+918499962882"; 
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  interface SectionLayoutProps {
  id: string;
  title: string;
  teluguTitle: string;
  items: Product[];
}

  const SectionLayout = ({ id, title, teluguTitle, items }: SectionLayoutProps) => {
    if (items.length === 0) return null;
    return (
      <div id={id} className="mb-12 md:mb-20"> 
        <div className="mb-6 flex flex-col border-l-[5px] border-orange-600 pl-4 md:pl-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight italic">
            {title}
          </h2>
          <span className="font-telugu text-orange-600 text-lg md:text-xl mt-0.5 font-bold">{teluguTitle}</span>
        </div>
        
        {/* MOBILE OPTIMIZED: 2 columns on small screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {items.map((product: Product) => (
            <ProductCard key={product.nameEnglish} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white animate-page relative">
      <div className="md:hidden sticky top-0 z-[100] shadow-md">
        <ShippingBadge isMobileBar={true} />
      </div>

      <header className="pt-10 md:pt-12 pb-8 md:pb-10 px-4 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-all text-[10px] md:text-sm font-black mb-6 md:mb-8 active:translate-x-[-4px]"
        >
          <ArrowLeft size={14} /> BACK TO HOME
        </Link>
        
        <div className="flex items-center gap-2 text-orange-600 mb-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
          <ShoppingBag size={14} className="animate-bounce" />
          Fresh & Homemade
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter">
          Our <span className="text-orange-600 italic">Menu</span>
        </h1>
        
        <p className="text-gray-500 mt-3 md:mt-4 text-sm md:text-base max-w-lg font-medium leading-relaxed">
         Authentic Telugu flavors prepared with love. From our family kitchen to your table.


        </p>
      </header>


      <div className="hidden md:block fixed bottom-8 left-8 z-50 animate-bounce-slow">
        <ShippingBadge />
      </div>

 <main className="max-w-7xl mx-auto px-4 pb-32">

  {/* SMART CONTEXTUAL BANNER */}
  <div className="mb-8 md:mb-10">
    <SmartBanner />
  </div>

  {/* PRODUCTS */}
  <SectionLayout
    id="powders"
    title="Traditional Powders"
    teluguTitle="పొడిలు"
    items={products.filter(p => p.category === 'podis')}
  />

  <SectionLayout
    id="pickles"
    title="Authentic Pickles"
    teluguTitle="పచ్చడి"
    items={products.filter(p => p.category === 'pacchadi')}
  />

  <SectionLayout
    id="staples"
    title="Daily Staples"
    teluguTitle="రోజువారీ వంటలు"
    items={products.filter(p => p.category === 'staples')}
  />

  {/* BULK ORDER CTA */}
  <div className="mt-10 md:mt-16 p-8 md:p-12 bg-orange-50/50 rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-orange-200 text-center">
    
    <p className="text-orange-900 text-lg md:text-xl font-bold font-telugu italic">
      "బల్క్ ఆర్డర్లు లేదా మరిన్ని వివరాల కోసం మమ్మల్ని సంప్రదించండి!"
    </p>

    <p className="text-orange-600 text-[10px] uppercase font-black tracking-widest mt-2">
      Bulk Orders & Catering
    </p>
  </div>
</main>

      <div className="fixed bottom-6 right-4 md:right-8 z-50 pointer-events-none">
        <a 
          href={`tel:${phoneNumber}`}
          className="pointer-events-auto flex items-center gap-2 bg-gray-900 text-white px-5 py-3 md:px-8 md:py-4 rounded-full shadow-2xl hover:bg-orange-600 active:scale-95 transition-all duration-300 group"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping group-hover:hidden" />
            <Phone size={14} className="relative fill-white md:w-5 md:h-5" />
          </div>
          <span className="font-black text-[10px] md:text-sm uppercase tracking-widest whitespace-nowrap">
            Call to Order
          </span>
        </a>
      </div>
    </div>
  );
}
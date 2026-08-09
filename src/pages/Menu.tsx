import { ShoppingBag, ArrowLeft, Phone } from 'lucide-react';
import ShippingBadge from '../components/ShippingBadge'; 
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SmartBanner from "../components/SmartBanner";
import type { Product } from "../types/product";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useFilteredProducts } from "../hooks/useFilteredProducts";

export default function Menu() {
  const phoneNumber = "+918499962882"; 
  const location = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const filteredProducts = useFilteredProducts(
    products,
    debouncedSearchQuery
  );

  const hasSearchResults = filteredProducts.length > 0;

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
      <div id={id} className="mb-14 md:mb-24 scroll-mt-24"> 
        {/* Section Header with Green/Gold Accent Bar */}
        <div className="mb-8 flex items-baseline justify-between border-b border-emerald-900/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-8 bg-emerald-800 rounded-full" />
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 tracking-tight">
                {title}
              </h2>
              <span className="font-telugu text-emerald-800 text-sm md:text-base font-semibold block mt-0.5">
                {teluguTitle}
              </span>
            </div>
          </div>
          <span className="text-xs text-emerald-800/60 font-medium tracking-wider uppercase hidden sm:block">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {items.map((product: Product) => (
            <ProductCard key={product.nameEnglish} product={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50/60 text-emerald-950 animate-page relative">
      {/* Mobile Top Badge */}
      <div className="md:hidden sticky top-0 z-[100] shadow-sm bg-emerald-950/90 backdrop-blur-md">
        <ShippingBadge isMobileBar={true} />
      </div>

      <header className="pt-10 md:pt-16 pb-8 md:pb-12 px-4 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-emerald-800/70 hover:text-emerald-950 transition-colors text-xs md:text-sm font-semibold tracking-wider mb-6 md:mb-10 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> 
          BACK TO HOME
        </Link>
        
        <div className="flex items-center gap-2 text-emerald-800 mb-3 text-xs md:text-sm font-bold uppercase tracking-[0.25em]">
          <ShoppingBag size={15} className="text-emerald-700" />
          Fresh & Homemade
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-normal text-emerald-950 tracking-tight">
          Our <span className="italic font-serif font-semibold text-emerald-800">Menu</span>
        </h1>
        
        <p className="text-emerald-900/70 mt-3 md:mt-5 text-base md:text-lg max-w-xl font-normal leading-relaxed">
          Authentic Telugu flavors prepared with love. From our family kitchen to your table.
        </p>
      </header>

      {/* Floating Desktop Shipping Badge */}
      <div className="hidden md:block fixed bottom-8 left-8 z-50">
        <ShippingBadge />
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-36">
        {/* Smart Banner Container */}
        <div className="mb-8 md:mb-10 rounded-2xl overflow-hidden shadow-sm border border-emerald-900/10">
          <SmartBanner />
        </div>

        {/* Search Bar Wrapper */}
        <div className="mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* PRODUCTS */}
        {hasSearchResults ? (
          <>
            <SectionLayout
              id="powders"
              title="Traditional Powders"
              teluguTitle="పొడిలు"
              items={filteredProducts.filter((p) => p.category === "podis")}
            />

            <SectionLayout
              id="pickles"
              title="Authentic Pickles"
              teluguTitle="పచ్చడి"
              items={filteredProducts.filter((p) => p.category === "pacchadi")}
            />

            <SectionLayout
              id="staples"
              title="Daily Staples"
              teluguTitle="రోజువారీ వంటలు"
              items={filteredProducts.filter((p) => p.category === "staples")}
            />
          </>
        ) : (
          <div className="py-24 text-center bg-white rounded-3xl border border-emerald-900/10 shadow-sm max-w-2xl mx-auto my-12 p-8">
            <div className="text-5xl mb-4 opacity-80">🔍</div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-950">
              No products found
            </h2>

            <p className="mt-3 text-emerald-800/70">
              We couldn't find any products matching
            </p>

            <p className="mt-2 font-semibold text-emerald-800 text-lg">
              "{searchQuery}"
            </p>

            <div className="mt-8 pt-6 border-t border-emerald-100 text-xs md:text-sm text-emerald-800/60 space-y-2 max-w-xs mx-auto text-left">
              <p className="flex items-center gap-2"><span className="text-amber-500">✓</span> Check the spelling</p>
              <p className="flex items-center gap-2"><span className="text-amber-500">✓</span> Search in English or Telugu</p>
              <p className="flex items-center gap-2"><span className="text-amber-500">✓</span> Try using fewer keywords</p>
            </div>
          </div>
        )}

        {/* BULK ORDER CTA CARD */}
        <div className="mt-14 md:mt-20 p-8 md:p-14 bg-emerald-950 rounded-[2rem] md:rounded-[2.5rem] shadow-xl text-center text-white relative overflow-hidden border border-emerald-800/50">
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <p className="text-amber-300 text-xl md:text-2xl font-serif font-normal font-telugu leading-relaxed">
            "బల్క్ ఆర్డర్లు లేదా మరిన్ని వివరాల కోసం మమ్మల్ని సంప్రదించండి!"
          </p>

          <div className="mt-4 inline-block px-4 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full">
            <p className="text-amber-300 text-[11px] md:text-xs font-semibold uppercase tracking-widest">
              Bulk Orders & Custom Catering Available
            </p>
          </div>
        </div>
      </main>

      {/* Floating Call CTA Button */}
      <div className="fixed bottom-6 right-4 md:right-8 z-50 pointer-events-none">
        <a 
          href={`tel:${phoneNumber}`}
          className="pointer-events-auto flex items-center gap-3 bg-emerald-900 text-amber-300 hover:bg-emerald-950 px-6 py-3.5 md:px-8 md:py-4 rounded-full shadow-2xl border border-amber-400/30 hover:border-amber-400/60 active:scale-95 transition-all duration-300 group"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-amber-400/20 rounded-full animate-ping group-hover:hidden" />
            <Phone size={16} className="relative fill-amber-300 md:w-5 md:h-5 text-amber-300" />
          </div>
          <span className="font-semibold text-xs md:text-sm tracking-wider uppercase whitespace-nowrap">
            Call to Order
          </span>
        </a>
      </div>
    </div>
  );
}
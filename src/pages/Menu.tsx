import { MessageCircle, ShoppingBag } from 'lucide-react';

interface Product {
  nameTelugu: string;
  nameEnglish: string;
  price: string;
  unit: string;
  category: 'podis' | 'pacchadi' | 'chapathi';
  image: string;
}

const products: Product[] = [
  { nameTelugu: 'కరివేపాకు పొడి', nameEnglish: 'Karivepaku Podi', price: '600', unit: 'per Kg', category: 'podis', image: '/menu/KarivepakuPodi.png' },
  { nameTelugu: 'వెల్లుల్లి కారం', nameEnglish: 'Velulli Kaaram', price: '600', unit: 'per Kg', category: 'podis', image: '/menu/VellulliKaram.png' },
  { nameTelugu: 'మునగాకు పొడి', nameEnglish: 'Munagaku Podi', price: '600', unit: 'per Kg', category: 'podis', image: '/menu/MunagakuPodi.png' },
  { nameTelugu: 'పప్పుల పొడి', nameEnglish: 'Pappula Podi', price: '600', unit: 'per Kg', category: 'podis', image: '/menu/PappulaPodi.png' },
  { nameTelugu: 'నువ్వుల పొడి', nameEnglish: 'Nuvvula Podi', price: '600', unit: 'per Kg', category: 'podis', image: '/menu/NuvvulaPodi.png' },
  { nameTelugu: 'అవిసెగింజల పొడి', nameEnglish: 'Avisaginjala Podi', price: '600', unit: 'per Kg', category: 'podis', image: '/menu/AvisaginjalaPodi.png' },
  { nameTelugu: 'గోంగూర పచ్చడి', nameEnglish: 'Gongura Pacchadi', price: '500', unit: 'per Kg', category: 'pacchadi', image: '/menu/GonguraPacchadi.png' },
  { nameTelugu: 'కొత్తిమీర పచ్చడి', nameEnglish: 'Kotthimera Pacchadi', price: '500', unit: 'per Kg', category: 'pacchadi', image: '/menu/KotthimeraPacchadi.png' },
  { nameTelugu: 'మీల్ మేకర్ పచ్చడి', nameEnglish: 'Meal Maker Pacchadi', price: '500', unit: 'per Kg', category: 'pacchadi', image: '/menu/MealMakerPacchadi.png' },
  { nameTelugu: 'టొమాటో పచ్చడి', nameEnglish: 'Tomato Pacchadi', price: '500', unit: 'per Kg', category: 'pacchadi', image: '/menu/TomatoPacchadi.png' },
  { nameTelugu: 'మామిడికాయ బెల్లం పచ్చడి', nameEnglish: 'Mamidikaya Bellam Pacchadi', price: '500', unit: 'per Kg', category: 'pacchadi', image: '/menu/MamidikayaBellamPacchadi.png' },
  { nameTelugu: 'మామిడికాయ పచ్చడి', nameEnglish: 'Mamidikaya Pacchadi', price: '500', unit: 'per Kg', category: 'pacchadi', image: '/menu/MamidikayaPacchadi.png' },
  { nameTelugu: 'చపాతీలు', nameEnglish: 'Chapathis', price: '12', unit: 'pc', category: 'chapathi', image: '/menu/Chapathi.png' },
];

function ProductCard({ product }: { product: Product }) {
  const phoneNumber = '919347977431';
  const message = encodeURIComponent(`Hi! I would like to order ${product.nameTelugu} (${product.nameEnglish}).`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={product.nameEnglish}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-3 flex flex-col flex-1">
        <div className="mb-2">
          <h3 className="font-telugu font-bold text-base md:text-lg text-gray-800 leading-tight">
            {product.nameTelugu}
          </h3>
          <p className="text-[10px] text-gray-400 uppercase tracking-tight">
            {product.nameEnglish}
          </p>
        </div>

        <div className="mt-auto pt-2 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-lg font-black text-gray-900">₹{product.price}</span>
            <span className="text-[9px] text-gray-500 ml-1">{product.unit}</span>
          </div>
          
          <a
            href={whatsappUrl}
            className="bg-green-500 text-white p-1.5 rounded-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const SectionLayout = ({ title, teluguTitle, items }: any) => (
    <div className="mb-10">
      <div className="mb-4 flex items-center justify-between border-b border-orange-100 pb-1">
        <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
          {title} <span className="font-telugu text-orange-600 font-normal text-base">{teluguTitle}</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {items.map((product: Product) => (
          <ProductCard key={product.nameEnglish} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Super Slim Header */}
      <header className="pt-6 pb-4 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-orange-600 mb-1 text-[10px] font-bold uppercase tracking-widest">
          <ShoppingBag size={12} />
          Authentic & Homemade
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900">
          Our <span className="text-orange-600">Menu</span>
        </h1>
      </header>

      {/* Main Grid Content - Content starts much higher now */}
      <main className="max-w-7xl mx-auto px-4 py-2">
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
      </main>

      {/* Simple Footer CTA */}
      <footer className="mt-10 py-8 bg-gray-50 text-center border-t border-gray-100">
        <p className="text-gray-600 font-medium mb-3 text-sm">Need a bulk order?</p>
        <a
          href="https://wa.me/919347977431"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white text-sm font-bold rounded-xl"
        >
          <MessageCircle size={18} />
          WhatsApp Us
        </a>
      </footer>
    </div>
  );
}
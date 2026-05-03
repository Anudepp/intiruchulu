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
  {
    nameTelugu: 'కరివేపాకు పొడి',
    nameEnglish: 'Karivepaku Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'వెల్లుల్లి కారం',
    nameEnglish: 'Velulli Kaaram',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'మునగాకు పొడి',
    nameEnglish: 'Munagaku Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'పప్పుల పొడి',
    nameEnglish: 'Pappula Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: 'https://images.pexels.com/photos/5589048/pexels-photo-5589048.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'నువ్వుల పొడి',
    nameEnglish: 'Nuvvula Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: 'https://images.pexels.com/photos/615704/pexels-photo-615704.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'అవిసెగింజల పొడి',
    nameEnglish: 'Avisaginjala Podi',
    price: '600',
    unit: 'per Kg',
    category: 'podis',
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'గోంగూర పచ్చడి',
    nameEnglish: 'Gongura Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'కొత్తిమీర పచ్చడి',
    nameEnglish: 'Kotthimera Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: 'https://images.pexels.com/photos/941723/pexels-photo-941723.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'మీల్ మేకర్ పచ్చడి',
    nameEnglish: 'Meal Maker Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'టొమాటో పచ్చడి',
    nameEnglish: 'Tomato Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: 'https://images.pexels.com/photos/533814/pexels-photo-533814.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'మామిడికాయ బెల్లం పచ్చడి',
    nameEnglish: 'Mamidikaya Bellam Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: 'https://images.pexels.com/photos/594663/pexels-photo-594663.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'మామిడికాయ పచ్చడి',
    nameEnglish: 'Mamidikaya Pacchadi',
    price: '500',
    unit: 'per Kg',
    category: 'pacchadi',
    image: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    nameTelugu: 'చపాతీలు',
    nameEnglish: 'Chapathis',
    price: '12',
    unit: 'per piece',
    category: 'chapathi',
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    <div className="card group hover:-translate-y-1 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.nameEnglish}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-semibold px-3 py-1 rounded-full">
            {product.category === 'podis' ? 'Podi' : product.category === 'pacchadi' ? 'Pacchadi' : 'Chapathi'}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-telugu font-semibold text-lg text-gray-900 mb-0.5">{product.nameTelugu}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.nameEnglish}</p>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-brand-600">&#8377;{product.price}</span>
            <span className="text-sm text-gray-400 ml-1">{product.unit}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <MessageCircle size={16} />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <ShoppingBag size={14} />
            Our Products
          </div>
          <h1 className="section-heading">Our <span className="font-telugu text-brand-600">మెనూ</span></h1>
          <p className="section-subheading">
            Authentic homemade Telugu style powders, pickles, and chapathis — order via WhatsApp!
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-brand-600 text-white transition-colors"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Podis Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Edible Powders <span className="font-telugu text-brand-600">(పొడిలు)</span></h2>
            <p className="text-sm text-gray-500 mb-6">Traditional spice powders to elevate every meal</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter((p) => p.category === 'podis').map((product) => (
                <ProductCard key={product.nameEnglish} product={product} />
              ))}
            </div>
          </div>

          {/* Pacchadi Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pickles <span className="font-telugu text-brand-600">(పచ్చడి)</span></h2>
            <p className="text-sm text-gray-500 mb-6">Tangy and flavorful homemade pickles</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter((p) => p.category === 'pacchadi').map((product) => (
                <ProductCard key={product.nameEnglish} product={product} />
              ))}
            </div>
          </div>

          {/* Chapathi Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Chapathis <span className="font-telugu text-brand-600">(చపాతీలు)</span></h2>
            <p className="text-sm text-gray-500 mb-6">Soft, freshly made chapathis</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter((p) => p.category === 'chapathi').map((product) => (
                <ProductCard key={product.nameEnglish} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Place Your Order on WhatsApp</h2>
          <p className="text-green-100 mb-6">Click the button below or the floating WhatsApp icon to reach us directly!</p>
          <a
            href={`https://wa.me/919347977431?text=${encodeURIComponent('Hi! I would like to place an order from Inti Ruchulu.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Flame, Heart } from 'lucide-react';

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
    link: '/menu',
  },
  {
    title: 'Edible Powders',
    teluguTitle: 'కారం పొడులు',
    image: '/menu/KarivepakuPodi.png', 
    link: '/menu',
  },
  {
    title: 'Soft Chapathis',
    teluguTitle: 'చపాతీలు',
    image: '/menu/Chapathi.png',
    link: '/menu',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-spice-50">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-medium">
                <Leaf size={14} />
                Homemade with Love
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Taste of <span className="font-telugu text-brand-600">Home</span>
                <br />
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Authentic homemade Telugu style edible powders, pickles, and chapathis — crafted with traditional recipes and the freshest ingredients.
              </p>
              <div className="flex flex-wrap gap-4 relative z-20">
                <Link 
                  to="/menu" 
                  className="flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all shadow-md"
                >
                  View Our Menu <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-spice-500 rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-spice-500 rounded-3xl -rotate-3 opacity-10" />
                <div className="relative bg-gradient-to-br from-brand-100 to-spice-100 rounded-3xl overflow-hidden h-full flex items-center justify-center">
                  <div className="text-center p-8 space-y-4">
                    <div className="text-8xl font-telugu font-bold text-brand-600/20">ఇంటి</div>
                    <div className="text-6xl font-telugu font-bold text-spice-600/20">రుచులు</div>
                    <div className="text-sm text-gray-500 font-medium tracking-widest uppercase">Inti Ruchulu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Shop By Category Section */}
<section className="py-16 md:py-24 bg-brand-50/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
      <p className="text-gray-600 mt-2">Pick your favorite category to see our full menu</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <Link 
          key={cat.title} 
          to={cat.link}
          className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200"
        >
          <img 
            src={cat.image} 
            alt={cat.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="block text-brand-400 font-telugu text-lg mb-1">{cat.teluguTitle}</span>
            <h3 className="text-2xl font-bold text-white mb-3">
              {cat.title}
            </h3>
            
            {/* New CTA Label */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 ">
              Click to view items 
              <span className="p-1 bg-white/10 rounded-full">
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose <span className="font-telugu text-brand-600">ఇంటి రుచులు</span>?</h2>
            <p className="text-gray-500 mt-2">We bring the authentic taste of Telugu kitchens straight to your home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-8 text-center border border-gray-100 rounded-2xl group hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                  <f.icon size={28} className="text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-spice-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Taste the Difference?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-xl mx-auto">
            Browse our menu of homemade powders, pickles, and chapathis. Place your order via WhatsApp!
          </p>
          <Link to="/menu" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-all duration-200 shadow-lg hover:shadow-xl gap-2">
            Explore Menu <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
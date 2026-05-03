import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

const values = [
  { icon: CheckCircle, title: 'Quality First', desc: 'Every batch is prepared with the highest standards of hygiene and freshness.' },
  { icon: Users, title: 'Family Recipes', desc: 'Our recipes have been cherished and perfected over generations in Telugu households.' },
  { icon: Award, title: 'No Preservatives', desc: 'We use zero artificial preservatives — only natural ingredients and traditional methods.' },
  { icon: Clock, title: 'Made Fresh', desc: 'Small batch production ensures every order is freshly made and delivered promptly.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                About <span className="font-telugu text-brand-600">ఇంటి రుచులు</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-telugu font-semibold">ఇంటి రుచులు</span> (Inti Ruchulu) means "the flavors of home." We are a small, passionate team dedicated to preserving the authentic taste of Telugu kitchens.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey started with a simple desire — to bring the rich, traditional flavors of Andhra and Telangana to every home. From aromatic podis to tangy pacchadis and soft chapathis, every product is made with love, using time-honored recipes and the freshest ingredients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe food is more than sustenance — it is memory, culture, and love. That is why we pour our heart into every jar and every batch we prepare.
              </p>
              <Link to="/menu" className="btn-primary inline-flex gap-2">
                See Our Products <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 via-spice-50 to-leaf-50 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8 space-y-2">
                  <div className="text-7xl font-telugu font-bold text-brand-500/30">ఇంటి</div>
                  <div className="text-5xl font-telugu font-bold text-spice-500/30">రుచులు</div>
                  <p className="text-gray-400 text-sm mt-4 tracking-wider uppercase">Since 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subheading">What drives us to deliver the best to your table.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center group hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                  <v.icon size={24} className="text-brand-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Growing up in a traditional Telugu household, the kitchen was always the heart of the home. The aroma of freshly ground podis, the tang of homemade pacchadi, and the warmth of just-made chapathis — these were the flavors that defined our childhood.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <span className="font-telugu font-semibold">ఇంటి రుచులు</span> was born from the desire to share these flavors with the world. We realized that many people living away from home miss the authentic taste that only a mother's kitchen can provide.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we continue to prepare every product the traditional way — with patience, care, and the finest ingredients. Because we believe everyone deserves a taste of home.
          </p>
        </div>
      </section>
    </div>
  );
}

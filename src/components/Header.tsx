import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[200] transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center shadow-orange-200 shadow-lg">
              <span className="text-white font-bold text-base font-telugu">ఇరు</span>
            </div>
            <div className="flex flex-col">
              <span className="font-telugu font-bold text-lg text-gray-900 leading-none">
                ఇంటి రుచులు
              </span>
              <span className="text-[8px] tracking-widest uppercase text-orange-600 font-bold">
                Inti Ruchulu
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-bold transition-colors ${
                  location.pathname === link.to
                    ? 'text-orange-600'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav Icons */}
          <div className="flex items-center gap-4 md:hidden">
            
            <Link
              to="/"
              className="flex flex-col items-center group"
            >
              <div
                className={`p-2 rounded-xl transition-all ${
                  location.pathname === '/'
                    ? 'bg-orange-100 text-orange-600 scale-105'
                    : 'bg-gray-100 text-gray-600 group-active:scale-95'
                }`}
              >
                <Home size={20} />
              </div>
              <span className="text-[10px] font-semibold mt-1 text-gray-700">
                Home
              </span>
            </Link>

            <Link
              to="/menu"
              className="flex flex-col items-center group"
            >
              <div
                className={`p-2 rounded-xl transition-all ${
                  location.pathname === '/menu'
                    ? 'bg-orange-100 text-orange-600 scale-105'
                    : 'bg-gray-100 text-gray-600 group-active:scale-95'
                }`}
              >
                <UtensilsCrossed size={20} />
              </div>
              <span className="text-[10px] font-semibold mt-1 text-gray-700">
                Menu
              </span>
            </Link>

            <Link
              to="/contact"
              className="flex flex-col items-center group"
            >
              <div
                className={`p-2 rounded-xl transition-all ${
                  location.pathname === '/contact'
                    ? 'bg-orange-100 text-orange-600 scale-105'
                    : 'bg-gray-100 text-gray-600 group-active:scale-95'
                }`}
              >
                <Phone size={20} />
              </div>
              <span className="text-[10px] font-semibold mt-1 text-gray-700">
                Contact
              </span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}
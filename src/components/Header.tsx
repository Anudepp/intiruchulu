import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo - Kept clean and professional */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center shadow-orange-200 shadow-lg">
              <span className="text-white font-bold text-base font-telugu">ఇరు</span>
            </div>
            <div className="flex flex-col">
              <span className="font-telugu font-bold text-lg text-gray-900 leading-none">ఇంటి రుచులు</span>
              <span className="text-[8px] tracking-widest uppercase text-orange-600 font-bold">Inti Ruchulu</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-bold transition-colors ${
                  location.pathname === link.to ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Right Side Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <Link to="/menu" className="p-2 text-gray-700 bg-gray-50 rounded-full">
              <ShoppingBag size={18} />
            </Link>
            <button
              className={`p-2 rounded-xl transition-all ${
                mobileOpen ? 'bg-orange-600 text-white rotate-90' : 'bg-gray-100 text-gray-900'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - Compact "Floating Card" Style */}
      <div 
        className={`absolute top-full left-0 w-full px-4 pt-2 pb-6 md:hidden transition-all duration-300 ease-out ${
          mobileOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        {/* The "Island" Container */}
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 gap-2 p-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-center py-4 rounded-2xl text-sm font-bold transition-all ${
                  location.pathname === link.to
                    ? 'bg-orange-50 text-orange-700 border-orange-100 border'
                    : 'bg-gray-50 text-gray-600 border-transparent border hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-3 pb-3">
            <Link 
              to="/menu"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-4 bg-gray-900 text-white rounded-2xl text-xs font-black tracking-widest shadow-lg active:scale-[0.98] transition-transform"
            >
              EXPLORE FULL MENU
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
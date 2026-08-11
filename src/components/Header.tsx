import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Phone, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import CartIcon from "./CartIcon";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Animation */}
      <style>
        {`
          @keyframes softFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-2px); }
          }
          .animate-soft-float { animation: softFloat 3s ease-in-out infinite; }
        `}
      </style>

      <header
        className={`sticky top-0 z-[200] transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(6,78,59,0.06)] py-2 border-b border-emerald-900/10'
            : 'bg-white py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-14">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 active:scale-95 transition-transform duration-200"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-800 blur-md opacity-25 rounded-xl md:rounded-2xl" />
                <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-emerald-950 border border-emerald-800/50 flex items-center justify-center shadow-md shadow-emerald-950/20">
                  <span className="text-amber-300 font-bold text-sm md:text-base font-telugu">ఇరు</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-telugu font-black text-base md:text-lg text-emerald-950 leading-none">ఇంటి రుచులు</span>
                <span className="text-[7.5px] md:text-[8px] tracking-[0.25em] uppercase text-emerald-800 font-black">Inti Ruchulu</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const active = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`relative text-sm font-bold transition-all duration-300 ${
                        active ? "text-emerald-950" : "text-emerald-800/70 hover:text-emerald-950"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-1.5 h-[2.5px] rounded-full bg-emerald-800 transition-all duration-300 ${
                          active ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
              <CartIcon className="cursor-pointer" iconClassName="text-emerald-900 hover:text-emerald-800" />
            </div>

            {/* Mobile Nav */}
            <div className="flex items-center gap-1.5 sm:gap-3 md:hidden">
              {/* Home */}
              <Link to="/" className="flex flex-col items-center group">
                <div
                  className={`p-2 rounded-xl transition-all duration-200 active:scale-90 ${
                    location.pathname === '/'
                      ? 'bg-emerald-950 text-amber-300 shadow-md shadow-emerald-950/20'
                      : 'bg-emerald-50/70 text-emerald-900/80 border border-emerald-900/5'
                  }`}
                >
                  <Home size={18} className={location.pathname === '/' ? 'animate-soft-float' : ''} />
                </div>
                <span className={`text-[9px] font-bold mt-1 ${location.pathname === '/' ? 'text-emerald-950' : 'text-emerald-800/70'}`}>
                  Home
                </span>
              </Link>

              {/* Menu */}
              <Link to="/menu" className="flex flex-col items-center group">
                <div
                  className={`p-2 rounded-xl transition-all duration-200 active:scale-90 ${
                    location.pathname === '/menu'
                      ? 'bg-emerald-950 text-amber-300 shadow-md shadow-emerald-950/20'
                      : 'bg-emerald-50/70 text-emerald-900/80 border border-emerald-900/5'
                  }`}
                >
                  <UtensilsCrossed size={18} className={location.pathname === '/menu' ? 'animate-soft-float' : ''} />
                </div>
                <span className={`text-[9px] font-bold mt-1 ${location.pathname === '/menu' ? 'text-emerald-950' : 'text-emerald-800/70'}`}>
                  Menu
                </span>
              </Link>
              {/* Contact */}
              <Link to="/contact" className="flex flex-col items-center group">
                <div
                  className={`p-2 rounded-xl transition-all duration-200 active:scale-90 ${
                    location.pathname === '/contact'
                      ? 'bg-emerald-950 text-amber-300 shadow-md shadow-emerald-950/20'
                      : 'bg-emerald-50/70 text-emerald-900/80 border border-emerald-900/5'
                  }`}
                >
                  <Phone size={18} className={location.pathname === '/contact' ? 'animate-soft-float' : ''} />
                </div>
                <span className={`text-[9px] font-bold mt-1 ${location.pathname === '/contact' ? 'text-emerald-950' : 'text-emerald-800/70'}`}>
                  Contact
                </span>
              </Link>

              {/* Cart */}
              <div className="flex flex-col items-center group">
                <CartIcon
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    location.pathname === "/cart"
                      ? "bg-emerald-950 text-amber-300 shadow-md shadow-emerald-950/20"
                      : "bg-emerald-50/70 border border-emerald-900/5"
                  }`}
                  iconClassName={location.pathname === "/cart" ? "text-amber-300" : "text-emerald-900/80"}
                />
                <span className={`text-[9px] font-bold mt-1 ${location.pathname === '/cart' ? 'text-emerald-950' : 'text-emerald-800/70'}`}>
                  Cart
                </span>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
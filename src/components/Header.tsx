import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { playTap } from '../utils/sound';
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
            0%, 100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-2px);
            }
          }

          .animate-soft-float {
            animation: softFloat 3s ease-in-out infinite;
          }
        `}
      </style>

      <header
        className={`sticky top-0 z-[200] transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] py-2 border-b border-orange-100/40'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link
              to="/"
              onClick={() => playTap()}
              className="flex items-center gap-2 active:scale-95 transition-transform duration-200"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 blur-lg opacity-20 rounded-2xl" />

                <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-200">
                  <span className="text-white font-bold text-base font-telugu">
                    ఇరు
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-telugu font-bold text-lg text-gray-900 leading-none">
                  ఇంటి రుచులు
                </span>

                <span className="text-[8px] tracking-[0.25em] uppercase text-orange-600 font-bold">
                  Inti Ruchulu
                </span>
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
          onClick={() => playTap()}
          className={`relative text-sm font-bold transition-all duration-300 ${
            active
              ? "text-orange-600"
              : "text-gray-600 hover:text-orange-600"
          }`}
        >
          {link.label}

          <span
            className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-orange-500 transition-all duration-300 ${
              active ? "w-full" : "w-0"
            }`}
          />
        </Link>
      );
    })}
  </nav>

<CartIcon
  className="cursor-pointer"
  iconClassName="text-gray-700 hover:text-orange-600"
/>
</div>

            {/* Mobile Nav */}
            <div className="flex items-center gap-4 md:hidden">

              {/* Home */}
              <Link
                to="/"
                onClick={() => playTap()}
                className="flex flex-col items-center group"
              >
                <div
                  className={`p-2.5 rounded-2xl transition-all duration-200 active:scale-90 ${
                    location.pathname === '/'
                      ? 'bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 scale-105 shadow-md shadow-orange-200/50'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Home
                    size={20}
                    className={
                      location.pathname === '/'
                        ? 'animate-soft-float'
                        : ''
                    }
                  />
                </div>

                <span className="text-[10px] font-semibold mt-1 text-gray-700">
                  Home
                </span>
              </Link>

              {/* Menu */}
              <Link
                to="/menu"
                onClick={() => playTap()}
                className="flex flex-col items-center group"
              >
                <div
                  className={`p-2.5 rounded-2xl transition-all duration-200 active:scale-90 ${
                    location.pathname === '/menu'
                      ? 'bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 scale-105 shadow-md shadow-orange-200/50'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <UtensilsCrossed
                    size={20}
                    className={
                      location.pathname === '/menu'
                        ? 'animate-soft-float'
                        : ''
                    }
                  />
                </div>

                <span className="text-[10px] font-semibold mt-1 text-gray-700">
                  Menu
                </span>
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => playTap()}
                className="flex flex-col items-center group"
              >
                <div
                  className={`p-2.5 rounded-2xl transition-all duration-200 active:scale-90 ${
                    location.pathname === '/contact'
                      ? 'bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 scale-105 shadow-md shadow-orange-200/50'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Phone
                    size={20}
                    className={
                      location.pathname === '/contact'
                        ? 'animate-soft-float'
                        : ''
                    }
                  />
                </div>

                <span className="text-[10px] font-semibold mt-1 text-gray-700">
                  Contact
                </span>
              </Link>
              {/* Cart */}
{/* Cart */}
<div className="flex flex-col items-center group">
  <CartIcon
    className={`p-2.5 rounded-2xl transition-all duration-200 ${
      location.pathname === "/cart"
        ? "bg-gradient-to-br from-orange-100 to-orange-50 shadow-md shadow-orange-200/50"
        : "bg-gray-100"
    }`}
    iconClassName={`${
      location.pathname === "/cart"
        ? "text-orange-600"
        : "text-gray-600"
    }`}
  />

  <span className="text-[10px] font-semibold mt-1 text-gray-700">
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
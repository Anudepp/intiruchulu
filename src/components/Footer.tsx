import { Link } from 'react-router-dom';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Compact Brand Section */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-900/20">
              <span className="text-white font-bold text-sm">ఇరు</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-gray-100 leading-none">ఇంటి రుచులు</span>
              <span className="text-[9px] tracking-[0.15em] uppercase text-orange-500 font-bold mt-0.5">
                Inti Ruchulu
              </span>
            </div>
          </div>

          {/* Minimalist Navigation */}
          <nav>
            <ul className="flex items-center justify-center gap-x-6">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[12px] font-semibold hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Micro Copyright - Visible on desktop at the end of the row */}
          <div className="hidden md:block text-[11px] text-gray-600">
            &copy; {new Date().getFullYear()}
          </div>
        </div>

        {/* Mobile-only Copyright - Centered and slim */}
        <div className="mt-6 pt-4 border-t border-gray-900/50 md:hidden text-center">
          <p className="text-[10px] text-gray-600 tracking-wide uppercase">
            &copy; {new Date().getFullYear()} Inti Ruchulu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
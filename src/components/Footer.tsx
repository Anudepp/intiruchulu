import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Reduced padding from py-12 to py-8 for a smaller footprint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand Section: Now more compact */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg">ఇరు</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-white">ఇంటి రుచులు</span>
              <span className="text-[10px] tracking-widest uppercase text-orange-400 font-semibold">
                Inti Ruchulu
              </span>
            </div>
          </div>

          {/* Quick Links: Changed to Horizontal Layout */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Optional: Simple Contact Socials or Info can go here */}
          <div className="flex gap-4 text-gray-400">
             <Phone size={18} className="hover:text-orange-400 cursor-pointer" />
             <Mail size={18} className="hover:text-orange-400 cursor-pointer" />
             <MapPin size={18} className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>

        {/* Thinner, cleaner bottom border and copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-[11px] text-gray-500">
          &copy; {new Date().getFullYear()} Inti Ruchulu (ఇంటి రుచులు). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
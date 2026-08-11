import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { useEffect, useState } from 'react';
import Cart from "./pages/Cart";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import IntroLoader from './components/IntroLoader';
import { Toaster } from "react-hot-toast";
import ProductDetail from './pages/ProductDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f5ef]">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 1000,
            style: {
              background: "#064e3b", // emerald-950
              color: "#fcd34d",      // amber-300
              border: "1px solid rgba(4, 120, 87, 0.5)", // emerald-700
              borderRadius: "14px",
              fontWeight: "700",
              fontSize: "14px",
              boxShadow: "0 10px 25px -5px rgba(6, 78, 59, 0.25)",
            },
            success: {
              iconTheme: {
                primary: "#fcd34d",   // amber-300 checkmark
                secondary: "#064e3b", // emerald-950 icon background
              },
            },
            error: {
              iconTheme: {
                primary: "#f87171",   // soft red
                secondary: "#064e3b",
              },
            },
          }}
        />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('introPlayed');

    if (hasVisited) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('introPlayed', 'true');
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <IntroLoader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
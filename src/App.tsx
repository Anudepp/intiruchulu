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
    duration: 2000,
    style: {
      background: "#fff",
      color: "#1f2937",
      border: "1px solid #fdba74",
      borderRadius: "12px",
      fontWeight: "600",
    },
    success: {
      iconTheme: {
        primary: "#ea580c",
        secondary: "#ffffff",
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
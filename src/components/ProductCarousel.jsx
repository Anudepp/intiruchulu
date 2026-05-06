import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCarousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const resumeRef = useRef(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length);
    }, 3500);
  };

  useEffect(() => {
    if (items.length > 0) startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [index, items.length]);

  const pause = () => {
    clearInterval(intervalRef.current);
    clearTimeout(resumeRef.current);
  };

  const resume = () => {
    resumeRef.current = setTimeout(() => {
      startAutoSlide();
    }, 5000);
  };

  const handleDragEnd = (_, info) => {
    const threshold = 50;

    if (info.offset.x < -threshold) {
      setIndex(prev => (prev + 1) % items.length);
    } else if (info.offset.x > threshold) {
      setIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));
    }

    pause();
    resume();
  };

  if (!items.length) return null;

  return (
    <>
      {/* 📱 MOBILE: Carousel */}
      <div
        className="relative overflow-hidden md:hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={pause}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <Link
                to={item.link}
                className="relative block rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-3">
                  <p className="text-orange-400 text-xs font-bold font-telugu">
                    {item.telugu}
                  </p>
                  <h3 className="text-white text-sm font-bold">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>

        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                pause();
                resume();
              }}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 💻 DESKTOP: Clean Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 px-4">
        {items.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="relative block rounded-2xl overflow-hidden shadow-md hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-4">
              <p className="text-orange-400 text-sm font-bold font-telugu">
                {item.telugu}
              </p>
              <h3 className="text-white text-lg font-bold">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
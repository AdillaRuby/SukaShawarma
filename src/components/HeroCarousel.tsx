"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/**
 * IMPORTANT: Replace `image` URLs below with actual professional photos of
 * SukaShawarma products (shawarma wraps, plates, rotisserie). Do NOT use
 * stock salad/bowl photos. Put images in /public/images/ and update paths.
 */
const slides = [
  {
    image: "/hero1.png",
  },
  {
    image: "/hero3.png",
  },
  {
    image: "/hero2.png",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-[#111111]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero carousel"
    >
      {/* Layer 1 (z-[10]): Ambient vignette overlay for depth */}
      <div className="absolute inset-0 z-[10] bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Layer 2 (z-[20]): Slides with GPU acceleration */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 z-[20] transform-gpu will-change-transform"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[current].image}')` }}
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Layer 3 (z-[30]): Floating organic accent badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-24 left-6 lg:left-12 z-[30] hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide shadow-layered-md transform-gpu pointer-events-none"
      >
        <span className="w-2 h-2 rounded-full bg-[#FE7108] animate-pulse" />
        Autentik Timur Tengah
      </motion.div>

      {/* Layer 6 (z-[60]): Arrow navigation */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-200 shadow-layered-md transform-gpu"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/30 hover:scale-105 active:scale-95 transition-all duration-200 shadow-layered-md transform-gpu"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Layer 6 (z-[60]): Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 transform-gpu">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 h-2.5 bg-[#FE7108] shadow-brand-glow"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

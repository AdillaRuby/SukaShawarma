"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  { image: "/hero1.png", objectPosition: "40% center" },
  { image: "/hero3.png", objectPosition: "center center" },
  { image: "/hero2.png", objectPosition: "center top" },
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
      className="relative w-full overflow-hidden bg-[#111111]"
      style={{ height: "clamp(300px, 56vw, 90vh)", minHeight: "clamp(300px, 56vw, 90vh)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Hero carousel"
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          {/* Mobile: object-contain agar gambar tidak terpotong */}
          <img
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className="w-full h-full
                       object-contain sm:object-cover
                       select-none pointer-events-none"
            style={{ objectPosition: slides[current].objectPosition }}
            draggable={false}
            aria-hidden="true"
          />
          {/* Subtle dark overlay hanya di mobile agar dot/arrow tetap terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:hidden" />
        </motion.div>
      </AnimatePresence>

      {/* Arrow navigation */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20
                   w-8 h-8 sm:w-10 sm:h-10 rounded-full
                   bg-white/10 backdrop-blur-sm border border-white/20
                   flex items-center justify-center text-white
                   hover:bg-white/20 active:bg-white/30
                   transition-colors touch-manipulation"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20
                   w-8 h-8 sm:w-10 sm:h-10 rounded-full
                   bg-white/10 backdrop-blur-sm border border-white/20
                   flex items-center justify-center text-white
                   hover:bg-white/20 active:bg-white/30
                   transition-colors touch-manipulation"
        aria-label="Slide berikutnya"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 touch-manipulation ${
              i === current
                ? "w-5 h-2 sm:w-6 sm:h-2 bg-[#FE7108]"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Pergi ke slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

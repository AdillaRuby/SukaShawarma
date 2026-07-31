"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    image: "/hero1.png",
    bg: "#FAF7F2",          // krem — cocok dgn bg putih gambar
    objectPosition: "40% center",
  },
  {
    image: "/hero3.png",
    bg: "#FAFAFA",
    objectPosition: "center center",
  },
  {
    image: "/hero2.png",
    bg: "#F0EDEA",
    objectPosition: "center top",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        /* 60vh di mobile agar tidak terlalu pendek, 90vh di atas md */
        height: "max(260px, 60vh)",
        backgroundColor: slides[current].bg,
        transition: "background-color 0.7s ease",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Hero carousel"
    >
      {/* Slides — object-cover di semua ukuran, tidak ada letterbox */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover select-none pointer-events-none"
            style={{ objectPosition: slides[current].objectPosition }}
            draggable={false}
            aria-hidden="true"
          />
          {/* Overlay tipis supaya dot & arrow tetap terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Arrow kiri */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20
                   w-9 h-9 md:w-11 md:h-11 rounded-full
                   bg-white/20 backdrop-blur-md border border-white/30
                   flex items-center justify-center text-white
                   hover:bg-white/30 active:scale-95
                   transition-all duration-150 touch-manipulation"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Arrow kanan */}
      <button
        onClick={next}
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20
                   w-9 h-9 md:w-11 md:h-11 rounded-full
                   bg-white/20 backdrop-blur-md border border-white/30
                   flex items-center justify-center text-white
                   hover:bg-white/30 active:scale-95
                   transition-all duration-150 touch-manipulation"
        aria-label="Slide berikutnya"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-20
                      flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 touch-manipulation ${
              i === current
                ? "w-6 h-2 bg-[#FE7108] shadow-[0_0_8px_rgba(254,113,8,0.6)]"
                : "w-2 h-2 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Pergi ke slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

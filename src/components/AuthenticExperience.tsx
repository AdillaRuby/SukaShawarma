"use client";

import { motion } from "motion/react";
import { Flame, Wallet, MapPin } from "lucide-react";

const whySpecial = [
  {
    icon: Flame,
    title: "CITA RASA OTENTIK",
    description:
      "Nikmati Sensasi Kebab Khas Timur Tengah Dengan Rempah Otentik Dan Bahan Premium. Sudah Dibuktikan Ribuan Orang, Sekarang Giliran Kamu!",
  },
  {
    icon: Wallet,
    title: "HARGA MERAKYAT",
    description:
      "Mulai Dari 20 Ribuan Aja Kalian Udah Bisa Kelelzatan Sukashawarma. Bisa Kemyang Tanpa Kantong Jebol!",
  },
  {
    icon: MapPin,
    title: "20 CABANG",
    description:
      "Sudah Tersebar Di 18+ Titik. Makin Mudah Cari Suka Shawarma Di Dekatmu!",
  },
];

export default function AuthenticExperience() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#6E1A10] overflow-hidden">
      {/* Layer 1 (z-[10]): Golden accent glow ring behind chef */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#FE7108]/15 blur-3xl pointer-events-none z-[10]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-[20]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — ilustrasi chef (Layer 2) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center z-[20] transform-gpu"
          >
            {/* Soft backdrop halo */}
            <div className="absolute inset-0 max-w-sm mx-auto rounded-full bg-[#FFC500]/10 blur-2xl pointer-events-none" />
            <img
              src="/authenticexpreince.png"
              alt="Chef Suka Shawarma"
              className="w-full max-w-md h-auto object-contain relative z-[20] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-500 transform-gpu"
            />
          </motion.div>

          {/* Right — headline + 3 value props (Layer 4 & 5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[40]"
          >
            {/* Headline (Layer 4) */}
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-12 relative z-[40]">
              KENAPA<br />
              SUKASHAWARMA<br />
              <span className="text-[#FE7108]">SPESIAL</span>
            </h2>

            {/* 3 value props (Layer 5) */}
            <div className="space-y-8 relative z-[50]">
              {whySpecial.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-5 group p-2 rounded-xl hover:bg-white/5 transition-all duration-300 transform-gpu"
                >
                  {/* Icon box — orange square with layered shadow */}
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[#FE7108] flex items-center justify-center shadow-layered-md group-hover:scale-105 group-hover:shadow-brand-glow transition-all duration-300 transform-gpu z-[60]">
                    <item.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

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
    <section className="py-20 lg:py-28 bg-[#6E1A10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — ilustrasi chef */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <img
              src="/authenticexpreince.png"
              alt="Chef Suka Shawarma"
              className="w-full max-w-md h-auto object-contain"
            />
          </motion.div>

          {/* Right — headline + 3 value props */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-12">
              KENAPA<br />
              SUKASHAWARMA<br />
              <span className="text-[#FE7108]">SPESIAL</span>
            </h2>

            {/* 3 value props */}
            <div className="space-y-8">
              {whySpecial.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-5"
                >
                  {/* Icon box — orange square */}
                  <div className="shrink-0 w-14 h-14 rounded bg-[#FE7108] flex items-center justify-center">
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

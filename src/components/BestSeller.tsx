"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Best Seller items — source of truth in src/data/menu.ts
const bestSellers = [
  {
    id: "ori-ayam-besar",
    name: "ORIGINAL AYAM BESAR",
    description: "Shawarma ayam ukuran besar — lebih banyak lebih puas",
    image: "/menus/SS_ORI_AYAM.png",
  },
  {
    id: "ori-sapi-besar",
    name: "ORIGINAL SAPI BESAR",
    description: "Shawarma daging sapi pilihan ukuran besar",
    image: "/menus/ORI SAPI.png",
  },
  {
    id: "suka-chicken",
    name: "SUKA CHICKEN",
    description: "Shawarma ayam spesial dengan saus SUKA signature",
    image: "/menus/SS_SUKA_CHICKEN.png",
  },
];

export default function BestSeller() {
  return (
    <section id="menu" className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FE7108] mb-3">
            Menu Pilihan
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mb-4">
            Best Seller Kami
          </h2>
        </div>

        {/* Product grid — 3 kolom, no card, foto besar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {bestSellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              {/* Foto */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover
                             group-hover:scale-[1.03]
                             transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#FFC500] text-[#111111]
                                text-[10px] font-bold tracking-wider uppercase
                                px-2.5 py-1 rounded-full shadow-sm">
                  Best Seller
                </div>
              </div>

              {/* Nama */}
              <h3 className="font-bold text-[#111111] text-base tracking-wide uppercase mb-2">
                {item.name}
              </h3>

              {/* Deskripsi */}
              <p className="text-sm text-[#111111]/60 leading-relaxed mb-5">
                {item.description}
              </p>

              {/* CTA */}
              <Link
                href="/menu"
                className="inline-flex items-center gap-1 text-sm font-semibold
                           text-[#FE7108] hover:gap-2 transition-all duration-200 group/link mt-auto"
              >
                Lihat Menu Lengkap
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { outlets } from "@/data/outlets";

// Lazy load — Leaflet is client-only and heavy
const OutletMap = dynamic(() => import("./OutletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[780px] rounded-[28px] bg-[#e8e3dc] animate-pulse flex items-center justify-center">
      <p className="text-[#6E1A10]/40 text-sm font-medium">Memuat peta...</p>
    </div>
  ),
});

export default function Locations() {
  return (
    <section id="locations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#FE7108] mb-3">
            Temukan Kami
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-[1.1]">
              Temukan Kami<br />
              <span className="text-[#6E1A10]">di Sekitar Kamu</span>
            </h2>
            <p className="text-[#111111]/50 text-sm max-w-xs md:text-right leading-relaxed">
              Klik marker di peta untuk melihat detail outlet, jam buka, dan cara pemesanan.
            </p>
          </div>
        </motion.div>

        {/* Map — hero of this section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[780px] rounded-[28px] overflow-hidden
                     shadow-[0_24px_80px_rgba(0,0,0,0.12)]
                     border border-black/[0.04]"
        >
          <OutletMap outlets={outlets} />
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-[#111111]/30 mt-5"
        >
          Klik marker untuk detail outlet · Gunakan scroll untuk zoom · Geser untuk jelajahi
        </motion.p>
      </div>
    </section>
  );
}

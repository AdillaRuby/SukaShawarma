"use client";

import { motion } from "motion/react";

export default function KemitraanProfit() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#FE7108] mb-4 tracking-wider uppercase">
            Skema Bagi Hasil
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight">
            2 fase, satu urutan: kamu untung dulu
          </h2>
        </motion.div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#6E1A10] to-[#8B2318] rounded-3xl p-8 text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Fase 1 — Sebelum BEP</h3>
              <div className="text-4xl font-bold text-[#FFC500] mb-4">100% net profit untukmu</div>
              <p className="text-white/80 leading-relaxed">
                Seluruh keuntungan bersih outlet jadi hakmu sepenuhnya. Nggak ada potongan royalty fee sama sekali sampai modal balik.
              </p>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#FE7108] to-[#E86300] rounded-3xl p-8 text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-28 h-28 bg-white/10 rounded-full -translate-y-14 -translate-x-14"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 translate-x-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Fase 2 — Setelah BEP</h3>
              <div className="text-4xl font-bold mb-4">50 : 50, sampai kontrak habis</div>
              <p className="text-white/90 leading-relaxed">
                Setelah modal kembali penuh, laba bersih dibagi rata tiap bulan. Kamu terima passive income tanpa perlu terlibat operasional apapun.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
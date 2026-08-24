"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function KemitraanHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F5F1EC] to-[#F0EBE5] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#6E1A10] blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#FE7108] blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-[#6E1A10] border border-[#6E1A10]/20">
            <span>Bogor</span>
            <span className="w-1 h-1 bg-[#FE7108] rounded-full"></span>
            <span>Jabodetabek</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.1] mb-6">
            Setiap antrian yang kamu lihat,{" "}
            <span className="text-[#6E1A10]">ada yang ngelolanya dari rumah.</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-[#111111]/70 leading-relaxed">
              20+ outlet Suka Shawarma jalan tiap hari di Jabodetabek. Sebagian dipegang orang yang latar belakangnya bukan kuliner sama sekali — cuma cek laporan lewat HP. Ini ceritanya.
            </p>
            
            <p className="text-sm text-[#111111]/50 italic">
              *Kerja sama bisnis F&B (bagi hasil operasional), bukan produk investasi finansial. Hasil bervariasi per lokasi.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button 
            onClick={() => {
              document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#6E1A10] text-white rounded-full text-lg font-semibold hover:bg-[#5A150D] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span>Baca ceritanya</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
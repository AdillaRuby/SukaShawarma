"use client";

import { motion } from "motion/react";

export default function KemitraanAbout() {
  return (
    <section id="story-section" className="py-20 lg:py-32 bg-[#FAF7F2]">
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
            Pembuka
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight">
            Dari satu gerobak di Bogor, jadi 20 titik lebih
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <blockquote className="text-2xl md:text-3xl font-bold text-[#6E1A10] leading-relaxed italic mb-8">
              "Menghadirkan pengalaman kuliner Timur Tengah ke jalanan Indonesia — harga terjangkau, kualitas tetap dijaga."
            </blockquote>
            
            <div className="space-y-4 text-[#111111]/70 leading-relaxed">
              <p>
                Suka Shawarma mulai Mei 2024 di Bogor. Nggak sampai dua tahun, sekarang ada di lebih dari 20 titik se-Jabodetabek — Empang, Cimanggu, Cibinong, Tebet, Sawangan, Beji, Jatiasih, dan terus bertambah.
              </p>
              
              <p>
                Yang bikin tiap outlet ramai bukan kebetulan. Ada sistem operasional, training, sampai marketing yang jalan di belakang layar — dan itu yang bikin sebagian outletnya bisa dipegang orang yang bahkan nggak pernah megang bisnis makanan sebelumnya.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Didirikan", value: "Mei 2024, Bogor" },
                { label: "Outlet aktif", value: "20+ titik" },
                { label: "Cakupan", value: "Jabodetabek" },
                { label: "Sertifikasi", value: "Halal MUI" },
                { label: "Harga menu", value: "Mulai 20rb-an" },
                { label: "Basis follower", value: "28.000+ IG" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-sm text-[#111111]/60 font-medium">
                    {item.label}
                  </div>
                  <div className="font-semibold text-[#111111]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
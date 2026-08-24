"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function KemitraanPackages() {
  const packages = [
    {
      name: "SS Sediakan Lokasi",
      subtitle: "Paket Standard",
      price: "Rp 150 Jt",
      features: [
        { label: "License Fee", value: "Rp 25 Jt" },
        { label: "RSF — Stok Bahan Baku", value: "Rp 50 Jt" },
        { label: "Equipment + POS", value: "Rp 25 Jt" },
        { label: "Renovasi & Dekorasi", value: "Rp 25 Jt" },
        { label: "Sewa Lokasi Tahun 1", value: "Included" },
        { label: "Sewa Bulanan (Th 2+)", value: "~Rp 2,5 Jt" }
      ]
    },
    {
      name: "Mitra Punya Lokasi",
      subtitle: "Paket Own Location",
      price: "Rp 125 Jt",
      popular: true,
      features: [
        { label: "License Fee", value: "Rp 25 Jt" },
        { label: "RSF — Stok Bahan Baku", value: "Rp 50 Jt" },
        { label: "Equipment + POS", value: "Rp 25 Jt" },
        { label: "Renovasi & Dekorasi", value: "Rp 25 Jt" },
        { label: "Sewa Lokasi", value: "Tidak berlaku" },
        { label: "Sewa Bulanan", value: "Gratis selamanya" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#FAF7F2]">
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
            Pilihan Paket
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
            Dua cara mulai, tergantung lokasimu
          </h2>
          <p className="text-lg text-[#111111]/70 max-w-3xl mx-auto">
            Semua paket sudah termasuk setup outlet, training staf, branding, dan pendampingan operasional penuh.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden ${
                pkg.popular ? 'ring-2 ring-[#6E1A10]' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-[#6E1A10] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                </div>
              )}
              
              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[#111111] mb-1">{pkg.name}</h3>
                <p className="text-[#111111]/60 mb-4">{pkg.subtitle}</p>
                <div className="text-4xl font-bold text-[#6E1A10]">{pkg.price}</div>
              </div>
              
              {/* Features List */}
              <div className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex justify-between items-center py-2">
                    <span className="text-[#111111]/70">{feature.label}</span>
                    <span className="font-semibold text-[#111111]">{feature.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RSF Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 text-center shadow-lg"
        >
          <p className="text-[#111111]/70 leading-relaxed">
            <strong>RSF (Revolving Stock Fund):</strong> dana stok bahan baku dikelola penuh oleh tim kami — kamu nggak perlu belanja bahan baku sama sekali.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
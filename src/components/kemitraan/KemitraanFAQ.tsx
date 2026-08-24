"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Perlu pengalaman bisnis makanan nggak?",
    answer: "Nggak perlu sama sekali. Tim operasional kami yang urus SDM, produksi, sampai pelayanan pelanggan — kamu cukup pantau laporan."
  },
  {
    question: "Gimana mekanisme bagi hasil 50:50-nya?",
    answer: "Fase 1 dari bulan pertama sampai BEP (~6 bulan): 100% net profit jadi hakmu. Fase 2 setelah BEP: laba bersih dibagi 50:50 tiap bulan. Nggak ada potongan omzet atau royalty fee di kedua fase."
  },
  {
    question: "Ada royalty fee atau biaya tahunan?",
    answer: "Nggak ada royalty fee maupun management fee, dan nggak ada potongan dari omzet sama sekali di kedua fase."
  },
  {
    question: "Berapa lama dari daftar sampai outlet buka?",
    answer: "Rata-rata 4–8 minggu dari tanda tangan MoU sampai grand opening, tergantung kesiapan lokasi dan perizinan setempat."
  },
  {
    question: "Bedanya Paket Standard vs Own Location apa?",
    answer: "Standard (Rp 150 Jt): kami sediakan lokasi, sewa tahun pertama sudah termasuk, tahun berikutnya ada sewa bulanan sekitar Rp 2,5 Jt. Own Location (Rp 125 Jt): cocok kalau kamu sudah punya lokasi sendiri — nggak ada biaya sewa tambahan. Skema bagi hasilnya sama untuk keduanya."
  },
  {
    question: "Boleh pilih lokasi outlet sendiri?",
    answer: "Boleh, tapi tim kami tetap survey dan analisis kelayakan lokasinya dulu sebelum dieksekusi, biar potensi bisnisnya optimal."
  },
  {
    question: "Setelah kontrak 5 tahun habis, gimana?",
    answer: "Kontrak bisa diperpanjang atas kesepakatan bersama. Aset fisik seperti peralatan dan renovasi tetap jadi milikmu sesuai perjanjian awal."
  }
];

export default function KemitraanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#FE7108] mb-4 tracking-wider uppercase">
            Yang Sering Ditanya
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight">
            Sebelum kamu tanya, ini dulu
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-[#111111] pr-4">
                  {faq.question}
                  <span className="ml-2 text-[#6E1A10]">+</span>
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#6E1A10] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#111111]/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
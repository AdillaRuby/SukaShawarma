"use client";

import { motion } from "motion/react";

export default function KemitraanSteps() {
  const steps = [
    {
      number: "NO. 01",
      title: "Konsultasi & Survey",
      description: "Diskusi rencana lokasi dan kelayakan bisnis bareng tim kami."
    },
    {
      number: "NO. 02", 
      title: "Tanda Tangan MoU",
      description: "Setelah sepakat, lanjut ke perjanjian kerja sama resmi."
    },
    {
      number: "NO. 03",
      title: "Setup & Training",
      description: "Tim kami dampingi setup outlet dan latih tim di lapangan."
    },
    {
      number: "NO. 04",
      title: "Buka & Pantau",
      description: "Outlet resmi buka, performa dipantau tim kami tiap hari."
    }
  ];

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
            Prosesnya
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight">
            Empat nomor antrian sampai outletmu buka
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Step Number */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6E1A10] text-white rounded-full text-sm font-bold mb-4 group-hover:bg-[#8B2318] transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-sm font-semibold text-[#FE7108] tracking-wider">
                  {step.number}
                </div>
              </div>
              
              {/* Step Content */}
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                {step.title}
              </h3>
              <p className="text-[#111111]/70 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connection Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#6E1A10] to-transparent -translate-x-8 -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
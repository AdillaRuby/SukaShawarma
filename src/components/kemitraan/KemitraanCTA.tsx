"use client";

import { motion } from "motion/react";
import { MessageCircle, Mail } from "lucide-react";

export default function KemitraanCTA() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-[#FE7108] mb-4 tracking-wider uppercase">
            Penutup
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
            Kalau kamu penasaran gimana rasanya, ngobrol aja dulu.
          </h2>
          <p className="text-lg text-[#111111]/70 mb-12 max-w-2xl mx-auto">
            Nggak ada paksaan, nggak ada DP di awal. Kami cerita dulu, kamu yang tentuin.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="https://wa.me/6282299325621"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp Kami
          </a>
          
          <a
            href="mailto:kemitraan@sukashawarma.com"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#6E1A10] text-[#6E1A10] rounded-full font-semibold hover:bg-[#6E1A10] hover:text-white transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Email Kami
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#111111]/60 space-y-2"
        >
          <p>+62 822-9932-5621</p>
          <p>kemitraan@sukashawarma.com</p>
        </motion.div>

      </div>
    </section>
  );
}
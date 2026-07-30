"use client";

import { motion } from "motion/react";
import type { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export default function MenuCard({ item, index = 0 }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden
                 shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                 transition-shadow duration-300"
    >
      {/* Image — 4:3 */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover
                     group-hover:scale-[1.03]
                     transition-transform duration-500 ease-out"
        />
        {/* Best Seller badge */}
        {item.isBestSeller && (
          <div className="absolute top-3 left-3 bg-[#FFC500] text-[#111111]
                          text-[10px] font-bold tracking-wider uppercase
                          px-2.5 py-1 rounded-full shadow-sm">
            Best Seller
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          className="font-bold text-[#111111] text-sm
                     tracking-wide uppercase leading-snug mb-2"
        >
          {item.name}
        </h3>

        {item.description && (
          <p className="text-xs text-[#111111]/60 leading-relaxed line-clamp-2 mb-3">
            {item.description}
          </p>
        )}

        <a
          href="https://order.sukashawarma.com/"
          className="text-xs font-semibold text-[#FE7108] hover:text-[#e56507]
                     transition-colors duration-150 mt-auto"
        >
          Pesan →
        </a>
      </div>
    </motion.div>
  );
}

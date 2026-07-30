"use client";

import { motion } from "motion/react";

// Tinggi tiap row dalam px — semua foto pakai nilai yang sama
const ROW_H = 164; // px per row
const GAP = 6;     // px gap antar foto

function Photo({
  src,
  alt,
  caption,
  rowSpan = 1,
  delay = 0,
}: {
  src: string;
  alt: string;
  caption: string;
  rowSpan?: number;
  delay?: number;
}) {
  const height = ROW_H * rowSpan + GAP * (rowSpan - 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ height }}
      className="group relative overflow-hidden bg-[#d6cfc6] shrink-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover
                   transition-transform duration-500 ease-out
                   group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
      <div className="absolute bottom-0 inset-x-0 px-3 pb-3 pt-10
                      bg-gradient-to-t from-black/60 to-transparent
                      opacity-0 translate-y-1
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300 ease-out">
        <p className="text-white text-[11px] font-medium tracking-wide">{caption}</p>
      </div>
    </motion.div>
  );
}

export default function FounderStory() {
  const totalH = ROW_H * 3 + GAP * 2; // 3 baris penuh = 504px

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Sisi kiri: bento grid 3 kolom, semua explicit height ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/*
              3 kolom, lebar sama.
              Kol 1: 3 foto @ 1 row masing-masing
              Kol 2: 1 foto tall (2 row) + 1 foto (1 row)
              Kol 3: 1 foto (1 row) + 1 foto tall (2 row)
            */}
            <div
              style={{ height: totalH, gap: GAP }}
              className="grid grid-cols-3"
            >
              {/* KOLOM KIRI — 3 × 1 row */}
              <div style={{ gap: GAP }} className="flex flex-col">
                <Photo src="/founderstory/Screenshot 2026-07-30 092535.png" alt="Outlet" caption="" rowSpan={1} delay={0} />
                <Photo src="/founderstory/Screenshot 2026-07-30 090804.png" alt="Suasana" caption="" rowSpan={1} delay={0.08} />
                <Photo src="/founderstory/Screenshot 2026-07-30 092501.png" alt="Detail" caption="" rowSpan={1} delay={0.16} />
              </div>

              {/* KOLOM TENGAH — 2 row tall + 1 row */}
              <div style={{ gap: GAP }} className="flex flex-col">
                <Photo src="/founder.jpeg" alt="Founder" caption="" rowSpan={2} delay={0.04} />
                <Photo src="/founderstory/Screenshot 2026-07-30 090825.png" alt="Proses" caption="" rowSpan={1} delay={0.12} />
              </div>

              {/* KOLOM KANAN — 1 row + 2 row tall */}
              <div style={{ gap: GAP }} className="flex flex-col">
                <Photo src="/founderstory/Screenshot 2026-07-30 090740.png" alt="Opening" caption="" rowSpan={1} delay={0.08} />
                <Photo src="/founderstory/Screenshot 2026-07-30 090656.png" alt="Bahan segar" caption="" rowSpan={2} delay={0.16} />
              </div>
            </div>
          </motion.div>

          {/* ── Sisi kanan: teks ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FE7108] mb-4">
              FOUNDER & OUR BEGINNING
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#111111] mb-6">
              Akbar Alatas memulai perjalanan Suka Shawarma dari satu outlet sederhana di{" "}
              <span className="text-[#6E1A10]">Empang, Bogor</span>
            </h2>

            <div className="space-y-4 text-[#111111]/70 leading-relaxed text-base">
              <p>
                Pada <strong>12 Mei 2024</strong>, Akbar Alatas mendirikan Suka Shawarma
                dengan visi menghadirkan shawarma berkualitas yang autentik, modern, dan
                terjangkau untuk semua kalangan. Perjalanan tersebut dimulai dari outlet
                pertama di kawasan Empang, Bogor — sebuah gerai sederhana yang menjadi
                titik awal lahirnya brand ini.
              </p>
              <p>
                Berbekal komitmen terhadap kualitas bahan baku, cita rasa yang konsisten,
                serta pelayanan yang ramah, outlet pertama tersebut berhasil mendapatkan
                kepercayaan pelanggan. Dari sana, Suka Shawarma terus berkembang hingga
                memiliki puluhan outlet yang tersebar di berbagai wilayah Jabodetabek,
                tanpa meninggalkan nilai-nilai yang menjadi fondasi sejak hari pertama.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";

const ROW_H = 164;
const GAP = 6;

function Photo({
  src,
  alt,
  rowSpan = 1,
  delay = 0,
}: {
  src: string;
  alt: string;
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
                   transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
    </motion.div>
  );
}

export default function FounderStory() {
  const totalH = ROW_H * 3 + GAP * 2;

  return (
    <section
      id="about"
      className="relative bg-[#FAF7F2] pt-24 pb-0 overflow-visible"
      style={{
        borderTopLeftRadius: "clamp(48px, 8vw, 112px)",
        borderTopRightRadius: "clamp(48px, 8vw, 112px)",
        marginTop: "-72px",
        zIndex: 10,
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full
                      bg-[#FE7108]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — photo grid: hidden di mobile, tampil di lg */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Desktop: 3-col fixed-height grid */}
            <div
              style={{ height: totalH, gap: GAP }}
              className="hidden lg:grid grid-cols-3 rounded-2xl overflow-hidden
                         shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
            >
              <div style={{ gap: GAP }} className="flex flex-col">
                <Photo src="/founderstory/Screenshot 2026-07-30 092535.png" alt="Outlet" rowSpan={1} delay={0} />
                <Photo src="/founderstory/Screenshot 2026-07-30 090804.png" alt="Suasana" rowSpan={1} delay={0.08} />
                <Photo src="/founderstory/Screenshot 2026-07-30 092501.png" alt="Detail" rowSpan={1} delay={0.16} />
              </div>
              <div style={{ gap: GAP }} className="flex flex-col">
                <Photo src="/founder.jpeg" alt="Founder" rowSpan={2} delay={0.04} />
                <Photo src="/founderstory/Screenshot 2026-07-30 090825.png" alt="Proses" rowSpan={1} delay={0.12} />
              </div>
              <div style={{ gap: GAP }} className="flex flex-col">
                <Photo src="/founderstory/Screenshot 2026-07-30 090740.png" alt="Opening" rowSpan={1} delay={0.08} />
                <Photo src="/founderstory/Screenshot 2026-07-30 090656.png" alt="Bahan segar" rowSpan={2} delay={0.16} />
              </div>
            </div>

            {/* Mobile: 2-col grid sederhana */}
            <div className="grid lg:hidden grid-cols-2 gap-2 rounded-2xl overflow-hidden
                            shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#d6cfc6] rounded-xl">
                <img src="/founder.jpeg" alt="Founder" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative aspect-square overflow-hidden bg-[#d6cfc6] rounded-xl">
                  <img src="/founderstory/Screenshot 2026-07-30 092535.png" alt="Outlet" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden bg-[#d6cfc6] rounded-xl">
                  <img src="/founderstory/Screenshot 2026-07-30 090804.png" alt="Suasana" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>


          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center pt-6 lg:pt-12"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FE7108] mb-4">
              FOUNDER & OUR BEGINNING
            </p>

            <h2
              className="font-heading text-4xl md:text-5xl font-bold
                         leading-[1.1] tracking-tight text-[#111111] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span style={{ textDecoration: "underline", textDecorationColor: "#FE7108", textUnderlineOffset: "4px" }}>Akbar Alatas</span>{" "}
              memulai perjalanan Suka Shawarma dari satu outlet sederhana di{" "}
              <span className="text-[#6E1A10]">Empang, Bogor</span>
            </h2>

            <div className="space-y-4 text-[#111111]/70 leading-relaxed text-base">
              <p>
                Pada <strong className="text-[#111111]">12 Mei 2024</strong>, <strong className="text-[#111111]">Akbar Alatas</strong>{" "}
                mendirikan Suka Shawarma dengan visi menghadirkan shawarma berkualitas
                yang autentik, modern, dan terjangkau untuk semua kalangan. Dimulai dari
                satu gerai sederhana di Empang, Bogor.
              </p>
              <p>
                Berbekal komitmen terhadap kualitas bahan baku, cita rasa yang konsisten,
                serta pelayanan yang ramah, Suka Shawarma terus berkembang hingga memiliki
                puluhan outlet di seluruh Jabodetabek, tanpa meninggalkan nilai-nilai
                yang menjadi fondasi sejak hari pertama.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

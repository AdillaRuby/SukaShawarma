import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OutletGrid from "@/components/OutletGrid";
import { outlets } from "@/data/outlets";

export const metadata: Metadata = {
  title: "Lokasi",
  description:
    "Temukan outlet Suka Shawarma terdekat di Bogor, Depok, Jakarta, Bekasi, dan Tangerang Selatan.",
};

export default function LocationsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[68px]">

        {/* Hero */}
        <section className="bg-[#FAF7F2] pt-20 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#FE7108] mb-4">
              Temukan Kami
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold
                         tracking-tight text-[#111111] leading-[1.1] mb-5"
            >
              Temukan Outlet<br />
              <span className="text-[#6E1A10]">Suka Shawarma Terdekat</span>
            </h1>
            <p className="text-[#111111]/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Jelajahi seluruh outlet Suka Shawarma dan temukan lokasi terdekat
              untuk menikmati shawarma favoritmu.
            </p>

            {/* Subtle accent dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E1A10]/30" />
              <span className="w-6 h-1.5 rounded-full bg-[#FE7108]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E1A10]/30" />
            </div>
          </div>
        </section>

        {/* Outlet listing */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <OutletGrid outlets={outlets} />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

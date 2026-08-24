import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import KemitraanHero from "@/components/kemitraan/KemitraanHero";
import KemitraanStats from "@/components/kemitraan/KemitraanStats";
import KemitraanAbout from "@/components/kemitraan/KemitraanAbout";
import KemitraanReality from "@/components/kemitraan/KemitraanReality";
import KemitraanSimulation from "@/components/kemitraan/KemitraanSimulation";
import KemitraanProfit from "@/components/kemitraan/KemitraanProfit";
import KemitraanPackages from "@/components/kemitraan/KemitraanPackages";
import KemitraanSteps from "@/components/kemitraan/KemitraanSteps";
import KemitraanFAQ from "@/components/kemitraan/KemitraanFAQ";
import KemitraanCTA from "@/components/kemitraan/KemitraanCTA";
import KemitraanFooter from "@/components/kemitraan/KemitraanFooter";

export const metadata: Metadata = {
  title: "Kemitraan",
  description:
    "Bergabung menjadi mitra resmi Suka Shawarma dan kembangkan bisnis kuliner Anda bersama brand yang terus berkembang.",
  openGraph: {
    title: "Kemitraan | Suka Shawarma",
    description: "Informasi resmi mengenai program kemitraan Suka Shawarma.",
  },
};

export default function KemitraanPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px]">
        <KemitraanHero />
        <KemitraanStats />
        <KemitraanAbout />
        <KemitraanReality />
        <KemitraanSimulation />
        <KemitraanProfit />
        <KemitraanPackages />
        <KemitraanSteps />
        <KemitraanFAQ />
        <KemitraanCTA />
      </main>
      <KemitraanFooter />
    </>
  );
}

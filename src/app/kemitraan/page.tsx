import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import KemitraanHero from "@/components/kemitraan/KemitraanHero";
import KemitraanTicker from "@/components/kemitraan/KemitraanTicker";
import KemitraanAbout from "@/components/kemitraan/KemitraanAbout";
import KemitraanWhyUs from "@/components/kemitraan/KemitraanWhyUs";
import KemitraanGallery from "@/components/kemitraan/KemitraanGallery";
import KemitraanPackages from "@/components/kemitraan/KemitraanPackages";
import KemitraanProfit from "@/components/kemitraan/KemitraanProfit";
import KemitraanROI from "@/components/kemitraan/KemitraanROI";
import KemitraanCalculator from "@/components/kemitraan/KemitraanCalculator";
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
        <KemitraanTicker />
        <KemitraanAbout />
        <KemitraanWhyUs />
        <KemitraanGallery />
        <KemitraanPackages />
        <KemitraanProfit />
        <KemitraanROI />
        <KemitraanCalculator />
        <KemitraanSteps />
        <KemitraanFAQ />
        <KemitraanCTA />
      </main>
      <KemitraanFooter />
    </>
  );
}

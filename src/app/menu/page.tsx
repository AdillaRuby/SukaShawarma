import type { Metadata } from "next";
import MenuPageClient from "@/components/MenuPageClient";

export const metadata: Metadata = {
  title: "Menu Shawarma Autentik",
  description:
    "Jelajahi menu lengkap Suka Shawarma — dari shawarma original ayam, sapi, mix, hingga varian spesial Suka Chicken & Shawarmie. Dibuat segar setiap hari.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu Suka Shawarma - Shawarma Autentik Khas Timur Tengah",
    description:
      "Jelajahi menu lengkap Suka Shawarma. Pilihan daging melimpah, bumbu otentik, dan harga merakyat.",
    url: "/menu",
  },
};

export default function MenuPage() {
  return <MenuPageClient />;
}

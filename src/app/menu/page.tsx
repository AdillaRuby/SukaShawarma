import type { Metadata } from "next";
import MenuPageClient from "@/components/MenuPageClient";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Jelajahi menu lengkap Suka Shawarma — dari shawarma original hingga varian spesial, tersedia segar setiap hari.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}

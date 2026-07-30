import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-arimo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suka Shawarma — Otentik, Premium, Lezat",
  description:
    "Nikmati shawarma autentik Timur Tengah dengan bahan segar pilihan. Order sekarang dan rasakan kelezatan yang sesungguhnya.",
  keywords: ["shawarma", "suka shawarma", "makanan timur tengah", "halal", "fast casual"],
  openGraph: {
    title: "Suka Shawarma",
    description: "Shawarma autentik Timur Tengah — premium, segar, lezat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${arimo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        {children}
      </body>
    </html>
  );
}

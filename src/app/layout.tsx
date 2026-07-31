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
  title: {
    default: "Suka Shawarma",
    template: "%s - Suka Shawarma",
  },
  description:
    "Nikmati shawarma berkualitas dengan bumbu rempah pilihan. Tersedia di 19+ outlet Jabodetabek.",
  keywords: ["shawarma", "suka shawarma", "kebab", "halal", "fast casual", "bogor"],
  openGraph: {
    title: "Suka Shawarma",
    description: "Shawarma berkualitas, harga merakyat. 19+ outlet Jabodetabek.",
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

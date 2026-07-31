import type { Metadata, Viewport } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-arimo",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sukashawarma.vercel.app";

export const viewport: Viewport = {
  themeColor: "#6E1A10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suka Shawarma - Shawarma Autentik Berkualitas",
    template: "%s | Suka Shawarma",
  },
  description:
    "Nikmati shawarma berkualitas dengan bumbu rempah pilihan khas Timur Tengah. Tersedia di 20+ outlet Jabodetabek. Pesan sekarang!",
  keywords: [
    "shawarma",
    "suka shawarma",
    "kebab",
    "kuliner bogor",
    "shawarma jabodetabek",
    "makanan timur tengah",
    "halal",
  ],
  authors: [{ name: "Suka Shawarma", url: siteUrl }],
  creator: "Suka Shawarma",
  publisher: "PT Suka Profit Berkah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Suka Shawarma - Shawarma Autentik Berkualitas",
    description:
      "Shawarma berkualitas khas Timur Tengah dengan harga merakyat. Tersedia di 20+ outlet Jabodetabek.",
    url: siteUrl,
    siteName: "Suka Shawarma",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/sslogonew.png",
        width: 800,
        height: 800,
        alt: "Logo Suka Shawarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suka Shawarma - Shawarma Autentik Berkualitas",
    description:
      "Shawarma berkualitas khas Timur Tengah dengan harga merakyat. Tersedia di 20+ outlet Jabodetabek.",
    images: ["/sslogonew.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${arimo.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-[#111111]">
        {children}
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Lokasi", href: "/locations" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 transform-gpu ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-layered-sm border-b border-black/[0.04]"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/sslogonew.png"
            alt="Suka Shawarma"
            width={38}
            height={38}
            className="object-contain"
          />
          <span className="font-bold text-[#6E1A10] text-[13px] tracking-widest uppercase leading-tight">
            Suka<br />Shawarma
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-[13px] font-medium text-[#111111]/60 hover:text-[#111111] hover:bg-black/[0.04] transition-all duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+6281200000000"
            className="text-[13px] font-medium text-[#111111]/50 hover:text-[#111111] transition-colors duration-150"
          >
            Hubungi Kami
          </a>
          <a
            href="https://order.sukashawarma.com/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FE7108] text-white text-[13px] font-semibold hover:bg-[#e56507] active:scale-[0.97] transition-all duration-150"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#111111]/70 hover:bg-black/[0.04] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/[0.06] px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[14px] font-medium text-[#111111]/70 hover:text-[#111111] hover:bg-black/[0.04] transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-black/[0.06]">
            <a
              href="https://order.sukashawarma.com/"
              className="flex items-center justify-center px-5 py-3 rounded-full bg-[#FE7108] text-white text-[14px] font-semibold hover:bg-[#e56507] transition-colors"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

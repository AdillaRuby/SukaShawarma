import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Rss, Send } from "lucide-react";

const footerLinks = {
  Menu: [
    { label: "Chicken Shawarma", href: "#menu" },
    { label: "Beef Shawarma", href: "#menu" },
    { label: "Mixed Box", href: "#menu" },
    { label: "Minuman", href: "#menu" },
  ],
  About: [
    { label: "Cerita Kami", href: "/about" },
    { label: "Tim Kami", href: "/about#team" },
    { label: "Proses Kami", href: "/process" },
    { label: "Karir", href: "/careers" },
  ],
  Locations: [
    { label: "Jakarta Selatan", href: "#locations" },
    { label: "Jakarta Utara", href: "#locations" },
    { label: "Jakarta Barat", href: "#locations" },
    { label: "Buka Franchise", href: "/franchise" },
  ],
  Contact: [
    { label: "Hubungi Kami", href: "#contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Feedback", href: "/feedback" },
    { label: "Partnership", href: "/partnership" },
  ],
};

const socialLinks = [
  { icon: Globe, label: "Instagram", href: "https://instagram.com" },
  { icon: Send, label: "Facebook", href: "https://facebook.com" },
  { icon: Mail, label: "Twitter / X", href: "https://twitter.com" },
  { icon: Rss, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FAF7F2] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top row — logo + tagline + social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 pb-12 border-b border-gray-200">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/sslogonew.png"
              alt="Suka Shawarma"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <p className="font-bold text-[#6E1A10] text-base tracking-wide">
                Suka Shawarma
              </p>
              <p className="text-xs text-[#111111]/40 mt-0.5">
                Otentik · Premium · Lezat
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#111111]/50 hover:border-[#6E1A10] hover:text-[#6E1A10] transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#111111] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#111111]/55 hover:text-[#6E1A10] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
          <p className="text-xs text-[#111111]/40 text-center md:text-left">
            © {new Date().getFullYear()} Suka Shawarma. Seluruh hak dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-[#111111]/40 hover:text-[#6E1A10] transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-xs text-[#111111]/40 hover:text-[#6E1A10] transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

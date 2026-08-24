"use client";

export default function KemitraanFooter() {
  return (
    <footer className="bg-[#6E1A10] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Disclaimer */}
        <div className="bg-[#5A150D] rounded-2xl p-6 mb-8">
          <p className="text-white/90 text-sm leading-relaxed text-center">
            Halaman ini menawarkan kerja sama kemitraan bisnis F&B (bagi hasil operasional outlet), bukan produk investasi, sekuritas, atau instrumen keuangan. Seluruh angka (omzet, margin, BEP, estimasi ROI) adalah simulasi berdasarkan rata-rata performa outlet aktif dan bukan jaminan hasil di masa depan. Performa aktual dapat berbeda tergantung lokasi, kondisi pasar, dan faktor operasional lainnya. Diselenggarakan oleh PT Suka Profit Berkah.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/70 text-sm">
          <p>© 2024–2026 Suka Shawarma — Bogor, Jabodetabek. Halal MUI Certified.</p>
        </div>

      </div>
    </footer>
  );
}
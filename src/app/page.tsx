import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FounderStory from "@/components/FounderStory";
import BestSeller from "@/components/BestSeller";
import AuthenticExperience from "@/components/AuthenticExperience";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Suka Shawarma | Shawarma Autentik Khas Timur Tengah",
  description:
    "Nikmati shawarma berkualitas dengan bumbu rempah pilihan. Tersedia di 20+ outlet Jabodetabek. Rasa autentik, porsi kenyang, harga merakyat.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Carousel */}
        <HeroCarousel />

        {/* 3. Founder Story */}
        <FounderStory />

        {/* 4. Best Seller */}
        <BestSeller />

        {/* 5. Authentic Experience */}
        <AuthenticExperience />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Locations */}
        <Locations />
      </main>

      {/* 8. Footer */}
      <Footer />
    </>
  );
}

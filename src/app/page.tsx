import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FounderStory from "@/components/FounderStory";
import BestSeller from "@/components/BestSeller";
import AuthenticExperience from "@/components/AuthenticExperience";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

/**
 * SukaShawarma Homepage
 *
 * Section order (per spec — do not change):
 * 1. Navbar (sticky)
 * 2. Hero Carousel
 * 3. Founder Story ⭐
 * 4. Best Seller ⭐
 * 5. Authentic Experience
 * 6. Brand Journey Gallery
 * 7. Testimonials
 * 8. Locations
 * 9. Footer
 *
 * ─── OPEN TODOs (items not yet final — marked in each component) ───
 * [x] Font resmi brand → Arimo (Google Fonts) configured in layout.tsx & globals.css
 * [ ] Navbar alignment → confirm centered vs logo-left with client
 * [ ] Hero images → replace Unsplash placeholders with real shawarma photos
 * [ ] Founder photo → replace with actual founder/chef rotisserie photo
 * [ ] Menu data → replace placeholder items with real SukaShawarma menu
 * [ ] Menu prices → confirm with client
 * [ ] Authentic Experience image → replace with real Timur Tengah dish photo
 * [ ] Testimonials → replace placeholders with real customer reviews + avatars
 * [ ] Location data → replace with real addresses, hours, coordinates
 * [ ] Map embed → replace with real Google Maps embed using actual coordinates
 * [ ] Logo/maskot → replace all "SS" placeholders with actual <Image> assets
 * [ ] Order Now href → link to actual ordering platform URL
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero Carousel */}
        <HeroCarousel />

        {/* 3. Founder Story ⭐ */}
        <FounderStory />

        {/* 4. Best Seller ⭐ */}
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

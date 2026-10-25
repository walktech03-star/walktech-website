import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/pages/hero-section";
import { ServicesOverview } from "@/components/pages/services-overview";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="pt-20">
        <HeroSection />
      </section>

      <ServicesOverview />
    </main>
  );
}
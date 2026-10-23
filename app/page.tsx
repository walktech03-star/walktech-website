import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import { HeroSection } from "@/src/components/pages/hero-section";
import { ServicesOverview } from "@/src/components/pages/services-overview";

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
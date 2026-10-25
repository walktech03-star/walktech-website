import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EngineeringServicesList } from "@/components/services/services-list";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Navbar />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <EngineeringServicesList />
        </div>
      </section>

      <Footer />
    </main>
  );
}
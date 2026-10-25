import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      <Navbar />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Portfolio & Innovation
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Showcasing completed engineering projects and innovations from Walk Tech.
            All projects demonstrate practical engineering solutions developed in
            Tanzania.
          </p>
          {/* Portfolio entries will be populated dynamically from Supabase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-[300px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Portfolio entry will appear here
            </div>
            <div className="h-[300px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Portfolio entry will appear here
            </div>
            <div className="h-[300px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Portfolio entry will appear here
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
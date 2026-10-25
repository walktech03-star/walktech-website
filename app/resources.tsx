import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LearningResourcesPage() {
  return (
    <main className="pt-20">
      <Navbar />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Learning Resources & Blog
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Technical articles, tutorials, and guides for Tanzanian students,
            technicians, and innovators.
          </p>
          {/* Blog posts will be populated dynamically from Supabase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-[250px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Article card will appear here
            </div>
            <div className="h-[250px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Article card will appear here
            </div>
            <div className="h-[250px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Article card will appear here
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
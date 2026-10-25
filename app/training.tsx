import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TrainingPage() {
  return (
    <main className="pt-20">
      <Navbar />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Technical Training Courses
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Enhance your skills with our hands-on technical training programs designed
            for Tanzanian students, engineers, and innovators.
          </p>
          {/* Courses will be populated dynamically from Supabase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-[200px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Course cards will appear here
            </div>
            <div className="h-[200px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Course cards will appear here
            </div>
            <div className="h-[200px] bg-navy-light rounded-lg flex items-center justify-center text-gray-400">
              Course cards will appear here
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
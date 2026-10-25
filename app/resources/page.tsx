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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-navy-light rounded-lg p-6 hover:bg-navy/5 transition-colors">
              <h3 className="text-navy font-medium mb-3">Embedded Systems Tutorials</h3>
              <p className="text-gray-500 text-sm mb-4">
                Step-by-step guides for learning microcontroller programming, PCB design,
                and embedded systems development.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>Getting Started with ESP32</li>
                <li>ADC and PWM Programming</li>
                <li>Interrupt Handling in C</li>
                <li>RTOS Fundamentals</li>
              </ul>
              <a href="#" className="text-accent underline text-sm mt-3 block">
                View all tutorials →
              </a>
            </div>
            <div className="bg-navy-light rounded-lg p-6 hover:bg-navy/5 transition-colors">
              <h3 className="text-navy font-medium mb-3">Solar Energy Guides</h3>
              <p className="text-gray-500 text-sm mb-4">
                Technical articles about solar panel systems, battery storage, and
                renewable energy solutions for Tanzanian climate conditions.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>Sizing Solar Systems for Rural Areas</li>
                <li>Battery Maintenance and Safety</li>
                <li>Grid-Tie vs Off-Grid Systems</li>
              </ul>
              <a href="#" className="text-accent underline text-sm mt-3 block">
                View all articles →
              </a>
            </div>
            <div className="bg-navy-light rounded-lg p-6 hover:bg-navy/5 transition-colors">
              <h3 className="text-navy font-medium mb-3">PCB Design Best Practices</h3>
              <p className="text-gray-500 text-sm mb-4">
                Guidelines for designing printed circuit boards, from schematic capture
                to fabrication, with emphasis on cost-effective production.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>Schematic Design Rules</li>
                <li>PCB Layout Tips</li>
                <li>Gerber File Preparation</li>
                <li>QuickTurn Prototyping</li>
              </ul>
              <a href="#" className="text-accent underline text-sm mt-3 block">
                View all guides →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
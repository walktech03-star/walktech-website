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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-navy-light rounded-lg p-6 hover:bg-navy/5 transition-colors">
              <h3 className="text-navy font-medium mb-3">Embedded Systems Course</h3>
              <p className="text-gray-500 text-sm mb-4">
                Comprehensive course covering microcontroller programming, sensor integration,
                and IoT device development using ARM Cortex-M and ESP32 platforms.
              </p>
              <div className="flex gap-2 text-xs text-gray-400 mb-3">
                <span>Duration: 8 weeks</span>
                <span>Level: Intermediate</span>
                <span>Format: Hands-on</span>
              </div>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>ARM Cortex-M architecture</li>
                <li>C programming for embedded</li>
                <li>Sensor interfacing</li>
                <li>IoT protocols</li>
                <li>Final project development</li>
              </ul>
              <a href="#" className="text-accent underline text-sm mt-3 block">
                Enroll Now →
              </a>
            </div>
            <div className="bg-navy-light rounded-lg p-6 hover:bg-navy/5 transition-colors">
              <h3 className="text-navy font-medium mb-3">Solar Engineering Program</h3>
              <p className="text-gray-500 text-sm mb-4">
                Professional training in solar photovoltaic system design, installation,
                and maintenance for residential and commercial applications in Tanzania.
              </p>
              <div className="flex gap-2 text-xs text-gray-400 mb-3">
                <span>Duration: 6 weeks</span>
                <span>Level: Advanced</span>
                <span>Format: Hybrid</span>
              </div>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>PV system sizing</li>
                <li>Battery storage design</li>
                <li>Installation standards</li>
                <li>Maintenance procedures</li>
                <li>Local regulations</li>
              </ul>
              <a href="#" className="text-accent underline text-sm mt-3 block">
                Enroll Now →
              </a>
            </div>
            <div className="bg-navy-light rounded-lg p-6 hover:bg-navy/5 transition-colors">
              <h3 className="text-navy font-medium mb-3">PCB Design & Manufacturing</h3>
              <p className="text-gray-500 text-sm mb-4">
                Hands-on training in printed circuit board design from schematic capture
                through fabrication, assembly, and testing.
              </p>
              <div className="flex gap-2 text-xs text-gray-400 mb-3">
                <span>Duration: 4 weeks</span>
                <span>Level: Beginner to Intermediate</span>
                <span>Format: Practical</span>
              </div>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>KiCad or Eagle CAD</li>
                <li>Schematic capture</li>
                <li>PCB layout design</li>
                <li>Gerber generation</li>
                <li>Prototyping and assembly</li>
              </ul>
              <a href="#" className="text-accent underline text-sm mt-3 block">
                Enroll Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
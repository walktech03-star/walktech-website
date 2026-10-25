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
            All projects demonstrate practical engineering solutions developed in Tanzania.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-[350px] bg-navy-light rounded-lg flex items-center justify-center text-center">
              <div className="p-8 bg-navy/50 rounded-lg">
                <h4 className="text-navy font-medium mb-3">Smart Agricultural Monitoring System</h4>
                <p className="text-gray-500 text-sm mb-2">
                  IoT-based soil moisture and temperature monitoring for Tanzanian farms
                </p>
                <div className="flex gap-2 text-xs text-gray-400">
                  <span>🌱 Sensors</span>
                  <span>📊 Analytics</span>
                  <span>📱 App</span>
                </div>
              </div>
            </div>
            <div className="h-[350px] bg-navy-light rounded-lg flex items-center justify-center text-center">
              <div className="p-8 bg-navy/50 rounded-lg">
                <h4 className="text-navy font-medium mb-3">Solar Panel Tracking System</h4>
                <p className="text-gray-500 text-sm mb-2">
                  Autonomous solar panel optimization using ESP32 and stepper motors
                </p>
                <div className="flex gap-2 text-xs text-gray-400">
                  <span>☀️ Solar</span>
                  <span>🔧 Mechanics</span>
                  <span>⚡ Electronics</span>
                </div>
              </div>
            </div>
            <div className="h-[350px] bg-navy-light rounded-lg flex items-center justify-center text-center">
              <div className="p-8 bg-navy/50 rounded-lg">
                <h4 className="text-navy font-medium mb-3">Home Automation Hub</h4>
                <p className="text-gray-500 text-sm mb-2">
                  ESP32-based home control system for lighting, security, and appliances
                </p>
                <div className="flex gap-2 text-xs text-gray-400">
                  <span>🏠 Lighting</span>
                  <span>🔒 Security</span>
                  <span>⚡ Appliances</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
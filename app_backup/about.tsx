import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Navbar />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                About Walk Tech
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Walk Tech is a Tanzanian engineering and technology business dedicated
                to electronics, engineering projects, innovation, technical training,
                and electronic components. We are walking towards innovation, turning
                ideas into practical solutions that empower students, engineers, and
                businesses across Tanzania and beyond.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent flex-sr-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    />
                  </svg>
                  <span className="ml-3">Final-year engineering project ideas and development support for students</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent flex-sr-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M16 8v8h8v-2h-4l-4-4L16 8zm-4 4l-4 4V16l4-4zm12-6v2h2v-2h-2zm-6 6v2H8v-2h2zm-4-12l2-2L4 5c-1.1 0-2 .9-2 2v10c0 1.1.89 2 2 2l2-2l2-2l2-2l-2-2L4 7c-1.1 0-2 .9-2 2v2h14V7c0-1.1-.9-2-2-2z"
                    />
                  </svg>
                  <span className="ml-3">Electronics components and accessories for purchase</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-accent flex-sr-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    />
                  </svg>
                  <span className="ml-3">Technical training courses in embedded systems, PCB design, 3D printing, and more</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-navy-light/10">
                <h3 className="text-white font-medium mb-4">Our Mission</h3>
                <p className="text-gray-300 text-sm">
                  To empower Tanzanian innovators with practical engineering skills,
                  accessible components, and technical knowledge that drives local
                  innovation and economic growth.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <div className="h-[400px] w-full rounded-lg overflow-hidden bg-navy-light">
                  {/* Placeholder for engineering image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                    <p className="text-white text-lg">
                      Engineering Innovation
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-6">
                  <div className="bg-navy-light/50 p-6 rounded-b-lg">
                    <h4 className="text-white font-semibold mb-2">Areas of Expertise</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-accent flex-sr-0 mt-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        Embedded Systems
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-accent flex-sr-0 mt-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M16 8v8h8v-2h-4l-4-4L16 8zm-4 4l-4 4V16l4-4zm12-6v2h2v-2h-2zm-6 6v2H8v-2h2zm-4-12l2-2L4 5c-1.1 0-2 .9-2 2v10c0 1.1.89 2 2 2l2-2l2-2l2-2l-2-2L4 7c-1.1 0-2 .9-2 2v2h14V7c0-1.1-.9-2-2-2z" />
                        </svg>
                        PCB Design
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-4 h-4 text-accent flex-sr-0 mt-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        3D Printing
                      </li>
                    </ul>
                  </div>
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

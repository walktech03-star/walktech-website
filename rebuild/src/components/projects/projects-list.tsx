import Image from "next/image";
import Link from "next/link";
"use client";

export const ProjectsList = () => {
  const projects = [
    {
      id: "agricultural-monitoring",
      title: "Smart Agricultural Monitoring System",
      image: "/assets/project-monitoring.jpg",
      technologies: ["ESP32", "Soil Moisture Sensor", "DHT22", "IoT"],
      difficulty: "Intermediate",
      estimatedBudget: "TZS 1,500,000",
    },
    {
      id: "solar-tracker",
      title: "Solar Panel Tracking System",
      image: "/assets/project-solar.jpg",
      technologies: ["Arduino", "Light Dependent Resistor", "Stepper Motor"],
      difficulty: "Intermediate",
      estimatedBudget: "TZS 2,000,000",
    },
    {
      id: "home-automation",
      title: "Smart Home Automation",
      image: "/assets/project-home.jpg",
      technologies: ["ESP32", "Relay Module", "Temperature Sensor"],
      difficulty: "Beginner",
      estimatedBudget: "TZS 800,000",
    },
    {
      id: "iot-water-level",
      title: "IoT-Based Water Level Monitoring",
      image: "/assets/project-water.jpg",
      technologies: ["Ultrasonic Sensor", "ESP32", "GSM Module"],
      difficulty: "Intermediate",
      estimatedBudget: "TZS 1,200,000",
    },
    {
      id: "automated-irrigation",
      title: "Automated Irrigation System",
      image: "/assets/project-irrigation.jpg",
      technologies: ["Soil Moisture Sensor", "Water Pump", "ESP32"],
      difficulty: "Advanced",
      estimatedBudget: "TZS 3,000,000",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card hover-lift h-full transition-all duration-300"
            >
              <div
                className="relative overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-navy/80 p-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      {project.technologies.map(
                        (tech) => (
                          <span key={tech} className="mr-1 text-accent capitalize">
                            {tech}
                          </span>
                        )
                      ).join(" ")}
                    </p>
                    <div className="mt-2 flex">
                      <span className="text-xs text-gray-300">
                        {project.difficulty}
                      </span>
                      <span className="text-xs text-accent ml-2">
                        {project.estimatedBudget}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-accent text-sm font-medium hover:underline"
                >
                  View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
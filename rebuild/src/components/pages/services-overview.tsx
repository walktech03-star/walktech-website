"use client";

import Link from "next/link";

export const ServicesOverview = () => {
  const services = [
    {
      id: "final-year-projects",
      title: "Final-Year Engineering Projects",
      description:
        "Project ideas and development support for students completing their final-year projects",
      icon: "FlaskConic",
      color: "text-accent",
    },
    {
      id: "electronics-components",
      title: "Electronics Components",
      description:
        "Buy and sell electronic components and accessories with nationwide delivery",
      icon: "Chip",
      color: "text-accent",
    },
    {
      id: "technical-training",
      title: "Technical Training",
      description:
        "Hands-on courses in embedded systems, PCB design, 3D printing, and more",
      icon: "Search",
      color: "text-accent",
    },
    {
      id: "prototyping",
      title: "Prototyping & Product Development",
      description:
        "From breadboard to product - we help you prototype and manufacture",
      icon: "Zap",
      color: "text-accent",
    },
    {
      id: "cad-design",
      title: "CAD Design & 3D Printing",
      description:
        "Mechanical design, 3D modeling, and rapid prototyping services",
      icon: "Adjustments",
      color: "text-accent",
    },
    {
      id: "troubleshooting",
      title: "Electronics Troubleshooting & Maintenance",
      description:
        "Diagnose and repair electronic devices and circuits",
      icon: "Settings",
      color: "text-accent",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              href={`/services/${service.id}`}
              key={service.id}
              className="card hover-lift group transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full h-6 bg-navy/30"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-accent transition-colors">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
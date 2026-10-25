"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const EngineeringServicesList = () => {
  const [services, setServices] = useState<Array<{ name: string; href: string; description: string }>>([]);

  useEffect(() => {
    // Initialize with default services - can be enhanced to fetch from Supabase
    const defaultServices = [
      { name: "Engineering Services", href: "/services", description: "Custom engineering solutions and implementations" },
      { name: "Training Programs", href: "/training", description: "Skill development and certification courses" },
      { name: "Portfolio Projects", href: "/portfolio", description: "Showcase of completed engineering projects" },
    ];

    setServices(defaultServices);
  }, []);

  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <div key={index} className="p-4 border border-navy-light/5 rounded-lg hover:bg-navy/5 transition-colors">
          <h4 className="font-semibold text-navy text-base mb-2">{service.name}</h4>
          <p className="text-navy-light/6 text-sm">{service.description}</p>
          <Link
            href={service.href}
            className="mt-2 inline-block text-primary hover:text-navy transition-colors text-sm">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};
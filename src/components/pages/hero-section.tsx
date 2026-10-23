"use client";

import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="bg-navy-light min-h-[60vh] flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <div className="inline-block">
          <svg
            className="w-16 h-16 mx-auto mb-6 text-accent"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Turning Engineering Ideas into Practical Solutions
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Walk Tech empowers Tanzanian engineering students and innovators with
          practical project development, electronics components, and technical training.
          We bridge the gap between academic concepts and real-world solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="btn btn-primary px-6 py-3"
          >
            Explore Our Services
          </Link>
          <Link
            href="/contact"
            className="btn btn-secondary px-6 py-3"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>

      // Decorative elements
      <div className="absolute -bottom-6 -left-6 w-96 h-96 bg-accent/10 rounded-full blur-xl opacity-50" />
      <div className="absolute -top-6 -right-6 w-64 h-64 bg-navy/20 rounded-full blur-lg opacity-30" />
    </section>
  );
};
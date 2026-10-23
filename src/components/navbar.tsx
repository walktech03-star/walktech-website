"use client";

import { useState } from "react";
import { HiMenu, HiX } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-light/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        // Logo
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Walk Tech
        </Link>

        // Desktop navigation
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Projects
          </Link>
          <Link
            href="/components"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Components
          </Link>
          <Link
            href="/training"
            className="text-gray-300 hover:text-white transition-colars text-sm"
          >
            Training
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Portfolio
          </Link>
          <Link
            href="/resources"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Contact
          </Link>
        </div>

        // Mobile menu button
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <HiX className="w-6 h-6 text-white" /> : <HiMenu className="w-6 h-6 text-white" />}
        </button>
      </div>

      // Mobile menu
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy/95 flex flex-col items-center justify-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold text-white mb-6"
          >
            Walk Tech
          </Link>
          <div className="w-full flex flex-col gap-4">
            <Link
              href="/"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/components"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              Components
            </Link>
            <Link
              href="/training"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              Training
            </Link>
            <Link
              href="/portfolio"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/resources"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
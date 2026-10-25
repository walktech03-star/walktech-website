"use client";

import { useEffect } from "react";
import Link from "next/link";

export const Footer = () => {
  useEffect(() => {
    // Track pageview for analytics
    const handleClick = (e: React.MouseEvent) => {
      // Analytics tracking can be added here
    };

    return;
  }, []);

  return (
    <footer
      className="border-t border-navy-light/5 py-12 bg-navy/95"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">
              Walk Tech
            </h4>
            <p className="text-navy-light/7 text-sm">
              Premium tech solutions and services for the modern workplace.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h5 className="font-semibold text-white text-sm mb-4">Products</h5>
            <ul className="space-y-2 text-navy-light/7 text-sm">
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="hover:text-white transition-colors"
                >
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-white text-sm mb-4">
              Services
            </h5>
            <ul className="space-y-2 text-navy-light/7 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-semibold text-white text-sm mb-4">
              Resources
            </h5>
            <ul className="space-y-2 text-navy-light/7 text-sm">
              <li>
                <Link
                  href="/resources"
                  className="hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 pt-8 border-t border-navy-light/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-navy-light/7 text-sm copyright">
            2026 Walk Tech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/about"
              className="text-navy-light/7 text-sm hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-navy-light/7 text-sm hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
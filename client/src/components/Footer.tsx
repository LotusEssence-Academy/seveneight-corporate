/*
 * Footer — SeveneEight合同会社
 * Design: "Petal & Poise" — Deep rose-brown background, gold logo
 * Multi-page navigation links
 */

import { Link } from "wouter";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#3d1a24" }} className="py-14">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-7">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/8shFr8WNbEWnVqjzVdrQxY/lotus-gold_22580bc4.jpg"
                alt="SeveneEight合同会社"
                className="w-8 h-8 object-contain rounded-full opacity-90"
                style={{ filter: "sepia(1) saturate(0.8) hue-rotate(290deg) brightness(1.1)" }}
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="font-['Cormorant_Garamond'] text-base tracking-widest"
                  style={{ color: "#c9a96e" }}
                >
                  SeveneEight
                </span>
                <span
                  className="font-['Noto_Sans_JP'] text-[10px] tracking-widest"
                  style={{ color: "rgba(249,208,216,0.5)" }}
                >
                  合同会社
                </span>
              </div>
            </div>
          </Link>

          {/* Gold line */}
          <div
            className="w-16 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }}
          />

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span
                  className="font-['Noto_Sans_JP'] text-xs tracking-widest transition-colors duration-300 cursor-pointer hover:text-[#c9a96e]"
                  style={{ color: "rgba(249,208,216,0.6)" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="font-['Noto_Sans_JP'] text-xs tracking-wider"
            style={{ color: "rgba(249,208,216,0.4)" }}
          >
            © 2025 SeveneEight合同会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

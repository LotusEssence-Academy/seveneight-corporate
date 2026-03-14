/*
 * Footer — Lotus Essence Academy
 * Design: Deep rose-brown background, gold logo, elegant copyright
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "#3d1a24" }} className="py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/8shFr8WNbEWnVqjzVdrQxY/lotus-gold_22580bc4.jpg"
                alt="Lotus Essence Academy"
                className="w-8 h-8 object-contain rounded-full opacity-90"
              />
              <span
                className="font-['Cormorant_Garamond'] text-base tracking-widest"
                style={{ color: "#c9a96e" }}
              >
                Lotus Essence Academy
              </span>
            </div>
          </Link>

          {/* Gold line */}
          <div
            className="w-16 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }}
          />

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["About", "Mission", "Services", "Results", "Company", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Contact" ? "/contact" : `/#${item.toLowerCase()}`}
                className="font-['Noto_Sans_JP'] text-xs tracking-widest transition-colors duration-300"
                style={{ color: "rgba(249,208,216,0.6)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(249,208,216,0.6)")}
              >
                {item}
              </a>
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

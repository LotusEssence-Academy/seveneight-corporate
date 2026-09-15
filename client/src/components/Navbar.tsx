/*
 * Navbar — SeveneEight合同会社
 * Design: "Petal & Poise" — Romantic Floral Elegance
 * Multi-page navigation: each nav item links to its own page
 * Transparent → cream/white on scroll, gold logo text
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => location === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#fdf8f5]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <img
                src="/images/lotus-mark.svg"
                alt="SeveneEight合同会社"
                className="w-9 h-9 object-contain rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="font-['Cormorant_Garamond'] text-base tracking-widest transition-colors duration-300"
                  style={{ color: "#c9a96e" }}
                >
                  SeveneEight
                </span>
                <span
                  className="font-['Noto_Sans_JP'] text-[10px] tracking-widest transition-colors duration-300"
                  style={{ color: "#2d1f1f", opacity: 0.6 }}
                >
                  合同会社
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span
                  className={`relative font-['Noto_Sans_JP'] text-sm tracking-widest transition-colors duration-300 group cursor-pointer ${
                    isActive(link.href) ? "text-[#d4909a]" : "text-[#2d1f1f]/80 hover:text-[#d4909a]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#c9a96e] transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#2d1f1f]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#fdf8f5]/98 backdrop-blur-md border-t border-[#f9d0d8]/50"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`font-['Cormorant_Garamond'] text-xl tracking-widest transition-colors duration-300 border-b border-[#f9d0d8]/60 pb-4 block cursor-pointer ${
                        isActive(link.href) ? "text-[#d4909a]" : "text-[#2d1f1f] hover:text-[#d4909a]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

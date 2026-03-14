/*
 * Navbar — Lotus Essence Academy
 * Design: Transparent → cream/white on scroll, gold logo text, elegant nav links
 * Mobile: Hamburger menu with slide-down drawer
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Mission", href: "/#mission" },
  { label: "Services", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "Company", href: "/#company" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#") && isHome) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-3 group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/8shFr8WNbEWnVqjzVdrQxY/lotus-gold_22580bc4.jpg"
                alt="Lotus Essence Academy"
                className="w-9 h-9 object-contain rounded-full"
                style={{ filter: "sepia(1) saturate(0.8) hue-rotate(290deg) brightness(1.1)" }}
              />
              <span
                className="font-['Cormorant_Garamond'] text-lg tracking-widest transition-colors duration-300"
                style={{ color: "#c9a96e" }}
              >
                Lotus Essence Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="relative font-['Noto_Sans_JP'] text-sm tracking-widest text-[#2d1f1f]/80 hover:text-[#d4909a] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />
              </a>
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
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    if (link.href.startsWith("/#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                  className="font-['Cormorant_Garamond'] text-xl tracking-widest text-[#2d1f1f] hover:text-[#d4909a] transition-colors duration-300 border-b border-[#f9d0d8]/60 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

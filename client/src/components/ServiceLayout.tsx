/*
 * ServiceLayout — SeveneEight合同会社
 * Shared layout for all service detail pages
 * Design: Feminine Elegant — pink/gold palette, Cormorant Garamond headings
 */

import { motion } from "framer-motion";
import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "wouter";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ServiceLayoutProps {
  label: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  children: React.ReactNode;
}

export default function ServiceLayout({ label, title, subtitle, heroImage, children }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen" style={{ background: "#fdf8f5" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{ background: "#fdf8f5" }}
      >
        {/* Decorative background circle */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f9d0d8, transparent)", transform: "translate(30%, -30%)" }}
        />

        <div className="container mx-auto px-6 lg:px-16">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link href="/services">
              <span
                className="inline-flex items-center gap-2 font-['Noto_Sans_JP'] text-xs tracking-widest transition-colors duration-300 hover:opacity-70"
                style={{ color: "#d4909a" }}
              >
                <ArrowLeft size={14} />
                サービス一覧へ戻る
              </span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="section-label mb-3"
              >
                {label}
              </motion.p>
              <span className="gold-line" />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-['Cormorant_Garamond'] font-light leading-snug mt-4 mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#2d1f1f" }}
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="font-['Noto_Sans_JP'] font-light text-base leading-loose"
                style={{ color: "#2d1f1f", opacity: 0.75 }}
              >
                {subtitle}
              </motion.p>
            </div>

            {heroImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div
                  className="absolute -top-3 -right-3 w-full h-full"
                  style={{ border: "1px solid #c9a96e", opacity: 0.3 }}
                />
                <img
                  src={heroImage}
                  alt={title}
                  className="relative w-full object-cover"
                  style={{ maxHeight: "400px" }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 満員御礼バナー */}
      <section style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 lg:p-8"
            style={{ background: "#3d1a24", borderLeft: "4px solid #c9a96e" }}
          >
            <div className="flex items-center gap-3 shrink-0">
              <Bell size={16} style={{ color: "#c9a96e" }} />
              <span className="font-['Cormorant_Garamond'] text-base tracking-wider" style={{ color: "#c9a96e" }}>
                現在満員御礼
              </span>
            </div>
            <p className="font-['Noto_Sans_JP'] font-light text-sm leading-relaxed flex-1" style={{ color: "rgba(249,208,216,0.85)" }}>
              現在、本サービスは定員に達しております。次回募集の際にご案内をご希望の方は、お問い合わせフォームよりご登録ください。
            </p>
            <Link href="/contact">
              <span
                className="font-['Noto_Sans_JP'] text-xs tracking-widest px-5 py-2.5 shrink-0 cursor-pointer transition-all duration-300 whitespace-nowrap"
                style={{ border: "1px solid #c9a96e", color: "#c9a96e" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#c9a96e";
                  (e.currentTarget as HTMLElement).style.color = "#3d1a24";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#c9a96e";
                }}
              >
                再募集通知を受け取る
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-16">
          {children}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#3d1a24" }}>
        <div className="container mx-auto px-6 lg:px-16 text-center max-w-xl">
          <p className="section-label mb-3" style={{ color: "#c9a96e" }}>Contact</p>
          <div className="gold-line-center" />
          <h2
            className="font-['Cormorant_Garamond'] font-light mt-6 mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#f9d0d8" }}
          >
            再募集のご案内を受け取る
          </h2>
          <p
            className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-8"
            style={{ color: "rgba(249,208,216,0.7)" }}
          >
            次回募集の開始時にご連絡いたします。ご希望のサービスをお問い合わせフォームよりお知らせください。
          </p>
          <Link href="/contact">
            <span className="btn-gold font-['Cormorant_Garamond'] text-sm tracking-widest">
              お問い合わせはこちら
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

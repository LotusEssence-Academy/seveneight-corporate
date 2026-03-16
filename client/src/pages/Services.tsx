/*
 * Services Page — SeveneEight合同会社
 * Design: "Petal & Poise" — Romantic Floral Elegance
 * Content: サービス一覧（4サービス）、満員御礼案内、問い合わせ導線
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Users, BookOpen, Leaf, ShoppingBag, ArrowRight, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className={className} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"}>
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: Users,
    label: "01",
    title: "Well-being パーソナルコーチング",
    description: "個人の目標達成や人生設計をサポートするマンツーマンのコーチングセッション。思考整理、ビジョン設計、行動計画を通じてより主体的で自立した人生づくりをサポートします。",
    href: "/services/coaching",
    badge: "満員御礼",
  },
  {
    icon: BookOpen,
    label: "02",
    title: "LEAオンラインサロン",
    description: "自己成長やWell-beingをテーマにしたオンラインコミュニティ型サブスクリプションサービス。定期的な学びのコンテンツ、ライブ配信、コミュニティ交流を通じて継続的な自己成長をサポートします。",
    href: "/services/salon",
    note: "Lotus Essence Academy（LEA）",
    badge: "満員御礼",
  },
  {
    icon: Leaf,
    label: "03",
    title: "ウェルネスコミュニティ",
    description: "心身の健康やライフスタイルの向上をテーマにオンライン・オフラインで交流や学びの場を提供。参加者同士が学び合い、支え合いながらより豊かなライフスタイルを実現することを目的としています。",
    href: "/services/community",
    badge: "満員御礼",
  },
  {
    icon: ShoppingBag,
    label: "04",
    title: "ウェルネス製品販売",
    description: "日常の健康維持やライフスタイル向上をサポートするウェルネス関連製品の販売。エッセンシャルオイルや自然由来製品など、生活に取り入れやすいウェルネスアイテムを取り扱っています。",
    href: "/services/products",
    badge: "クライアント限定",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen" style={{ background: "#fdf8f5" }}>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: "#fdf8f5" }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-about-decoration-CCuri7QjXv7R4uZBF6aDBA.png"
          alt=""
          className="absolute -top-10 -right-10 w-64 opacity-20 pointer-events-none"
        />
        <div className="container mx-auto px-6 lg:px-16">
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-label mb-3"
          >
            Services
          </motion.p>
          <span className="gold-line" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Cormorant_Garamond'] font-light mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#2d1f1f" }}
          >
            サービス一覧
          </motion.h1>
        </div>
      </section>

      {/* 満員御礼バナー */}
      <section className="py-0" style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 lg:p-8"
            style={{ background: "#3d1a24", borderLeft: "4px solid #c9a96e" }}
          >
            <div className="flex items-center gap-3 shrink-0">
              <Bell size={18} style={{ color: "#c9a96e" }} />
              <span
                className="font-['Cormorant_Garamond'] text-lg tracking-wider"
                style={{ color: "#c9a96e" }}
              >
                満員御礼
              </span>
            </div>
            <div className="flex-1">
              <p
                className="font-['Noto_Sans_JP'] font-light text-sm leading-relaxed"
                style={{ color: "rgba(249,208,216,0.85)" }}
              >
                現在、全サービスにおいて定員に達しております。次回募集の際にご案内をご希望の方は、お問い合わせフォームよりご登録ください。
              </p>
            </div>
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

      {/* Services List */}
      <section className="py-16 lg:py-24" style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="space-y-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div
                      className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 p-8 lg:p-10 bg-white cursor-pointer transition-all duration-300 hover:shadow-md"
                      style={{ border: "1px solid #f9d0d8" }}
                    >
                      {/* Number + Icon */}
                      <div className="flex items-center gap-4 lg:w-48 shrink-0">
                        <span
                          className="font-['Cormorant_Garamond'] text-4xl font-light"
                          style={{ color: "#f9d0d8" }}
                        >
                          {service.label}
                        </span>
                        <div
                          className="w-12 h-12 flex items-center justify-center shrink-0"
                          style={{ background: "#fce8ed" }}
                        >
                          <Icon size={20} style={{ color: "#d4909a" }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3 flex-wrap">
                          <h2
                            className="font-['Cormorant_Garamond'] font-light text-xl lg:text-2xl leading-snug"
                            style={{ color: "#2d1f1f" }}
                          >
                            {service.title}
                          </h2>
                          {service.note && (
                            <span
                              className="font-['Noto_Sans_JP'] text-xs tracking-wider px-3 py-1 self-center"
                              style={{ background: "#fce8ed", color: "#d4909a" }}
                            >
                              {service.note}
                            </span>
                          )}
                          {/* ステータスバッジ */}
                          {service.badge && (
                            <span
                              className="font-['Noto_Sans_JP'] text-xs tracking-wider px-3 py-1 self-center"
                              style={{ background: "#3d1a24", color: "#c9a96e" }}
                            >
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p
                          className="font-['Noto_Sans_JP'] font-light text-sm leading-loose"
                          style={{ color: "#2d1f1f", opacity: 0.7 }}
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="shrink-0 flex items-center">
                        <div
                          className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                          style={{ border: "1px solid #c9a96e" }}
                        >
                          <ArrowRight size={16} style={{ color: "#c9a96e" }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28" style={{ background: "#3d1a24" }}>
        <AnimatedSection className="container mx-auto px-6 lg:px-16 text-center max-w-xl">
          <motion.p variants={fadeUp} className="section-label mb-3" style={{ color: "#c9a96e" }}>
            Contact
          </motion.p>
          <motion.div variants={fadeUp} className="gold-line-center" />
          <motion.h2
            variants={fadeUp}
            className="font-['Cormorant_Garamond'] font-light mt-6 mb-6"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#f9d0d8" }}
          >
            再募集のご案内を受け取る
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-10"
            style={{ color: "rgba(249,208,216,0.75)" }}
          >
            次回募集の開始時にご連絡いたします。<br />
            ご希望のサービスをお問い合わせフォームよりお知らせください。
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact">
              <span className="btn-gold cursor-pointer">
                お問い合わせはこちら
              </span>
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
}

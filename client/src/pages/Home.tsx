/*
 * Home Page — SeveneEight合同会社
 * Design: "Petal & Poise" — Romantic Floral Elegance
 * Multi-page top: Hero + Mission概要 + Services概要 + Results概要 + Contact CTA
 * Color: Baby Pink #f9d0d8 → Dusty Rose #d4909a + Gold #c9a96e + Deep Rose Brown #3d1a24
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, ArrowRight } from "lucide-react";
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
  { title: "Well-being パーソナルコーチング", description: "個人の目標達成や人生設計をサポートするマンツーマンのコーチングセッション。", href: "/services/coaching" },
  { title: "LEAオンラインサロン", description: "自己成長やWell-beingをテーマにしたオンラインコミュニティ型サブスクリプションサービス。", href: "/services/salon" },
  { title: "ウェルネスコミュニティ", description: "心身の健康やライフスタイルの向上をテーマにオンライン・オフラインで交流や学びの場を提供。", href: "/services/community" },
  { title: "ウェルネス製品販売", description: "日常の健康維持やライフスタイル向上をサポートするウェルネス関連製品の販売。", href: "/services/products" },
];

const results = [
  { client: "30代女性・会社員", title: "副業から独立、月収30万円を達成", period: "6ヶ月" },
  { client: "40代女性・主婦", title: "自分の強みを活かしたサロン活動をスタート", period: "3ヶ月" },
  { client: "20代・フリーランス", title: "SNSフォロワー3万人達成・ブランド構築", period: "6ヶ月" },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#fdf8f5" }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-hero-bg-SFPveLR4dNDtPWGfPFcLcu.webp)` }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(253,248,245,0.52)" }} />
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-about-decoration-CCuri7QjXv7R4uZBF6aDBA.png"
          alt=""
          className="absolute -bottom-8 -right-8 w-72 lg:w-96 opacity-35 pointer-events-none select-none"
        />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-label mb-8"
          >
            SeveneEight 合同会社
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-['Cormorant_Garamond'] font-light leading-tight mb-8"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", color: "#2d1f1f", letterSpacing: "0.02em" }}
          >
            心・身体・人とのつながりが調和した、<br />
            <em style={{ color: "#d4909a", fontStyle: "italic" }}>Well-beingな生き方を。</em>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="w-16 h-px mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, #c9a96e, #e8d5a3)", transformOrigin: "left" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-['Noto_Sans_JP'] font-light text-sm lg:text-base leading-loose tracking-wider"
            style={{ color: "#2d1f1f", opacity: 0.72 }}
          >
            ウェルネス事業・教育・コーチング事業を通じて、<br className="hidden sm:block" />
            一人ひとりが自分らしく輝ける社会へ。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="section-label text-[10px]" style={{ color: "#c9a96e" }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={18} style={{ color: "#c9a96e" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-24 lg:py-32" style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Photo */}
            <AnimatedSection>
              <motion.div variants={fadeUp} className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full"
                  style={{ border: "1px solid #c9a96e", opacity: 0.35 }}
                />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/8shFr8WNbEWnVqjzVdrQxY/erika-profile_5d2b0660.jpg"
                  alt="代表 山﨑恵理香"
                  className="relative w-full object-cover"
                  style={{ maxHeight: "520px", objectPosition: "top" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 py-4 px-6 text-right"
                  style={{ background: "rgba(253,248,245,0.88)" }}
                >
                  <p className="font-['Noto_Sans_JP'] text-xs tracking-widest" style={{ color: "#c9a96e" }}>Representative</p>
                  <p className="font-['Cormorant_Garamond'] text-xl tracking-wider mt-1" style={{ color: "#2d1f1f" }}>
                    代表　山﨑恵理香
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <p className="section-label mb-3">About</p>
                <span className="gold-line" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-['Cormorant_Garamond'] font-light leading-snug mt-4 mb-8"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2d1f1f" }}
              >
                ウェルネスと教育で、<br />豊かな人生を共に。
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5">
                <p className="font-['Noto_Sans_JP'] font-light text-sm lg:text-base leading-loose" style={{ color: "#2d1f1f", opacity: 0.8 }}>
                  私たちは、心身の健康と自己成長をサポートするウェルネス事業・教育事業を展開しています。
                </p>
                <p className="font-['Noto_Sans_JP'] font-light text-sm lg:text-base leading-loose" style={{ color: "#2d1f1f", opacity: 0.8 }}>
                  コーチングや教育プログラム、コミュニティ運営、ウェルネス製品の販売を通じて、精神的・経済的に自立した個人の育成を目指しています。
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <Link href="/about">
                  <span className="inline-flex items-center gap-3 font-['Cormorant_Garamond'] text-sm tracking-widest uppercase transition-colors duration-300 cursor-pointer" style={{ color: "#c9a96e" }}>
                    About Us
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── MISSION PREVIEW ─── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "#3d1a24" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-mission-bg-mzDCYPUYp4n73yemf6odeT.webp)` }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(61,26,36,0.72)" }} />

        <AnimatedSection className="relative z-10 container mx-auto px-6 lg:px-16 max-w-2xl text-center">
          <motion.p variants={fadeUp} className="section-label mb-4" style={{ color: "#c9a96e" }}>
            Our Mission
          </motion.p>
          <motion.div variants={fadeUp} className="gold-line-center mb-8" />
          <motion.blockquote
            variants={fadeUp}
            className="font-['Cormorant_Garamond'] font-light italic leading-snug mb-8"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: "#f9d0d8" }}
          >
            "心・身体・人とのつながりが調和した<br />Well-beingな生き方"
          </motion.blockquote>
          <motion.p
            variants={fadeUp}
            className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-10"
            style={{ color: "rgba(249,208,216,0.75)" }}
          >
            私たちは、心身の健康と自己成長を通じて、一人ひとりが自分らしく生きられる社会を目指しています。
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/mission">
              <span className="btn-gold cursor-pointer" style={{ color: "#c9a96e", borderColor: "#c9a96e" }}>
                Mission を読む
              </span>
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-24 lg:py-32" style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <AnimatedSection className="text-center mb-14">
            <motion.p variants={fadeUp} className="section-label mb-3">Services</motion.p>
            <motion.div variants={fadeUp} className="gold-line-center" />
            <motion.h2
              variants={fadeUp}
              className="font-['Cormorant_Garamond'] font-light mt-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2d1f1f" }}
            >
              サービス一覧
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white p-8"
                style={{ border: "1px solid #f9d0d8", boxShadow: "0 2px 16px rgba(212,144,154,0.06)" }}
              >
                <h3
                  className="font-['Cormorant_Garamond'] font-light text-xl mb-3 leading-snug"
                  style={{ color: "#2d1f1f" }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-5"
                  style={{ color: "#2d1f1f", opacity: 0.68 }}
                >
                  {service.description}
                </p>
                <Link href={service.href}>
                  <span
                    className="inline-flex items-center gap-2 font-['Cormorant_Garamond'] text-sm tracking-widest uppercase transition-colors duration-300 cursor-pointer"
                    style={{ color: "#c9a96e" }}
                  >
                    詳しく見る
                    <span className="w-6 h-px inline-block transition-all duration-300 group-hover:w-10" style={{ background: "#c9a96e" }} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <motion.div variants={fadeUp}>
              <Link href="/services">
                <span className="btn-gold cursor-pointer">
                  サービス一覧を見る
                </span>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── RESULTS PREVIEW ─── */}
      <section className="py-24 lg:py-32" style={{ background: "white" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <AnimatedSection className="text-center mb-14">
            <motion.p variants={fadeUp} className="section-label mb-3">Results</motion.p>
            <motion.div variants={fadeUp} className="gold-line-center" />
            <motion.h2
              variants={fadeUp}
              className="font-['Cormorant_Garamond'] font-light mt-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2d1f1f" }}
            >
              お客様の声
            </motion.h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 mb-12">
            {results.map((result, i) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-8"
                style={{ background: "#fdf8f5", borderLeft: "3px solid #c9a96e" }}
              >
                <p className="font-['Noto_Sans_JP'] text-xs tracking-wider mb-3" style={{ color: "#d4909a" }}>
                  {result.client}
                </p>
                <h3
                  className="font-['Cormorant_Garamond'] font-light text-xl leading-snug mb-4"
                  style={{ color: "#2d1f1f" }}
                >
                  {result.title}
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-1.5" style={{ background: "#fce8ed" }}>
                  <span className="font-['Noto_Sans_JP'] text-xs tracking-wider" style={{ color: "#d4909a" }}>
                    期間：{result.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <motion.div variants={fadeUp}>
              <Link href="/results">
                <span className="btn-gold cursor-pointer">
                  実績をもっと見る
                </span>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section className="py-24 lg:py-32" style={{ background: "#fdf8f5" }}>
        <AnimatedSection className="container mx-auto px-6 lg:px-16 text-center max-w-xl">
          <motion.p variants={fadeUp} className="section-label mb-3">Contact</motion.p>
          <motion.div variants={fadeUp} className="gold-line-center" />
          <motion.h2
            variants={fadeUp}
            className="font-['Cormorant_Garamond'] font-light mt-6 mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2d1f1f" }}
          >
            お問い合わせ
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-10"
            style={{ color: "#2d1f1f", opacity: 0.7 }}
          >
            サービスに関するご質問・ご相談は、お気軽にお問い合わせください。
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact">
              <span className="btn-rose cursor-pointer">
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

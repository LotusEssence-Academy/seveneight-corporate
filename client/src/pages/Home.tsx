/*
 * Home Page — Lotus Essence Academy
 * Design: "Petal & Poise" — Romantic Floral Elegance
 * Single-page scroll: Hero → About → Mission → Services → Results → Company → Contact
 * Color: Baby Pink #f9d0d8 → Dusty Rose #d4909a + Gold #c9a96e + Deep Rose Brown #3d1a24
 */

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, Users, BookOpen, Leaf, ShoppingBag, Star, MapPin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0 } },
};

function AnimatedSection({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: Users,
    title: "Well-being パーソナルコーチング",
    description: "個人の目標達成や人生設計をサポートするマンツーマンのコーチングセッション。思考整理、ビジョン設計、行動計画を通じてより主体的で自立した人生づくりをサポートします。",
    href: "/services/coaching",
  },
  {
    icon: BookOpen,
    title: "LEAオンラインサロン",
    description: "自己成長やWell-beingをテーマにしたオンラインコミュニティ型サブスクリプションサービス。定期的な学びのコンテンツ、ライブ配信、コミュニティ交流を通じて継続的な自己成長をサポートします。",
    href: "/services/salon",
  },
  {
    icon: Leaf,
    title: "ウェルネスコミュニティ",
    description: "心身の健康やライフスタイルの向上をテーマにオンライン・オフラインで交流や学びの場を提供。参加者同士が学び合い、支え合いながらより豊かなライフスタイルを実現することを目的としています。",
    href: "/services/community",
  },
  {
    icon: ShoppingBag,
    title: "ウェルネス製品販売",
    description: "日常の健康維持やライフスタイル向上をサポートするウェルネス関連製品の販売。エッセンシャルオイルや自然由来製品など、生活に取り入れやすいウェルネスアイテムを取り扱っています。",
    href: "/services/products",
  },
];

const results = [
  {
    client: "30代女性・会社員",
    title: "副業から独立、月収30万円を達成",
    detail: "自分の強みや方向性が分からず行動できない状態でしたが、コーチングを通してビジョンを整理。ウェルネス分野での活動をスタートし、副業からビジネスを立ち上げました。継続的な発信とコミュニティ活動を通じて収入を伸ばし、会社員の給与を超える収入を実現しました。",
    period: "6ヶ月",
  },
  {
    client: "40代女性・主婦",
    title: "自分の強みを活かしたサロン活動をスタート",
    detail: "家庭中心の生活の中で「自分のやりたいことが分からない」と悩んでいましたが、コーチングを通じて価値観や得意分野を整理。ウェルネスコミュニティで活動を始め、自信を持って人に価値提供できるようになりました。",
    period: "3ヶ月",
  },
  {
    client: "20代・フリーランス",
    title: "SNSフォロワー3万人達成・ブランド構築",
    detail: "ブランディング戦略とコーチングを受けて、フォロワー2,000人から3万人を達成し集客できるようになりました。",
    period: "6ヶ月",
  },
];

const companyInfo = [
  { label: "会社名", value: "SeveneEight合同会社" },
  { label: "ブランド名", value: "Lotus Essence Academy（LEA）" },
  { label: "事業内容", value: "ウェルネス事業、教育・コーチング事業、セミナー・講座事業、コミュニティ運営" },
  { label: "所在地", value: "東京都渋谷区広尾5丁目（オンライン対応可）" },
  { label: "お問い合わせ", value: "yamakawaerika416@gmail.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#fdf8f5" }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-hero-bg-SFPveLR4dNDtPWGfPFcLcu.webp)`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(253,248,245,0.55)" }} />

        {/* Floral decoration — bottom right */}
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-about-decoration-CCuri7QjXv7R4uZBF6aDBA.png"
          alt=""
          className="absolute -bottom-8 -right-8 w-72 lg:w-96 opacity-40 pointer-events-none select-none"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-label mb-6"
          >
            Lotus Essence Academy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-['Cormorant_Garamond'] font-light leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#2d1f1f", letterSpacing: "0.03em" }}
          >
            <span className="block">しなやかに、自由に、</span>
            <em style={{ color: "#d4909a", fontStyle: "italic", display: "block" }}>美しく在る</em>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="w-16 h-px mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #c9a96e, #e8d5a3)", transformOrigin: "left" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-['Noto_Sans_JP'] font-light text-base lg:text-lg leading-relaxed tracking-wider"
            style={{ color: "#2d1f1f", opacity: 0.75 }}
          >
            心身の健康と自己成長を通じて、一人ひとりが自分らしく輝ける社会へ。
          </motion.p>

          {/* Scroll indicator */}
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

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-28 lg:py-36" style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Photo */}
            <AnimatedSection>
              <motion.div variants={fadeUp} className="relative">
                {/* Gold frame decoration */}
                <div
                  className="absolute -top-4 -left-4 w-full h-full"
                  style={{ border: "1px solid #c9a96e", opacity: 0.4 }}
                />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/8shFr8WNbEWnVqjzVdrQxY/erika-profile_5d2b0660.jpg"
                  alt="Erika Yamakawa"
                  className="relative w-full object-cover"
                  style={{ maxHeight: "560px", objectPosition: "top" }}
                />
                {/* Floral corner decoration */}
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-about-decoration-CCuri7QjXv7R4uZBF6aDBA.png"
                  alt=""
                  className="absolute -bottom-10 -right-10 w-40 opacity-60 pointer-events-none"
                />
              </motion.div>
            </AnimatedSection>

            {/* Right: Text */}
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <p className="section-label mb-3">SeveneEight合同会社</p>
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
                <p className="font-['Noto_Sans_JP'] font-light text-sm lg:text-base leading-loose" style={{ color: "#2d1f1f", opacity: 0.8 }}>
                  一人ひとりが本来持つ可能性を引き出し、より豊かな人生を歩むためのサポートを提供しています。
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
                {["ウェルネス事業", "教育・コーチング", "セミナー・講座", "コミュニティ運営"].map((tag) => (
                  <span
                    key={tag}
                    className="font-['Noto_Sans_JP'] text-xs tracking-wider px-4 py-1.5"
                    style={{ border: "1px solid #d4909a", color: "#d4909a" }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section
        id="mission"
        className="relative py-28 lg:py-40 overflow-hidden"
        style={{ background: "#3d1a24" }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-mission-bg-mzDCYPUYp4n73yemf6odeT.webp)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(61,26,36,0.7)" }} />

        <AnimatedSection className="relative z-10 container mx-auto px-6 lg:px-16 max-w-3xl text-center">
          <motion.p variants={fadeUp} className="section-label mb-4" style={{ color: "#c9a96e" }}>
            Our Mission
          </motion.p>
          <motion.div variants={fadeUp} className="gold-line-center mb-8" />
          <motion.blockquote
            variants={fadeUp}
            className="font-['Cormorant_Garamond'] font-light italic leading-snug mb-10"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", color: "#f9d0d8" }}
          >
            "心・身体・人とのつながりが調和した<br />Well-beingな生き方"
          </motion.blockquote>
          <motion.div variants={fadeUp} className="space-y-5 text-left lg:text-center">
            <p className="font-['Noto_Sans_JP'] font-light text-sm lg:text-base leading-loose" style={{ color: "rgba(249,208,216,0.8)" }}>
              私たちは、心身の健康と自己成長を通じて、一人ひとりが自分らしく生きられる社会を目指しています。
            </p>
            <p className="font-['Noto_Sans_JP'] font-light text-sm lg:text-base leading-loose" style={{ color: "rgba(249,208,216,0.8)" }}>
              現代社会では、忙しさや情報の多さの中で、本来の自分を見失ってしまう人も少なくありません。だからこそ私たちは、ウェルネス製品や学びの場、コミュニティを通じて、自分自身と向き合う時間ときっかけを提供したいと考えています。
            </p>
            <p className="font-['Noto_Sans_JP'] font-light text-sm lg:text-base leading-loose" style={{ color: "rgba(249,208,216,0.8)" }}>
              健康、学び、コミュニティ。そのすべてを通じて、より豊かで持続可能なライフスタイルを広げていくことが私たちの使命です。
            </p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        id="services"
        className="relative py-28 lg:py-36 overflow-hidden"
        style={{ background: "#fdf8f5" }}
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/Yi6kwSG58qzAbeinXax2Q4/lea-services-bg-HwUBHcSm3unkUotNenyUEU.webp)`,
          }}
        />

        <div className="relative z-10 container mx-auto px-6 lg:px-16">
          <AnimatedSection className="text-center mb-16">
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

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white p-8 lg:p-10"
                  style={{ border: "1px solid #f9d0d8", boxShadow: "0 2px 20px rgba(212,144,154,0.06)" }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{ background: "#fce8ed" }}
                  >
                    <Icon size={22} style={{ color: "#d4909a" }} />
                  </div>
                  <h3
                    className="font-['Cormorant_Garamond'] font-light text-xl mb-4 leading-snug"
                    style={{ color: "#2d1f1f" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-6"
                    style={{ color: "#2d1f1f", opacity: 0.7 }}
                  >
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <span
                      className="inline-flex items-center gap-2 font-['Cormorant_Garamond'] text-sm tracking-widest uppercase transition-colors duration-300"
                      style={{ color: "#c9a96e" }}
                    >
                      詳しく見る
                      <span className="w-6 h-px inline-block transition-all duration-300 group-hover:w-10" style={{ background: "#c9a96e" }} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section id="results" className="py-28 lg:py-36" style={{ background: "white" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <AnimatedSection className="text-center mb-16">
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

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {results.map((result, i) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative p-8 lg:p-10"
                style={{
                  background: "#fdf8f5",
                  borderLeft: "3px solid #c9a96e",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="#c9a96e" style={{ color: "#c9a96e" }} />
                  ))}
                </div>

                <p
                  className="font-['Noto_Sans_JP'] text-xs tracking-wider mb-3"
                  style={{ color: "#d4909a" }}
                >
                  {result.client}
                </p>

                <h3
                  className="font-['Cormorant_Garamond'] font-light text-xl leading-snug mb-4"
                  style={{ color: "#2d1f1f" }}
                >
                  {result.title}
                </h3>

                <p
                  className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-6"
                  style={{ color: "#2d1f1f", opacity: 0.7 }}
                >
                  {result.detail}
                </p>

                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5"
                  style={{ background: "#fce8ed" }}
                >
                  <span className="font-['Noto_Sans_JP'] text-xs tracking-wider" style={{ color: "#d4909a" }}>
                    期間：{result.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPANY ─── */}
      <section
        id="company"
        className="py-28 lg:py-36"
        style={{ background: "#3d1a24" }}
      >
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <AnimatedSection className="text-center mb-16">
            <motion.p variants={fadeUp} className="section-label mb-3" style={{ color: "#c9a96e" }}>
              Company
            </motion.p>
            <motion.div variants={fadeUp} className="gold-line-center" />
            <motion.h2
              variants={fadeUp}
              className="font-['Cormorant_Garamond'] font-light mt-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#f9d0d8" }}
            >
              会社概要
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeUp} className="divide-y" style={{ borderColor: "rgba(249,208,216,0.15)" }}>
              {companyInfo.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row py-5 gap-2 sm:gap-8">
                  <dt
                    className="font-['Cormorant_Garamond'] text-sm tracking-widest w-32 shrink-0"
                    style={{ color: "#c9a96e" }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    className="font-['Noto_Sans_JP'] font-light text-sm leading-relaxed"
                    style={{ color: "rgba(249,208,216,0.85)" }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section
        id="contact"
        className="py-24 lg:py-32"
        style={{ background: "#fdf8f5" }}
      >
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
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="btn-rose font-['Cormorant_Garamond'] text-sm tracking-widest">
                お問い合わせフォーム
              </span>
            </Link>
            <a href="mailto:yamakawaerika416@gmail.com" className="btn-gold font-['Cormorant_Garamond'] text-sm tracking-widest">
              <Mail size={14} />
              メールで問い合わせる
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-8 font-['Noto_Sans_JP'] text-xs tracking-wider flex items-center justify-center gap-2"
            style={{ color: "#2d1f1f", opacity: 0.5 }}
          >
            <MapPin size={12} />
            東京都渋谷区広尾5丁目（オンライン対応可）
          </motion.p>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
}

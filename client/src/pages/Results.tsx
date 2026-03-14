/*
 * Results Page — SeveneEight合同会社
 * Design: "Petal & Poise" — Romantic Floral Elegance
 * Content: お客様の声・実績一覧
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
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
    detail: "ブランディング戦略とコーチングを受けて、フォロワー2,000人から3万人を達成し集客できるようになりました。継続的なコンテンツ発信と戦略的なブランディングで、フリーランスとしての基盤を確立しました。",
    period: "6ヶ月",
  },
];

export default function Results() {
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
            Results
          </motion.p>
          <span className="gold-line" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Cormorant_Garamond'] font-light mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#2d1f1f" }}
          >
            お客様の声
          </motion.h1>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-16 lg:py-24" style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {results.map((result, i) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative p-8 lg:p-10 bg-white"
                style={{ borderLeft: "3px solid #c9a96e", boxShadow: "0 2px 16px rgba(212,144,154,0.06)" }}
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

                <h2
                  className="font-['Cormorant_Garamond'] font-light text-xl leading-snug mb-5"
                  style={{ color: "#2d1f1f" }}
                >
                  {result.title}
                </h2>

                <p
                  className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-6"
                  style={{ color: "#2d1f1f", opacity: 0.72 }}
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

      <Footer />
    </div>
  );
}

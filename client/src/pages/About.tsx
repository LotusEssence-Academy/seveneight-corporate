/*
 * About Page — SeveneEight合同会社
 * Design: "Petal & Poise" — Romantic Floral Elegance
 * Content: 代表プロフィール・会社概要・事業領域
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const businessAreas = [
  { title: "ウェルネス事業", description: "健康維持・生活の質向上を目的としたウェルネス関連製品の販売および情報提供。アロマ・自然由来製品・ライフスタイル商品など日常生活に取り入れやすい製品を取り扱っています。" },
  { title: "教育・コーチング事業", description: "個人の自己成長やキャリア形成をサポートするコーチング・コンサルティングサービスを提供。思考整理、目標設定、行動計画などを通じて自立した人生設計をサポートします。" },
  { title: "セミナー・講座事業", description: "自己成長、リーダーシップ、ライフプランニング、ウェルネスに関する各種セミナーや講座を開催しています。" },
  { title: "コミュニティ運営", description: "ウェルビーイングをテーマとしたオンライン・オフラインコミュニティを運営し、学びと交流の場を提供しています。" },
];

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: "#fdf8f5" }}>
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{ background: "#fdf8f5" }}
      >
        <img
          src="/images/decoration.svg"
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
            About
          </motion.p>
          <span className="gold-line" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Cormorant_Garamond'] font-light mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#2d1f1f" }}
          >
            私たちについて
          </motion.h1>
        </div>
      </section>

      {/* Representative Profile */}
      <section className="py-20 lg:py-28" style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Photo */}
            <AnimatedSection>
              <motion.div variants={fadeUp} className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full"
                  style={{ border: "1px solid #c9a96e", opacity: 0.35 }}
                />
                <img
                  src="/images/erika-profile.jpg"
                  alt="代表 山﨑恵理香"
                  className="relative w-full object-cover"
                  style={{ maxHeight: "580px", objectPosition: "top" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 py-4 px-6 text-right"
                  style={{ background: "rgba(253,248,245,0.92)" }}
                >
                  <p className="font-['Noto_Sans_JP'] text-xs tracking-widest" style={{ color: "#c9a96e" }}>Representative</p>
                  <p className="font-['Cormorant_Garamond'] text-2xl tracking-wider mt-1" style={{ color: "#2d1f1f" }}>
                    代表　山﨑恵理香
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <p className="section-label mb-3">Representative</p>
                <span className="gold-line" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-['Cormorant_Garamond'] font-light leading-snug mt-4 mb-8"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#2d1f1f" }}
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

      {/* Business Areas */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <AnimatedSection className="mb-14">
            <motion.p variants={fadeUp} className="section-label mb-3">Business</motion.p>
            <span className="gold-line" />
            <motion.h2
              variants={fadeUp}
              className="font-['Cormorant_Garamond'] font-light mt-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2d1f1f" }}
            >
              事業領域
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {businessAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 lg:p-10"
                style={{ background: "#fdf8f5", borderTop: "2px solid #f9d0d8" }}
              >
                <h3
                  className="font-['Cormorant_Garamond'] font-light text-xl mb-4"
                  style={{ color: "#2d1f1f" }}
                >
                  {area.title}
                </h3>
                <p
                  className="font-['Noto_Sans_JP'] font-light text-sm leading-loose"
                  style={{ color: "#2d1f1f", opacity: 0.72 }}
                >
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

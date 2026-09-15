/*
 * Mission Page — SeveneEight合同会社
 * Design: "Petal & Poise" — Romantic Floral Elegance
 * Content: ミッション全文・ビジョン・大切にしていること
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
  visible: { transition: { staggerChildren: 0.14 } },
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

const values = [
  { label: "Health", title: "健康", description: "心と身体の健康こそが、豊かな人生の土台。日常に取り入れやすいウェルネスを提供します。" },
  { label: "Growth", title: "学び", description: "自己成長は一生涯続く旅。コーチングと教育を通じて、その歩みをサポートします。" },
  { label: "Community", title: "つながり", description: "人とのつながりが、人生を豊かにする。学び合い、支え合えるコミュニティを育てます。" },
];

export default function Mission() {
  return (
    <div className="min-h-screen" style={{ background: "#fdf8f5" }}>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: "#fdf8f5" }}>
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
            Mission
          </motion.p>
          <span className="gold-line" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Cormorant_Garamond'] font-light mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#2d1f1f" }}
          >
            私たちの使命
          </motion.h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "#3d1a24" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(/images/mission-bg.svg)` }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(61,26,36,0.72)" }} />

        <AnimatedSection className="relative z-10 container mx-auto px-6 lg:px-16 max-w-2xl text-center">
          <motion.p variants={fadeUp} className="section-label mb-4" style={{ color: "#c9a96e" }}>
            Our Mission
          </motion.p>
          <motion.div variants={fadeUp} className="gold-line-center mb-10" />
          <motion.blockquote
            variants={fadeUp}
            className="font-['Cormorant_Garamond'] font-light italic leading-relaxed"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", color: "#f9d0d8" }}
          >
            "心・身体・人とのつながりが調和した<br />Well-beingな生き方"
          </motion.blockquote>
        </AnimatedSection>
      </section>

      {/* Mission Full Text */}
      <section className="py-24 lg:py-32" style={{ background: "#fdf8f5" }}>
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <AnimatedSection className="space-y-8">
            <motion.p
              variants={fadeUp}
              className="font-['Noto_Sans_JP'] font-light text-base lg:text-lg leading-loose"
              style={{ color: "#2d1f1f", opacity: 0.85 }}
            >
              私たちは、心身の健康と自己成長を通じて、一人ひとりが自分らしく生きられる社会を目指しています。
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-['Noto_Sans_JP'] font-light text-base lg:text-lg leading-loose"
              style={{ color: "#2d1f1f", opacity: 0.85 }}
            >
              現代社会では、忙しさや情報の多さの中で、本来の自分を見失ってしまう人も少なくありません。だからこそ私たちは、ウェルネス製品や学びの場、コミュニティを通じて、自分自身と向き合う時間ときっかけを提供したいと考えています。
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-['Noto_Sans_JP'] font-light text-base lg:text-lg leading-loose"
              style={{ color: "#2d1f1f", opacity: 0.85 }}
            >
              心が整い、身体が整うことで、人は本来の力を発揮し、人生の選択肢を広げていくことができます。
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="py-8 px-8 lg:px-12 my-4"
              style={{ background: "white", borderLeft: "3px solid #c9a96e" }}
            >
              <p
                className="font-['Cormorant_Garamond'] font-light italic text-xl lg:text-2xl leading-relaxed"
                style={{ color: "#2d1f1f" }}
              >
                私たちが大切にしているのは、心・身体・人とのつながりが調和したWell-being（ウェルビーイング）な生き方です。
              </p>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="font-['Noto_Sans_JP'] font-light text-base lg:text-lg leading-loose"
              style={{ color: "#2d1f1f", opacity: 0.85 }}
            >
              健康、学び、コミュニティ。そのすべてを通じて、より豊かで持続可能なライフスタイルを広げていくことが私たちの使命です。
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="container mx-auto px-6 lg:px-16">
          <AnimatedSection className="mb-14">
            <motion.p variants={fadeUp} className="section-label mb-3">Values</motion.p>
            <span className="gold-line" />
            <motion.h2
              variants={fadeUp}
              className="font-['Cormorant_Garamond'] font-light mt-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2d1f1f" }}
            >
              大切にしていること
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-8 lg:p-10 text-center"
                style={{ background: "#fdf8f5" }}
              >
                <p className="section-label mb-2" style={{ color: "#c9a96e" }}>{value.label}</p>
                <div className="gold-line-center" />
                <h3
                  className="font-['Cormorant_Garamond'] font-light text-2xl mt-4 mb-4"
                  style={{ color: "#2d1f1f" }}
                >
                  {value.title}
                </h3>
                <p
                  className="font-['Noto_Sans_JP'] font-light text-sm leading-loose"
                  style={{ color: "#2d1f1f", opacity: 0.72 }}
                >
                  {value.description}
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

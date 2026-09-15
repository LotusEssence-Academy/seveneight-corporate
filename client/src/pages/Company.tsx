/*
 * Company Page — SeveneEight合同会社
 * Design: "Petal & Poise" — Romantic Floral Elegance
 * Content: 会社概要テーブル（ブランド名行なし、LEAはサービス内容欄に）
 */

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const companyInfo = [
  { label: "会社名", value: "SeveneEight合同会社" },
  { label: "代表者", value: "山﨑恵理香" },
  { label: "事業内容", value: "ウェルネス事業、教育・コーチング事業、セミナー・講座事業、コミュニティ運営\n展開サービス：Lotus Essence Academy（LEAオンラインサロン）" },
  { label: "所在地", value: "東京都渋谷区広尾5丁目（オンライン対応可）" },
  { label: "お問い合わせ", value: "yamakawaerika416@gmail.com" },
];

export default function Company() {
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
            Company
          </motion.p>
          <span className="gold-line" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Cormorant_Garamond'] font-light mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#2d1f1f" }}
          >
            会社概要
          </motion.h1>
        </div>
      </section>

      {/* Company Info Table */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "#3d1a24" }}
      >
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="divide-y"
            style={{ borderColor: "rgba(249,208,216,0.15)" }}
          >
            {companyInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col sm:flex-row py-6 gap-2 sm:gap-10"
              >
                <dt
                  className="font-['Cormorant_Garamond'] text-sm tracking-widest w-36 shrink-0"
                  style={{ color: "#c9a96e" }}
                >
                  {item.label}
                </dt>
                <dd
                  className="font-['Noto_Sans_JP'] font-light text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: "rgba(249,208,216,0.85)" }}
                >
                  {item.value}
                </dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

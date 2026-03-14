/*
 * Contact Page — Lotus Essence Academy
 * Design: Feminine Elegant — pink/gold palette
 * Google Form link: placeholder (to be replaced by client)
 */

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Google Form URL — クライアントから受け取り次第差し替えてください
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/PLACEHOLDER/viewform";

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: "#fdf8f5" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: "#fdf8f5" }}>
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f9d0d8, transparent)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #d4909a, transparent)", transform: "translate(-30%, 30%)" }}
        />

        <div className="container mx-auto px-6 lg:px-16 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-3"
          >
            Contact
          </motion.p>
          <div className="gold-line-center" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-['Cormorant_Garamond'] font-light leading-snug mt-6 mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#2d1f1f" }}
          >
            お問い合わせ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-['Noto_Sans_JP'] font-light text-sm lg:text-base leading-loose"
            style={{ color: "#2d1f1f", opacity: 0.7 }}
          >
            サービスに関するご質問・ご相談は、下記のお問い合わせフォームよりお気軽にご連絡ください。
            <br />
            通常2〜3営業日以内にご返信いたします。
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-28 lg:pb-36">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {/* Google Form CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 lg:p-10 text-center"
              style={{ background: "#3d1a24" }}
            >
              <div className="w-8 h-px mx-auto mb-6" style={{ background: "#c9a96e" }} />
              <h2
                className="font-['Cormorant_Garamond'] font-light text-xl mb-4"
                style={{ color: "#f9d0d8" }}
              >
                お問い合わせフォーム
              </h2>
              <p
                className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-8"
                style={{ color: "rgba(249,208,216,0.7)" }}
              >
                Googleフォームよりお問い合わせいただけます。
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-['Cormorant_Garamond'] text-sm tracking-widest uppercase transition-all duration-300"
                style={{ border: "1px solid #c9a96e", color: "#c9a96e" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#c9a96e";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fdf8f5";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#c9a96e";
                }}
              >
                <ExternalLink size={14} />
                フォームを開く
              </a>
            </motion.div>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 lg:p-10 text-center"
              style={{ background: "white", border: "1px solid #f9d0d8" }}
            >
              <div className="w-8 h-px mx-auto mb-6" style={{ background: "#c9a96e" }} />
              <h2
                className="font-['Cormorant_Garamond'] font-light text-xl mb-4"
                style={{ color: "#2d1f1f" }}
              >
                メールでのお問い合わせ
              </h2>
              <p
                className="font-['Noto_Sans_JP'] font-light text-sm leading-loose mb-8"
                style={{ color: "#2d1f1f", opacity: 0.6 }}
              >
                直接メールでのご連絡も受け付けております。
              </p>
              <a
                href="mailto:yamakawaerika416@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 font-['Cormorant_Garamond'] text-sm tracking-widest uppercase transition-all duration-300"
                style={{ background: "#d4909a", color: "white" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#c07a84";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#d4909a";
                }}
              >
                <Mail size={14} />
                メールを送る
              </a>
            </motion.div>
          </div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p
              className="font-['Noto_Sans_JP'] text-xs tracking-wider flex items-center justify-center gap-2"
              style={{ color: "#2d1f1f", opacity: 0.5 }}
            >
              <MapPin size={12} />
              東京都渋谷区広尾5丁目（オンライン対応可）
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <p className="section-label mb-3 text-center">FAQ</p>
            <div className="gold-line-center" />
            <h2
              className="font-['Cormorant_Garamond'] font-light text-2xl lg:text-3xl mt-4 mb-10 text-center"
              style={{ color: "#2d1f1f" }}
            >
              よくあるご質問
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "どのようなサービスから始めればよいですか？",
                  a: "まずは無料相談をご利用ください。現状のお悩みやご希望をお聞きした上で、最適なサービスをご提案いたします。",
                },
                {
                  q: "オンラインでの対応は可能ですか？",
                  a: "はい、すべてのサービスにおいてオンラインでの対応が可能です。全国どこからでもご利用いただけます。",
                },
                {
                  q: "料金はどのくらいかかりますか？",
                  a: "サービス内容やプランによって異なります。詳細はお問い合わせフォームよりお気軽にご相談ください。",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 lg:p-8"
                  style={{ border: "1px solid #f9d0d8", background: "white" }}
                >
                  <p
                    className="font-['Cormorant_Garamond'] text-base mb-3 flex items-start gap-3"
                    style={{ color: "#d4909a" }}
                  >
                    <span className="shrink-0">Q.</span>
                    <span style={{ color: "#2d1f1f" }}>{faq.q}</span>
                  </p>
                  <p
                    className="font-['Noto_Sans_JP'] font-light text-sm leading-loose pl-6"
                    style={{ color: "#2d1f1f", opacity: 0.7 }}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

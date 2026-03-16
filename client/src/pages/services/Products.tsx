/*
 * Service: ウェルネス製品販売
 * Design: Feminine Elegant — pink/gold palette
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";

const features = [
  "エッセンシャルオイル・アロマ製品",
  "自然由来のスキンケア・ボディケア製品",
  "サプリメント・健康食品",
  "ウェルネスライフスタイルグッズ",
  "オンラインショップで手軽に購入可能",
];

const categories = [
  {
    title: "アロマ・エッセンシャルオイル",
    desc: "天然由来の高品質なエッセンシャルオイル。日常のリラクゼーションや集中力アップに。",
  },
  {
    title: "ナチュラルスキンケア",
    desc: "自然由来成分にこだわったスキンケア製品。肌に優しく、毎日のケアを豊かにします。",
  },
  {
    title: "ウェルネスグッズ",
    desc: "日常生活にウェルネスを取り入れるためのアイテム。心身のバランスをサポートします。",
  },
];

export default function ServiceProducts() {
  return (
    <ServiceLayout
      label="Service 04"
      title="ウェルネス製品販売"
      subtitle="日常の健康維持やライフスタイル向上をサポートするウェルネス関連製品の販売。エッセンシャルオイルや自然由来製品など、生活に取り入れやすいウェルネスアイテムを取り扱っています。"
      statusBanner={{
        badge: "クライアント限定",
        message: "現在はコーチング・サロン等のクライアント様向けに限定販売しております。一般向け販売は現在準備中です。詳細が決まり次第ご案内いたしますので、ご希望の方はお問い合わせフォームよりご登録ください。",
        ctaLabel: "販売開始のお知らせを受け取る",
        ctaHref: "/contact",
      }}
    >
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Products</p>
          <span className="gold-line" />
          <h2
            className="font-['Cormorant_Garamond'] font-light text-2xl lg:text-3xl mt-4 mb-8"
            style={{ color: "#2d1f1f" }}
          >
            取り扱い製品カテゴリ
          </h2>
          <ul className="space-y-4">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#c9a96e" }} />
                <span className="font-['Noto_Sans_JP'] font-light text-sm leading-relaxed" style={{ color: "#2d1f1f", opacity: 0.8 }}>
                  {f}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-8 lg:p-10"
          style={{ background: "#fce8ed" }}
        >
          <p className="section-label mb-3">こんな方におすすめ</p>
          <span className="gold-line" />
          <ul className="mt-6 space-y-4">
            {[
              "日常にウェルネスを取り入れたい方",
              "自然由来・高品質な製品を求めている方",
              "アロマやナチュラルケアに興味がある方",
              "自分へのご褒美や大切な方へのギフトをお探しの方",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-['Cormorant_Garamond'] text-sm" style={{ color: "#d4909a" }}>—</span>
                <span className="font-['Noto_Sans_JP'] font-light text-sm leading-relaxed" style={{ color: "#2d1f1f", opacity: 0.8 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-3 text-center">Categories</p>
        <div className="gold-line-center" />
        <h2
          className="font-['Cormorant_Garamond'] font-light text-2xl lg:text-3xl mt-4 mb-12 text-center"
          style={{ color: "#2d1f1f" }}
        >
          製品カテゴリ
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8"
              style={{ border: "1px solid #f9d0d8", background: "white" }}
            >
              <div className="w-8 h-px mb-4" style={{ background: "#c9a96e" }} />
              <h3
                className="font-['Cormorant_Garamond'] text-lg mb-4"
                style={{ color: "#2d1f1f" }}
              >
                {cat.title}
              </h3>
              <p
                className="font-['Noto_Sans_JP'] font-light text-sm leading-loose"
                style={{ color: "#2d1f1f", opacity: 0.7 }}
              >
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <p
          className="text-center font-['Noto_Sans_JP'] text-xs mt-6"
          style={{ color: "#2d1f1f", opacity: 0.5 }}
        >
          ※ 取り扱い製品の詳細はお問い合わせください。
        </p>
      </motion.div>
    </ServiceLayout>
  );
}

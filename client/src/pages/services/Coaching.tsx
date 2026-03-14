/*
 * Service: Well-being パーソナルコーチング
 * Design: Feminine Elegant — pink/gold palette
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";

const features = [
  "思考整理・ビジョン設計のサポート",
  "個人の目標達成に向けた行動計画の策定",
  "マンツーマンのセッション（オンライン対応可）",
  "継続的なフォローアップと振り返り",
  "自分らしいライフスタイルの設計",
];

const flow = [
  { step: "01", title: "無料相談", desc: "まずはお気軽にご相談ください。現状のお悩みやご希望をお聞きします。" },
  { step: "02", title: "初回セッション", desc: "価値観・強み・ビジョンを深掘りし、目標を明確にします。" },
  { step: "03", title: "継続セッション", desc: "月2〜4回のセッションで、行動計画の実行と振り返りを繰り返します。" },
  { step: "04", title: "目標達成・卒業", desc: "目標達成後も自走できる状態を目指し、サポートを完了します。" },
];

export default function ServiceCoaching() {
  return (
    <ServiceLayout
      label="Service 01"
      title={"Well-being\nパーソナルコーチング"}
      subtitle="個人の目標達成や人生設計をサポートするマンツーマンのコーチングセッション。思考整理、ビジョン設計、行動計画を通じてより主体的で自立した人生づくりをサポートします。"
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663099953261/8shFr8WNbEWnVqjzVdrQxY/erika-profile_5d2b0660.jpg"
    >
      {/* Features */}
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Features</p>
          <span className="gold-line" />
          <h2
            className="font-['Cormorant_Garamond'] font-light text-2xl lg:text-3xl mt-4 mb-8"
            style={{ color: "#2d1f1f" }}
          >
            このサービスでできること
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
              "自分の強みや方向性が分からず悩んでいる方",
              "副業・起業に挑戦したいが一歩踏み出せない方",
              "仕事・家庭・自分のバランスを整えたい方",
              "自己成長を続けながら豊かな人生を歩みたい方",
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

      {/* Flow */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <p className="section-label mb-3 text-center">Flow</p>
        <div className="gold-line-center" />
        <h2
          className="font-['Cormorant_Garamond'] font-light text-2xl lg:text-3xl mt-4 mb-12 text-center"
          style={{ color: "#2d1f1f" }}
        >
          ご利用の流れ
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flow.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6"
              style={{ border: "1px solid #f9d0d8" }}
            >
              <p
                className="font-['Cormorant_Garamond'] text-3xl font-light mb-3"
                style={{ color: "#d4909a", opacity: 0.5 }}
              >
                {item.step}
              </p>
              <h3
                className="font-['Cormorant_Garamond'] text-lg mb-3"
                style={{ color: "#2d1f1f" }}
              >
                {item.title}
              </h3>
              <p
                className="font-['Noto_Sans_JP'] font-light text-sm leading-loose"
                style={{ color: "#2d1f1f", opacity: 0.7 }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ServiceLayout>
  );
}

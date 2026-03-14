/*
 * Service: ウェルネスコミュニティ
 * Design: Feminine Elegant — pink/gold palette
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";

const features = [
  "オンライン・オフラインの交流イベント",
  "テーマ別グループでの学び合い",
  "専門家によるワークショップ",
  "メンバー同士のサポートネットワーク",
  "ライフスタイル向上のための情報共有",
];

const activities = [
  { title: "月次オンラインミートアップ", desc: "テーマを設けた月1回のオンライン交流会。メンバー同士の近況共有や学びの場として活用されています。" },
  { title: "ウェルネスワークショップ", desc: "アロマ・瞑想・栄養学など、ウェルネスに関するテーマで定期的にワークショップを開催しています。" },
  { title: "オフライン交流会", desc: "東京都内を中心に、リアルでつながれる交流会を不定期で開催しています。" },
];

export default function ServiceCommunity() {
  return (
    <ServiceLayout
      label="Service 03"
      title="ウェルネスコミュニティ"
      subtitle="心身の健康やライフスタイルの向上をテーマにオンライン・オフラインで交流や学びの場を提供。参加者同士が学び合い、支え合いながらより豊かなライフスタイルを実現することを目的としています。"
    >
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
            コミュニティでできること
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
              "同じ価値観を持つ仲間とつながりたい方",
              "ウェルネスなライフスタイルを実践したい方",
              "孤独感を感じず、支え合える環境を求めている方",
              "学びながら行動できるコミュニティを探している方",
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

      {/* Activities */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-3 text-center">Activities</p>
        <div className="gold-line-center" />
        <h2
          className="font-['Cormorant_Garamond'] font-light text-2xl lg:text-3xl mt-4 mb-12 text-center"
          style={{ color: "#2d1f1f" }}
        >
          主な活動内容
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={act.title}
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
                {act.title}
              </h3>
              <p
                className="font-['Noto_Sans_JP'] font-light text-sm leading-loose"
                style={{ color: "#2d1f1f", opacity: 0.7 }}
              >
                {act.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ServiceLayout>
  );
}

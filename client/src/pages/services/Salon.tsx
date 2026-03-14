/*
 * Service: LEAオンラインサロン
 * Design: Feminine Elegant — pink/gold palette
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ServiceLayout from "@/components/ServiceLayout";

const features = [
  "定期的な学びのコンテンツ配信",
  "月次ライブ配信・Q&Aセッション",
  "メンバー限定コミュニティへのアクセス",
  "過去アーカイブの視聴",
  "専門家によるゲスト講座",
];

const plans = [
  {
    name: "ライトプラン",
    desc: "まずは気軽に始めたい方向け。コンテンツ視聴とコミュニティ参加が可能です。",
  },
  {
    name: "スタンダードプラン",
    desc: "ライブ配信・Q&Aセッションへの参加も含まれる充実のプランです。",
  },
  {
    name: "プレミアムプラン",
    desc: "月1回の個別コーチングセッション付き。最大限の成長をサポートします。",
  },
];

export default function ServiceSalon() {
  return (
    <ServiceLayout
      label="Service 02"
      title="LEAオンラインサロン"
      subtitle="自己成長やWell-beingをテーマにしたオンラインコミュニティ型サブスクリプションサービス。定期的な学びのコンテンツ、ライブ配信、コミュニティ交流を通じて継続的な自己成長をサポートします。"
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
            サロンでできること
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
              "自己成長に取り組みたいが一人では続かない方",
              "同じ志を持つ仲間とつながりたい方",
              "Well-beingなライフスタイルを学びたい方",
              "コストを抑えながら継続的に学びたい方",
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

      {/* Plans */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label mb-3 text-center">Plans</p>
        <div className="gold-line-center" />
        <h2
          className="font-['Cormorant_Garamond'] font-light text-2xl lg:text-3xl mt-4 mb-12 text-center"
          style={{ color: "#2d1f1f" }}
        >
          プラン一覧
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 text-center"
              style={{ border: "1px solid #f9d0d8", background: "white" }}
            >
              <h3
                className="font-['Cormorant_Garamond'] text-xl mb-4"
                style={{ color: "#d4909a" }}
              >
                {plan.name}
              </h3>
              <div className="w-8 h-px mx-auto mb-4" style={{ background: "#c9a96e" }} />
              <p
                className="font-['Noto_Sans_JP'] font-light text-sm leading-loose"
                style={{ color: "#2d1f1f", opacity: 0.7 }}
              >
                {plan.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <p
          className="text-center font-['Noto_Sans_JP'] text-xs mt-6"
          style={{ color: "#2d1f1f", opacity: 0.5 }}
        >
          ※ 料金の詳細はお問い合わせください。
        </p>
      </motion.div>
    </ServiceLayout>
  );
}

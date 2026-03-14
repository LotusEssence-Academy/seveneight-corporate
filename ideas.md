# Lotus Essence Academy — デザインアイデア

## 確定仕様
- カラー：ベビーピンク〜ダスティローズ + ゴールドアクセント
- テイスト：フェミニン・エレガント
- 構成：マルチページ（トップスクロール型 + サービス詳細4ページ + お問い合わせページ）

---

<response>
<probability>0.07</probability>
<text>

## アイデア A：「Petal & Poise」— ロマンティック・フローラルエレガンス

**Design Movement:** Art Nouveau meets Modern Feminine Luxury

**Core Principles:**
1. 花びらのような曲線と有機的なフォルムを随所に使用
2. 薄い紙のようなテクスチャと繊細なグラデーションで奥行きを演出
3. 余白は「息をする空間」として機能させ、窮屈さを排除
4. ゴールドは線・枠・アンダーラインとして使い、主役はピンクに

**Color Philosophy:**
- 背景：クリームホワイト `#fdf8f5`（温かみのある白）
- メイン：ベビーピンク `#f9d0d8` → ダスティローズ `#d4909a` のグラデーション
- アクセント：ソフトゴールド `#c9a96e`
- ダーク：ディープローズブラウン `#3d1a24`（ダークセクション用）
- テキスト：チャコールブラウン `#2d1f1f`

**Layout Paradigm:**
- 非対称レイアウト：テキストと画像を左右交互に配置
- セクション間に斜めのカット（clip-path）で動きを演出
- ナビゲーションは透明→スクロールでクリーム背景に変化

**Signature Elements:**
1. 細いゴールドラインの装飾（セクションタイトル下、カード枠）
2. 薄いピンクの円・楕円の背景装飾（ぼかしあり）
3. 花びら型のセパレーター

**Interaction Philosophy:**
- ホバー時にゴールドのアンダーラインがスライドイン
- カードホバーで微妙な浮き上がり（translateY -4px + shadow）
- スクロール時にセクションが下からフェードアップ

**Animation:**
- framer-motion: staggerChildren でカードを順番にフェードイン
- Hero: テキストが上からフェードダウン（opacity 0→1, y: -20→0）
- ナビゲーション: スクロール時にbackground-colorがtransition

**Typography System:**
- 見出し：Cormorant Garamond（italic, 300〜400）— 繊細で詩的
- 本文：Noto Sans JP（400）— 読みやすさ重視
- アクセント：Cormorant Garamond（small caps）でラベル表示

</text>
</response>

<response>
<probability>0.06</probability>
<text>

## アイデア B：「Silk & Bloom」— コンテンポラリー・フェミニン

**Design Movement:** Contemporary Feminine Minimalism

**Core Principles:**
1. 大胆な余白とシンプルな構造でコンテンツを際立たせる
2. ピンクは背景のアクセントとして使い、テキストは濃いブラウンで読みやすく
3. カードは白背景にピンクのボーダーで統一感を出す
4. アニメーションはシンプルだが効果的に

**Color Philosophy:**
- 背景：ピュアホワイト `#ffffff` と ソフトピンク `#fce8ed` の交互
- メイン：ダスティローズ `#d4909a`
- アクセント：ゴールド `#c9a96e`
- テキスト：ディープブラウン `#2d1f1f`

**Layout Paradigm:**
- グリッドベースの整然としたレイアウト
- セクションごとに背景色を交互に変える
- フルワイド画像セクションを要所に配置

**Signature Elements:**
1. ピンクのドット・サークル装飾
2. ゴールドの細いボーダーライン
3. 大きなセリフ体の引用文

**Interaction Philosophy:**
- シンプルなホバーエフェクト
- スクロールアニメーションは控えめに

**Animation:**
- フェードイン中心
- カードのホバーシャドウ

**Typography System:**
- 見出し：Cormorant Garamond
- 本文：Noto Sans JP

</text>
</response>

<response>
<probability>0.05</probability>
<text>

## アイデア C：「Rose Mist」— ドリーミー・ラグジュアリー

**Design Movement:** Dreamy Luxury Feminine

**Core Principles:**
1. ミスト（霧）のようなぼかしとグラデーションで夢幻的な雰囲気
2. ガラスモーフィズムを部分的に採用
3. ピンクとゴールドの組み合わせで高級感を演出
4. フォントは大きく、インパクトのある見出しで

**Color Philosophy:**
- 背景：淡いピンクグラデーション
- グラスエフェクト：白/10% opacity
- アクセント：ゴールド

**Layout Paradigm:**
- フルスクリーンセクション
- オーバーラップするレイヤー

**Signature Elements:**
1. ガラスカード
2. ぼかし背景
3. 大きなタイポグラフィ

**Interaction Philosophy:**
- パーティクルエフェクト
- スムーズなスクロール

**Animation:**
- 複雑なアニメーション

**Typography System:**
- 見出し：Cormorant Garamond（大きく）
- 本文：Noto Sans JP

</text>
</response>

---

## 採用デザイン：アイデア A「Petal & Poise」

ロマンティック・フローラルエレガンスを採用。
非対称レイアウト、斜めカット、ゴールドラインの装飾、薄いピンクの背景装飾を組み合わせ、
フェミニン・エレガントなブランドイメージを体現する。

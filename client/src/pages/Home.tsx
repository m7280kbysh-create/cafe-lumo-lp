// client/src/pages/Home.tsx
// Cafe Lumo — 架空カフェのLP（来店・ランチ・テイクアウト促進）
// 全セクション: ヘッダー / FV / コンセプト / 看板メニュー / こだわり / メニュー一覧 / ギャラリー / アクセス / 地図 / 最終CTA / フッター

import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

/* ---------- アニメーション設定 ---------- */
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.15 },
};

/* ---------- フォント定義 ---------- */
const headingFont = { fontFamily: "'M PLUS Rounded 1c', sans-serif" };
const bodyFont = { fontFamily: "'Noto Sans JP', sans-serif" };

/* ---------- セクションラッパー（framer-motionアニメーション付き） ---------- */
function MotionSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`px-4 md:px-6 ${className}`}
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      transition={reveal.transition}
      viewport={reveal.viewport}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  /* メニューカテゴリのタブ切り替え用 */
  const [activeTab, setActiveTab] = useState<"drink" | "lunch" | "dessert">("drink");

  return (
    <div className="min-h-screen bg-[#FFF8E1] text-[#2C1810]" style={bodyFont}>

      {/* ============================
          固定ヘッダー
         ============================ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#3E2723]/95 backdrop-blur-md text-[#FFF8E1]">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
          {/* ロゴ */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-wide"
            style={headingFont}
          >
            Cafe Lumo
          </a>

          {/* 右側ナビ: 電話 + 予約CTA + 地図リンク */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-[#FFF8E1]/70">000-0000-0000</span>
            <a
              href="#reservation"
              className="inline-flex items-center justify-center rounded-full bg-[#E64A19] text-white px-5 py-2 text-sm font-bold hover:bg-[#D84315] transition shadow-md"
            >
              予約する
            </a>
            <a
              href="#map"
              className="text-sm text-[#FFF8E1]/70 hover:text-[#F4A460] transition"
            >
              地図
            </a>
          </div>

          {/* モバイル: 予約ボタンのみ表示 */}
          <a
            href="#reservation"
            className="md:hidden inline-flex items-center justify-center rounded-full bg-[#E64A19] text-white px-4 py-1.5 text-xs font-bold"
          >
            予約する
          </a>
        </div>
      </header>

      {/* ============================
          セクション1: ファーストビュー（Hero）
         ============================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景プレースホルダー画像 */}
        <div className="absolute inset-0">
          <img
            src="/demo/food/hero.png"
            alt="Cafe Lumo 店内の様子（架空デモ）"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-[#3E2723]/50" />

        <div className="relative container mx-auto px-6 text-center text-[#FFF8E1]">
          {/* 店名 */}
          <motion.p
            className="text-lg md:text-2xl tracking-[0.3em] mb-4 text-[#F4A460]"
            style={headingFont}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cafe Lumo
          </motion.p>

          {/* キャッチコピー */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
            style={headingFont}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            日常に、ほっとする場所を。
          </motion.h1>

          {/* サブコピー */}
          <motion.p
            className="mt-6 text-[#FFF8E1]/80 text-sm md:text-lg leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            渋谷の路地裏、自家焙煎コーヒーと手作りスイーツの隠れ家カフェ
          </motion.p>

          {/* CTA群 */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="#reservation"
              className="inline-flex items-center justify-center rounded-full bg-[#E64A19] text-white px-8 py-4 text-base font-bold hover:bg-[#D84315] transition shadow-lg hover:shadow-xl"
            >
              予約する
            </a>
            <a
              href="#signature"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#FFF8E1]/60 text-[#FFF8E1] px-8 py-4 text-base font-bold hover:bg-[#FFF8E1]/10 transition"
            >
              メニューを見る
            </a>
          </motion.div>

          {/* 注意書き */}
          <p className="mt-16 text-xs text-[#FFF8E1]/40">
            ※架空の店舗です
          </p>
        </div>
      </section>

      <main>
        {/* ============================
            セクション2: コンセプト / ストーリー
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FFF8E1]">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2 items-center">
            {/* コンセプト写真プレースホルダー */}
            <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-gradient-to-br from-[#6D4C41] to-[#3E2723]">
              <img
                src="/demo/food/concept.png"
                alt="Cafe Lumo コンセプト（架空デモ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* テキスト */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#3E2723] mb-6"
                style={headingFont}
              >
                Cafe Lumoについて
              </h2>
              <div className="text-[#2C1810]/80 text-sm md:text-base leading-loose space-y-4">
                <p>
                  渋谷の喧騒から少し離れた路地裏。Cafe Lumoは「灯り」を意味する名前のとおり、
                  忙しい毎日の中でほっと一息つける場所でありたいと願っています。
                  店内で丁寧に焙煎したコーヒー豆を、一杯ずつハンドドリップ。
                  毎朝仕込む手作りスイーツとともに、ゆっくり流れる時間をお届けします。
                </p>
                <p className="text-[#3E2723] font-bold" style={headingFont}>
                  全席Wi-Fi・電源完備。ひとりでも、誰かとでも。
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション3: 看板メニュー
           ============================ */}
        <MotionSection id="signature" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#3E2723]"
                style={headingFont}
              >
                看板メニュー
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  id: 1,
                  name: "Lumoブレンド",
                  price: "¥550",
                  desc: "華やかな香りとすっきりした後味。当店の自信作。",
                },
                {
                  id: 2,
                  name: "季節限定ラテ",
                  price: "¥680",
                  desc: "旬の素材を使った、ここでしか飲めない一杯。",
                },
                {
                  id: 3,
                  name: "季節のフルーツタルト",
                  price: "¥650〜",
                  desc: "サクサク生地に旬のフルーツをたっぷりと。",
                },
                {
                  id: 4,
                  name: "自家製パウンドケーキ",
                  price: "¥450",
                  desc: "レモンカードを練り込んだ、しっとり焼き菓子。",
                },
                {
                  id: 5,
                  name: "焼きたてマフィン",
                  price: "¥380",
                  desc: "毎朝焼き上げる、素朴で優しい味わい。",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-[#3E2723]/10 bg-[#FFF8E1]/50 p-4 hover:shadow-md transition"
                >
                  {/* メニュー写真プレースホルダー */}
                  <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#6D4C41] to-[#3E2723]">
                    <img
                      src={`/demo/food/menu-${item.id}.png`}
                      alt={`${item.name}（架空デモ）`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* テキスト */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-lg font-bold text-[#3E2723]" style={headingFont}>
                        {item.name}
                      </h3>
                      <span className="text-lg font-extrabold text-[#E64A19]">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-[#2C1810]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション4: こだわり3点
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FFF8E1]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#3E2723]"
                style={headingFont}
              >
                わたしたちのこだわり
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "自家焙煎の豆",
                  desc: "店内で丁寧に焙煎。注文を受けてから一杯ずつ丁寧にドリップします。",
                  icon: "\u2615",
                },
                {
                  title: "手作りスイーツ",
                  desc: "毎朝仕込む焼き菓子とケーキ。季節の素材を大切にしています。",
                  icon: "\uD83C\uDF70",
                },
                {
                  title: "居心地のよい空間",
                  desc: "全席電源・Wi-Fi完備。カウンター・テーブル・テラス席をご用意。",
                  icon: "\uD83C\uDFE0",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-[#3E2723]/10 p-8 text-center hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-bold text-[#3E2723] mb-3"
                    style={headingFont}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2C1810]/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション5: メニュー一覧（カテゴリ別）
           ============================ */}
        <MotionSection id="menu" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#3E2723]"
                style={headingFont}
              >
                メニュー
              </h2>
            </div>

            {/* タブ切り替え */}
            <div className="flex justify-center gap-2 mb-8">
              {([
                { key: "drink" as const, label: "ドリンク" },
                { key: "lunch" as const, label: "ランチ" },
                { key: "dessert" as const, label: "デザート" },
              ]).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition ${
                    activeTab === tab.key
                      ? "bg-[#3E2723] text-[#FFF8E1]"
                      : "bg-[#3E2723]/10 text-[#3E2723] hover:bg-[#3E2723]/20"
                  }`}
                  style={headingFont}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ドリンクメニュー */}
            {activeTab === "drink" && (
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  { name: "Lumoブレンド", price: "¥550" },
                  { name: "カフェラテ", price: "¥600" },
                  { name: "季節限定ラテ", price: "¥680" },
                  { name: "紅茶各種", price: "¥500" },
                  { name: "ジュース", price: "¥450" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-[#3E2723]/10">
                    <span className="text-[#2C1810]">{item.name}</span>
                    <span className="text-[#E64A19] font-bold flex-shrink-0 ml-4">{item.price}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ランチメニュー */}
            {activeTab === "lunch" && (
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  { name: "本日のプレート", price: "¥1,100" },
                  { name: "キッシュセット", price: "¥980" },
                  { name: "サンドイッチ", price: "¥850" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-[#3E2723]/10">
                    <span className="text-[#2C1810]">{item.name}</span>
                    <span className="text-[#E64A19] font-bold flex-shrink-0 ml-4">{item.price}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* デザートメニュー */}
            {activeTab === "dessert" && (
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  { name: "フルーツタルト", price: "¥650〜" },
                  { name: "パウンドケーキ", price: "¥450" },
                  { name: "マフィン", price: "¥380" },
                  { name: "アイスクリーム", price: "¥400" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-[#3E2723]/10">
                    <span className="text-[#2C1810]">{item.name}</span>
                    <span className="text-[#E64A19] font-bold flex-shrink-0 ml-4">{item.price}</span>
                  </div>
                ))}
              </motion.div>
            )}

            <p className="mt-6 text-xs text-[#2C1810]/50 text-center">
              ※価格はすべて税込です（架空）
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション6: 店内ギャラリー
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FFF8E1]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#3E2723]"
                style={headingFont}
              >
                空間
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                { id: 1, label: "カウンター席" },
                { id: 2, label: "テーブル席" },
                { id: 3, label: "テラス席" },
                { id: 4, label: "焙煎スペース" },
              ].map((img) => (
                <div
                  key={img.id}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#6D4C41] to-[#3E2723]"
                >
                  <img
                    src={`/demo/food/interior-${img.id}.png`}
                    alt={`${img.label}（架空デモ）`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション7: アクセス・店舗情報
           ============================ */}
        <MotionSection id="access" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#3E2723]"
                style={headingFont}
              >
                アクセス・店舗情報
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {/* 店舗情報テーブル */}
              <div className="space-y-4 text-sm">
                {[
                  { label: "店名", value: "Cafe Lumo（架空）" },
                  { label: "住所", value: "東京都渋谷区（架空の住所）" },
                  { label: "最寄り", value: "渋谷駅徒歩8分（架空）" },
                  { label: "営業時間", value: "平日 8:00-20:00 / 休日 9:00-20:00" },
                  { label: "定休日", value: "水曜日（架空）" },
                  { label: "駐車場", value: "なし（近隣コインパーキングあり）" },
                  { label: "支払い", value: "現金・カード・QR決済対応" },
                  { label: "席数", value: "28席（カウンター8・テーブル16・テラス4）" },
                ].map((info, i) => (
                  <div key={i} className="flex border-b border-[#3E2723]/10 pb-3">
                    <div
                      className="w-24 flex-shrink-0 font-bold text-[#3E2723]"
                      style={headingFont}
                    >
                      {info.label}
                    </div>
                    <div className="text-[#2C1810]/80">{info.value}</div>
                  </div>
                ))}
              </div>

              {/* 外観写真 */}
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#6D4C41] to-[#3E2723] self-start">
                <img
                  src="/demo/food/exterior.png"
                  alt="Cafe Lumo 外観（架空デモ）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション8: 地図エリア
           ============================ */}
        <MotionSection id="map" className="py-16 md:py-24 bg-[#FFF8E1]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#3E2723]"
                style={headingFont}
              >
                地図
              </h2>
            </div>

            {/* Google Maps 埋め込みプレースホルダー */}
            <div className="aspect-[16/9] bg-[#E8E0D0] rounded-xl flex items-center justify-center text-[#6D4C41]">
              Google Maps 埋め込みエリア
            </div>
            <p className="mt-4 text-xs text-[#2C1810]/50 text-center">
              ※架空の店舗のため、実際の地図は表示されません
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション9: 最終CTA
           ============================ */}
        <MotionSection id="reservation" className="py-16 md:py-24 bg-[#3E2723] text-[#FFF8E1]">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-2xl md:text-3xl font-extrabold"
              style={headingFont}
            >
              Cafe Lumoで、ほっとするひとときを。
            </h2>
            <p className="mt-4 text-[#FFF8E1]/70 text-sm md:text-base leading-relaxed">
              ご予約・お問い合わせはお電話またはWEB予約をご利用ください。
            </p>

            {/* CTAボタン */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#reservation"
                className="inline-flex items-center justify-center rounded-full bg-[#E64A19] text-white px-8 py-4 text-base font-bold hover:bg-[#D84315] transition shadow-lg"
              >
                予約する
              </a>
              <a
                href="tel:000-0000-0000"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#FFF8E1]/40 text-[#FFF8E1] px-8 py-4 text-base font-bold hover:bg-[#FFF8E1]/10 transition"
              >
                電話する
              </a>
            </div>

            <p className="mt-6 text-sm text-[#FFF8E1]/50">
              000-0000-0000（営業時間内）
            </p>
            <p className="mt-2 text-xs text-[#FFF8E1]/40">
              平日 8:00-20:00 / 休日 9:00-20:00
            </p>
          </div>
        </MotionSection>
      </main>

      {/* ============================
          フッター
         ============================ */}
      <footer className="py-10 bg-[#3E2723] text-center border-t border-[#FFF8E1]/10">
        <p
          className="text-lg font-bold text-[#FFF8E1] mb-2"
          style={headingFont}
        >
          Cafe Lumo
        </p>
        <p className="text-sm text-[#FFF8E1]/60">
          渋谷の片隅、あなたのための静かな隠れ家
        </p>
        <p className="mt-4 text-xs text-[#FFF8E1]/40">
          【注意】本サイトは架空のカフェ「Cafe Lumo」のデモLPです。実在の店舗ではありません。
        </p>
        <p className="mt-2 text-xs text-[#FFF8E1]/40">
          &copy; 2026 Cafe Lumo
        </p>
      </footer>

      {/* ============================
          モバイル固定フッター（3ボタン: 電話/予約/地図）
          md以上では非表示
         ============================ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#3E2723]/95 backdrop-blur-md border-t border-[#FFF8E1]/10">
        <div className="grid grid-cols-3 h-14">
          <a
            href="tel:000-0000-0000"
            className="flex flex-col items-center justify-center text-[#FFF8E1]/80 hover:text-[#F4A460] transition"
          >
            <span className="text-base">📞</span>
            <span className="text-[10px] mt-0.5">電話</span>
          </a>
          <a
            href="#reservation"
            className="flex flex-col items-center justify-center bg-[#E64A19] text-white"
          >
            <span className="text-base">📅</span>
            <span className="text-[10px] mt-0.5 font-bold">予約</span>
          </a>
          <a
            href="#map"
            className="flex flex-col items-center justify-center text-[#FFF8E1]/80 hover:text-[#F4A460] transition"
          >
            <span className="text-base">📍</span>
            <span className="text-[10px] mt-0.5">地図</span>
          </a>
        </div>
      </div>

      {/* ============================
          フローティングCTA（デスクトップ右下、モバイルでは非表示）
         ============================ */}
      <a
        href="#reservation"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center justify-center rounded-full bg-[#E64A19] text-white px-6 py-3 text-sm font-bold shadow-xl hover:bg-[#D84315] transition hover:shadow-2xl"
      >
        予約する
      </a>
    </div>
  );
}

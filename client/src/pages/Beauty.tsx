import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

// ============================================================
// デモ用メール予約リンク
// ============================================================
const MAIL_HREF = `mailto:mst_t3.01@outlook.jp?subject=${encodeURIComponent(
  "無料カウンセリング予約（Salon de Fleurデモ経由）"
)}&body=${encodeURIComponent(
  "ご希望のメニュー：\nご希望の日時：\n気になるお悩み：\n"
)}`;

// ============================================================
// LINE相談リンク（デモ用プレースホルダー）
// ============================================================
const LINE_HREF = "#line-demo";

// ============================================================
// フォント定数
// ============================================================
const serifFont = "'Noto Serif JP', serif";
const sansFont = "'Noto Sans JP', sans-serif";

// ============================================================
// アニメーション共通設定
// ============================================================
const sectionMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.15 },
};

// ============================================================
// メインコンポーネント
// ============================================================
export default function Beauty() {
  return (
    <div
      className="min-h-screen bg-[#FFFAF8] text-[#3D2B2B]"
      style={{ fontFamily: sansFont }}
    >
      {/* 固定ヘッダー */}
      <FixedHeader />

      <main>
        {/* セクション1: ファーストビュー */}
        <HeroSection />

        {/* セクション2: お悩み共感 */}
        <ConcernsSection />

        {/* セクション3: 選ばれる理由 */}
        <WhyChosenSection />

        {/* セクション4: ビフォーアフター */}
        <BeforeAfterSection />

        {/* セクション5: スタッフ紹介 */}
        <StaffSection />

        {/* セクション6: お客様の声 */}
        <ReviewsSection />

        {/* セクション7: メニュー・料金 */}
        <MenuPricingSection />

        {/* セクション8: ご来店の流れ */}
        <VisitFlowSection />

        {/* セクション9: サロンの雰囲気 */}
        <GallerySection />

        {/* セクション10: よくある質問 */}
        <FaqSection />

        {/* セクション11: アクセス */}
        <AccessSection />

        {/* セクション12: 最終CTA */}
        <FinalCtaSection />
      </main>

      {/* フローティングCTA（右下） */}
      <FloatingCta />

      {/* フッター */}
      <Footer />
    </div>
  );
}

// ============================================================
// 固定ヘッダー
// ============================================================
const FixedHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF8]/90 backdrop-blur-md border-b border-[#C9A84C]/20">
    <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
      {/* サロン名 */}
      <span
        className="text-xl tracking-widest text-[#3D2B2B]"
        style={{ fontFamily: serifFont }}
      >
        Salon de Fleur
      </span>

      {/* ヘッダーCTAボタン */}
      <a
        href={MAIL_HREF}
        className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-[#C4748A] text-white hover:opacity-90 transition-opacity"
      >
        ご予約はこちら
      </a>
    </div>
  </header>
);

// ============================================================
// セクション1: ファーストビュー（ヒーロー）
// ============================================================
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
    {/* 背景画像 + ウォームオーバーレイ */}
    <div className="absolute inset-0">
      <img
        src="/demo/beauty/hero.png"
        alt="Salon de Fleur イメージ（架空）"
        className="w-full h-full object-cover"
        loading="eager"
      />
      {/* ウォーム系グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3D2B2B]/60 via-[#3D2B2B]/40 to-[#3D2B2B]/70" />
    </div>

    {/* コンテンツ */}
    <motion.div
      className="relative z-10 max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* デモバッジ */}
      <span className="inline-block bg-[#C9A84C]/80 text-white text-xs font-semibold tracking-widest px-5 py-1.5 rounded-full mb-8 uppercase">
        Demo - 架空のサロンLPです
      </span>

      {/* キャッチコピー */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide"
        style={{ fontFamily: serifFont }}
      >
        あなたらしい美しさを、
        <br />
        引き出す時間。
      </h1>

      {/* サブコピー */}
      <p className="mt-6 text-white/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
        完全個室のプライベート空間で、
        <br className="hidden sm:block" />
        あなただけのオーダーメイド施術を。
      </p>

      {/* CTAボタン */}
      <div className="mt-10">
        <motion.a
          href={MAIL_HREF}
          className="inline-flex items-center justify-center bg-[#C4748A] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          無料カウンセリングを予約する
        </motion.a>
      </div>

      {/* 安心テキスト */}
      <p className="mt-5 text-white/70 text-sm">
        ※ 初回カウンセリング無料 ／ 無理な勧誘なし
      </p>

      {/* デモ注意書き */}
      <p className="mt-4 text-white/40 text-xs">
        ※ 本ページは架空のデモです。実在の店舗・人物・団体とは関係ありません。
      </p>
    </motion.div>
  </section>
);

// ============================================================
// セクション2: こんなお悩みありませんか？
// ============================================================
const ConcernsSection = () => {
  // お悩みリスト
  const concerns = [
    "肌のくすみやハリ不足が気になってきた",
    "自分に合うケア方法がわからない",
    "エステに通っても効果が長続きしない",
    "敏感肌で使える化粧品が限られる",
    "忙しくて自分のケアが後回しになっている",
    "大手サロンでは流れ作業のように感じる",
  ];

  return (
    <MotionSection className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl">
        {/* セクション見出し */}
        <SectionHeading>こんなお悩みありませんか？</SectionHeading>

        {/* お悩みリスト */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {concerns.map((concern, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 bg-[#FFFAF8] border border-[#C9A0A0]/15 rounded-xl px-5 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* ローズカラーのチェックマーク */}
              <span className="flex-shrink-0 mt-0.5 text-[#C9A0A0] text-lg">
                &#10003;
              </span>
              <p className="text-sm sm:text-base text-[#3D2B2B] leading-relaxed">
                {concern}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

// ============================================================
// セクション3: 選ばれる理由3点
// ============================================================
const WhyChosenSection = () => {
  // 選ばれる理由データ
  const reasons = [
    {
      num: "01",
      title: "一人ひとりに合わせたオーダーメイド施術",
      desc: "カウンセリングで肌状態を確認し、当日のコンディションに合わせて施術内容を調整。あなただけの特別なケアをお届けします。",
    },
    {
      num: "02",
      title: "完全個室のプライベート空間",
      desc: "1日数名様限定。周りを気にせず、リラックスして過ごせる贅沢なひとときをご提供いたします。",
    },
    {
      num: "03",
      title: "施術後のホームケアまでサポート",
      desc: "施術だけでなく、日々のスキンケアアドバイスもお伝え。サロンに通わない日も美しさをキープできるようお手伝いします。",
    },
  ];

  return (
    <MotionSection className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="mx-auto max-w-4xl">
        {/* セクション見出し */}
        <SectionHeading>Salon de Fleurが選ばれる理由</SectionHeading>

        {/* 理由カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-t-2 border-[#C9A84C]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* 番号 */}
              <span
                className="text-3xl font-bold text-[#C9A84C]/30"
                style={{ fontFamily: serifFont }}
              >
                {r.num}
              </span>
              <h3
                className="text-base sm:text-lg font-bold text-[#3D2B2B] mt-3 mb-3"
                style={{ fontFamily: serifFont }}
              >
                {r.title}
              </h3>
              <p className="text-sm text-[#3D2B2B]/70 leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

// ============================================================
// セクション4: 施術事例（ビフォーアフター）
// ============================================================
const BeforeAfterSection = () => {
  // 施術事例データ（架空）
  const cases = [
    {
      id: 1,
      treatment: "シグネチャー・ハイドレーション",
      desc: "深層保湿ケアで乾燥くすみにアプローチ。6回コースで内側からふっくらうるおう肌へ。",
      comment:
        "乾燥が気にならなくなり、ファンデーションのノリが全然違います。肌を褒められることが増えました。",
      attr: "30代・会社員 K.S様",
    },
    {
      id: 2,
      treatment: "エイジディファイ・リフト",
      desc: "独自のリフトアップ技術でフェイスラインにアプローチ。たるみ・ほうれい線が気になる方に。",
      comment:
        "頬のたるみが気になっていましたが、フェイスラインがすっきり。友人に「若返った？」と言われました。",
      attr: "40代・主婦 M.T様",
    },
    {
      id: 3,
      treatment: "ディスカバリー・フェイシャル",
      desc: "初回体験コース。肌診断と基本フェイシャルで、あなたの肌の可能性を引き出します。",
      comment:
        "初めてのエステでしたが、カウンセリングが丁寧で安心できました。肌がワントーン明るくなった気がします。",
      attr: "20代・学生 A.Y様",
    },
  ];

  return (
    <MotionSection className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl">
        {/* セクション見出し */}
        <SectionHeading>施術事例</SectionHeading>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              className="bg-[#FFFAF8] border border-[#C9A0A0]/15 rounded-2xl p-6 md:p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* ビフォー・アフター画像 */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {/* Before */}
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={`/demo/beauty/before-${c.id}-before.png`}
                    alt="施術前"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* After */}
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={`/demo/beauty/before-${c.id}-after.png`}
                    alt="施術後"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 施術名 */}
              <h3
                className="text-base sm:text-lg font-bold text-[#3D2B2B] mb-1"
                style={{ fontFamily: serifFont }}
              >
                {c.treatment}
              </h3>
              {/* 施術内容 */}
              <p className="text-sm text-[#3D2B2B]/70 mb-4">{c.desc}</p>
              {/* お客様コメント */}
              <div className="bg-white rounded-lg p-4 border border-[#C9A0A0]/10">
                <p className="text-sm text-[#3D2B2B] leading-relaxed italic">
                  「{c.comment}」
                </p>
                <p className="text-xs text-[#3D2B2B]/50 mt-2 text-right">
                  — {c.attr}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 注意書き */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-xs text-[#3D2B2B]/40">
            ※個人の感想であり効果には個人差があります
          </p>
          <p className="text-xs text-[#3D2B2B]/40">
            ※画像は架空のデモです
          </p>
        </div>
      </div>
    </MotionSection>
  );
};

// ============================================================
// セクション5: スタッフ紹介
// ============================================================
const StaffSection = () => (
  <MotionSection className="py-20 md:py-28 bg-[#F5F0E8]">
    <div className="mx-auto max-w-4xl">
      {/* セクション見出し */}
      <SectionHeading>スタッフ紹介</SectionHeading>

      {/* メインスタッフ */}
      <div className="bg-white rounded-2xl border border-[#C9A0A0]/15 p-6 md:p-10 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* プロフィール写真プレースホルダー */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#C9A84C]/20 flex-shrink-0">
            <img
              src="/demo/beauty/staff-1.png"
              alt="スタッフ写真"
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3
              className="text-xl font-bold text-[#3D2B2B]"
              style={{ fontFamily: serifFont }}
            >
              佐藤 あかり
              <span className="text-xs font-normal text-[#3D2B2B]/40 ml-2">
                （架空）
              </span>
            </h3>
            <p className="text-sm text-[#C9A84C] font-medium mt-1">
              オーナーエステティシャン
            </p>

            {/* 資格 */}
            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              <span className="text-xs text-[#3D2B2B]/60 bg-[#F5F0E8] px-3 py-1 rounded-full">
                日本エステティック協会認定（架空）
              </span>
              <span className="text-xs text-[#3D2B2B]/60 bg-[#F5F0E8] px-3 py-1 rounded-full">
                アロマテラピー検定1級（架空）
              </span>
            </div>

            {/* スタッフコメント */}
            <p className="mt-5 text-sm text-[#3D2B2B]/70 leading-relaxed">
              大手エステサロンで10年の経験を積んだ後、「一人ひとりにもっと丁寧に向き合いたい」という想いからSalon
              de
              Fleurを開業しました。お客様の肌悩みに寄り添い、根本からの改善を目指す施術を大切にしています。施術を通じて、お客様が自分自身をもっと好きになれるお手伝いをしたいと考えています。
            </p>
          </div>
        </div>
      </div>

      {/* サブスタッフ */}
      <div className="bg-white rounded-2xl border border-[#C9A0A0]/15 p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-5">
          {/* プロフィール写真プレースホルダー */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#C9A84C]/20 flex-shrink-0">
            <img
              src="/demo/beauty/staff-2.png"
              alt="スタッフ写真"
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>

          <div>
            <h3
              className="text-lg font-bold text-[#3D2B2B]"
              style={{ fontFamily: serifFont }}
            >
              鈴木 はるか
              <span className="text-xs font-normal text-[#3D2B2B]/40 ml-2">
                （架空）
              </span>
            </h3>
            <p className="text-sm text-[#C9A84C] font-medium mt-1">
              エステティシャン
            </p>
          </div>
        </div>
      </div>
    </div>
  </MotionSection>
);

// ============================================================
// セクション6: お客様の声
// ============================================================
const ReviewsSection = () => {
  // お客様の声データ（架空）
  const reviews = [
    {
      id: 1,
      name: "K.S様",
      attr: "20代・IT企業勤務",
      stars: 5,
      text: "初めてのエステで緊張していましたが、丁寧なカウンセリングで安心できました。施術後の肌のもちもち感に感動です！",
    },
    {
      id: 2,
      name: "M.T様",
      attr: "30代・看護師",
      stars: 5,
      text: "他のサロンでは効果を感じられなかったのですが、こちらでは1回目から肌の変化を実感。オーダーメイドの施術というのは本当でした。",
    },
    {
      id: 3,
      name: "A.Y様",
      attr: "30代・主婦",
      stars: 5,
      text: "完全個室でリラックスできるのがありがたいです。育児疲れの肌がみるみる元気になっていくのが嬉しくて、毎月通っています。",
    },
    {
      id: 4,
      name: "R.N様",
      attr: "20代・事務職",
      stars: 5,
      text: "ブライダルプランでお世話になりました。当日は「肌がきれい」とたくさん褒められて、本当に通ってよかったです。",
    },
    {
      id: 5,
      name: "H.I様",
      attr: "40代・自営業",
      stars: 5,
      text: "敏感肌で使える化粧品も限られていましたが、天然由来成分の施術で肌荒れもなく安心して通えています。ホームケアのアドバイスも助かります。",
    },
  ];

  return (
    <MotionSection className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-5xl">
        {/* セクション見出し */}
        <SectionHeading>お客様の声</SectionHeading>
        <p className="text-center text-xs text-[#3D2B2B]/40 -mt-8 mb-12">
          ※架空のサンプルです
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              className="bg-[#FFFAF8] border border-[#C9A0A0]/15 rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* お客様写真プレースホルダー + 情報 */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#C9A84C]/15 flex-shrink-0">
                  <img
                    src={`/demo/beauty/testimonial-${r.id}.png`}
                    alt={`お客様の声${r.id}`}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#3D2B2B]">{r.name}</p>
                  <p className="text-xs text-[#3D2B2B]/50">{r.attr}</p>
                </div>
              </div>

              {/* 星評価（ゴールド） */}
              <p className="text-[#C9A84C] text-sm mb-3 tracking-wider">
                {"★".repeat(r.stars)}
              </p>

              {/* 本文 */}
              <p className="text-sm text-[#3D2B2B] leading-relaxed">
                「{r.text}」
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

// ============================================================
// セクション7: メニュー・料金
// ============================================================
const MenuPricingSection = () => {
  // メニューデータ（架空）
  const menus = [
    {
      name: "【初回限定】ディスカバリー・フェイシャル",
      duration: "60分",
      price: "¥4,980",
      badge: "初回限定",
    },
    {
      name: "シグネチャー・ハイドレーション",
      duration: "75分",
      price: "¥8,800",
      badge: null,
    },
    {
      name: "エイジディファイ・リフト",
      duration: "90分",
      price: "¥13,200",
      badge: null,
    },
    {
      name: "アロマティック・リトリート（ボディ）",
      duration: "90分",
      price: "¥12,000",
      badge: null,
    },
    {
      name: "ブライダル・グロウプラン",
      duration: "120分",
      price: "¥18,000",
      badge: null,
    },
  ];

  return (
    <MotionSection className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="mx-auto max-w-4xl">
        {/* セクション見出し */}
        <SectionHeading>メニュー・料金</SectionHeading>

        {/* メニューリスト */}
        <div className="space-y-3">
          {menus.map((m, i) => (
            <motion.div
              key={i}
              className="bg-white border border-[#C9A0A0]/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <h3
                  className="text-sm sm:text-base font-bold text-[#3D2B2B]"
                  style={{ fontFamily: serifFont }}
                >
                  {m.name}
                </h3>
                {m.badge && (
                  <span className="text-xs font-bold text-white bg-[#C4748A] px-2 py-0.5 rounded-full">
                    {m.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 sm:flex-shrink-0">
                <span className="text-xs text-[#3D2B2B]/50 bg-[#F5F0E8] px-3 py-1 rounded-full">
                  {m.duration}
                </span>
                <span
                  className="text-xl font-bold text-[#C4748A]"
                  style={{ fontFamily: serifFont }}
                >
                  {m.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 注意書き */}
        <p className="mt-6 text-xs text-[#3D2B2B]/40 text-center">
          ※価格はすべて税込です（架空）
        </p>

        {/* ネット予約バッジ */}
        <div className="mt-5 text-center">
          <span className="inline-block bg-[#C4748A] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-sm">
            ネット予約で初回20%OFF
          </span>
        </div>
      </div>
    </MotionSection>
  );
};

// ============================================================
// セクション8: ご来店の流れ
// ============================================================
const VisitFlowSection = () => {
  // ステップデータ
  const steps = [
    { num: "01", title: "ご予約", desc: "Web・LINE・お電話からご予約ください。" },
    {
      num: "02",
      title: "ご来店・カウンセリング",
      desc: "お肌のお悩みやご要望を丁寧にヒアリングいたします。",
    },
    {
      num: "03",
      title: "肌チェック・施術プラン",
      desc: "専用機器で肌状態を確認し、最適なプランをご提案します。",
    },
    {
      num: "04",
      title: "施術",
      desc: "完全個室のプライベート空間で、リラックスしながら施術を受けていただけます。",
    },
    {
      num: "05",
      title: "アフターケア・ホームケア提案",
      desc: "施術後の肌の変化を確認し、日々のスキンケアアドバイスをお伝えします。",
    },
  ];

  return (
    <MotionSection className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl">
        {/* セクション見出し */}
        <SectionHeading>ご来店の流れ</SectionHeading>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative flex items-start gap-5 pb-8 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* 縦線（最後のステップ以外） */}
              {i < steps.length - 1 && (
                <div className="absolute left-[23px] top-12 w-[2px] h-[calc(100%-32px)] bg-[#C9A84C]/20" />
              )}
              {/* ステップ番号 */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center font-bold text-sm z-10"
                style={{ fontFamily: serifFont }}
              >
                {step.num}
              </div>
              <div className="pt-2">
                <h3
                  className="text-base sm:text-lg font-bold text-[#3D2B2B] mb-1"
                  style={{ fontFamily: serifFont }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#3D2B2B]/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

// ============================================================
// セクション9: サロンの雰囲気（ギャラリー）
// ============================================================
const GallerySection = () => (
  <MotionSection className="py-20 md:py-28 bg-[#F5F0E8]">
    <div className="mx-auto max-w-5xl">
      <SectionHeading>サロンの雰囲気</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { src: "/demo/beauty/gallery-1.png", alt: "Salon de Fleur 施術空間（架空）" },
          { src: "/demo/beauty/gallery-2.png", alt: "Salon de Fleur サロン内装（架空）" },
          { src: "/demo/beauty/gallery-3.png", alt: "Salon de Fleur リラックス空間（架空）" },
        ].map((img, i) => (
          <motion.div
            key={i}
            className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-[#3D2B2B]/40">
        ※画像は架空のデモです
      </p>
    </div>
  </MotionSection>
);

// ============================================================
// セクション10: よくある質問（アコーディオンFAQ）
// ============================================================
const FaqSection = () => {
  // FAQデータ
  const faqs = [
    {
      q: "メイクをしたまま来店しても大丈夫ですか？",
      a: "はい、メイクをしたままお越しいただけます。施術前にクレンジングを行いますので、ご安心ください。施術後のメイク直し用のパウダールームもご用意しております。",
    },
    {
      q: "予約方法を教えてください。",
      a: "Webフォーム・LINE・お電話からご予約いただけます。完全予約制となっておりますので、事前のご予約をお願いしております。当日のご予約も空きがあれば承ります。",
    },
    {
      q: "男性でも利用できますか？",
      a: "申し訳ございませんが、現在は女性専用サロンとさせていただいております。男性向けサロンのご紹介も可能ですので、お気軽にお問い合わせください。",
    },
    {
      q: "敏感肌でも施術を受けられますか？",
      a: "はい、敏感肌の方にも安心してお受けいただけるよう、天然由来成分を使用した施術をご用意しております。カウンセリング時に肌状態を確認し、最適な施術をご提案いたします。",
    },
    {
      q: "キャンセルポリシーを教えてください。",
      a: "前日の18時までにご連絡いただければ、キャンセル料はかかりません。当日キャンセル・無断キャンセルの場合は、施術料金の50%をキャンセル料として頂戴しております。",
    },
    {
      q: "初回はどのくらい時間がかかりますか？",
      a: "初回はカウンセリング・肌チェックのお時間を含め、施術時間＋30分程度を目安にお越しください。例えば60分コースの場合、トータル約90分となります。",
    },
  ];

  return (
    <MotionSection className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="mx-auto max-w-3xl">
        {/* セクション見出し */}
        <SectionHeading>よくある質問</SectionHeading>

        {/* FAQアコーディオン */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

// ============================================================
// セクション10: アクセス
// ============================================================
const AccessSection = () => (
  <MotionSection className="py-20 md:py-28 bg-white">
    <div className="mx-auto max-w-4xl">
      {/* セクション見出し */}
      <SectionHeading>アクセス</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* サロン情報 */}
        <div className="bg-[#FFFAF8] border border-[#C9A0A0]/15 rounded-2xl p-6 md:p-8">
          <h3
            className="text-lg font-bold text-[#3D2B2B] mb-5"
            style={{ fontFamily: serifFont }}
          >
            Salon de Fleur
          </h3>
          <div className="space-y-4 text-sm text-[#3D2B2B]/70">
            <div>
              <p className="font-medium text-[#3D2B2B] mb-1">所在地</p>
              <p>東京都渋谷区（架空のエリア）</p>
              <p className="text-xs text-[#3D2B2B]/40 mt-1">
                ※ご予約確定後に詳細をご案内いたします
              </p>
            </div>
            <div>
              <p className="font-medium text-[#3D2B2B] mb-1">営業時間</p>
              <p>10:00〜21:00（最終受付 19:00）</p>
            </div>
            <div>
              <p className="font-medium text-[#3D2B2B] mb-1">定休日</p>
              <p>不定休</p>
            </div>
          </div>
        </div>

        {/* サロン外観・地図プレースホルダー */}
        <div className="space-y-4">
          {/* サロン外観プレースホルダー */}
          <div className="aspect-video rounded-2xl overflow-hidden border border-[#C9A0A0]/15">
            <img
              src="/demo/beauty/interior.png"
              alt="サロン内装"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* 地図プレースホルダー */}
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#F5F0E8] to-[#C9A0A0]/10 border border-[#C9A0A0]/15 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-[#C9A0A0] font-medium">MAP</p>
              <p className="text-xs text-[#C9A0A0]/50 mt-1">
                （地図プレースホルダー）
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MotionSection>
);

// ============================================================
// セクション11: 最終CTA
// ============================================================
const FinalCtaSection = () => (
  <motion.section
    className="py-24 md:py-32 bg-gradient-to-br from-[#C9A0A0]/20 to-[#C4748A]/10"
    {...sectionMotion}
  >
    <div className="mx-auto max-w-3xl text-center px-4 sm:px-6">
      <h2
        className="text-2xl md:text-4xl font-bold text-[#3D2B2B] mb-5 leading-relaxed"
        style={{ fontFamily: serifFont }}
      >
        あなたの肌が変わる、
        <br />
        最初の一歩を。
      </h2>

      {/* CTAボタン群 */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
        {/* 予約CTA */}
        <motion.a
          href={MAIL_HREF}
          className="inline-flex items-center justify-center bg-[#C4748A] text-white font-bold text-base sm:text-lg px-10 py-4 rounded-full shadow-lg w-full sm:w-auto"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          予約する
        </motion.a>

        {/* LINE CTA */}
        <motion.a
          href={LINE_HREF}
          className="inline-flex items-center justify-center bg-[#06C755] text-white font-bold text-base sm:text-lg px-10 py-4 rounded-full shadow-lg w-full sm:w-auto"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          LINEで相談する
        </motion.a>
      </div>

      {/* 安心テキスト */}
      <p className="mt-6 text-[#3D2B2B]/50 text-sm">
        無理な勧誘は一切いたしません
      </p>
    </div>
  </motion.section>
);

// ============================================================
// フローティングCTA（右下固定ボタン）
// ============================================================
const FloatingCta = () => (
  <motion.a
    href={MAIL_HREF}
    className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#C4748A] text-white flex items-center justify-center shadow-lg hover:shadow-xl text-xs font-bold"
    style={{ fontFamily: serifFont }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 0.4 }}
  >
    予約
  </motion.a>
);

// ============================================================
// フッター
// ============================================================
const Footer = () => (
  <footer className="bg-[#3D2B2B] text-white/60 py-10">
    <div className="container mx-auto px-6 text-center">
      {/* サロン名 */}
      <h3
        className="text-lg font-bold text-[#C9A84C] mb-4"
        style={{ fontFamily: serifFont }}
      >
        Salon de Fleur
      </h3>

      {/* デモ注意書き */}
      <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 inline-block mb-6">
        <p className="text-xs leading-relaxed">
          ※ 本ページは架空のデモ（ポートフォリオ）です。
          <br />
          実在の店舗・人物・団体とは一切関係ありません。
          <br />
          掲載されている料金・実績・お客様の声はすべて架空の設定です。
        </p>
      </div>

      <p className="text-xs text-white/30">
        &copy; 2026 Salon de Fleur. All rights reserved.
      </p>
    </div>
  </footer>
);

// ============================================================
// 共通コンポーネント
// ============================================================

/** セクション見出し（ゴールドライン付き） */
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div className="text-center mb-14">
      <h2
        className="text-2xl md:text-4xl font-bold text-[#3D2B2B]"
        style={{ fontFamily: serifFont }}
      >
        {children}
      </h2>
      <div className="mt-4 w-16 h-[2px] bg-[#C9A84C] mx-auto" />
    </div>
  );
}

/** セクションラッパー（framer-motionアニメーション付き） */
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
      className={`px-4 sm:px-6 ${className}`}
      {...sectionMotion}
    >
      {children}
    </motion.section>
  );
}

/** FAQアコーディオンアイテム（useStateで開閉制御） */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  // 開閉状態をuseStateで管理
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#C9A0A0]/15 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* 質問ヘッダー（クリックで開閉） */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-[#F5F0E8]/50 transition-colors"
      >
        <span className="text-sm sm:text-base font-bold text-[#3D2B2B] pr-4">
          Q. {question}
        </span>
        {/* 開閉アイコン */}
        <span
          className={`flex-shrink-0 text-[#C9A84C] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* 回答（開閉アニメーション） */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5">
          <p className="text-sm text-[#3D2B2B]/60 leading-relaxed">
            A. {answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

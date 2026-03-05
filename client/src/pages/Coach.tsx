import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties, ReactNode, SVGProps } from "react";
import React from "react";

// ============================================================
// アニメーション Variants（Beauty.tsx と共通の定義）
// ============================================================
const sectionMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

// ============================================================
// テーマカラー: ネイビー × ゴールド
// Beauty.tsx の beautyTheme と同じ形式で定義
// ============================================================
const coachTheme = {
  "--background": "214 55% 12%",      // #0d1b2e ネイビーディープ
  "--foreground": "40 30% 93%",       // #f5f2ec オフホワイト
  "--card": "214 50% 17%",            // #162540 ネイビーミッド
  "--card-foreground": "40 30% 93%",
  "--popover": "214 55% 12%",
  "--popover-foreground": "40 30% 93%",
  "--primary": "40 55% 54%",          // #c9a84c ゴールド
  "--primary-foreground": "214 55% 12%",
  "--secondary": "214 45% 22%",       // #1e3356 ネイビーライト
  "--secondary-foreground": "40 30% 93%",
  "--muted": "214 45% 19%",           // #1a2d47 ネイビーカード
  "--muted-foreground": "35 15% 65%", // #b0a898 テキストサブ
  "--accent": "214 45% 22%",
  "--accent-foreground": "40 30% 93%",
  "--destructive": "0 62% 50%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "40 55% 54% / 0.25",    // ゴールド 25%
  "--input": "214 45% 22%",
  "--ring": "40 55% 54%",
} as CSSProperties;

// ============================================================
// メインコンポーネント
// ============================================================
export default function Coach() {
  return (
    <div
  className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
  style={coachTheme}
>

      <Header />
      <main>
        <HeroSection />
        <EmpathySection />
        <ServiceSection />
        <PricingSection />
        <ProfileSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

// ============================================================
// ヘッダー
// ============================================================
const Header = () => (
  <header className="sticky top-0 bg-background/70 backdrop-blur-md z-50 border-b border-border">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      {/* wouter の Link コンポーネントで一覧ページへ戻る */}
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← 提供内容一覧へ戻る
      </Link>
      <a
        href="#cta"
        className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]/50"
      >
        無料相談を予約する
      </a>
    </div>
  </header>
);

// ============================================================
// 1. ファーストビュー（Hero）
// useScroll / useTransform で視差スクロール
// ============================================================
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  // スクロールに合わせて背景を拡大・フェードアウト
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 背景: グラデーション + 幾何学 SVG */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        {/* グラデーション背景 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(30,51,86,0.7) 0%, transparent 60%)," +
              "radial-gradient(ellipse 50% 80% at 10% 80%, rgba(201,168,76,0.06) 0%, transparent 50%)," +
              "linear-gradient(160deg, #0d1b2e 0%, #162540 50%, #0d1b2e 100%)",
          }}
        />
        {/* 幾何学模様（大）*/}
        <GeoLarge className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.07] hidden md:block" />
        {/* 幾何学模様（小・アクセント）*/}
        <GeoSmall className="absolute right-[60px] top-1/2 -translate-y-1/2 w-[360px] h-[360px] opacity-[0.12] hidden md:block" />
      </motion.div>

      {/* コンテンツ */}
      <motion.div
        className="relative z-10 container mx-auto px-6 pt-36 pb-24 max-w-[860px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* バッジ */}
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[hsl(var(--primary))] border border-border px-4 py-1.5 rounded-full mb-9">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] flex-shrink-0" />
          Career Coaching — Online Session
        </div>

        {/* キャッチコピー */}
        <h1 className="text-[clamp(34px,6vw,58px)] text-white leading-[1.35] tracking-[0.02em] mb-7 font-semibold" style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}>
          あなたのキャリアに、<br />
          <span className="text-[hsl(var(--primary))]">正直に向き合う</span>時間を。
        </h1>

        {/* サブコピー */}
        <p className="text-[clamp(15px,2vw,17px)] text-muted-foreground leading-[1.9] mb-12 max-w-[480px]">
          20代の転職・キャリア相談に特化した<br />
          オンライン個別コーチング
        </p>

        {/* CTAボタン */}
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="#cta"
            className="inline-block bg-gradient-to-br from-[hsl(var(--primary))] to-[#e2c97e] text-[hsl(var(--primary-foreground))] font-bold text-[15px] tracking-[0.06em] px-11 py-[18px] rounded-[4px] no-underline"
            whileHover={{ opacity: 0.88, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            無料相談を予約する
          </motion.a>
          <motion.a
            href="#service"
            className="inline-block bg-transparent text-[#e2c97e] font-semibold text-[14px] tracking-[0.06em] px-10 py-[16px] rounded-[4px] border border-[hsl(var(--primary))] no-underline"
            whileHover={{ backgroundColor: "rgba(201,168,76,0.12)" }}
            transition={{ duration: 0.2 }}
          >
            サービスを見る
          </motion.a>
        </div>

        <p className="mt-10 text-xs text-muted-foreground/70">
          ※無料相談は30分・完全オンラインで実施します
        </p>
      </motion.div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground/60 pointer-events-none" aria-hidden="true">
        <ScrollLine />
        <span>SCROLL</span>
      </div>
    </section>
  );
};

// ============================================================
// 2. 共感セクション（Empathy）
// ============================================================
const EmpathySection = () => (
  <MotionSection id="empathy" className="py-24 md:py-28 bg-card border-y border-border">
    {/* セクションラベル */}
    <SectionLabel>YOUR CONCERNS</SectionLabel>
    <h2 className="section-heading">
      こんなこと、<br />感じていませんか？
    </h2>
    <GoldLine />

    {/* 悩みカードグリッド */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
      {[
        "転職したいけど、\n何から始めればいいかわからない",
        "自分の市場価値がどれくらいか不安",
        "上司や友人には\n相談しにくいことがある",
        "「このままでいいのか」と\nモヤモヤしている",
      ].map((text, i) => (
        <motion.div
          key={i}
          className="relative bg-background/70 border border-border rounded-lg px-9 py-7 pl-9 hover:border-[hsl(var(--primary))]/40 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* 左アクセントライン */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 w-[3px] h-7 bg-[hsl(var(--primary))] rounded-full" />
          <p className="text-[15px] text-foreground/90 leading-[1.75] whitespace-pre-line">
            {text}
          </p>
        </motion.div>
      ))}
    </div>

    {/* 締めメッセージ */}
    <motion.div
      className="mt-12 px-10 py-9 bg-[hsl(var(--primary))]/[0.06] border border-border rounded-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p
        className="text-[17px] text-foreground/95 leading-[1.9]"
        style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}
      >
        そのモヤモヤは、あなたが真剣にキャリアと向き合っている証拠です。<br />
        一人で抱え込まず、まず言葉にしてみませんか。
      </p>
    </motion.div>
  </MotionSection>
);

// ============================================================
// 3. サービス紹介（Service）
// ============================================================
const ServiceSection = () => (
  <MotionSection id="service" className="py-24 md:py-28">
    <SectionLabel>SERVICE</SectionLabel>
    <h2 className="section-heading">サービス紹介</h2>
    <GoldLine />

    {/* サービス名 */}
    <div className="mb-14">
      <h3
        className="text-[clamp(22px,3.5vw,30px)] text-[#e2c97e] tracking-[0.08em] mb-3"
        style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}
      >
        キャリア羅針盤セッション
      </h3>
      <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground before:content-[''] before:w-5 before:h-px before:bg-[hsl(var(--primary))]">
        60分 / オンライン個別セッション
      </span>
    </div>

    {/* 特徴リスト */}
    <div className="space-y-6">
      {[
        {
          num: "01",
          title: "判断ではなく、整理。あなたの言葉を引き出します",
          desc: "「こうすべき」という答えを押しつけるのではなく、あなたの中にある想いや価値観を丁寧に整理するお手伝いをします。問いかけを通じて、自分自身の軸を見つけていきましょう。",
        },
        {
          num: "02",
          title: "元営業職のリアルな視点でフィードバック",
          desc: "200社以上の企業と関わってきた現役営業職としての経験から、転職市場のリアルや、企業が求める人物像について具体的なフィードバックをお伝えします。",
        },
        {
          num: "03",
          title: "セッション後に行動メモを送付",
          desc: "セッション終了後、話し合った内容をもとに「次の一歩」をまとめた行動メモをお送りします。セッションの内容を振り返り、具体的なアクションに繋げていただけます。",
        },
      ].map((item, i) => (
        <FeatureItem key={i} num={item.num} title={item.title} desc={item.desc} delay={i * 0.1} />
      ))}
    </div>
  </MotionSection>
);

// ============================================================
// 4. 料金プラン（Pricing）
// ============================================================
const PricingSection = () => (
  <MotionSection id="pricing" className="py-24 md:py-28 bg-card border-y border-border">
    <SectionLabel>PRICING</SectionLabel>
    <h2 className="section-heading">料金プラン</h2>
    <GoldLine />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
      <PricingCard
        name="初回体験セッション"
        price="5,000"
        duration="60分 / 1回"
        desc="はじめての方向けの体験プランです。コーチングの雰囲気を確かめながら、キャリアの悩みを整理していただけます。"
      />
      <PricingCard
        name="単発セッション"
        price="15,000"
        duration="60分 / 1回"
        desc="特定のテーマに集中して取り組みたい方に。転職活動の方向性、自己分析、面接対策など、ご要望に合わせて対応します。"
        featured
      />
      <PricingCard
        name="月3回コース"
        price="39,000"
        duration="60分 × 3回 / 月"
        desc="継続的にサポートを受けたい方向けのコースです。定期的なセッションで、着実にキャリアの変化を実感できます。"
      />
    </div>

    <p className="mt-8 text-sm text-muted-foreground text-center leading-relaxed">
      ※すべての料金は税込表示です（架空の料金設定です）<br />
      ※お支払い方法・詳細はお問い合わせください
    </p>
  </MotionSection>
);

// ============================================================
// 5. コーチプロフィール（Profile）
// SVGアバターをそのまま保持
// ============================================================
const ProfileSection = () => (
  <MotionSection id="profile" className="py-24 md:py-28">
    <SectionLabel>COACH PROFILE</SectionLabel>
    <h2 className="section-heading">コーチ紹介</h2>
    <GoldLine />

    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 items-start mt-4">
      {/* SVGアバター（Unsplash代替・そのまま保持）*/}
      <div className="w-[240px] h-[240px] mx-auto md:mx-0 flex-shrink-0">
        <AvatarSvg />
      </div>

      {/* テキストブロック */}
      <div>
        <div className="mb-6">
          <h3
            className="text-[clamp(22px,3vw,28px)] text-foreground tracking-[0.04em] mb-2"
            style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}
          >
            佐藤 みなみ
          </h3>
          <p className="text-sm text-[hsl(var(--primary))] tracking-[0.08em]">
            Career Coach / IT企業 営業職
          </p>
        </div>

        <p className="text-[14px] text-muted-foreground leading-[1.85] mb-6">
          新卒でIT企業に入社し、営業職として200社以上の企業と関わる中で、社員や若手からキャリア相談を受ける機会が増えていきました。「自分のやりたいことがわからない」「転職すべきか迷っている」という声に向き合い続けるうちに、コーチングを体系的に学ぶことを決意。現在は本業と並行しながら、20代のキャリア支援に取り組んでいます。
        </p>

        {/* 資格バッジ */}
        <div className="inline-flex items-center gap-2 text-[13px] text-[hsl(var(--primary))] border border-border rounded-full px-4 py-2 mb-6">
          <DiamondIcon className="w-3 h-3" />
          国際コーチング連盟（ICF）認定資格取得（架空）
        </div>

        {/* 引用 */}
        <blockquote
          className="border-l-2 border-[hsl(var(--primary))] pl-5 py-1 text-[15px] text-foreground/90 leading-[1.9]"
          style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}
        >
          「正解を教えるのではなく、<br />
          あなた自身が答えを見つける場所を作りたい」
        </blockquote>
      </div>
    </div>
  </MotionSection>
);

// ============================================================
// 6. お客様の声（Testimonials）
// ============================================================
const TestimonialsSection = () => (
  <MotionSection id="testimonials" className="py-24 md:py-28 bg-card border-y border-border">
    <SectionLabel>TESTIMONIALS</SectionLabel>
    <h2 className="section-heading">ご利用いただいた方の声</h2>
    <GoldLine />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
      <TestimonialCard
        text="自分が本当にやりたいことが見えてきた気がします"
        author="20代女性・メーカー勤務"
      />
      <TestimonialCard
        text="転職エージェントでは聞けない本音を話せました"
        author="25歳男性・営業職"
      />
      <TestimonialCard
        text="セッション後、すぐに行動に移せました"
        author="28歳女性・事務職"
      />
    </div>
  </MotionSection>
);

// ============================================================
// 7. よくある質問（FAQ）
// details タグの FaqItem コンポーネントに統一（Beauty.tsx 準拠）
// ============================================================
const FaqSection = () => (
  <MotionSection id="faq" className="py-24 md:py-28">
    <SectionLabel>FAQ</SectionLabel>
    <h2 className="section-heading">よくある質問</h2>
    <GoldLine />

    <div className="max-w-3xl mx-auto space-y-6 mt-4">
      <FaqItem
        question="オンラインでの実施方法は？"
        answer="ZoomまたはGoogle Meetを使用してオンラインで実施します。ご予約後に接続URLをお送りします。スマートフォン・タブレット・PCいずれからでもご参加いただけます。安定したインターネット環境をご用意いただけると、よりスムーズにセッションを進められます。"
      />
      <FaqItem
        question="コーチングとカウンセリングの違いは？"
        answer="カウンセリングは過去の経験や心理的な問題を扱うことが多いのに対し、コーチングは現在から未来に向けて「どうなりたいか」「何をするか」にフォーカスします。キャリア羅針盤セッションでは、あなたの目標や価値観を引き出し、具体的な行動につなげることを目的としています。"
      />
      <FaqItem
        question="転職経験がなくても相談できますか？"
        answer="もちろんです。「転職を検討しているが、まだ決めていない」「今の仕事を続けるべきか迷っている」という段階からでもご相談いただけます。転職の是非を判断するのではなく、あなた自身が納得のいく選択ができるようにサポートします。"
      />
      <FaqItem
        question="1回だけの利用は可能ですか？"
        answer="はい、単発でのご利用も可能です。「初回体験セッション（5,000円）」または「単発セッション（15,000円）」からお選びいただけます。まずは1回試してみて、継続するかどうかをご判断いただければと思います。"
      />
      <FaqItem
        question="どんな人が多く利用していますか？"
        answer="20代の会社員の方が中心です。「転職を考えているが一歩踏み出せない」「自分のやりたいことが見つからない」「キャリアの方向性を整理したい」といったご相談が多くなっています。業種・職種は問わず、幅広い方にご利用いただいています。"
      />
    </div>
  </MotionSection>
);

// ============================================================
// 8. 最終 CTA
// ============================================================
const CtaSection = () => (
  <MotionSection
    id="cta"
    className="py-24 md:py-28 text-center relative overflow-hidden border-t border-border"
    style={{
      background: "linear-gradient(160deg, #162540 0%, #0d1b2e 60%, #1a2d47 100%)",
    }}
  >
    {/* 幾何学装飾 SVG（そのまま保持）*/}
    <CtaGeo className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none" />

    <div className="relative z-10">
      <SectionLabel>FREE CONSULTATION</SectionLabel>
      <h2
        className="text-[clamp(30px,5vw,48px)] text-white mb-5 font-semibold"
        style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}
      >
        まず、話してみませんか。
      </h2>
      <p className="text-[15px] text-muted-foreground mb-12 flex items-center justify-center gap-4">
        <span className="w-10 h-px bg-border" />
        無料相談は30分・完全オンライン
        <span className="w-10 h-px bg-border" />
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <motion.a
          href="#"
          className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-br from-[hsl(var(--primary))] to-[#e2c97e] text-[hsl(var(--primary-foreground))] font-bold text-[15px] tracking-[0.06em] px-11 py-[18px] rounded-[4px] no-underline"
          whileHover={{ opacity: 0.88, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          無料相談を予約する
        </motion.a>
        <motion.a
          href="#faq"
          className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-[#e2c97e] font-semibold text-[14px] tracking-[0.06em] px-10 py-[16px] rounded-[4px] border border-[hsl(var(--primary))] no-underline"
          whileHover={{ backgroundColor: "rgba(201,168,76,0.12)" }}
          transition={{ duration: 0.2 }}
        >
          よくある質問を見る
        </motion.a>
      </div>

      <p className="mt-7 text-xs text-muted-foreground/60">
        ※本ページは架空のデモです。予約フォームは実装されていません。
      </p>
    </div>
  </MotionSection>
);

// ============================================================
// フッター
// ============================================================
const Footer = () => (
  <footer className="text-center py-12 border-t border-border bg-background">
    <p
      className="text-[18px] text-foreground tracking-[0.1em] mb-4"
      style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}
    >
      佐藤みなみ <span className="text-[hsl(var(--primary))]">Coaching</span>
    </p>
    <p className="text-xs text-muted-foreground tracking-[0.1em] mb-8">
      キャリア羅針盤セッション — Online Career Coaching
    </p>
    <div className="w-10 h-px bg-border mx-auto mb-6" />
    <p className="text-xs text-muted-foreground bg-[hsl(var(--primary))]/[0.05] border border-[hsl(var(--primary))]/10 rounded px-5 py-3 inline-block leading-[1.7] mb-6">
      ※本ページは架空のデモです。実在の人物・団体とは関係ありません。<br />
      掲載されている料金・実績・資格はすべて架空の設定です。
    </p>
    <p className="text-[11px] text-muted-foreground">
      © 2025 Demo Portfolio. All rights reserved.
    </p>
  </footer>
);

// ============================================================
// 共通コンポーネント
// ============================================================

/**
 * MotionSection: Beauty.tsx と同じ構造
 * framer-motion の sectionMotion を適用したセクションラッパー
 */
function MotionSection({
  children,
  className = "",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.section
      id={id}
      className={`container mx-auto px-6 ${className}`}
      style={style}
      {...sectionMotion}
    >
      {children}
    </motion.section>
  );
}

/** セクションラベル（英字・小文字・ゴールド枠） */
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-[hsl(var(--primary))] border border-border px-3.5 py-1 rounded-full mb-5">
      {children}
    </span>
  );
}

/** セクション見出し下のゴールドライン */
function GoldLine() {
  return <div className="w-10 h-0.5 bg-[hsl(var(--primary))] mt-4 mb-10" />;
}

/** サービス特徴アイテム */
function FeatureItem({
  num,
  title,
  desc,
  delay = 0,
}: {
  num: string;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="grid grid-cols-[56px_1fr] gap-6 items-start p-8 bg-muted border border-border rounded-lg hover:border-[hsl(var(--primary))]/35 hover:translate-x-1 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span
        className="text-[28px] text-[hsl(var(--primary))]/70 leading-none pt-1"
        style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}
      >
        {num}
      </span>
      <div>
        <h3 className="text-[17px] text-foreground font-bold mb-2.5">{title}</h3>
        <p className="text-[14px] text-muted-foreground leading-[1.85]">{desc}</p>
      </div>
    </motion.div>
  );
}

/** 料金カード */
function PricingCard({
  name,
  price,
  duration,
  desc,
  featured = false,
}: {
  name: string;
  price: string;
  duration: string;
  desc: string;
  featured?: boolean;
}) {
  return (
    <motion.div
      className={`relative text-center px-7 py-9 rounded-[10px] border transition-all ${
        featured
          ? "border-[hsl(var(--primary))] bg-gradient-to-br from-[#1e3356] to-[#162540]"
          : "border-border bg-muted hover:border-[hsl(var(--primary))]/40 hover:-translate-y-1"
      }`}
      whileHover={featured ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
    >
      {/* 人気プランバッジ */}
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] text-[11px] font-bold tracking-[0.1em] px-4 py-1 rounded-full whitespace-nowrap">
          人気プラン
        </span>
      )}
      <p className="text-[14px] text-muted-foreground tracking-[0.1em] mb-5">{name}</p>
      <p
        className="text-[clamp(30px,4vw,38px)] text-foreground tracking-[-0.02em] mb-1"
        style={{ fontFamily: "'Hiragino Mincho ProN','Yu Mincho',serif" }}
      >
        {price}
        <span className="text-[16px] ml-0.5">円</span>
      </p>
      <p className="text-[13px] text-muted-foreground mb-5">{duration}</p>
      <div className="w-full h-px bg-border mb-5" />
      <p className="text-[13px] text-muted-foreground leading-[1.85] text-left">{desc}</p>
    </motion.div>
  );
}

/** お客様の声カード（Beauty.tsx の TestimonialCard に準拠） */
function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <motion.div
      className="bg-background/40 backdrop-blur p-6 rounded-lg border border-border"
      whileHover={{ y: -5, boxShadow: "0 8px 15px hsla(var(--primary), 0.04)" }}
    >
      {/* 引用符 */}
      <div
        className="text-[28px] text-[hsl(var(--primary))]/40 leading-none mb-3"
        style={{ fontFamily: "Georgia, serif" }}
        aria-hidden="true"
      >
        "
      </div>
      <p className="text-muted-foreground leading-relaxed mb-4">"{text}"</p>
      {/* 星評価 */}
      <p className="text-[hsl(var(--primary))] text-sm mb-2">★★★★★</p>
      <p className="text-right font-bold text-sm text-foreground/90">{author}</p>
    </motion.div>
  );
}

/**
 * FaqItem: Beauty.tsx と同じ details タグ構造
 * ChevronDown アイコンは group-open で回転
 */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border-b border-border pb-4 group">
      <summary className="font-bold cursor-pointer flex justify-between items-center list-none py-2">
        <span>{question}</span>
        <ChevronDownIcon className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
      </summary>
      <p className="mt-3 text-muted-foreground leading-relaxed text-[14px]">{answer}</p>
    </details>
  );
}

// ============================================================
// SVG コンポーネント（そのまま保持）
// ============================================================

/** スクロールインジケーターのアニメーションライン */
function ScrollLine() {
  return (
    <motion.div
      className="w-px h-12 bg-gradient-to-b from-[hsl(var(--primary))] to-transparent"
      animate={{ opacity: [0.3, 1, 0.3], scaleY: [1, 0.6, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** ヒーロー幾何学模様（大）*/
function GeoLarge({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="260" cy="260" r="240" stroke="#c9a84c" strokeWidth="1" />
      <circle cx="260" cy="260" r="180" stroke="#c9a84c" strokeWidth="0.8" />
      <circle cx="260" cy="260" r="120" stroke="#c9a84c" strokeWidth="0.6" />
      <line x1="20" y1="260" x2="500" y2="260" stroke="#c9a84c" strokeWidth="0.5" />
      <line x1="260" y1="20" x2="260" y2="500" stroke="#c9a84c" strokeWidth="0.5" />
      <line x1="90" y1="90" x2="430" y2="430" stroke="#c9a84c" strokeWidth="0.4" />
      <line x1="430" y1="90" x2="90" y2="430" stroke="#c9a84c" strokeWidth="0.4" />
      <polygon points="260,40 460,380 60,380" stroke="#c9a84c" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

/** ヒーロー幾何学模様（小・アクセント）*/
function GeoSmall({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="40" y="40" width="280" height="280" stroke="#c9a84c" strokeWidth="1" transform="rotate(15 180 180)" />
      <rect x="80" y="80" width="200" height="200" stroke="#c9a84c" strokeWidth="0.7" transform="rotate(30 180 180)" />
      <rect x="120" y="120" width="120" height="120" stroke="#c9a84c" strokeWidth="0.5" transform="rotate(45 180 180)" />
    </svg>
  );
}

/** CTA セクション幾何学装飾 */
function CtaGeo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="300" cy="300" r="280" stroke="#c9a84c" strokeWidth="1" />
      <circle cx="300" cy="300" r="200" stroke="#c9a84c" strokeWidth="0.7" />
      <circle cx="300" cy="300" r="120" stroke="#c9a84c" strokeWidth="0.5" />
      <polygon points="300,60 520,420 80,420" stroke="#c9a84c" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

/** SVGアバター（Unsplash代替・そのまま保持）*/
function AvatarSvg() {
  return (
    <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="佐藤みなみ プロフィール写真">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3356" />
          <stop offset="100%" stopColor="#0d1b2e" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5d5b0" />
          <stop offset="100%" stopColor="#e8c49a" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2a1a" />
          <stop offset="100%" stopColor="#1a0f0a" />
        </linearGradient>
        <clipPath id="circleClip">
          <circle cx="120" cy="120" r="120" />
        </clipPath>
      </defs>
      <rect width="240" height="240" fill="url(#bgGrad)" />
      {/* 幾何学装飾 */}
      <circle cx="120" cy="120" r="110" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
      <circle cx="120" cy="120" r="90" stroke="#c9a84c" strokeWidth="0.3" opacity="0.2" />
      {/* 体（スーツ）*/}
      <ellipse cx="120" cy="230" rx="70" ry="50" fill="#162540" />
      <rect x="90" y="180" width="60" height="60" fill="#162540" />
      {/* 首 */}
      <rect x="108" y="155" width="24" height="28" rx="4" fill="url(#skinGrad)" />
      {/* 顔 */}
      <ellipse cx="120" cy="140" rx="38" ry="44" fill="url(#skinGrad)" />
      {/* 髪 */}
      <ellipse cx="120" cy="108" rx="40" ry="30" fill="url(#hairGrad)" />
      <ellipse cx="84" cy="130" rx="10" ry="22" fill="url(#hairGrad)" />
      <ellipse cx="156" cy="130" rx="10" ry="22" fill="url(#hairGrad)" />
      <ellipse cx="120" cy="96" rx="38" ry="18" fill="url(#hairGrad)" />
      {/* 目 */}
      <ellipse cx="107" cy="138" rx="5" ry="5.5" fill="#2a1a0a" />
      <ellipse cx="133" cy="138" rx="5" ry="5.5" fill="#2a1a0a" />
      <ellipse cx="108.5" cy="136.5" rx="1.5" ry="1.5" fill="white" opacity="0.8" />
      <ellipse cx="134.5" cy="136.5" rx="1.5" ry="1.5" fill="white" opacity="0.8" />
      {/* 眉 */}
      <path d="M100 130 Q107 127 114 130" stroke="#3a2a1a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M126 130 Q133 127 140 130" stroke="#3a2a1a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* 鼻 */}
      <path d="M118 145 Q120 150 122 145" stroke="#c4a882" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* 口 */}
      <path d="M112 155 Q120 160 128 155" stroke="#c4806a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* ゴールドアクセサリー */}
      <circle cx="82" cy="142" r="3" fill="#c9a84c" />
      <circle cx="158" cy="142" r="3" fill="#c9a84c" />
      <path d="M108 178 Q120 185 132 178" stroke="#c9a84c" strokeWidth="1.2" fill="none" opacity="0.7" />
    </svg>
  );
}

// ============================================================
// SVG アイコン（Beauty.tsx と同じ定義形式）
// ============================================================
const IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
} as const;

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...IconProps} {...props} className={props.className ?? "w-5 h-5"}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const DiamondIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...IconProps} {...props} className={props.className ?? "w-4 h-4"}>
    <polygon points="12 2 22 12 12 22 2 12" />
  </svg>
);

// ============================================================
// section-heading ユーティリティクラス用グローバルスタイル注入
// （Tailwind の任意クラスで代替できない場合のフォールバック）
// ============================================================
// NOTE: プロジェクトの globals.css に以下を追加してください:
//
//   .section-heading {
//     @apply text-[clamp(26px,4vw,36px)] text-foreground mb-4 font-semibold;
//     font-family: 'Hiragino Mincho ProN', 'Yu Mincho', serif;
//     letter-spacing: 0.04em;
//     line-height: 1.45;
//   }
//
// または、下記の <style> タグを index.html に追加するか、
// Tailwind の safelist に追加してください。
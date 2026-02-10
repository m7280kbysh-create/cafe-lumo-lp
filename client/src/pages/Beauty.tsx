import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties, ReactNode, SVGProps } from "react";
import React from "react";

// --- Animation Variants ---
const sectionMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

// --- Theme: Black x Champagne Gold ---
const beautyTheme = {
  "--background": "240 6% 5%", // near-black
  "--foreground": "0 0% 98%",
  "--card": "240 6% 8%",
  "--card-foreground": "0 0% 98%",
  "--popover": "240 6% 5%",
  "--popover-foreground": "0 0% 98%",
  "--primary": "38 70% 72%", // champagne gold
  "--primary-foreground": "240 6% 10%",
  "--secondary": "240 5% 26%",
  "--secondary-foreground": "0 0% 98%",
  "--muted": "240 5% 12%",
  "--muted-foreground": "240 5% 65%",
  "--accent": "240 5% 26%",
  "--accent-foreground": "0 0% 98%",
  "--destructive": "0 62% 50%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "240 6% 16%",
  "--input": "240 6% 16%",
  "--ring": "38 70% 72%",
} as CSSProperties;

// --- Main Component ---
export default function Beauty() {
  return (
    <div className="bg-background text-foreground min-h-screen" style={beautyTheme}>
      <Header />
      <main>
        <HeroSection />
        <StrengthsSection />
        <MenuSection />
        <FlowSection />
        <GallerySection />
        <TestimonialsSection />
        <AccessSection />
        <InfoSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

// --- Page Sections ---

const Header = () => (
  <header className="sticky top-0 bg-background/70 backdrop-blur-md z-50 border-b border-border">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← 提供内容一覧へ戻る
      </Link>
      <a href="#reservation" className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]/50">
        ご予約
      </a>
    </div>
  </header>
);

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center px-6 overflow-hidden">
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <img src="/demo/beauty/hero.png" alt="静かで上質なサロンの内装（架空）" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/80" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[720px] rounded-full bg-[hsl(var(--primary))]/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-[520px] w-[520px] rounded-full bg-fuchsia-400/5 blur-3xl" />
      </motion.div>

      <motion.div className="relative z-10 max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
        <p className="text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] inline-block px-3 py-1 rounded text-xs tracking-wide font-semibold">
          架空サロンのデモ（ポートフォリオ）
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-wide leading-tight text-white">
          静けさが、美を研ぎ澄ます。
        </h1>
        <p className="mt-5 text-white/80 text-lg md:text-xl leading-relaxed">
          肌と心を整える、あなただけのプライベート空間。
            

          上質な静寂のなかで、本来の輝きを取り戻すひとときを。
        </p>
        <a href="#reservation" className="inline-block">
          <motion.div className="mt-10 w-44 h-44 md:w-48 md:h-48 rounded-full text-base md:text-lg font-semibold shadow-lg flex items-center justify-center bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]" whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px hsla(var(--primary), 0.4)" }} whileTap={{ scale: 0.98 }}>
            初回体験を予約
          </motion.div>
        </a>
        <p className="mt-8 text-xs text-white/50">
          ※本ページは架空のデモです。実在の店舗・人物・団体とは関係ありません。
        </p>
      </motion.div>
    </section>
  );
};

const StrengthsSection = () => (
  <MotionSection className="py-20 md:py-28 bg-card border-y border-border">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Salon de Fleurの約束</h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <StrengthCard icon={<LeafIcon />} title="肌が喜ぶ、天然由来" description="厳選した素材のみを使用。肌への負担に配慮しながら、健やかな状態を目指します。" />
      <StrengthCard icon={<UserIcon />} title="あなただけの施術" description="丁寧なカウンセリングをもとに、当日の状態に合わせてプランを調整します。" />
      <StrengthCard icon={<SparklesIcon />} title="五感を満たす静寂" description="一日数名様限定の完全個室。都会の喧騒を忘れ、深くリラックスできる時間を。" />
    </div>
  </MotionSection>
);

const MenuSection = () => (
  <MotionSection className="py-20 md:py-28">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">メニュー & 料金</h2>
    <div className="max-w-4xl mx-auto space-y-8">
      <MenuItem title="【初回限定】ディスカバリー・フェイシャル" duration={60} price={4980} description="初めての方へ。基本のケアで肌の変化を体感。" />
      <MenuItem title="シグネチャー・ハイドレーション" duration={75} price={8800} description="潤いと透明感を目指す、保湿特化のケア。" />
      <MenuItem title="エイジディファイ・リフト" duration={90} price={13200} description="ハリ感を重視した集中メニュー。" />
      <MenuItem title="アロマティック・リトリート（ボディ）" duration={90} price={12000} description="香りを選び、緊張をほどくボディケア。" />
      <MenuItem title="ブライダル・グロウプラン" duration={120} price={18000} description="特別な日のためのトータルケア（架空）。" />
    </div>
  </MotionSection>
);

const FlowSection = () => (
  <MotionSection className="py-20 md:py-28 bg-card border-y border-border">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">施術の流れ</h2>
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
      <FlowStep number="01" title="カウンセリング" description="肌のお悩みや生活リズムを丁寧にお伺いします。" />
      <FlowStep number="02" title="当日のプラン調整" description="状態に合わせ、施術内容を微調整します。" />
      <FlowStep number="03" title="施術" description="静かな個室で、ゆったりとした時間を。" />
      <FlowStep number="04" title="アフター案内" description="ご自宅でのケアのポイントを共有します。" />
    </div>
  </MotionSection>
);

const GallerySection = () => (
  <MotionSection className="py-20 md:py-28">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">空間</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <GalleryImg src="/demo/beauty/gallery-1.png" alt="施術室（架空）" />
      <GalleryImg src="/demo/beauty/gallery-2.png" alt="待合スペース（架空）" />
      <GalleryImg src="/demo/beauty/gallery-3.png" alt="使用製品イメージ（架空）" />
    </div>
  </MotionSection>
);

const TestimonialsSection = () => (
  <MotionSection className="py-20 md:py-28 bg-card border-y border-border">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">お客様の声</h2>
    <p className="text-center text-muted-foreground text-sm mb-12">※これらはサービスの雰囲気を伝えるための架空のサンプルです。</p>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <TestimonialCard name="A.T様（30代）" text="自分だけの時間、という感じがして最高でした。肌も気分も整います。" />
      <TestimonialCard name="M.S様（40代）" text="その日の状態に合わせて提案してくれるのが嬉しい。安心感があります。" />
      <TestimonialCard name="K.Y様（20代）" text="イベント前に必ず。ケア後はメイクがしやすい気がします。" />
      <TestimonialCard name="R.N様（50代）" text="空間も香りも上質。月1のご褒美として通いたい雰囲気。" />
      <TestimonialCard name="E.O様（30代）" text="無理な勧誘がなく、相談しやすい。落ち着いて通えそうです。" />
    </div>
  </MotionSection>
);

const AccessSection = () => (
  <MotionSection className="py-20 md:py-28 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">アクセス</h2>
    <div className="text-lg text-muted-foreground space-y-2">
      <p className="text-foreground font-medium">Salon de Fleur（架空）</p>
      <p>渋谷エリア・プライベートサロン（架空）</p>
      <p>※ご予約確定後に詳細をご案内する想定です</p>
    </div>
  </MotionSection>
);

const InfoSection = () => (
  <MotionSection className="py-20 md:py-28 bg-card border-y border-border">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
      <div>
        <h3 className="text-2xl font-bold mb-4">営業時間</h3>
        <p className="text-muted-foreground">10:00 – 21:00（最終受付 19:00）</p>
        <p className="text-muted-foreground mt-1">不定休（架空）</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">ご予約の目安</h3>
        <p className="text-muted-foreground">土日祝は2週間前、平日は1週間前が目安（架空）。</p>
        <p className="text-muted-foreground mt-1">キャンセル待ちはLINE想定（架空）。</p>
      </div>
    </div>
  </MotionSection>
);

const FaqSection = () => (
  <MotionSection className="py-20 md:py-28">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">よくあるご質問</h2>
    <div className="max-w-3xl mx-auto space-y-6">
      <FaqItem question="メイクをしたまま行っても大丈夫ですか？" answer="問題ありません。必要に応じてクレンジングからご案内する想定です（架空）。" />
      <FaqItem question="予約は必須ですか？" answer="完全予約制の想定です。事前にご予約ください（架空）。" />
      <FaqItem question="支払い方法は？" answer="各種カード/電子マネー対応の想定です（架空）。" />
      <FaqItem question="男性も利用できますか？" answer="女性専用の想定です（架空）。" />
      <FaqItem question="妊娠中でも受けられますか？" answer="体調に配慮したメニューを用意する想定です。事前にご相談ください（架空）。" />
    </div>
  </MotionSection>
);

const CtaSection = () => (
  <MotionSection id="reservation" className="py-20 md:py-28 text-center relative overflow-hidden bg-background border-y border-border">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-[hsl(var(--primary))]/12 blur-3xl" />
      <div className="absolute -bottom-28 -left-28 h-[520px] w-[520px] rounded-full bg-fuchsia-400/6 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
    </div>
    <div className="relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">ご予約・お問い合わせ</h2>
      <p className="max-w-xl mx-auto mb-10 text-muted-foreground">ご新規様も、LINEまたはお電話でお気軽にご連絡ください（架空）。</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a href="https://line.me/R/ti/p/@yourline" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-emerald-600 text-white px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center hover:bg-emerald-700 transition-colors">
          <MessageIcon className="w-6 h-6 mr-3" />LINEで予約する
        </a>
        <a href="tel:000-0000-0000" className="w-full sm:w-auto bg-[hsl(var(--primary ))] text-[hsl(var(--primary-foreground))] px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]/50">
          <PhoneIcon className="w-6 h-6 mr-3" />電話で問い合わせる
        </a>
      </div>
    </div>
  </MotionSection>
);

const Footer = () => (
  <footer className="text-center py-8 border-t border-border">
    <p className="text-xs text-muted-foreground">【注意】本サイトは架空の店舗・サービスを用いたデモ（ポートフォリオ）です。実在の人物・団体とは一切関係ありません。</p>
  </footer>
);

// --- Reusable Components ---

function MotionSection({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <motion.section id={id} className={`container mx-auto px-6 ${className}`} {...sectionMotion}>
      {children}
    </motion.section>
  );
}

function StrengthCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <motion.div className="bg-background/40 backdrop-blur p-8 rounded-lg border border-border text-center" whileHover={{ y: -8, boxShadow: "0 10px 20px hsla(var(--primary), 0.05)" }} transition={{ duration: 0.2 }}>
      <div className="flex justify-center items-center mb-5">
        <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/15 flex items-center justify-center text-[hsl(var(--primary))]">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

function MenuItem({ title, duration, price, description }: { title: string; duration: number; price: number; description:string; }) {
  return (
    <div className="border-b border-border pb-4 transition-all duration-300 hover:border-[hsl(var(--primary))]">
      <div className="flex justify-between items-start gap-6">
        <h4 className="font-bold text-lg max-w-md">{title}</h4>
        <div className="text-right flex-shrink-0">
          <p className="font-bold text-lg whitespace-nowrap">¥{price.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">{duration}分</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-2 max-w-md">{description}</p>
    </div>
  );
}

function FlowStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex items-start">
      <div className="text-4xl font-black text-[hsl(var(--primary))]/25 mr-6">{number}</div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <motion.div className="bg-background/40 backdrop-blur p-6 rounded-lg border border-border" whileHover={{ y: -5, boxShadow: "0 8px 15px hsla(var(--primary), 0.04)" }}>
      <p className="text-muted-foreground mb-4">“{text}”</p>
      <p className="text-right font-bold text-sm text-foreground/90">{name}</p>
    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border-b border-border pb-4 group">
      <summary className="font-bold cursor-pointer flex justify-between items-center list-none py-2">
        <span>{question}</span>
        <ChevronDownIcon className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
      </summary>
      <p className="mt-3 text-muted-foreground leading-relaxed">{answer}</p>
    </details>
  );
}

function GalleryImg({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div className="relative aspect-square rounded-lg overflow-hidden border border-border bg-card" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 ring-1 ring-inset ring-border/50"></div>
    </motion.div>
  );
}

// --- SVG Icons ---
const IconProps = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" } as const;
const LeafIcon = (props: SVGProps<SVGSVGElement> ) => <svg {...IconProps} {...props} className={props.className ?? "w-8 h-8"}><path d="M11 20A7 7 0 0 1 4 13V8a7.99 7.99 0 0 1 14 0v5a7 7 0 0 1-7 7z" /><path d="M12 18c3 0 5-2 5-5v-1" /></svg>;
const UserIcon = (props: SVGProps<SVGSVGElement>) => <svg {...IconProps} {...props} className={props.className ?? "w-8 h-8"}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const SparklesIcon = (props: SVGProps<SVGSVGElement>) => <svg {...IconProps} {...props} className={props.className ?? "w-8 h-8"}><path d="m12 3-1.9 3.8-4.1.6 3 2.9-.7 4.1 3.7-2 3.7 2-.7-4.1 3-2.9-4.1-.6z" /></svg>;
const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => <svg {...IconProps} {...props} className={props.className ?? "w-5 h-5"}><path d="m6 9 6 6 6-6" /></svg>;
const MessageIcon = (props: SVGProps<SVGSVGElement>) => <svg {...IconProps} {...props} className={props.className ?? "w-6 h-6"}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => <svg {...IconProps} {...props} className={props.className ?? "w-6 h-6"}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;

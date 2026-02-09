// client/src/pages/Beauty.tsx
import { Link } from "wouter";
import { motion } from "framer-motion";
import type { ReactNode, SVGProps } from "react";

const sectionMotion = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

export default function Beauty() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/">
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← 提供内容一覧へ戻る
            </a>
          </Link>

          <a href="#reservation" className="inline-flex">
            <span className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-semibold">
              ご予約
            </span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/demo/beauty/hero.png"
              alt="静かで上質なサロンの内装（架空）"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-background" />
          </div>

          <motion.div
            className="relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <p className="text-white/80 text-sm tracking-wide">架空サロンのデモ（ポートフォリオ）</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-wide leading-tight text-white">
              静けさが、美を研ぎ澄ます。
            </h1>
            <p className="mt-5 text-white/80 text-lg md:text-xl leading-relaxed">
              肌と心を整える、あなただけのプライベート空間。
              <br />
              上質な静寂のなかで、本来の輝きを取り戻すひとときを。
            </p>

            <a href="#reservation" className="inline-flex">
              <motion.div
                className="mt-10 bg-white text-black w-44 h-44 md:w-48 md:h-48 rounded-full text-base md:text-lg font-semibold shadow-lg flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 24px rgba(255,255,255,0.55)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                初回体験を予約
              </motion.div>
            </a>
          </motion.div>
        </section>

        {/* Strengths */}
        <MotionSection className="py-20 md:py-28 bg-card border-y border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Salon de Fleurの約束</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <StrengthCard
              icon={<LeafIcon />}
              title="肌が喜ぶ、天然由来"
              description="厳選した素材のみを使用。肌への負担に配慮しながら、健やかな状態を目指します。"
            />
            <StrengthCard
              icon={<UserIcon />}
              title="あなただけの施術"
              description="丁寧なカウンセリングをもとに、当日の状態に合わせてプランを調整します。"
            />
            <StrengthCard
              icon={<SparklesIcon />}
              title="五感を満たす静寂"
              description="一日数名様限定の完全個室。都会の喧騒を忘れ、深くリラックスできる時間を。"
            />
          </div>
        </MotionSection>

        {/* Menu */}
        <MotionSection className="py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">メニュー & 料金</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <MenuItem
              title="【初回限定】ディスカバリー・フェイシャル"
              duration={60}
              price={4980}
              description="初めての方へ。基本のケアで肌の変化を体感。"
            />
            <MenuItem
              title="シグネチャー・ハイドレーション"
              duration={75}
              price={8800}
              description="潤いと透明感を目指す、保湿特化のケア。"
            />
            <MenuItem
              title="エイジディファイ・リフト"
              duration={90}
              price={13200}
              description="ハリ感を重視した集中メニュー。"
            />
            <MenuItem
              title="アロマティック・リトリート（ボディ）"
              duration={90}
              price={12000}
              description="香りを選び、緊張をほどくボディケア。"
            />
            <MenuItem
              title="ブライダル・グロウプラン"
              duration={120}
              price={18000}
              description="特別な日のためのトータルケア（架空）。"
            />
          </div>
        </MotionSection>

        {/* Flow */}
        <MotionSection className="py-20 md:py-28 bg-card border-y border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">施術の流れ</h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            <FlowStep number="01" title="カウンセリング" description="肌のお悩みや生活リズムを丁寧にお伺いします。" />
            <FlowStep number="02" title="当日のプラン調整" description="状態に合わせ、施術内容を微調整します。" />
            <FlowStep number="03" title="施術" description="静かな個室で、ゆったりとした時間を。" />
            <FlowStep number="04" title="アフター案内" description="ご自宅でのケアのポイントを共有します。" />
          </div>
        </MotionSection>

        {/* Gallery */}
        <MotionSection className="py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">空間</h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <GalleryImg src="/demo/beauty/gallery-1.png" alt="施術室（架空）" />
            <GalleryImg src="/demo/beauty/gallery-2.png" alt="待合スペース（架空）" />
            <GalleryImg src="/demo/beauty/gallery-3.png" alt="使用製品イメージ（架空）" />
          </div>
        </MotionSection>

        {/* Testimonials */}
        <MotionSection className="py-20 md:py-28 bg-card border-y border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">お客様の声</h2>
          <p className="text-center text-muted-foreground text-sm mb-12">
            ※これらはサービスの雰囲気を伝えるための架空のサンプルです。
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard name="A.T様（30代）" text="自分だけの時間、という感じがして最高でした。肌も気分も整います。" />
            <TestimonialCard name="M.S様（40代）" text="その日の状態に合わせて提案してくれるのが嬉しい。安心感があります。" />
            <TestimonialCard name="K.Y様（20代）" text="イベント前に必ず。ケア後はメイクがしやすい気がします。" />
            <TestimonialCard name="R.N様（50代）" text="空間も香りも上質。月1のご褒美として通いたい雰囲気。" />
            <TestimonialCard name="E.O様（30代）" text="無理な勧誘がなく、相談しやすい。落ち着いて通えそうです。" />
          </div>
        </MotionSection>

        {/* Access */}
        <MotionSection className="py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">アクセス</h2>
          <div className="text-lg text-muted-foreground space-y-2">
            <p className="text-foreground font-medium">Salon de Fleur（架空）</p>
            <p>渋谷エリア・プライベートサロン（架空）</p>
            <p>※ご予約確定後に詳細をご案内する想定です</p>
          </div>
        </MotionSection>

        {/* Info */}
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

        {/* FAQ */}
        <MotionSection className="py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">よくあるご質問</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="メイクをしたまま行っても大丈夫ですか？"
              answer="問題ありません。必要に応じてクレンジングからご案内する想定です（架空）。"
            />
            <FaqItem
              question="予約は必須ですか？"
              answer="完全予約制の想定です。事前にご予約ください（架空）。"
            />
            <FaqItem
              question="支払い方法は？"
              answer="各種カード/電子マネー対応の想定です（架空）。"
            />
            <FaqItem
              question="男性も利用できますか？"
              answer="女性専用の想定です（架空）。"
            />
            <FaqItem
              question="妊娠中でも受けられますか？"
              answer="体調に配慮したメニューを用意する想定です。事前にご相談ください（架空）。"
            />
          </div>
        </MotionSection>

        {/* CTA */}
        <MotionSection id="reservation" className="py-20 md:py-28 bg-foreground text-background text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ご予約・お問い合わせ</h2>
          <p className="max-w-xl mx-auto mb-10 text-background/80">
            ご新規様も、LINEまたはお電話でお気軽にご連絡ください（架空）。
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://line.me/R/ti/p/@yourline"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center hover:bg-green-700 transition-colors"
            >
              <MessageIcon className="w-6 h-6 mr-3" />
              LINEで予約する
            </a>
            <a
              href="tel:000-0000-0000"
              className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center hover:bg-white/90 transition-colors"
            >
              <PhoneIcon className="w-6 h-6 mr-3" />
              電話で問い合わせる
            </a>
          </div>
        </MotionSection>
      </main>

      <footer className="text-center py-8 border-t border-border">
        <p className="text-xs text-muted-foreground">
          【注意】本サイトは架空の店舗・サービスを用いたデモ（ポートフォリオ）です。実在の人物・団体とは一切関係ありません。
        </p>
      </footer>
    </div>
  );
}

/** wrapper */
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
      className={`container mx-auto px-6 ${className}`}
      initial={sectionMotion.initial}
      whileInView={sectionMotion.whileInView}
      transition={sectionMotion.transition}
      viewport={sectionMotion.viewport}
    >
      {children}
    </motion.section>
  );
}

function StrengthCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-background p-8 rounded-lg border border-border text-center"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-center items-center mb-5">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

function MenuItem({
  title,
  duration,
  price,
  description,
}: {
  title: string;
  duration: number;
  price: number;
  description: string;
}) {
  return (
    <div className="border-b border-border pb-4">
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

function FlowStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div className="text-4xl font-black text-muted mr-6">{number}</div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <motion.div className="bg-background p-6 rounded-lg border border-border" whileHover={{ y: -5 }}>
      <p className="text-muted-foreground mb-4">“{text}”</p>
      <p className="text-right font-bold text-sm">{name}</p>
    </motion.div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border-b border-border pb-4 group">
      <summary className="font-bold cursor-pointer flex justify-between items-center list-none">
        <span>{question}</span>
        <ChevronDownIcon className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
      </summary>
      <p className="mt-3 text-muted-foreground leading-relaxed">{answer}</p>
    </details>
  );
}

function GalleryImg({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-full object-cover aspect-square rounded-lg border border-border"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      loading="lazy"
    />
  );
}

// --- SVG icons ---
const IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const LeafIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...IconProps} {...props} className={props.className ?? "w-8 h-8"}>
    <path d="M11 20A7 7 0 0 1 4 13V8a7.99 7.99 0 0 1 14 0v5a7 7 0 0 1-7 7z" />
    <path d="M12 18c3 0 5-2 5-5v-1" />
  </svg>
);
const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...IconProps} {...props} className={props.className ?? "w-8 h-8"}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const SparklesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...IconProps} {...props} className={props.className ?? "w-8 h-8"}>
    <path d="m12 3-1.9 3.8-4.1.6 3 2.9-.7 4.1 3.7-2 3.7 2-.7-4.1 3-2.9-4.1-.6z" />
  </svg>
);
const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...IconProps} {...props} className={props.className ?? "w-5 h-5"}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...IconProps} {...props} className={props.className ?? "w-6 h-6"}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...IconProps} {...props} className={props.className ?? "w-6 h-6"}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

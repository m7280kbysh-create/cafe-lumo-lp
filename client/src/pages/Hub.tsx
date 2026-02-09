// client/src/pages/Hub.tsx
import { Link } from "wouter";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

export default function Hub() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/demo/hub/hero.png"
            alt="上質で落ち着いた空間（架空デモ）"
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* ベール（読みやすさ＋高級感） */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-background" />
        </div>

        <div className="relative container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-white/80 text-sm tracking-wide">
              店舗向けLP制作（ポートフォリオ）
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
              静かに整う導線で、
              <br />
              来店につなげる。
            </h1>

            <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed">
              Instagramのリンク1つから、メニュー・アクセス・予約/問い合わせを
              <br />
              1ページにまとめます。迷いを減らして、次のアクションへ。
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#demos"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-7 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                デモを見る
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 text-white px-7 py-3 text-sm font-semibold hover:bg-white/15 transition"
              >
                相談する（無料）
              </a>
            </div>

            <p className="mt-6 text-xs text-white/70">
              ※本サイトは架空のデモ（ポートフォリオ）です。実在の店舗・人物・団体とは関係ありません。
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* OFFER */}
        <MotionSection className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  提供内容（概要）
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  伝えることを増やすのではなく、迷いを減らします。
                  <br />
                  “予約/問い合わせまでの道筋”を整えるLPです。
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-bold">初月 5,000円〜</div>
                  <div className="text-sm text-muted-foreground">（買い切り・範囲固定）</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  素材が揃っていれば最短2〜3日で公開可能（内容により変動）
                </p>

                <ul className="mt-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                    <span>スマホ最適化の1ページLP</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                    <span>予約/問い合わせ導線（LINE・電話・予約サイト等）を整理</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                    <span>テキスト/画像差し替え（修正1回まで）</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60" />
                    <span>公開まで対応（独自ドメインはオプション）</span>
                  </li>
                </ul>

                <p className="mt-4 text-xs text-muted-foreground">
                  ※実案件では、制作範囲・修正回数・納期を事前に合意して進行します。
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* PROCESS */}
        <MotionSection className="py-16 md:py-24 bg-card border-y border-border">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
              制作の流れ
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              <StepCard num="01" title="ヒアリング" desc="目的と導線（LINE/電話/予約サイト等）を確認" />
              <StepCard num="02" title="初稿制作" desc="テンプレをベースに、最短で形にします" />
              <StepCard num="03" title="確認・修正" desc="必要な箇所だけ修正（回数はプランにより）" />
              <StepCard num="04" title="公開" desc="公開後に導線チェック。運用のコツも共有" />
            </div>
          </div>
        </MotionSection>

        {/* DEMOS */}
        <MotionSection id="demos" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                業種別デモ（架空）
              </h2>
              <p className="mt-4 text-muted-foreground">
                1クリックで“完成イメージ”が見えるようにしています。
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <DemoCard
                href="/food"
                title="飲食店"
                subtitle="メニュー・アクセス・来店導線"
                img="/demo/hub/food.png"
              />
              <DemoCard
                href="/beauty"
                title="美容サロン"
                subtitle="上質感・予約導線・安心材料"
                img="/demo/hub/beauty.png"
              />
              <DemoCard
                href="/clinic"
                title="整体・施術"
                subtitle="初回導線・不安解消・予約導線"
                img="/demo/hub/clinic.png"
              />
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              ※各ページは架空店舗のデモ（ポートフォリオ）です。実在のレビューや実在店舗を装いません。
            </p>
          </div>
        </MotionSection>

        {/* FAQ */}
        <MotionSection className="py-16 md:py-24 bg-card border-y border-border">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
              よくあるご質問
            </h2>

            <div className="mt-10 space-y-4">
              <FaqItem
                q="素材は何が必要ですか？"
                a="店名、営業時間、メニュー/料金、写真、予約/問い合わせ導線（LINE等）があれば制作できます。"
              />
              <FaqItem
                q="修正は何回まで？"
                a="初月トライアルは基本1回までを目安に、範囲を固定してスピード優先で進めます。"
              />
              <FaqItem
                q="独自ドメインは必要ですか？"
                a="ポートフォリオ/試用段階は不要です。本番運用する場合は店舗様名義で取得→接続が安全です。"
              />
              <FaqItem
                q="予約フォームや予約システム連携はできますか？"
                a="可能です（内容によりオプション）。まずはLINE/電話/既存予約URLに集約する形が早いです。"
              />
              <FaqItem
                q="公開後の運用は？"
                a="更新頻度が少ないLPは“必要なときに直せる”設計が重要。運用方法も合わせて共有します。"
              />
            </div>
          </div>
        </MotionSection>

        {/* CONTACT */}
        <MotionSection id="contact" className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  まずは相談だけでも
                </h2>
                <p className="mt-3 text-muted-foreground">
                  「いまの導線だと、何がもったいないか」から一緒に整理します。
                  <br />
                  相談・見積もりは無料（サンプル）です。
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                >
                  メールで相談する
                </a>
                <a
                  href="https://instagram.com/your_account"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:bg-muted transition"
                >
                  Instagramへ
                </a>
                <p className="text-xs text-muted-foreground">
                  ※リンク先はあなたの連絡先に差し替えてください
                </p>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>

      <footer className="py-10 text-center text-xs text-muted-foreground">
        【注意】本サイトは架空の店舗・サービスを用いたデモ（ポートフォリオ）です。
      </footer>
    </div>
  );
}

/* components */

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
      initial={reveal.initial}
      whileInView={reveal.whileInView}
      transition={reveal.transition}
      viewport={reveal.viewport}
    >
      {children}
    </motion.section>
  );
}

function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <div className="text-xs text-muted-foreground tracking-wider">{num}</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</div>
    </div>
  );
}

function DemoCard({ href, title, subtitle, img }: {
  href: string; title: string; subtitle: string; img: string;
}) {
  return (
    <Link
      href={href}
      className="group relative isolate block overflow-hidden rounded-2xl
                 border border-border/80 bg-zinc-950 min-h-[280px]
                 shadow-sm hover:shadow-lg hover:shadow-black/20
                 transition-shadow
                 focus:outline-none focus:ring-2 focus:ring-foreground/30"
    >
      {/* 画像 */}
      <img
        src={img}
        alt={`${title}のイメージ（架空）`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover
                   contrast-125 saturate-125 brightness-90
                   scale-[1.03] transition-transform duration-500
                   group-hover:scale-[1.06]"
      />

      {/* ベースの締め（少し緩め） */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-zinc-950/60 via-zinc-950/25 to-black/60" />

      {/* 可読性：黒ベール（少し緩め） */}
      <div className="absolute inset-0 z-20 bg-black/30 group-hover:bg-black/24 transition-colors" />

      {/* 下側を締めて文字を守る */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

      {/* 艶（上品なハイライト） */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity
                      bg-[radial-gradient(800px_circle_at_20%_0%,rgba(255,255,255,0.10),transparent_40%)]" />

      {/* コンテンツ */}
      <div className="relative z-30 p-6 h-full flex flex-col justify-end">
        <div className="text-white/70 text-xs tracking-[0.22em]">DEMO</div>
        <div className="mt-2 text-2xl font-bold text-white drop-shadow-md">{title}</div>
        <div className="mt-1 text-white/80 text-sm drop-shadow-sm">{subtitle}</div>

        <div className="mt-5 inline-flex items-center gap-2 text-white text-sm font-semibold drop-shadow-sm">
          デモを見る
          <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}






function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-xl border border-border bg-background p-5">
      <summary className="cursor-pointer font-semibold list-none flex items-center justify-between">
        <span>{q}</span>
        <span className="text-muted-foreground">＋</span>
      </summary>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
    </details>
  );
}

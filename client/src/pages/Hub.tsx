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
    <div className="min-h-screen text-slate-100 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      {/* page background accents (outside the boxes) */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[820px] w-[820px] rounded-full bg-blue-500/18 blur-3xl" />
        <div className="absolute -bottom-56 -right-56 h-[820px] w-[820px] rounded-full bg-cyan-400/12 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(900px circle at 30% 0%, black, transparent 65%)",
            WebkitMaskImage: "radial-gradient(900px circle at 30% 0%, black, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/35" />
      </div>

      {/* HERO (keep the “premium” photo feel) */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/demo/hub/hero.png"
            alt="上質で落ち着いた空間（架空デモ）"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* veil */}
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/35 to-slate-950" />
          {/* blue nuance */}
          <div className="absolute -top-28 -left-28 h-[560px] w-[560px] rounded-full bg-blue-500/18 blur-3xl" />
          <div className="absolute -bottom-36 -right-36 h-[700px] w-[700px] rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(59,130,246,0.14),transparent_55%)]" />
        </div>

        <div className="relative container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-400" />
              店舗向けLP制作（ポートフォリオ）
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
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
                className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-7 py-3 text-sm font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400/35"
              >
                デモを見る
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 text-white px-7 py-3 text-sm font-semibold hover:bg-white/15 transition focus:outline-none focus:ring-2 focus:ring-white/25"
              >
                相談する（無料）
              </a>
            </div>

            <p className="mt-6 text-xs text-white/65">
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
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  提供内容（概要）
                </h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  伝えることを増やすのではなく、迷いを減らします。
                  <br />
                  “予約/問い合わせまでの道筋”を整えるLPです。
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                  <div className="text-xs text-slate-300">
                    初月は「範囲を固定して速く公開」→必要な箇所だけ強化、の流れが最短です。
                  </div>
                </div>
              </div>

              {/* box inside should keep the same light tone */}
              <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-slate-900 shadow-[0_14px_60px_rgba(15,23,42,0.20)]">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-extrabold">初月 5,000円〜</div>
                  <div className="text-sm text-slate-600">（買い切り・範囲固定）</div>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  素材が揃っていれば最短2〜3日で公開可能（内容により変動）
                </p>

                <ul className="mt-5 space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>スマホ最適化の1ページLP</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>予約/問い合わせ導線（LINE・電話・予約サイト等）を整理</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>テキスト/画像差し替え（修正1回まで）</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>公開まで対応（独自ドメインはオプション）</span>
                  </li>
                </ul>

                <p className="mt-4 text-xs text-slate-500">
                  ※実案件では、制作範囲・修正回数・納期を事前に合意して進行します。
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* PROCESS */}
        <MotionSection className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-white">
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
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                業種別デモ（架空）
              </h2>
              <p className="mt-4 text-slate-300">
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

            <p className="mt-6 text-center text-xs text-slate-400">
              ※各ページは架空店舗のデモ（ポートフォリオ）です。実在のレビューや実在店舗を装いません。
            </p>
          </div>
        </MotionSection>

        {/* FAQ */}
        <MotionSection className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-white">
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
          {/* big light box: keep tone */}
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200/80 bg-white/90 p-8 md:p-10 text-slate-900 shadow-[0_14px_60px_rgba(15,23,42,0.20)]">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  まずは相談だけでも
                </h2>
                <p className="mt-3 text-slate-600">
                  「いまの導線だと、何がもったいないか」から一緒に整理します。
                  <br />
                  相談・見積もりは無料（サンプル）です。
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-xs font-semibold text-slate-500">相談時にあると早いもの</div>
                  <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                    店名 / メニュー / 予約URL（LINE等） / 写真（数枚） / エリア / 営業時間
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500/35"
                >
                  メールで相談する
                </a>
                <a
                  href="https://instagram.com/your_account"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold hover:border-blue-300 hover:text-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  Instagramへ
                </a>
                <p className="text-xs text-slate-500">
                  ※リンク先はあなたの連絡先に差し替えてください
                </p>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>

      <footer className="py-10 text-center text-xs text-slate-400">
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
    <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-slate-900 shadow-[0_14px_60px_rgba(15,23,42,0.16)]">
      <div className="inline-flex items-center gap-2">
        <div className="text-xs font-extrabold tracking-wider text-blue-700">{num}</div>
        <div className="h-px flex-1 bg-blue-700/15" />
      </div>
      <div className="mt-3 text-lg font-bold">{title}</div>
      <div className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</div>
    </div>
  );
}

function DemoCard({
  href,
  title,
  subtitle,
  img,
}: {
  href: string;
  title: string;
  subtitle: string;
  img: string;
}) {
  return (
    <Link
      href={href}
      className="group relative isolate block overflow-hidden rounded-2xl
                 border border-white/10 bg-slate-950 min-h-[280px]
                 shadow-sm hover:shadow-lg hover:shadow-black/35
                 transition-shadow
                 focus:outline-none focus:ring-2 focus:ring-blue-400/25"
    >
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

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-950/65 via-slate-950/25 to-black/65" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(59,130,246,0.16),transparent_55%)]" />
      <div className="absolute inset-0 z-20 bg-black/30 group-hover:bg-black/24 transition-colors" />
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity
                   bg-[radial-gradient(800px_circle_at_20%_0%,rgba(255,255,255,0.10),transparent_40%)]"
      />

      <div className="relative z-30 p-6 h-full flex flex-col justify-end">
        <div className="text-white/70 text-xs tracking-[0.22em]">DEMO</div>
        <div className="mt-2 text-2xl font-extrabold text-white drop-shadow-md">{title}</div>
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
    <details className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-slate-900 shadow-[0_14px_60px_rgba(15,23,42,0.14)]">
      <summary className="cursor-pointer font-bold list-none flex items-center justify-between">
        <span>{q}</span>
        <span className="text-blue-700/80">＋</span>
      </summary>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{a}</p>
    </details>
  );
}

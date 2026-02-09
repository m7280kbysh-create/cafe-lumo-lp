import { Link } from "wouter";
import type { SVGProps } from "react";

export default function Hub() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <section className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            あなたのビジネスに、
            <br />
            最適なLPを。
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            小規模事業者様向けに、予約・問い合わせ導線を「1ページ」に整理したLPを制作します。
            集客〜予約までの迷いを減らし、来店につなげます。
          </p>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center mb-8">提供内容（概要）</h2>
          <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg border border-border shadow-md">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              初月トライアル（買い切り）
            </h3>
            <p className="text-4xl font-bold mb-2">
              5,000円
              <span className="text-lg font-normal text-muted-foreground">（税別）〜</span>
            </p>
            <p className="text-muted-foreground mb-6">
              素材が揃っていれば最短2〜3日で公開可能です（内容により変動）。
            </p>

            <ul className="space-y-3 text-card-foreground text-sm">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-3" />
                <span>スマホ対応（1ページLP）</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-3" />
                <span>予約/問い合わせ導線（LINE・電話・予約サイト等）を1つに整理</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-3" />
                <span>テキスト/画像差し替え（修正1回まで）</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-primary mr-3" />
                <span>公開（Vercel等）まで対応（独自ドメインはオプション）</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl font-bold mb-8">業種別デモサイト（架空）</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <DemoCard
              href="/food"
              title="飲食店"
              description="メニュー・アクセス・予約導線を整理"
              gradient="from-orange-400 to-rose-400"
            />
            <DemoCard
              href="/beauty"
              title="美容サロン"
              description="メニュー/料金・予約導線を整理"
              gradient="from-purple-400 to-pink-400"
            />
            <DemoCard
              href="/clinic"
              title="整体・治療院"
              description="初回導線・注意事項・予約導線を整理"
              gradient="from-teal-400 to-cyan-400"
            />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            ※本サイトは架空の店舗・サービスを用いたデモ（ポートフォリオ）です。
          </p>
        </section>

        <section className="text-center bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-muted-foreground mb-6">ご相談・お見積もりは無料です（サンプル）。</p>
          <div className="flex justify-center items-center space-x-6">
            <a href="mailto:your-email@example.com" className="text-primary hover:underline">
              Email
            </a>
            <a
              href="https://instagram.com/your_account"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6">
        <p className="text-xs text-muted-foreground">
          【注意】本サイトは架空の店舗・サービスを用いたデモ（ポートフォリオ）です。
        </p>
      </footer>
    </div>
  );
}

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function DemoCard({
  href,
  title,
  description,
  gradient,
}: {
  href: string;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <Link href={href}>
      <a
        className={`block p-8 rounded-lg bg-gradient-to-br ${gradient} text-white shadow-lg transform hover:scale-105 transition-transform duration-300`}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="font-light">{description}</p>
      </a>
    </Link>
  );
}

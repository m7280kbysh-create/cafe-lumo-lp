import { Link } from "wouter";

export default function Beauty() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-10">
        <Link href="/">
          <a className="text-sm text-primary underline underline-offset-4">← 提供内容へ戻る</a>
        </Link>
        <h1 className="mt-6 text-3xl font-bold">美容デモページ（作成中）</h1>
        <p className="mt-3 text-muted-foreground">ここにManusで生成した架空サロンLPを貼ります。</p>
      </main>
    </div>
  );
}

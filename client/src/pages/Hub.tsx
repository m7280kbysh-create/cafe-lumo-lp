// client/src/pages/Hub.tsx
// LP制作サービスのメインランディングページ
// 全10セクション構成 + 固定ヘッダーCTA + フローティングCTA

import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

/* ---------- アニメーション設定 ---------- */
const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

/* ---------- 共通のCTAリンク（メール相談） ---------- */
const MAIL_HREF = `mailto:mst_t3.01@outlook.jp?subject=${encodeURIComponent(
  "LP制作の無料相談（ポートフォリオ経由）"
)}&body=${encodeURIComponent(
  "相談内容：\n（例）LP制作の相談をしたいです。\n\n店舗名：\n業種（飲食/美容/整体）：\nエリア：\nInstagram：\n予約導線（LINE/電話/予約URL）：\n希望納期：\n\n（任意）参考URL：\n"
)}`;

export default function Hub() {
  return (
    <div className="min-h-screen bg-[#F8FAFA] text-[#1A2E35]">
      {/* ============================
          固定ヘッダー（スクロールしても表示）
          CTAボタン付き
         ============================ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#D8E4E4] shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
          {/* ロゴ */}
          <a href="#" className="text-lg md:text-xl font-extrabold text-[#1A6B6B]">
            Lumo LP制作
          </a>
          {/* ヘッダーCTA */}
          <a
            href={MAIL_HREF}
            className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] text-white px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold hover:bg-[#E85A28] transition shadow-md"
          >
            無料で相談する
          </a>
        </div>
      </header>

      {/* ============================
          セクション1: ファーストビュー（FV）
          共感型キャッチコピー + 数値バッジ3点 + CTA
         ============================ */}
      <section className="relative overflow-hidden pt-16">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <img
            src="/demo/hub/hero.png"
            alt="上質で落ち着いた空間（架空デモ）"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-[#1A2E35]/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A6B6B]/30 via-transparent to-[#1A2E35]/80" />
        </div>

        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            {/* バッジ */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-[#FF6B35]" />
              副業コーチ・起業コンサル専門
            </div>

            {/* キャッチコピー */}
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
              副業コーチ・美容サロン・整体院の方へ
              <br />
              申し込みが増えるLPを、
              <br />
              ¥30,000〜・最短3日で。
            </h1>

            {/* サブコピー */}
            <p className="mt-6 text-white/85 text-base md:text-xl leading-relaxed">
              文章・画像・デザインをすべてAIで生成。
              <br />
              大手制作会社の1/10以下の価格で、
              <br />
              集客できるLPを制作します。
            </p>

            {/* 数値バッジ3点セット */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-xl bg-white/15 backdrop-blur px-4 py-3 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-extrabold text-[#FF6B35]">最短3日</div>
                <div className="text-xs text-white/80 mt-1">スピード納品</div>
              </div>
              <div className="rounded-xl bg-white/15 backdrop-blur px-4 py-3 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-extrabold text-[#FF6B35]">¥30,000〜</div>
                <div className="text-xs text-white/80 mt-1">AI活用で低価格</div>
              </div>
              <div className="rounded-xl bg-white/15 backdrop-blur px-4 py-3 text-center border border-white/20">
                <div className="text-2xl md:text-3xl font-extrabold text-[#FF6B35]">素材0でOK</div>
                <div className="text-xs text-white/80 mt-1">丸投げ対応</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={MAIL_HREF}
                className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] text-white px-8 py-4 text-base font-bold hover:bg-[#E85A28] transition shadow-lg hover:shadow-xl"
              >
                まず無料で相談する（3分で完了）
              </a>
              <a
                href="#demos"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white px-8 py-4 text-base font-bold hover:bg-white/20 transition backdrop-blur"
              >
                制作事例を見る
              </a>
            </div>
            {/* 安心感テキスト */}
            <p className="mt-3 text-xs text-white/70">
              ※ 24時間以内に返信します ／ 相談・見積もり無料
            </p>

            <p className="mt-6 text-xs text-white/50">
              ※本サイトは架空のデモ（ポートフォリオ）です。実在の店舗・人物・団体とは関係ありません。
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* ============================
            セクション2: 悩み・問題提起
            ターゲットの「自分ごと化」
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A6B6B]">
              こんなお悩み、ありませんか？
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">
              {[
                "ホームページを作りたいけど、何から始めればいいかわからない",
                "制作会社に頼むと数十万円…予算的に厳しい",
                "写真も文章も用意できない。素材がゼロの状態",
                "SNSだけで集客してるけど、信頼感が足りない気がする",
                "自分で作ったページ、ダサくて逆効果になってないか不安",
                "忙しくて時間がない。とにかく早く公開したい",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-[#F8FAFA] border border-[#D8E4E4] p-4"
                >
                  <span className="text-[#FF6B35] font-bold text-lg mt-[-2px]">&#10003;</span>
                  <span className="text-sm md:text-base leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[#1A6B6B] font-bold text-lg md:text-xl">
              ひとつでも当てはまるなら、Lumo LP制作がお力になれます。
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション3: サービス概要・解決策提示
           ============================ */}
        <MotionSection className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A6B6B]">
                AIで実現する、高品質 × 低価格のLP制作
              </h2>
              <p className="mt-4 text-[#5A7A7A] text-base md:text-lg leading-relaxed">
                通常10万円以上かかる高品質なLPを、AI活用で¥30,000〜。
                <br className="hidden md:block" />
                文章も画像もゼロから生成。素材なし・アイデアだけで丸投げOKです。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: "&#9889;",
                  title: "最短3日で公開",
                  desc: "素材が揃っていれば最短3日。テンプレをベースにスピーディに制作します。",
                },
                {
                  icon: "&#128640;",
                  title: "AI生成で丸投げOK",
                  desc: "文章・画像をAIで生成。サービス名と料金だけ教えていただければ制作可能です。",
                },
                {
                  icon: "&#128176;",
                  title: "¥30,000〜の低価格",
                  desc: "AI活用で制作コストを大幅削減。小規模店舗でも導入しやすい価格設定です。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-[#D8E4E4] p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-3xl mb-4" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h3 className="text-lg font-bold text-[#1A2E35] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5A7A7A] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション4: 選ばれる理由・強み3点
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A6B6B]">
                Lumoが選ばれる3つの理由
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "店舗ビジネス特化の導線設計",
                  desc: "飲食・美容・整体・コーチングなど、店舗型ビジネスに最適化したLP構成。「見て終わり」ではなく、予約・問い合わせにつながる導線を設計します。",
                },
                {
                  num: "02",
                  title: "AI × 人の目で高品質を実現",
                  desc: "AIで効率化しつつ、最終的には人の目でチェック。デザイン・文章ともに「安っぽくない」品質をお約束します。",
                },
                {
                  num: "03",
                  title: "公開後も安心のサポート",
                  desc: "公開して終わりではありません。導線チェック・軽微な修正・運用のコツまで共有。はじめてのLP運用でも安心です。",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border-2 border-[#1A6B6B]/15 bg-[#F8FAFA] p-6 relative"
                >
                  <div className="text-4xl font-extrabold text-[#1A6B6B]/20 absolute top-4 right-4">
                    {item.num}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2E35] mb-3 mt-2">{item.title}</h3>
                  <p className="text-sm text-[#5A7A7A] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            中盤CTA
           ============================ */}
        <MotionSection className="py-12 md:py-16 bg-[#1A6B6B]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl md:text-3xl font-extrabold text-white">
              まずは気軽にご相談ください
            </h2>
            <p className="mt-3 text-white/80 text-sm md:text-base">
              相談・見積もりは完全無料。「こんなLP作れますか？」だけでもOKです。
            </p>
            <div className="mt-6">
              <a
                href={MAIL_HREF}
                className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] text-white px-8 py-4 text-base font-bold hover:bg-[#E85A28] transition shadow-lg"
              >
                無料で相談する
              </a>
              <p className="mt-2 text-xs text-white/60">※ 24時間以内に返信します</p>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション5: 制作者プロフィール
            「なぜLP制作を始めたか」のストーリー付き
           ============================ */}
        <MotionSection className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A6B6B]">
                制作者について
              </h2>
            </div>

            <div className="rounded-2xl bg-white border border-[#D8E4E4] p-6 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* プロフィール写真（プレースホルダー） */}
                <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1A6B6B]/10 border-2 border-[#1A6B6B]/20 flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-4xl text-[#1A6B6B]/40">&#128100;</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1A2E35]">Kobayashi / Lumo</h3>
                  <p className="text-sm text-[#5A7A7A] mt-1">現役大学生 × AI LP制作者</p>

                  {/* なぜLP制作を始めたかのストーリー */}
                  <div className="mt-4 text-sm text-[#1A2E35] leading-relaxed space-y-3">
                    <p>
                      現役大学生として、周りの「副業で稼ぎたい」という友人や先輩の悩みを間近で見てきました。
                      <strong>発信力はあるのにLPがなくて問い合わせが来ない。</strong>制作会社に頼めば何十万円。
                      自分で作ればクオリティが不安。
                    </p>
                    <p>
                      <strong>「それならAIを使って、もっと手軽に高品質なLPを届けられるのでは」</strong>と考え、
                      このサービスを大学在学中に立ち上げました。
                    </p>
                    <p>
                      「あなたのサービスの価値を、ちゃんと届ける」── それが私の使命です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション6: 制作実績・お客様の声
            顔写真・属性情報（職種など）付き
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-4">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A6B6B]">
                お客様の声
              </h2>
              <p className="mt-2 text-sm text-[#5A7A7A]">
                ※以下は架空のサンプルです。実在のお客様ではありません。
              </p>
            </div>

            {/* デモカード */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "田中 美咲 様",
                  role: "美容サロンオーナー",
                  avatar: "&#128131;",
                  text: "写真も文章もなかったのに、3日で素敵なLPが完成しました。予約数が倍以上に増えて驚いています。",
                },
                {
                  name: "山田 健太 様",
                  role: "カフェ経営者",
                  avatar: "&#128104;&#8205;&#127859;",
                  text: "制作会社に見積もったら30万円と言われましたが、こちらでは3万円で同等以上のクオリティでした。",
                },
                {
                  name: "鈴木 優子 様",
                  role: "整体院オーナー",
                  avatar: "&#128105;&#8205;&#9877;&#65039;",
                  text: "「初回お試し」への導線が明確で、問い合わせが以前の3倍になりました。投資対効果が抜群です。",
                },
              ].map((voice, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#F8FAFA] border border-[#D8E4E4] p-6"
                >
                  {/* 顔写真 + 属性 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#1A6B6B]/10 flex items-center justify-center text-2xl border border-[#1A6B6B]/20">
                      <span dangerouslySetInnerHTML={{ __html: voice.avatar }} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#1A2E35]">{voice.name}</div>
                      <div className="text-xs text-[#5A7A7A]">{voice.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-[#1A2E35] leading-relaxed italic">
                    「{voice.text}」
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション6.5: 制作実績（業種別デモ）
           ============================ */}
        <MotionSection id="demos" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A6B6B]">
                制作実績デモ（架空）
              </h2>
              <p className="mt-4 text-[#5A7A7A]">
                1クリックで"完成イメージ"が見えるようにしています。
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DemoCard href="/food" title="飲食店" subtitle="メニュー・アクセス・来店導線" img="/demo/hub/food.png" />
              <DemoCard href="/beauty" title="美容サロン" subtitle="上質感・予約導線・安心材料" img="/demo/hub/beauty.png" />
              <DemoCard href="/clinic" title="整体・施術" subtitle="初回導線・不安解消・予約導線" img="/demo/hub/clinic.png" />
              <DemoCard href="/coach" title="コーチング" subtitle="クリック導線・申込導線のデモ" img="/demo/hub/coach.png" />
            </div>

            <p className="mt-6 text-center text-xs text-[#5A7A7A]">
              ※各ページは架空店舗のデモ（ポートフォリオ）です。実在のレビューや実在店舗を装いません。
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション7: サービス内容・制作フロー
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#1A6B6B]">
              制作の流れ
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-4">
              <StepCard num="01" title="ヒアリング" desc="目的と導線（LINE/電話/予約サイト等）を確認。所要時間は約30分です。" />
              <StepCard num="02" title="初稿制作" desc="テンプレをベースに最短で形にします。AIで文章・画像も生成可能。" />
              <StepCard num="03" title="確認・修正" desc="必要な箇所だけ修正（回数はプランにより変動）。チャットで完結。" />
              <StepCard num="04" title="公開" desc="公開後に導線チェック。運用のコツも共有します。" />
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション8: 料金プラン
           ============================ */}
        <MotionSection className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A6B6B]">
                料金プラン
              </h2>
              <p className="mt-3 text-[#5A7A7A] text-sm md:text-base">
                シンプルな価格設定。まずはお気軽にご相談ください。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* ライトプラン */}
              <div className="rounded-2xl bg-white border border-[#D8E4E4] p-6 shadow-sm flex flex-col">
                <div className="text-sm font-bold text-[#5A7A7A]">ライトプラン</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1A2E35]">10,000</span>
                  <span className="text-sm text-[#5A7A7A]">円〜（税込）</span>
                </div>
                <p className="mt-3 text-xs text-[#5A7A7A]">まずは試したい方向け</p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>1ページ構成</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>テンプレートベース</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>修正1回まで</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>最短3日納品</span>
                  </li>
                </ul>
                <a
                  href={MAIL_HREF}
                  className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 text-sm font-bold hover:bg-[#FF6B35] hover:text-white transition"
                >
                  無料で相談する
                </a>
              </div>

              {/* スタンダードプラン（おすすめ） */}
              <div className="rounded-2xl bg-white border-2 border-[#FF6B35] p-6 shadow-md flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white text-xs font-bold px-4 py-1 rounded-full">
                  おすすめ
                </div>
                <div className="text-sm font-bold text-[#FF6B35]">スタンダードプラン</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1A2E35]">30,000</span>
                  <span className="text-sm text-[#5A7A7A]">円〜（税込）</span>
                </div>
                <p className="mt-3 text-xs text-[#5A7A7A]">しっかり集客したい方向け</p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>フルLP構成（5〜8セクション）</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>AI生成画像・文章込み</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>修正2回まで</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>スマホ最適化対応</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>導線設計アドバイス付き</span>
                  </li>
                </ul>
                <a
                  href={MAIL_HREF}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#FF6B35] text-white px-6 py-3 text-sm font-bold hover:bg-[#E85A28] transition shadow-md"
                >
                  無料で相談する
                </a>
              </div>

              {/* プレミアムプラン */}
              <div className="rounded-2xl bg-white border border-[#D8E4E4] p-6 shadow-sm flex flex-col">
                <div className="text-sm font-bold text-[#5A7A7A]">プレミアムプラン</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#1A2E35]">50,000</span>
                  <span className="text-sm text-[#5A7A7A]">円〜（税込）</span>
                </div>
                <p className="mt-3 text-xs text-[#5A7A7A]">こだわりたい方向け</p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>スタンダード全内容込み</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>オリジナルデザイン</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>修正3回まで</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>独自ドメイン接続対応</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-[#1A6B6B] font-bold">&#10003;</span>
                    <span>公開後1ヶ月サポート</span>
                  </li>
                </ul>
                <a
                  href={MAIL_HREF}
                  className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-[#FF6B35] text-[#FF6B35] px-6 py-3 text-sm font-bold hover:bg-[#FF6B35] hover:text-white transition"
                >
                  無料で相談する
                </a>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-[#5A7A7A]">
              ※実案件では、制作範囲・修正回数・納期を事前に合意して進行します。
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション9: FAQ（アコーディオン形式）
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#1A6B6B]">
              よくあるご質問
            </h2>

            <div className="mt-10 space-y-3">
              <FaqItem
                q="素材は何が必要ですか？"
                a="サービス名・料金・簡単なプロフィールがあれば制作できます。写真や文章がなくてもAIで生成対応可能です。"
              />
              <FaqItem
                q="修正は何回まで？"
                a="プランにより1〜3回まで（テキスト・画像の差し替え）。構成やデザインの大幅変更は別途ご相談ください。"
              />
              <FaqItem
                q="独自ドメインは必要ですか？"
                a="必須ではありません。納品はVercel URLで行います。独自ドメイン（例：yourname.com）への接続はプレミアムプランで対応、または別途+5,000円で対応します。"
              />
              <FaqItem
                q="公開後の運用は？"
                a="公開後の軽微な修正は別途ご相談ください。テキストや画像の差し替えであれば対応可能です。プレミアムプランでは1ヶ月間のサポート付きです。"
              />
              <FaqItem
                q="制作期間はどのくらいですか？"
                a="素材が揃っている場合、最短3日で公開まで対応します。ヒアリングから丁寧に進める場合は1〜2週間程度が目安です。"
              />
              <FaqItem
                q="キャンセルはできますか？"
                a="ヒアリング後・制作着手前であればキャンセル可能です。着手後のキャンセルについてはご相談ください。"
              />
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション10: 最終CTA
           ============================ */}
        <MotionSection id="contact" className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl rounded-2xl bg-[#1A6B6B] p-8 md:p-12 text-white shadow-xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                あなたのサービスの価値を、
                <br />
                ちゃんと届けるLPを作りませんか？
              </h2>
              <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
                「いまの導線だと、何がもったいないか」から一緒に整理します。
                <br />
                相談・見積もりは完全無料です。
              </p>

              {/* 相談時にあると良い情報 */}
              <div className="mt-6 mx-auto max-w-md rounded-xl bg-white/10 border border-white/20 p-4 text-left">
                <div className="text-xs font-bold text-white/70 mb-2">相談時にあると早いもの</div>
                <div className="text-sm text-white/90 leading-relaxed">
                  店名 / メニュー / 予約URL（LINE等） / 写真（数枚） / エリア / 営業時間
                </div>
              </div>

              {/* CTAボタン */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={MAIL_HREF}
                  className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] text-white px-8 py-4 text-base font-bold hover:bg-[#E85A28] transition shadow-lg"
                >
                  無料でメール相談する
                </a>
                <a
                  href="https://www.instagram.com/lumo_funnel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 text-white px-8 py-4 text-base font-bold hover:bg-white/20 transition"
                >
                  Instagramへ
                </a>
              </div>
              {/* 安心感テキスト */}
              <p className="mt-3 text-xs text-white/60">
                ※ 24時間以内に返信します ／ 無理な営業は一切しません
              </p>
            </div>
          </div>
        </MotionSection>
      </main>

      {/* ============================
          ショーケースセクション（ダークネイビー）
         ============================ */}
      <section className="bg-[#0F172A] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-8 items-center">
            {/* 左側エリア（40%） */}
            <div className="w-full md:w-[40%] text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                AI×LP制作で、あなたの
                <br />
                ビジネスを加速させる。
              </h2>
              <p className="mt-4 text-[#38BDF8] text-sm md:text-base">
                現役大学生 / AI全工程制作 / @lumo_funnel
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                {["¥30,000〜", "最短3日", "AI全工程"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center justify-center rounded-full bg-[#2563EB] text-white text-xs font-bold px-4 py-1.5"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* 右側エリア（60%）: 制作事例グリッド */}
            <div className="w-full md:w-[60%] grid grid-cols-2 gap-3">
              {[
                { src: "/demo/hub/food.png", href: "/food", alt: "Cafe Lumo LP" },
                { src: "/demo/hub/beauty.png", href: "/beauty", alt: "Salon de Fleur LP" },
                { src: "/demo/hub/clinic.png", href: "/clinic", alt: "静穏整体サロン LP" },
                { src: "/demo/hub/coach.png", href: "/coach", alt: "佐藤みなみ Coaching LP" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className="aspect-[16/10] rounded-xl overflow-hidden cursor-pointer border border-white/10"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* 対応業種テキスト */}
          <p className="mt-10 text-center text-sm text-[#94A3B8]">
            対応業種：副業コーチ・コンサルタント / 美容サロン / 整体院
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-10 text-center text-xs text-[#5A7A7A] border-t border-[#D8E4E4]">
        <p>【注意】本サイトは架空の店舗・サービスを用いたデモ（ポートフォリオ）です。</p>
        <p className="mt-2">&copy; 2026 Lumo LP制作</p>
      </footer>

      {/* ============================
          フローティングCTA（右下固定・モバイル対応）
         ============================ */}
      <a
        href={MAIL_HREF}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#FF6B35] text-white px-5 py-3 text-sm font-bold shadow-xl hover:bg-[#E85A28] transition hover:scale-105 md:px-6 md:py-3.5"
        aria-label="無料で相談する"
      >
        <span className="text-lg">&#9993;</span>
        <span className="hidden sm:inline">無料相談</span>
      </a>
    </div>
  );
}

/* ============================
   サブコンポーネント
  ============================ */

/* セクションラッパー（アニメーション付き） */
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

/* 制作フローのステップカード */
function StepCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFA] border border-[#D8E4E4] p-6 shadow-sm">
      <div className="inline-flex items-center gap-2">
        <div className="text-xs font-extrabold tracking-wider text-[#FF6B35]">{num}</div>
        <div className="h-px flex-1 bg-[#FF6B35]/20" />
      </div>
      <div className="mt-3 text-lg font-bold text-[#1A2E35]">{title}</div>
      <div className="mt-2 text-sm text-[#5A7A7A] leading-relaxed">{desc}</div>
    </div>
  );
}

/* 制作実績デモカード */
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
                 border border-[#D8E4E4] bg-[#1A2E35] min-h-[240px]
                 shadow-sm hover:shadow-lg transition-shadow
                 focus:outline-none focus:ring-2 focus:ring-[#1A6B6B]/40"
    >
      <img
        src={img}
        alt={`${title}のイメージ（架空）`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover
                   scale-[1.03] transition-transform duration-500
                   group-hover:scale-[1.06]"
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1A2E35]/30 via-transparent to-[#1A2E35]/80" />
      <div className="absolute inset-0 z-20 bg-black/25 group-hover:bg-black/15 transition-colors" />

      <div className="relative z-30 p-5 h-full flex flex-col justify-end">
        <div className="text-white/60 text-xs tracking-[0.2em]">DEMO</div>
        <div className="mt-1 text-xl font-extrabold text-white">{title}</div>
        <div className="mt-1 text-white/75 text-xs">{subtitle}</div>
        <div className="mt-3 inline-flex items-center gap-1 text-white text-sm font-bold">
          デモを見る
          <span className="translate-x-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </div>
      </div>
    </Link>
  );
}

/* FAQアコーディオン */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-[#F8FAFA] border border-[#D8E4E4] overflow-hidden">
      {/* アコーディオンヘッダー */}
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[#1A2E35] hover:bg-[#EEF3F3] transition"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4">{q}</span>
        <span
          className={`text-[#1A6B6B] text-xl transition-transform duration-200 flex-shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          ＋
        </span>
      </button>
      {/* アコーディオンコンテンツ */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm text-[#5A7A7A] leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

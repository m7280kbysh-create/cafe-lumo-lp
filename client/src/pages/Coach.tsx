// client/src/pages/Coach.tsx
// 架空キャリアコーチ「佐藤みなみ」のLP
// ターゲット: 20〜40代の会社員（キャリア・人生を変えたい層）
// ゴール: 無料体験セッションへの申し込み
// カラー: ミッドナイトネイビー #1B2A4A / スカイブルー #5B9BD5 / ゴールド #F4C430

import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

/* ========================================
   アニメーション設定（スクロール表示用）
   ======================================== */
const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

/* ========================================
   見出し用フォントスタイル
   ======================================== */
const serifFont = { fontFamily: "'Noto Serif JP', serif" };

/* ========================================
   メインコンポーネント
   ======================================== */
export default function Coach() {
  return (
    <div
      className="min-h-screen bg-[#FAFAF8] text-[#333333]"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* ============================
          固定ヘッダー
         ============================ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#1B2A4A]/10">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
          {/* ロゴテキスト */}
          <span
            className="text-base md:text-lg font-bold text-[#1B2A4A]"
            style={serifFont}
          >
            佐藤みなみ Coaching
          </span>
          {/* ヘッダーCTAボタン */}
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-[#F4C430] text-[#1B2A4A] px-5 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold hover:bg-[#E5B82A] transition shadow-md"
          >
            無料体験を予約する
          </a>
        </div>
      </header>

      <main>
        {/* ============================
            セクション1: ファーストビュー（Hero）
           ============================ */}
        <section className="relative overflow-hidden pt-16">
          {/* ダークネイビー背景グラデーション */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #1B2A4A 0%, rgba(27,42,74,0.90) 100%)",
              }}
            />
            {/* 装飾用グラデーション */}
            <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#5B9BD5]/8 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0F1A30]/40 blur-3xl" />
          </div>

          {/* FVコンテンツ */}
          <div className="relative container mx-auto px-6 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              {/* キャッチコピー */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white whitespace-pre-line"
                style={serifFont}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {"このまま5年後も、\n同じ毎日を繰り返しますか？"}
              </motion.h1>

              {/* サブコピー */}
              <motion.p
                className="mt-6 text-white/85 text-base md:text-xl leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {"20代〜40代のキャリア迷子に寄り添う\nオンライン個別コーチング"}
              </motion.p>

              {/* 数値バッジ3点 */}
              <motion.div
                className="mt-8 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {[
                  { value: "200名+", label: "累計受講者" },
                  { value: "92%", label: "継続率" },
                  { value: "4.8/5.0", label: "満足度" },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white/15 backdrop-blur px-5 py-3 text-center border border-white/20"
                  >
                    <div className="text-2xl md:text-3xl font-extrabold text-[#F4C430]">
                      {badge.value}
                    </div>
                    <div className="text-xs text-white/80 mt-1">
                      {badge.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTAボタン */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-[#F4C430] text-[#1B2A4A] px-10 py-4 text-lg font-bold hover:bg-[#E5B82A] transition shadow-lg hover:shadow-xl"
                >
                  まずは無料で体験する
                </a>
              </motion.div>

              {/* 安心テキスト */}
              <motion.p
                className="mt-4 text-xs text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                ※ 60分・完全オンライン・無理な勧誘なし
              </motion.p>

              {/* コーチ写真プレースホルダー */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="aspect-[16/9] max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/demo/coach/hero.png"
                    alt="佐藤みなみ コーチング（架空デモ）"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* デモ注記 */}
              <p className="mt-6 text-xs text-white/40">
                ※本ページは架空のデモです。実在の人物・団体とは関係ありません。
              </p>
            </div>
          </div>
        </section>

        {/* ============================
            セクション2: 悩み（こんなこと、感じていませんか？）
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#1B2A4A]"
              style={serifFont}
            >
              こんなこと、感じていませんか？
            </h2>

            {/* チェックボックス風の悩み一覧 */}
            <div className="mt-10 space-y-4">
              {[
                "今の仕事にやりがいを感じられない",
                "転職したいけど、何がしたいかわからない",
                "周りと比べて焦るけど、行動に移せない",
                "上司や友人には本音を話しにくい",
                "このまま30代・40代を迎えるのが不安",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl bg-[#FAFAF8] border border-[#1B2A4A]/10 px-5 py-4 shadow-sm"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded border-2 border-[#5B9BD5] flex items-center justify-center">
                    <span className="text-[#5B9BD5] text-sm font-bold">
                      ✓
                    </span>
                  </span>
                  <span className="text-sm md:text-base leading-relaxed">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* 締めメッセージ */}
            <div className="mt-10 rounded-xl bg-[#1B2A4A]/5 border border-[#1B2A4A]/10 px-6 py-6 text-center">
              <p
                className="text-[#1B2A4A] font-bold text-lg md:text-xl leading-relaxed"
                style={serifFont}
              >
                ひとつでも当てはまるなら、コーチングが力になれます。
              </p>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション3: 変化（コーチングを受けた方の変化）
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FAFAF8]">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#1B2A4A]"
              style={serifFont}
            >
              コーチングを受けた方の変化
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  before: "毎日モヤモヤ、何がしたいかわからない",
                  after: "自分の軸が見つかり、転職を決断できた",
                },
                {
                  before: "自分に自信がなく、挑戦を避けていた",
                  after: "副業を始めて、半年で独立の目処が立った",
                },
                {
                  before: "上司との関係に悩み、出勤がつらい",
                  after: "コミュニケーションが変わり、仕事が楽しくなった",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-[#1B2A4A]/10 p-6 shadow-sm"
                >
                  {/* Before */}
                  <div className="rounded-lg bg-[#1B2A4A]/5 px-4 py-3">
                    <span className="text-xs font-bold text-[#1B2A4A]/50 uppercase tracking-wider">
                      Before
                    </span>
                    <p className="mt-1 text-sm text-[#333333]/70 leading-relaxed">
                      {item.before}
                    </p>
                  </div>
                  {/* 矢印 */}
                  <div className="flex justify-center my-3">
                    <span className="text-[#F4C430] text-2xl font-bold">
                      ↓
                    </span>
                  </div>
                  {/* After */}
                  <div className="rounded-lg bg-[#5B9BD5]/10 px-4 py-3 border border-[#5B9BD5]/20">
                    <span className="text-xs font-bold text-[#5B9BD5] uppercase tracking-wider">
                      After
                    </span>
                    <p className="mt-1 text-sm text-[#1B2A4A] font-medium leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-[#333333]/50">
              ※個人の体験談であり、効果には個人差があります
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション4: 選ばれる理由3点
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#1B2A4A] mb-12"
              style={serifFont}
            >
              選ばれる3つの理由
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "答えを押しつけない「傾聴」スタイル",
                  desc: "あなたの中にある答えを、問いかけを通じて一緒に見つけます。アドバイスではなく、自分で気づくから行動につながります。",
                },
                {
                  num: "02",
                  title: "200名以上のキャリア相談実績",
                  desc: "IT企業の営業職として200社以上と関わった経験から、転職市場のリアルもお伝えできます。",
                },
                {
                  num: "03",
                  title: "セッション後も続く「行動メモ」",
                  desc: "セッション終了後、話した内容と次のアクションをまとめた行動メモをお送りします。",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border-2 border-[#1B2A4A]/10 bg-[#FAFAF8] p-6 relative shadow-sm hover:shadow-md transition"
                >
                  {/* 背景ナンバー装飾 */}
                  <div className="text-5xl font-extrabold text-[#5B9BD5]/15 absolute top-4 right-4">
                    {item.num}
                  </div>
                  {/* アイコンプレースホルダー */}
                  <div className="w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-4">
                    <span className="text-[#F4C430] font-bold text-sm">
                      {item.num}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-[#1B2A4A] mb-3"
                    style={serifFont}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#333333]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション5: コーチ紹介
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FAFAF8]">
          <div className="mx-auto max-w-4xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#1B2A4A] mb-10"
              style={serifFont}
            >
              コーチ紹介
            </h2>

            <div className="rounded-2xl bg-white border border-[#1B2A4A]/10 p-6 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                {/* プロフィール写真プレースホルダー */}
                <div className="w-40 h-40 rounded-full flex-shrink-0 overflow-hidden border-2 border-[#1B2A4A]/20">
                  <img
                    src="/demo/coach/profile.png"
                    alt="佐藤みなみ プロフィール写真（架空）"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  {/* 名前 */}
                  <h3
                    className="text-xl font-bold text-[#1B2A4A]"
                    style={serifFont}
                  >
                    佐藤 みなみ（架空）
                  </h3>
                  {/* 肩書き */}
                  <p className="text-sm text-[#5B9BD5] mt-1 font-medium">
                    キャリアコーチ / 元IT企業営業職
                  </p>
                  {/* 資格バッジ */}
                  <span className="inline-block mt-2 text-xs bg-[#1B2A4A]/10 text-[#1B2A4A] px-3 py-1 rounded-full font-medium">
                    ICF認定コーチ資格（架空）
                  </span>

                  {/* ストーリー */}
                  <div className="mt-5 text-sm text-[#333333] leading-relaxed space-y-3">
                    <p>
                      IT企業の営業職として10年間勤務する中で、同僚や後輩から
                      キャリアの相談を受けることが増えました。「やりたいことがわからない」
                      「このままでいいのか不安」——そんな声を聞くたび、多くの人が
                      一人で悩みを抱えていることに気づきました。もっと本格的に力になりたいと
                      コーチングを学び、現在は個人向けキャリアコーチとして活動しています。
                    </p>
                  </div>

                  {/* 引用 */}
                  <p
                    className="mt-5 text-[#1B2A4A] font-bold text-base border-l-4 border-[#F4C430] pl-4 text-left"
                    style={serifFont}
                  >
                    「正解を教えるのではなく、あなた自身が答えを見つける場所を作りたい」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション6: 受講者の声（5件）
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#1B2A4A]"
              style={serifFont}
            >
              受講者の声
            </h2>
            <p className="mt-2 text-center text-sm text-[#333333]/50">
              ※以下は架空のサンプルです
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  name: "A.T様",
                  attr: "30代・メーカー営業",
                  text: "自分が本当に何をしたいのか、初めて言語化できました。セッション後に転職活動を始め、3ヶ月で希望の業界に転職できました。みなみさんの問いかけがなければ、まだ迷い続けていたと思います。",
                },
                {
                  id: 2,
                  name: "M.S様",
                  attr: "20代・IT企業エンジニア",
                  text: "エンジニアとしてこのまま続けるか悩んでいました。コーチングを通じて「技術 × 教育」という自分の軸が見え、社内で新しいプロジェクトを立ち上げるきっかけになりました。",
                },
                {
                  id: 3,
                  name: "K.Y様",
                  attr: "40代・管理職",
                  text: "管理職になってから自分の方向性を見失っていました。週1回のセッションで少しずつ自分の価値観が整理され、今は部下の育成にもコーチング的な関わり方を取り入れています。",
                },
                {
                  id: 4,
                  name: "R.N様",
                  attr: "30代・事務職",
                  text: "「やりたいことがない自分はダメだ」と思い込んでいました。みなみさんとの対話を通じて、今の仕事で大切にしていることに気づけたのは大きな変化でした。無理に転職を勧めない姿勢に安心しました。",
                },
                {
                  id: 5,
                  name: "E.O様",
                  attr: "20代・広告代理店",
                  text: "行動メモがとても役立ちました。セッション中に話したことが整理されていて、次にやるべきことが明確になる。仕事のパフォーマンスも上がり、上司から評価されるようになりました。",
                },
              ].map((voice) => (
                <div
                  key={voice.id}
                  className="rounded-2xl bg-[#FAFAF8] border border-[#1B2A4A]/10 p-6 shadow-sm"
                >
                  {/* アバター + 名前 */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden border border-[#1B2A4A]/15 bg-gradient-to-br from-[#1B2A4A] to-[#5B9BD5]/30">
                      <img
                        src={`/demo/coach/testimonial-${voice.id}.png`}
                        alt={`${voice.name} 受講者写真（架空）`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#1B2A4A]">
                        {voice.name}
                      </div>
                      <div className="text-xs text-[#5B9BD5]">
                        {voice.attr}
                      </div>
                    </div>
                  </div>
                  {/* 星評価 */}
                  <p className="text-[#F4C430] text-sm mb-2">★★★★★</p>
                  {/* テキスト */}
                  <p className="text-sm text-[#333333] leading-relaxed">
                    「{voice.text}」
                  </p>
                  <p className="mt-2 text-xs text-[#333333]/40">
                    ※個人の感想です
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション7: セッション内容
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FAFAF8]">
          <div className="mx-auto max-w-4xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#1B2A4A] mb-10"
              style={serifFont}
            >
              セッション内容
            </h2>

            {/* セッション風景プレースホルダー */}
            <div className="aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#1B2A4A]/10 mb-10">
              <img
                src="/demo/coach/session.png"
                alt="オンラインセッション風景（架空デモ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* セッション説明 */}
            <div className="rounded-2xl bg-white border border-[#1B2A4A]/10 p-6 md:p-8 shadow-sm">
              <p className="text-sm md:text-base text-[#333333] leading-relaxed mb-6">
                1回60分のオンライン個別セッションです。Zoomを使用し、1対1で
                じっくりお話を伺います。コーチが一方的にアドバイスするのではなく、
                対話を通じてあなた自身の気づきと行動を引き出します。
              </p>

              {/* フロー */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { step: "01", label: "ヒアリング", desc: "現状と悩みの共有" },
                  {
                    step: "02",
                    label: "深掘り・気づき",
                    desc: "問いかけで本質へ",
                  },
                  {
                    step: "03",
                    label: "アクション設定",
                    desc: "次の一歩を決める",
                  },
                  {
                    step: "04",
                    label: "行動メモ送付",
                    desc: "セッション後に共有",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#FAFAF8] border border-[#1B2A4A]/10 p-4 text-center"
                  >
                    <div className="text-xs font-bold text-[#5B9BD5] mb-1">
                      STEP {item.step}
                    </div>
                    <div className="font-bold text-sm text-[#1B2A4A]">
                      {item.label}
                    </div>
                    <div className="text-xs text-[#333333]/60 mt-1">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-sm text-[#5B9BD5] font-medium">
                完全オンライン・顔出しなしもOK
              </p>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション8: 料金プラン
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#1B2A4A] mb-12"
              style={serifFont}
            >
              料金プラン
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {/* 体験セッション */}
              <div className="rounded-2xl bg-[#FAFAF8] border border-[#1B2A4A]/10 p-6 shadow-sm flex flex-col">
                <div className="text-sm font-bold text-[#333333]/60">
                  体験セッション
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#1B2A4A]">
                    無料
                  </span>
                  <span className="text-sm text-[#333333]/60">（0円）</span>
                </div>
                <p className="mt-1 text-xs text-[#5B9BD5]">60分 × 1回</p>
                <ul className="mt-5 space-y-2.5 text-sm flex-1">
                  {[
                    "まずはお試し",
                    "オンライン60分",
                    "現状のヒアリング",
                    "方向性の確認",
                    "無理な勧誘なし",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-[#5B9BD5] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 text-sm font-bold hover:bg-[#1B2A4A] hover:text-white transition"
                >
                  無料体験を予約する
                </a>
              </div>

              {/* 3ヶ月集中コース（おすすめ） */}
              <div className="rounded-2xl bg-white border-2 border-[#F4C430] p-6 shadow-md flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4C430] text-[#1B2A4A] text-xs font-bold px-4 py-1 rounded-full">
                  おすすめ
                </div>
                <div className="text-sm font-bold text-[#F4C430]">
                  3ヶ月集中コース
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#1B2A4A]">
                    89,000
                  </span>
                  <span className="text-sm text-[#333333]/60">円</span>
                </div>
                <p className="mt-1 text-xs text-[#5B9BD5]">
                  60分 × 6回（月2回）
                </p>
                <ul className="mt-5 space-y-2.5 text-sm flex-1">
                  {[
                    "本気で変わりたい方へ",
                    "月2回の定期セッション",
                    "行動メモ付き",
                    "チャットサポート",
                    "キャリアプラン設計",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-[#F4C430] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F4C430] text-[#1B2A4A] px-6 py-3 text-sm font-bold hover:bg-[#E5B82A] transition shadow-md"
                >
                  まずは無料体験から
                </a>
              </div>

              {/* 6ヶ月伴走コース */}
              <div className="rounded-2xl bg-[#FAFAF8] border border-[#1B2A4A]/10 p-6 shadow-sm flex flex-col">
                <div className="text-sm font-bold text-[#333333]/60">
                  6ヶ月伴走コース
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#1B2A4A]">
                    158,000
                  </span>
                  <span className="text-sm text-[#333333]/60">円</span>
                </div>
                <p className="mt-1 text-xs text-[#5B9BD5]">
                  60分 × 12回（月2回）
                </p>
                <ul className="mt-5 space-y-2.5 text-sm flex-1">
                  {[
                    "じっくり取り組みたい方へ",
                    "月2回の定期セッション",
                    "行動メモ付き",
                    "チャットサポート（優先対応）",
                    "キャリアプラン設計",
                    "中間振り返りセッション",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-[#5B9BD5] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 text-sm font-bold hover:bg-[#1B2A4A] hover:text-white transition"
                >
                  まずは無料体験から
                </a>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-[#333333]/50">
              ※すべて税込（架空の料金です）
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション9: よくあるご質問（FAQ）
            useStateアコーディオン（6問）
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FAFAF8]">
          <div className="mx-auto max-w-4xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#1B2A4A]"
              style={serifFont}
            >
              よくあるご質問
            </h2>

            <div className="mt-10 space-y-3">
              <FaqItem
                q="コーチングとカウンセリングの違いは？"
                a="カウンセリングは過去の問題を癒すことに焦点を当てますが、コーチングは「これからどうしたいか」という未来に焦点を当てます。心の不調がある方はカウンセリングを、前に進みたい方にはコーチングが適しています。"
              />
              <FaqItem
                q="オンラインの実施方法は？"
                a="Zoomを使用したビデオ通話で実施します。スマートフォンでも参加可能です。顔出しなしでの参加もOKですので、リラックスした環境でお受けください。"
              />
              <FaqItem
                q="転職経験がなくても相談できますか？"
                a="もちろんです。転職を前提としたサービスではありません。今の仕事での悩み、将来のキャリア、働き方の見直しなど、どんなテーマでもお話しいただけます。"
              />
              <FaqItem
                q="1回だけの利用は可能ですか？"
                a="はい、無料体験セッション1回のみのご利用も可能です。体験後に継続コースをご案内しますが、無理な勧誘は一切いたしません。"
              />
              <FaqItem
                q="どんな人が多く利用していますか？"
                a="20代後半〜40代前半の会社員の方が中心です。営業職、エンジニア、事務職、管理職など職種はさまざま。「今のままでいいのか」というモヤモヤを抱えている方が多いです。"
              />
              <FaqItem
                q="キャンセルポリシーは？"
                a="セッション前日の18時までにご連絡いただければ、無料で日程変更が可能です。当日キャンセルの場合はセッション1回分の消化となります。"
              />
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション10: 最終CTA
           ============================ */}
        <section id="cta" className="bg-[#1B2A4A] py-16 md:py-24">
          <motion.div
            className="container mx-auto px-4 md:px-6"
            {...reveal}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-white leading-snug whitespace-pre-line"
                style={serifFont}
              >
                {"まずは、60分だけ\n自分と向き合ってみませんか。"}
              </h2>
              <p className="mt-4 text-white/70 text-sm md:text-lg">
                無料体験セッション ／ 60分 ／ 完全オンライン
              </p>

              {/* CTAボタン */}
              <div className="mt-8">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-[#F4C430] text-[#1B2A4A] px-10 py-4 text-lg font-bold hover:bg-[#E5B82A] transition shadow-lg hover:shadow-xl"
                >
                  無料体験を予約する
                </a>
              </div>

              {/* 安心テキスト */}
              <p className="mt-4 text-xs text-white/50">
                ※ 無理な勧誘は一切しません ／ 顔出しなしOK
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ============================
          フッター
         ============================ */}
      <footer className="py-10 bg-[#FAFAF8] text-center text-xs text-[#333333]/50 border-t border-[#1B2A4A]/10">
        <p
          className="font-bold text-sm text-[#1B2A4A] mb-1"
          style={serifFont}
        >
          佐藤みなみ Coaching
        </p>
        <p className="text-[#333333]/50 mb-3">キャリア羅針盤セッション</p>
        <p>
          【注意】本サイトは架空のサービスを用いたデモです。
          実在の人物・団体・レビューとは一切関係ありません。
        </p>
        <p className="mt-2">&copy; 2026 佐藤みなみ Coaching</p>
      </footer>

      {/* ============================
          フローティングCTA（右下固定）
         ============================ */}
      <motion.a
        href="#cta"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#F4C430] text-[#1B2A4A] flex items-center justify-center text-xs font-bold shadow-xl hover:bg-[#E5B82A] transition hover:scale-105"
        aria-label="無料体験を予約する"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        無料体験
      </motion.a>
    </div>
  );
}

/* ========================================
   共通サブコンポーネント
   ======================================== */

/* セクションラッパー（framer-motionアニメーション付き） */
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

/* FAQアコーディオン（useStateで開閉管理） */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white border border-[#1B2A4A]/10 overflow-hidden">
      {/* 質問ヘッダー */}
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[#1B2A4A] hover:bg-[#1B2A4A]/5 transition"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4">{q}</span>
        <span
          className={`text-[#F4C430] text-xl transition-transform duration-200 flex-shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {/* 回答コンテンツ */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm text-[#333333]/70 leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

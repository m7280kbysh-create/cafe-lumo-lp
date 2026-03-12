// client/src/pages/Clinic.tsx
// 架空の整体院「静穏整体サロン」LP
// 全11セクション + 固定ヘッダー + フローティングCTA + フッター
// カラー: main=#2D6A4F, sub=#74C69D, CTA=#FFD166, bg=#FAF8F3, text=#2C3A2C

import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

/* ---------- アニメーション設定 ---------- */
const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.15 },
};

/* ---------- 見出しフォント ---------- */
const headingFont: React.CSSProperties = {
  fontFamily: "'M PLUS Rounded 1c', sans-serif",
};

/* ============================
   メインコンポーネント
  ============================ */
export default function Clinic() {
  return (
    <div
      className="min-h-screen bg-[#FAF8F3] text-[#2C3A2C]"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* ============================
          固定ヘッダー
         ============================ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F3]/90 backdrop-blur-md border-b border-[#2D6A4F]/15">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
          {/* サロン名 */}
          <span
            className="text-lg md:text-xl font-bold text-[#2D6A4F]"
            style={headingFont}
          >
            静穏整体サロン
          </span>
          {/* ヘッダーCTAボタン */}
          <a
            href="#final-cta"
            className="inline-flex items-center justify-center rounded-full bg-[#FFD166] text-[#2D6A4F] px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold hover:brightness-95 transition shadow-md"
          >
            初回予約はこちら
          </a>
        </div>
      </header>

      {/* ============================
          セクション1: ファーストビュー（FV / Hero）
         ============================ */}
      <section className="relative overflow-hidden pt-16">
        {/* 背景画像 + グリーン系オーバーレイ */}
        <div className="absolute inset-0">
          <img
            src="/demo/clinic/hero.png"
            alt="静穏整体サロンの落ち着いた院内（架空デモ）"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* プレースホルダー */}
          <div className="img-clinic-hero absolute inset-0 bg-gradient-to-br from-[#2D6A4F]/60 to-[#2D6A4F]/40 flex items-center justify-center">
            <span className="text-white/20 text-sm">院内・施術風景</span>
          </div>
          {/* グリーンオーバーレイ */}
          <div className="absolute inset-0 bg-[#2D6A4F]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D6A4F]/20 via-transparent to-[#2C3A2C]/50" />
        </div>

        <div className="relative container mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            {/* キャッチコピー */}
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white whitespace-pre-line"
              style={headingFont}
            >
              {"その痛み、\nあきらめないでください。"}
            </h1>

            {/* サブコピー */}
            <p className="mt-6 text-white/90 text-base md:text-xl leading-relaxed whitespace-pre-line">
              {"目黒のプライベート整体サロン。\nあなたの体と丁寧に向き合います。"}
            </p>

            {/* 数値バッジ3点 */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { value: "10,000件+", label: "施術実績" },
                { value: "89%", label: "リピート率" },
                { value: "創業12年", label: "" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/15 backdrop-blur px-5 py-3 text-center border border-white/20"
                >
                  <div className="text-xl md:text-2xl font-extrabold text-white">
                    {badge.value}
                  </div>
                  {badge.label && (
                    <div className="text-xs text-white/80 mt-1">{badge.label}</div>
                  )}
                </div>
              ))}
            </div>

            {/* メインCTA */}
            <div className="mt-10">
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center rounded-full bg-[#FFD166] text-[#2D6A4F] px-8 py-4 text-lg font-bold hover:brightness-95 transition shadow-lg"
              >
                初回限定 ¥3,980で体験する
              </a>
            </div>

            {/* 安心テキスト */}
            <p className="mt-4 text-sm text-white/80">
              ※ 完全予約制 ／ 着替え無料 ／ 無理な施術勧誘なし
            </p>

            {/* デモ注記 + 医療行為注記 */}
            <p className="mt-6 text-xs text-white/50 leading-relaxed">
              ※本ページは架空の整体院を想定したデモ（ポートフォリオ）です。実在の店舗・人物・団体とは一切関係ありません。
              <br />
              ※医療行為ではありません。
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* ============================
            セクション2: こんな症状でお悩みではありませんか
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-[#2D6A4F]"
              style={headingFont}
            >
              こんな症状でお悩みではありませんか？
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">
              {[
                "長時間のデスクワークで肩・首がつらい",
                "朝起きたときから腰が重い",
                "頭痛が続いて集中できない",
                "マッサージに通っても翌日には戻ってしまう",
                "猫背が気になるが、どうすればいいかわからない",
                "産後の骨盤の歪みが気になる",
                "病院では「異常なし」と言われたが不調が続く",
                "年齢とともに体の回復が遅くなってきた",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-[#FAF8F3] border border-[#2D6A4F]/15 p-4"
                >
                  <span className="text-[#2D6A4F] font-bold text-lg mt-[-2px]">
                    &#9745;
                  </span>
                  <span className="text-sm md:text-base leading-relaxed">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* 共感コピー */}
            <p
              className="mt-8 text-[#2D6A4F] font-bold text-lg md:text-xl"
              style={headingFont}
            >
              ひとつでも当てはまる方、一度ご相談ください。
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション3: 当院の施術アプローチ
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FAF8F3]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#2D6A4F]"
                style={headingFont}
              >
                なぜ、くり返す不調が
                <br className="md:hidden" />
                楽になっていくのか
              </h2>
              <p className="mt-4 text-[#2C3A2C]/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                表面的な症状だけでなく、体全体のバランスを見ながら
                根本的な原因にアプローチすることを大切にしています。
              </p>
            </div>

            {/* アプローチ3カード */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "体全体のバランスを整える",
                  desc: "痛みのある箇所だけでなく、全身の筋肉・骨格のバランスを確認し、体が本来持っている調和を取り戻すサポートをします。",
                },
                {
                  num: "02",
                  title: "一人ひとりに合わせた施術",
                  desc: "カウンセリングと検査をもとに、オーダーメイドの施術プランを作成。お体の状態に寄り添った丁寧なアプローチを行います。",
                },
                {
                  num: "03",
                  title: "セルフケアで持続をサポート",
                  desc: "施術後のストレッチや生活習慣のアドバイスで、良い状態をキープすることを目指します。ご自宅でもできるケアをお伝えします。",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border-2 border-[#2D6A4F]/15 bg-white p-6 relative shadow-sm"
                >
                  <div className="text-4xl font-extrabold text-[#74C69D]/30 absolute top-4 right-4">
                    {item.num}
                  </div>
                  <h3
                    className="text-lg font-bold text-[#2C3A2C] mb-3 mt-2 pr-10"
                    style={headingFont}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2C3A2C]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 個人差注記 */}
            <p className="mt-6 text-xs text-[#2C3A2C]/40 text-center">
              ※効果には個人差があります
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション4: 選ばれる理由3点
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#2D6A4F]"
                style={headingFont}
              >
                選ばれる理由
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "国家資格保有の施術者",
                  desc: "柔道整復師の資格を持つ院長が全施術を担当。確かな知識と技術で、安心してお任せいただけます。（架空）",
                },
                {
                  title: "完全予約制・個室対応",
                  desc: "他のお客様と重ならない、あなただけの時間。周りを気にせずリラックスして施術を受けていただけます。",
                },
                {
                  title: "丁寧なカウンセリング",
                  desc: "初回30分以上かけて、お体の状態と生活習慣をヒアリング。お悩みをじっくりお伺いしたうえで施術に入ります。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#FAF8F3] border border-[#2D6A4F]/15 p-8 shadow-sm hover:shadow-md transition text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <span className="text-2xl text-[#2D6A4F]">
                      {i === 0 ? "🎓" : i === 1 ? "🔒" : "💬"}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-[#2C3A2C] mb-3"
                    style={headingFont}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2C3A2C]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション5: 施術メニュー・料金
           ============================ */}
        <MotionSection id="pricing" className="py-16 md:py-24 bg-[#FAF8F3]">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#2D6A4F]"
                style={headingFont}
              >
                施術メニュー・料金
              </h2>
            </div>

            {/* メニュー表 */}
            <div className="grid gap-4">
              {[
                {
                  name: "【初回限定】お試しコース",
                  time: "約70分",
                  price: "¥3,980",
                  originalPrice: "¥6,600",
                  highlight: true,
                },
                {
                  name: "通常メンテナンスコース",
                  time: "約50分",
                  price: "¥6,600",
                  originalPrice: null,
                  highlight: false,
                },
                {
                  name: "集中ケアコース",
                  time: "約80分",
                  price: "¥9,900",
                  originalPrice: null,
                  highlight: false,
                },
                {
                  name: "産後骨盤ケア",
                  time: "約50分",
                  price: "¥6,600",
                  originalPrice: null,
                  highlight: false,
                },
                {
                  name: "自律神経調整コース",
                  time: "約60分",
                  price: "¥7,700",
                  originalPrice: null,
                  highlight: false,
                },
              ].map((menu, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${
                    menu.highlight
                      ? "bg-[#FFD166]/15 border-2 border-[#FFD166]/50"
                      : "bg-white border border-[#2D6A4F]/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        className="text-base font-bold text-[#2C3A2C]"
                        style={headingFont}
                      >
                        {menu.name}
                      </h3>
                      {menu.highlight && (
                        <span className="text-xs bg-[#FFD166] text-[#2D6A4F] px-2 py-0.5 rounded-full font-bold">
                          おすすめ
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 sm:text-right">
                    <span className="text-xs text-[#2C3A2C]/50">{menu.time}</span>
                    {menu.originalPrice && (
                      <span className="text-sm text-[#2C3A2C]/40 line-through">
                        {menu.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-extrabold text-[#2C3A2C]">
                      {menu.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 注記 */}
            <div className="mt-6 space-y-1 text-xs text-[#2C3A2C]/50">
              <p>※すべて税込（架空）</p>
              <p>※保険適用外の自費施術です</p>
              <p>※通院頻度の目安：最初は週1回、安定後は月1〜2回</p>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション6: 院長紹介
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#2D6A4F]"
                style={headingFont}
              >
                院長紹介
              </h2>
            </div>

            <div className="rounded-2xl bg-[#FAF8F3] border border-[#2D6A4F]/15 p-6 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                {/* 院長写真 */}
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#2D6A4F]/20 mx-auto md:mx-0 flex-shrink-0">
                  <img
                    src="/demo/clinic/staff.png"
                    alt="院長 田中一朗（架空）"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-xl font-bold text-[#2C3A2C]"
                    style={headingFont}
                  >
                    院長　田中 一朗（架空）
                  </h3>
                  <p className="text-sm text-[#2C3A2C]/60 mt-1">
                    柔道整復師（架空）／ はり師・きゅう師（架空）
                  </p>

                  {/* 経歴 */}
                  <div className="mt-4 text-sm text-[#2C3A2C]/80 leading-relaxed space-y-2">
                    <p>
                      <span className="font-bold text-[#2D6A4F]">経歴：</span>
                      整形外科にて5年間の臨床経験を積んだのち、地域の方に寄り添える場を作りたいという想いから独立。目黒に「静穏整体サロン」を開業（架空）。
                    </p>
                    <p>
                      <span className="font-bold text-[#2D6A4F]">メッセージ：</span>
                      「お体の不調には、必ず何かしらの理由があります。その声に耳を傾け、一緒に原因を探り、あなたらしい毎日を取り戻すお手伝いがしたい。そんな想いで日々施術に向き合っています。」
                    </p>
                  </div>
                </div>
              </div>

              {/* スタッフ */}
              <div className="mt-8 pt-6 border-t border-[#2D6A4F]/10 flex items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-[#2D6A4F]/15 flex-shrink-0">
                  <img
                    src="/demo/clinic/staff-2.png"
                    alt="スタッフ 佐藤（架空）"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#2C3A2C]" style={headingFont}>
                    スタッフ　佐藤（架空）
                  </p>
                  <p className="text-xs text-[#2C3A2C]/60 mt-1">
                    受付・サポート担当。お気軽にお声がけください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション7: 患者様の声
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FAF8F3]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2
                className="text-2xl md:text-4xl font-extrabold text-[#2D6A4F]"
                style={headingFont}
              >
                患者様の声
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  n: 1,
                  symptom: "腰痛",
                  age: "40代",
                  gender: "男性",
                  text: "長年の腰の重だるさが気になり通い始めました。3回ほど通ったあたりから、朝の支度が楽になった気がします。先生の説明も丁寧で、自分の体への理解が深まりました。",
                },
                {
                  n: 2,
                  symptom: "肩こり",
                  age: "30代",
                  gender: "女性",
                  text: "デスクワークで肩がバキバキだったのですが、セルフケアも教えてもらえるので、施術と合わせて少しずつ楽になっていくのを感じています。個室なのも嬉しいです。",
                },
                {
                  n: 3,
                  symptom: "頭痛",
                  age: "50代",
                  gender: "女性",
                  text: "週に何度もあった頭痛が気になり、友人の紹介で伺いました。首や肩のバランスを整えてもらいながら、生活習慣のアドバイスもいただけて助かっています。",
                },
                {
                  n: 4,
                  symptom: "産後ケア",
                  age: "30代",
                  gender: "女性",
                  text: "産後の骨盤が気になっていました。子連れ相談OKとのことで安心して通えています。施術後は体が軽くなった感覚があり、育児も少し前向きになれます。",
                },
                {
                  n: 5,
                  symptom: "姿勢改善",
                  age: "60代",
                  gender: "男性",
                  text: "年齢とともに姿勢が悪くなり、背中のハリが気になっていました。丁寧に体の状態を説明してくれるので、納得感を持って通えています。無理な勧誘もなく好印象です。",
                },
              ].map((review) => (
                <div
                  key={review.n}
                  className="rounded-2xl bg-white border border-[#2D6A4F]/15 p-6"
                >
                  {/* アバター + 属性 */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={`/demo/clinic/testimonial-${review.n}.png`}
                      alt={`患者様の声${review.n}`}
                      className="w-14 h-14 rounded-full object-cover border border-[#2D6A4F]/15"
                      loading="lazy"
                    />
                    <div>
                      <span className="inline-block text-xs bg-[#2D6A4F]/10 text-[#2D6A4F] px-2 py-0.5 rounded-full font-bold mb-1">
                        {review.symptom}
                      </span>
                      <div className="text-xs text-[#2C3A2C]/60">
                        {review.age} {review.gender}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#2C3A2C] leading-relaxed">
                    「{review.text}」
                  </p>
                  {/* 各レビューに個人差注記 */}
                  <p className="mt-3 text-[10px] text-[#2C3A2C]/40">
                    ※個人の感想であり、効果には個人差があります
                  </p>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション8: 初回来院の流れ
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#2D6A4F]"
              style={headingFont}
            >
              初回来院の流れ
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-5">
              {[
                {
                  num: "01",
                  title: "ご予約",
                  desc: "WEB・LINE・お電話からご予約ください。ご希望の日時をお伝えいただければ、折り返しご連絡いたします。",
                },
                {
                  num: "02",
                  title: "ご来院・問診票の記入",
                  desc: "ご来院後、問診票にお体の状態やお悩みをご記入いただきます。お着替えもご用意しております。",
                },
                {
                  num: "03",
                  title: "カウンセリング・検査",
                  desc: "問診票をもとに、姿勢チェックや可動域検査を行い、お体の状態を詳しく把握します。",
                },
                {
                  num: "04",
                  title: "施術",
                  desc: "検査結果に基づき、お一人おひとりに最適な施術プランで丁寧にアプローチします。",
                },
                {
                  num: "05",
                  title: "アフターケア・次回のご提案",
                  desc: "施術後のお体の変化を確認し、セルフケアのアドバイスと通院の目安をご説明します。",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl bg-[#FAF8F3] border border-[#2D6A4F]/15 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-extrabold tracking-wider text-[#2D6A4F] bg-[#74C69D]/20 px-2 py-1 rounded">
                      {step.num}
                    </span>
                    <div className="h-px flex-1 bg-[#2D6A4F]/10" />
                  </div>
                  <h3
                    className="text-base font-bold text-[#2C3A2C]"
                    style={headingFont}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#2C3A2C]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 施術風景 */}
            <div className="aspect-video mt-8 rounded-2xl overflow-hidden border border-[#2D6A4F]/15">
              <img
                src="/demo/clinic/treatment.png"
                alt="施術風景（架空デモ）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション9: よくあるご質問（FAQ）
            useStateによるアコーディオン
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-[#FAF8F3]">
          <div className="mx-auto max-w-4xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#2D6A4F]"
              style={headingFont}
            >
              よくあるご質問
            </h2>

            <div className="mt-10 space-y-3">
              <FaqItem
                q="どんな服装で行けばいいですか？"
                a="動きやすい服装でお越しいただくのが理想ですが、お着替えもご用意しておりますので、お仕事帰りでもそのままお越しいただけます。"
              />
              <FaqItem
                q="子連れでも大丈夫ですか？"
                a="事前にご相談いただければ対応いたします。お子様の年齢や状況に応じて、ベストな対応を一緒に考えさせてください。"
              />
              <FaqItem
                q="駐車場はありますか？"
                a="専用駐車場はございませんが、近隣にコインパーキングが複数ございます。詳細はご予約時にご案内いたします。"
              />
              <FaqItem
                q="保険は使えますか？"
                a="当院は自費施術のみとなります。健康保険の適用はございませんが、その分お一人おひとりに十分な時間をかけて丁寧に施術いたします。"
              />
              <FaqItem
                q="施術は痛いですか？"
                a="強い刺激を加える施術は行いません。施術中も都度お声がけし、力加減を確認しながら進めますのでご安心ください。"
              />
              <FaqItem
                q="予約なしでも受けられますか？"
                a="当院は完全予約制です。LINE・お電話・WEBからご予約をお願いいたします。当日のご予約も空きがあれば対応可能です。"
              />
              <FaqItem
                q="何回くらい通えばいいですか？"
                a="お体の状態や症状によって異なります。まずは初回の施術でお体の状態を確認し、通院の目安を丁寧にご説明いたします。"
              />
              <FaqItem
                q="キャンセルはできますか？"
                a="前日までにご連絡いただければキャンセル・変更が可能です。当日キャンセルの場合はキャンセル料が発生する場合がございます。"
              />
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション10: 院内ギャラリー
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-5xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#2D6A4F] mb-10"
              style={headingFont}
            >
              院内の様子
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { src: "/demo/clinic/gallery-1.png", alt: "院内の様子1（架空デモ）" },
                { src: "/demo/clinic/gallery-2.png", alt: "院内の様子2（架空デモ）" },
                { src: "/demo/clinic/gallery-3.png", alt: "院内の様子3（架空デモ）" },
              ].map((img, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#2D6A4F]/15 shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-[#2C3A2C]/40">
              ※画像は架空のデモです
            </p>
          </div>
        </MotionSection>

        {/* ============================
            セクション11: アクセス・営業時間
           ============================ */}
        <MotionSection className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2
              className="text-2xl md:text-4xl font-extrabold text-center text-[#2D6A4F]"
              style={headingFont}
            >
              アクセス・営業時間
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {/* 左カラム: 外観写真 + 地図プレースホルダー */}
              <div className="space-y-4">
                {/* 院内・個室 */}
                <div className="aspect-video rounded-2xl overflow-hidden border border-[#2D6A4F]/15">
                  <img
                    src="/demo/clinic/room.png"
                    alt="完全個室の施術空間（架空デモ）"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* 地図プレースホルダー */}
                <div className="rounded-2xl bg-gradient-to-br from-[#FAF8F3] to-[#2D6A4F]/5 border border-[#2D6A4F]/15 h-48 flex items-center justify-center">
                  <div className="text-center text-[#2D6A4F]/30">
                    <div className="text-3xl mb-2">📍</div>
                    <span className="text-sm">Google Map（プレースホルダー）</span>
                  </div>
                </div>
              </div>

              {/* 右カラム: 情報テーブル */}
              <div className="space-y-4">
                <InfoRow label="院名" value="静穏整体サロン（架空）" />
                <InfoRow
                  label="住所"
                  value="〒153-0000 東京都目黒区○○ 1-2-3（架空）"
                />
                <InfoRow label="最寄り駅" value="目黒駅 徒歩5分（架空）" />
                <InfoRow
                  label="診療時間"
                  value={
                    <>
                      平日 10:00〜20:00
                      <br />
                      土日 10:00〜18:00
                    </>
                  }
                />
                <InfoRow label="定休日" value="水曜・祝日" />
                <InfoRow
                  label="駐車場"
                  value="近隣コインパーキングあり"
                />
              </div>
            </div>
          </div>
        </MotionSection>

        {/* ============================
            セクション11: 最終CTA
           ============================ */}
        <section id="final-cta" className="py-16 md:py-24 bg-[#2D6A4F] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-2xl md:text-3xl font-extrabold whitespace-pre-line"
                style={headingFont}
              >
                {"まずは一度、お体の状態を\n聞かせてください。"}
              </h2>

              {/* メインCTA */}
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#FFD166] text-[#2D6A4F] px-10 py-4 text-lg font-bold hover:brightness-95 transition shadow-lg"
                >
                  初回 ¥3,980で体験する
                </a>
              </div>

              {/* サブボタン */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#74C69D] text-white px-8 py-3 text-sm font-bold hover:brightness-95 transition"
                >
                  LINEで予約
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-8 py-3 text-sm font-bold hover:bg-white/10 transition"
                >
                  電話で予約
                </a>
              </div>

              {/* 安心テキスト */}
              <p className="mt-6 text-sm text-white/80">
                ※ 当日予約OK ／ 着替え無料 ／ 無理な勧誘なし
              </p>
              <p className="mt-2 text-xs text-white/50">
                ※本ページは架空のデモです。予約ボタンは実際には機能しません。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ============================
          フッター
         ============================ */}
      <footer className="py-10 text-center text-xs text-[#2C3A2C]/50 border-t border-[#2D6A4F]/10 bg-[#FAF8F3]">
        <p className="font-bold text-sm text-[#2C3A2C]/70" style={headingFont}>
          静穏整体サロン
        </p>
        <p className="mt-1 text-[#2C3A2C]/40 text-xs">
          あなたの体と丁寧に向き合うプライベートサロン
        </p>
        <p className="mt-3">
          【注意】本サイトは架空の整体院を想定したデモ（ポートフォリオ）です。
          <br />
          実在の店舗・人物・団体とは一切関係ありません。
        </p>
        <p className="mt-2">&copy; 2026</p>
      </footer>

      {/* ============================
          フローティングCTA（右下固定・円形）
         ============================ */}
      <a
        href="#final-cta"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center rounded-full bg-[#FFD166] text-[#2D6A4F] text-sm font-bold shadow-xl hover:brightness-95 transition hover:scale-105"
        aria-label="予約する"
      >
        予約
      </a>
    </div>
  );
}

/* ============================
   サブコンポーネント
  ============================ */

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

/* FAQアコーディオン（useState使用） */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white border border-[#2D6A4F]/15 overflow-hidden">
      {/* アコーディオンヘッダー */}
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[#2C3A2C] hover:bg-[#2D6A4F]/5 transition"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4">{q}</span>
        <span
          className={`text-[#2D6A4F] text-xl transition-transform duration-200 flex-shrink-0 ${
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
        <p className="px-5 pb-4 text-sm text-[#2C3A2C]/70 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* アクセス情報の行コンポーネント */
function InfoRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-[#2D6A4F]/10 pb-3">
      <div
        className="text-sm font-bold text-[#2D6A4F] w-20 flex-shrink-0"
        style={headingFont}
      >
        {label}
      </div>
      <div className="text-sm text-[#2C3A2C]/80 leading-relaxed">{value}</div>
    </div>
  );
}

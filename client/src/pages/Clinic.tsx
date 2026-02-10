import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

// --- Data: Concerns (Symptoms) ---
const concerns = [
  {
    key: "shoulder",
    label: "肩こり・首の不調",
    menu: "深層筋アプローチ",
    time: "50分",
    policy:
      "長時間のデスクワークやスマホ利用で固まった筋肉の深層部にアプローチ。緊張を和らげ、巡りを促すことで、肩周りの軽さを目指します。",
    points: [
      "首・肩・背中の可動域チェック",
      "トリガーポイントへの的確なアプローチ",
      "腕や指先のしびれ感のヒアリング",
    ],
  },
  {
    key: "lowback",
    label: "腰の重さ・違和感",
    menu: "骨盤調整バランスケア",
    time: "50分",
    policy:
      "体の土台である骨盤周りのバランスに着目。関連する股関節や背面の筋肉を丁寧に整え、腰への負担が少ない、安定した状態を目指します。",
    points: [
      "立ち姿勢・座り姿勢のバランス確認",
      "股関節・脚の動きの左右差チェック",
      "日常生活での負担要因のヒアリング",
    ],
  },
  {
    key: "posture",
    label: "姿勢の乱れ・猫背",
    menu: "体幹コンディショニング",
    time: "70分",
    policy:
      "美しい姿勢は、体の中心である体幹から。呼吸を整えながら、背骨や肩甲骨周りの柔軟性を取り戻し、自然と伸びる体づくりをサポートします。",
    points: [
      "壁を使った姿勢のセルフチェック",
      "肩甲骨周りの柔軟性テスト",
      "呼吸の深さとリズムの確認",
    ],
  },
  {
    key: "sleep",
    label: "睡眠の質・自律神経",
    menu: "ヘッド＆リラクゼーション",
    time: "50分",
    policy:
      "頭部や首周りの緊張は、思考のクリアさや睡眠の質に影響します。優しいタッチで頭皮をほぐし、深いリラックス状態へ導くことを目指します。",
    points: [
      "頭皮の固さ・こりのチェック",
      "眼の疲れ・顎周りの緊張の確認",
      "リラックスしやすい環境の提供",
    ],
  },
  {
    key: "postpartum",
    label: "産後の骨盤ケア",
    menu: "産後リカバリーサポート",
    time: "50分",
    policy:
      "出産後のデリケートな時期に合わせた、優しい骨盤ケアです。開いた骨盤をゆっくりと整え、育児でかかる体への負担を軽減するサポートをします。",
    points: [
      "骨盤の開き・歪みの状態チェック",
      "授乳や抱っこでの体の使い方相談",
      "腹直筋離開の状態の確認",
    ],
  },
] as const;

type ConcernKey = (typeof concerns)[number]["key"];

// --- Scroll Reveal (IntersectionObserver, no libs) ---
function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [inView, options]);

  return { ref, inView };
}

function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[2px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

// --- Hook: concern selector synced with ?concern= ---
const useConcern = () => {
  const [location, navigate] = useLocation();

  const url = useMemo(() => new URL(location, "https://local.example"), [location]);

  const activeKey = useMemo(() => {
    const key = url.searchParams.get("concern");
    return key && concerns.some((c) => c.key === key) ? (key as ConcernKey) : concerns[0].key;
  }, [url]);

  const activeConcern = useMemo(
    () => concerns.find((c) => c.key === activeKey) || concerns[0],
    [activeKey]
  );

  const selectConcern = (key: ConcernKey) => {
    const next = new URL(location, "https://local.example");
    next.searchParams.set("concern", key);
    const qs = next.searchParams.toString();
    navigate(qs ? `${next.pathname}?${qs}` : next.pathname, { replace: true });
  };

  return { activeKey, selectConcern, activeConcern };
};

// --- Main Component ---
const Clinic = () => {
  return (
    <div className="bg-[#061412] text-gray-200 font-sans selection:bg-teal-400/30">
      <Header />
      <main>
        <HeroSection />
        <ConcernSelector />
        <ReasonsSection />
        <FlowSection />
        <MenuSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
        <AccessSection />
      </main>
      <Footer />
    </div>
  );
};

// --- Page Sections ---
const Header = () => (
  <header className="sticky top-0 bg-[#061412]/70 backdrop-blur-lg z-50 border-b border-white/10">
    <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
      <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
        ← 提供内容一覧へ戻る
      </Link>

      <a
        href="#contact"
        className="px-5 py-2 rounded-full text-sm font-semibold bg-gray-200 text-gray-800 hover:bg-white
                   focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                   focus:ring-offset-[#061412] transition-colors duration-300"
      >
        ご予約
      </a>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative h-[90vh] min-h-[650px] flex items-center justify-center text-center text-white px-4 sm:px-6 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-[#061412]">
      <img
        src="/demo/clinic/hero.png"
        alt="静かで落ち着いた施術室の風景（架空）"
        className="w-full h-full object-cover opacity-35"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061412] via-[#061412]/35 to-[#061412]/70" />
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-emerald-300/5 blur-3xl" />
    </div>

    <div className="relative z-10 max-w-3xl">
      <Reveal>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-wider leading-tight">
          静かに整う。
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl text-white/90">日常が、軽くなる。</span>
        </h1>
      </Reveal>

      <Reveal delayMs={100}>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-relaxed">
          目黒のプライベート整体サロン「静穏」（架空）。
          <br />
          一人ひとりの身体と向き合い、今の状態に寄り添う丁寧な施術を。
        </p>
      </Reveal>

      <Reveal delayMs={180} className="mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#concerns"
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold bg-white text-gray-900 hover:bg-gray-200
                       focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                       focus:ring-offset-[#061412] transition-all duration-300"
          >
            お悩みから探す
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold border border-white/50 text-white hover:bg-white/10
                       focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                       focus:ring-offset-[#061412] transition-colors duration-300"
          >
            ご予約・お問い合わせ
          </a>
        </div>
      </Reveal>

      <Reveal delayMs={260} className="mt-10">
        <p className="text-xs text-white/60">
          ※本ページは架空店舗のデモ（ポートフォリオ）です。医療的な効果を保証する表現は行いません。
        </p>
      </Reveal>
    </div>
  </section>
);

const ConcernSelector = () => {
  const { activeKey, selectConcern, activeConcern } = useConcern();

  return (
    <section id="concerns" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#061412] to-[#0B1220]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-[520px] w-[720px] rounded-full bg-teal-500/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium">お悩みから探す</h2>
          <p className="mt-4 text-gray-400">気になる症状を選ぶと、おすすめ内容が切り替わります。</p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <Reveal className="lg:w-1/4">
            <div className="flex lg:flex-col overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0 pb-4 lg:pb-0">
              <div className="flex lg:flex-col gap-2 flex-shrink-0">
                {concerns.map((concern) => (
                  <button
                    key={concern.key}
                    onClick={() => selectConcern(concern.key)}
                    aria-pressed={activeKey === concern.key}
                    className={`w-full text-left px-4 py-3 rounded-md text-sm font-semibold transition-all duration-300
                                focus:outline-none focus:ring-2 focus:ring-teal-400/80 ${
                                  activeKey === concern.key
                                    ? "bg-white/10 text-white"
                                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                                }`}
                  >
                    {concern.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Content Card */}
          <Reveal className="lg:w-3/4" delayMs={80}>
            <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-lg min-h-[420px] overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-emerald-300/5 blur-3xl" />

              <div className="relative">
                {/* keyで切替時に再描画（軽いフェード感） */}
                <div key={activeConcern.key} className="transition-opacity duration-300">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="inline-block bg-teal-400/10 text-teal-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                        おすすめメニュー
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-medium">{activeConcern.menu}</h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xl sm:text-2xl font-bold">{activeConcern.time}</p>
                      <p className="text-sm text-gray-400">目安</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/10 my-6" />

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-white mb-3">施術方針</h4>
                      <p className="text-gray-300 leading-relaxed">{activeConcern.policy}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">初回のチェックポイント</h4>
                      <ul className="space-y-2">
                        {activeConcern.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="w-4 h-4 mr-3 mt-1 text-teal-400 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <a
                      href="#contact"
                      className="inline-block px-8 py-3 rounded-full font-semibold bg-teal-500 text-white hover:bg-teal-600
                                 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                                 focus:ring-offset-[#0B1220] transition-colors duration-300"
                    >
                      「{activeConcern.label}」について相談・予約する
                    </a>
                    <p className="mt-3 text-xs text-gray-500">
                      ※症状や状態によって内容は変わります。無理のない範囲でご相談ください。（架空）
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const ReasonsSection = () => (
  <section className="py-20 md:py-28 relative">
    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/5 to-transparent -z-10" />
    <div className="container mx-auto px-4 sm:px-6">
      <Reveal className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-medium">静穏が選ばれる理由</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <Reveal delayMs={0}>
          <ReasonCard
            title="丁寧なカウンセリング"
            description="初回は特に時間をかけ、お悩みや生活習慣をヒアリング。今の状態を共有しながら進めます。"
          />
        </Reveal>
        <Reveal delayMs={80}>
          <ReasonCard
            title="完全予約・個室空間"
            description="あなただけの時間を確保。周りを気にせず、静かな環境でリラックスして受けていただけます。"
          />
        </Reveal>
        <Reveal delayMs={160}>
          <ReasonCard
            title="セルフケアのご提案"
            description="施術後の状態に合わせて、ご自宅でできる簡単なストレッチや生活習慣の工夫をご提案します。"
          />
        </Reveal>
        <Reveal delayMs={240}>
          <ReasonCard
            title="清潔で落ち着いた院内"
            description="衛生管理を徹底し、清潔な空間を維持。落ち着く照明と香りで、五感から整える時間を。"
          />
        </Reveal>
      </div>
    </div>
  </section>
);

const FlowSection = () => (
  <section className="py-20 md:py-28 bg-[#0B1220]">
    <div className="container mx-auto px-4 sm:px-6">
      <Reveal className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-medium">初めての方へ（施術の流れ）</h2>
        <p className="mt-4 text-gray-400">不安が残らないよう、流れと目的を丁寧に共有します。（架空）</p>
      </Reveal>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

        <FlowStep
          delayMs={0}
          number="01"
          title="カウンセリング"
          description="専用シートにご記入いただき、生活習慣や気になる点を詳しくお伺いします。"
        />
        <FlowStep
          delayMs={90}
          number="02"
          title="検査・状態の確認"
          description="体の動きやバランスを確認し、現状と方針を分かりやすく共有します。"
        />
        <FlowStep
          delayMs={180}
          number="03"
          title="オーダーメイド施術"
          description="状態に合わせた手技で進行。力加減は都度お声がけし、無理のない範囲で行います。"
        />
        <FlowStep
          delayMs={270}
          number="04"
          title="アフターケア提案"
          description="変化を確認し、ご自宅でできるセルフケアや次回目安をご提案します。"
        />
      </div>
    </div>
  </section>
);

const MenuSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <Reveal className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-medium">メニュー・料金</h2>
        <p className="mt-4 text-gray-400">料金はすべて税込です。（架空）</p>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-6">
        <Reveal delayMs={0}>
          <MenuItem
            title="初回お試しコース"
            time="約70分"
            price="¥6,600"
            description="カウンセリング・検査・施術を体験。ご自身の身体と向き合う第一歩に。"
          />
        </Reveal>
        <Reveal delayMs={90}>
          <MenuItem
            title="通常メンテナンスコース"
            time="約50分"
            price="¥8,800"
            description="定期的な体のメンテナンスに。その日の状態に合わせて丁寧に整えます。"
          />
        </Reveal>
        <Reveal delayMs={180}>
          <MenuItem
            title="集中ケアコース"
            time="約80分"
            price="¥13,200"
            description="特に気になる箇所がある方へ。全身のバランスを見ながらじっくりケアします。"
          />
        </Reveal>

        <Reveal delayMs={260} className="pt-6">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-sm text-gray-300 leading-relaxed">
            <p className="font-semibold text-white mb-2">補足（架空）</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>施術内容は状態により調整します。</li>
              <li>無理な勧誘や強引な回数提案は行いません。</li>
              <li>医療行為ではなく、体のコンディショニングを目的とした内容です。</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const GallerySection = () => (
  <section className="py-20 md:py-28 bg-[#0B1220]">
    <div className="container mx-auto px-4 sm:px-6">
      <Reveal className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-medium">院内紹介</h2>
        <p className="mt-4 text-gray-400">静かな時間を過ごせる空間づくり。（架空）</p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Reveal delayMs={0}>
          <GalleryCard img="/demo/clinic/room.png" alt="清潔感のある施術室（架空）" label="施術室" />
        </Reveal>
        <Reveal delayMs={70}>
          <GalleryCard img="/demo/clinic/treatment.png" alt="施術スペース（架空）" label="施術スペース" />
        </Reveal>
        <Reveal delayMs={140}>
          <GalleryCard img="/demo/clinic/staff.png" alt="カウンセリング風景（架空）" label="カウンセリング" />
        </Reveal>
        <Reveal delayMs={210}>
          <GalleryCard img="/demo/clinic/gallery-1.png" alt="院内のインテリア（架空）" label="インテリア" />
        </Reveal>
        <Reveal delayMs={280} className="col-span-2 md:col-span-3">
          <GalleryCard img="/demo/clinic/gallery-2.png" alt="受付エリア（架空）" label="受付" className="h-full" />
        </Reveal>
      </div>

      <Reveal delayMs={340} className="mt-10 text-xs text-gray-500 text-center">
        ※画像はデモ用（架空）です。実在の施設ではありません。
      </Reveal>
    </div>
  </section>
);

const FaqSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <Reveal className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-medium">よくあるご質問</h2>
      </Reveal>

      <Reveal delayMs={80} className="max-w-3xl mx-auto space-y-4">
        <FaqItem
          question="着替えは必要ですか？"
          answer="動きやすい服装であればそのままでも可能ですが、無料のお着替えもご用意している想定です。（架空）"
        />
        <FaqItem
          question="施術は痛いですか？"
          answer="強い刺激を前提とせず、心地よいと感じる強さを目安に進めます。力加減は都度確認します。（架空）"
        />
        <FaqItem
          question="健康保険は使えますか？"
          answer="当サロンは自費のみの想定です。保険適用については各制度をご確認ください。（架空）"
        />
        <FaqItem
          question="どのくらいの頻度で通えば良いですか？"
          answer="状態によって異なります。まずは短い間隔で様子を見て、安定してきたらメンテナンスへ移行する方が多い想定です。（架空）"
        />
        <FaqItem
          question="予約なしでも行けますか？"
          answer="完全予約制の想定です。事前にご予約のうえご来店ください。（架空）"
        />
      </Reveal>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-[#0B1220]">
    <div className="container mx-auto px-4 sm:px-6 text-center">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-serif font-medium">ご予約・お問い合わせ</h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-400">
          ご予約はWEB、LINE、お電話にて承ります。ご不明な点もお気軽にご連絡ください。（架空）
        </p>
      </Reveal>

      <Reveal delayMs={120} className="mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 rounded-md font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300"
          >
            WEB予約へ進む
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 rounded-md font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300"
          >
            LINEで予約
          </a>
          <a
            href="tel:000-0000-0000"
            className="w-full sm:w-auto px-8 py-4 rounded-md font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors duration-300"
          >
            電話で問い合わせ
          </a>
        </div>
      </Reveal>

      <Reveal delayMs={220} className="mt-12 text-sm text-gray-500 max-w-2xl mx-auto text-left space-y-4">
        <p>※施術中はお電話に出られない場合がある想定です。留守電にメッセージを残してください。（架空）</p>
        <p>
          ※キャンセルポリシー（架空）：ご予約の変更・キャンセルは前日まで。当日キャンセルは施術代金の100%を申し受ける場合があります。
        </p>
      </Reveal>
    </div>
  </section>
);

const AccessSection = () => (
  <section className="py-20 text-center">
    <div className="container mx-auto px-4 sm:px-6">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">アクセス</h2>
      </Reveal>

      <Reveal delayMs={90} className="text-gray-300 space-y-1">
        <p>静穏整体サロン（架空）</p>
        <p>東京都目黒区（架空の住所です）</p>
        <p>JR山手線・東急目黒線「目黒駅」より徒歩5分（架空）</p>
        <p className="pt-4">営業時間：平日 10:00-20:00 / 土日 10:00-18:00（架空）</p>
      </Reveal>

      <Reveal delayMs={170} className="mt-8 max-w-3xl mx-auto">
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 text-left">
          <p className="text-sm text-gray-400 mb-2">地図（ダミー）</p>
          <div className="aspect-[16/8] rounded-lg bg-[#061412] border border-white/10 grid place-items-center text-gray-500 text-sm">
            MAP PLACEHOLDER
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-[#061412] border-t border-white/10 text-center">
    <p className="text-xs text-gray-500">
      【注意】本サイトは架空の店舗・サービスを用いたデモ（ポートフォリオ）です。実在の人物・団体とは一切関係ありません。
    </p>
  </footer>
);

// --- Reusable Components ---
const ReasonCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center backdrop-blur">
    <h3 className="font-bold text-lg text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const FlowStep = ({
  number,
  title,
  description,
  delayMs = 0,
}: {
  number: string;
  title: string;
  description: string;
  delayMs?: number;
}) => (
  <Reveal delayMs={delayMs}>
    <div className="relative pl-12 md:pl-0 md:flex md:items-start md:gap-8 mb-12 last:mb-0">
      <div className="md:w-1/2 md:text-right md:pr-8">
        <div className="absolute left-4 md:left-1/2 top-1 w-10 h-10 bg-teal-500/10 border border-teal-500/30 rounded-full flex items-center justify-center -translate-x-1/2">
          <span className="text-teal-300 font-bold">{number}</span>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 pt-1 md:pt-0">
        <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  </Reveal>
);

const MenuItem = ({
  title,
  time,
  price,
  description,
}: {
  title: string;
  time: string;
  price: string;
  description: string;
}) => (
  <div className="border-b border-white/10 pb-6">
    <div className="flex justify-between items-start gap-4">
      <h3 className="font-bold text-lg text-white">{title}</h3>
      <div className="text-right flex-shrink-0">
        <p className="font-bold text-lg text-white">{price}</p>
        <p className="text-sm text-gray-400">{time}</p>
      </div>
    </div>
    <p className="mt-2 text-gray-400 text-sm">{description}</p>
  </div>
);

const GalleryCard = ({
  img,
  alt,
  label,
  className = "",
}: {
  img: string;
  alt: string;
  label: string;
  className?: string;
}) => (
  <div className={`relative aspect-video rounded-lg overflow-hidden bg-[#061412] group ${className}`}>
    <img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
    <p className="absolute bottom-3 left-3 text-sm font-bold text-white drop-shadow">{label}</p>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <details className="border-b border-white/10 pb-4 group">
    <summary className="font-bold text-white cursor-pointer flex justify-between items-center list-none py-2">
      <span>{question}</span>
      <svg
        className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <p className="mt-2 text-gray-300 leading-relaxed pr-6">{answer}</p>
  </details>
);

export default Clinic;

/*
--- 簡易チェックリスト ---
[ ] /clinic 直URLで表示OK（wouterのRoute設定が前提）
[ ] /clinic?concern=posture などで症状が初期反映される
[ ] タブ押下で URL の ?concern= が更新される
[ ] 画像が404でも崩れない（背景色・比率で担保）
[ ] スクロールで要素が出現する（prefers-reduced-motion は即表示）
[ ] 架空注記が入っている（Hero/フッター）
*/

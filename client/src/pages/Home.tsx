/* Design Philosophy: Soft Modernism with Organic Flow
 * - 柔らかな曲線と流動的なレイアウト
 * - 温かみのある色彩（Terracotta, Moss Green, Soft Coral）
 * - 視覚的な階層と奥行き（soft shadows, backdrop blur）
 * - 滑らかなアニメーション（opacity + scale transitions）
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Wifi, Zap, Clock, MapPin, CreditCard, HelpCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/gQEDWwSU0QSNNZCAOLDF7B/sandbox/JS8iLOVO79sohP2BzrZf0W-img-1_1770451783000_na1fn_aGVyby1jYWZlLWludGVyaW9y.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1FFRFd3U1UwUVNOTlpDQU9MREY3Qi9zYW5kYm94L0pTOGlMT1ZPNzlzb2hQMkJ6clpmMFctaW1nLTFfMTc3MDQ1MTc4MzAwMF9uYTFmbl9hR1Z5YnkxallXWmxMV2x1ZEdWeWFXOXkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CIFHgJaYtBRHg1kcuG7SZkjHia8ezdcNu-IvoooLz2xo6KnpRNCxCvidvaqfli7I80PqnSsddBH-l3FagM1gFDMaP5WL3ocZDX7liuvvFPLVjcEW~gQcoOItVEX7V29JV1ixeXKYFZ5IwHBI7iZtGSwLEdVkxktuwXVPdgXn1zSRAe0zS-K~w7POWXrV4aeTC5sIFlVKyZ-G6iObMhRWIew6BkIn3DdtdH0-rZiWJwDvdHxh8ASymZq67fX~fu0DEd4cqWqLWUhupmrH16FN9xZtwCAJwSXHniC1BHDQ8xBbNn3nWSk0oFsTVrKbZ7qiBLU-Ui0CSCiK7G7wOyaVIg__')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-foreground animate-fade-in-up">
            都会の喧騒を忘れ、
            <br />
            自分だけの時間に浸る。
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            一杯のスペシャルティコーヒーが、あなたの日常に、小さな灯りをともします。
            <br />
            Cafe Lumoは、静かに過ごしたいあなたのための隠れ家です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Lumoのこだわりを見る
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-card/90 backdrop-blur-sm hover:bg-card text-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              メニューをのぞいてみる
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-foreground/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative -mt-1">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,80 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container">
          <h2
            id="features-title"
            data-animate
            className={`text-4xl md:text-5xl font-display text-center mb-16 transition-all duration-700 ${
              isVisible["features-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            3つの魅力
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "feature-1",
                icon: Coffee,
                title: "自家焙煎の、豊かな香り",
                description: "店内で丁寧に焙煎した豆だけを使用。扉を開けた瞬間から、あなたをコーヒーの香りで包み込みます。",
              },
              {
                id: "feature-2",
                icon: Zap,
                title: "季節を味わう、限定ラテ",
                description: "旬の素材を使った、ここでしか飲めない季節限定のラテ。訪れるたびに新しい発見があります。",
              },
              {
                id: "feature-3",
                icon: Wifi,
                title: "ひとり時間に、心地よい空間",
                description: "全席に電源・Wi-Fiを完備。読書や作業はもちろん、ただ静かに過ごす時間も、誰にも邪魔されません。",
              },
            ].map((feature, index) => (
              <Card
                key={feature.id}
                id={feature.id}
                data-animate
                className={`glass-card soft-shadow border-0 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible[feature.id] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-muted/30">
        <div className="container">
          <h2
            id="menu-title"
            data-animate
            className={`text-4xl md:text-5xl font-display text-center mb-16 transition-all duration-700 ${
              isVisible["menu-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            おすすめメニュー
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "menu-1",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/gQEDWwSU0QSNNZCAOLDF7B/sandbox/JS8iLOVO79sohP2BzrZf0W-img-2_1770451772000_na1fn_Y29mZmVlLWN1cC1sdW1vLWJsZW5k.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1FFRFd3U1UwUVNOTlpDQU9MREY3Qi9zYW5kYm94L0pTOGlMT1ZPNzlzb2hQMkJ6clpmMFctaW1nLTJfMTc3MDQ1MTc3MjAwMF9uYTFmbl9ZMjltWm1WbExXTjFjQzFzZFcxdkxXSnNaVzVrLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HRVa681RH5QLya0a2bBOI5CpspFse~nLt5h3K9mUlT1lOdOrkNeBmv~Ru-pRFPw3rhOgWzte9iW9MVDmVMxAjtUVtSTgGZTdsedfVAIrPhgzXTdZ6AUbrVzRkGShoATD2Ai6RT8txnEUhszNWhIsdnJpYXaI4O-QY2ruYIWAQ7nIo-GuF6TIZ48Pt0auGRdmw4ZTK5TkdaBgZZ8j48Zh4~KCfEfkcumf6zO93qlhwwRAah9snQaqgjULcQKTkKuwmgoo~MMj~awp4DkN6wFHmsSgWoOKqon7HuqM7lhN8OHgNVt32N~8mj-qEsYUfkLk2TagCIr3cnraVoGpxDgS2Q__",
                name: "Lumoブレンド",
                price: "¥550",
                description: "華やかな香りと、すっきりとした後味。まずはこれを試してほしい、当店の自信作です。",
              },
              {
                id: "menu-2",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/gQEDWwSU0QSNNZCAOLDF7B/sandbox/JS8iLOVO79sohP2BzrZf0W-img-4_1770451772000_na1fn_cGFzdHJpZXMtZGlzcGxheQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1FFRFd3U1UwUVNOTlpDQU9MREY3Qi9zYW5kYm94L0pTOGlMT1ZPNzlzb2hQMkJ6clpmMFctaW1nLTRfMTc3MDQ1MTc3MjAwMF9uYTFmbl9jR0Z6ZEhKcFpYTXRaR2x6Y0d4aGVRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VmQTFsohAemgKks5EZIc~On8CEk5TXuDe9A0Cc5wQqPjfmGbqXLvm67KUBr9l7nHk53P7hb~01FZTN0flUYG1K1qXYgfTYRtQs16maof~NpDHe38ACEyp9czId595nenUJVLO4NTEm3jewtD2qySBEB7XOxHnExOVTHyJEZ683kXQTVNOJEUm9FcCrRpc5rmgbVS0Su28acDlJGFFNA71IcsbUcZuKaCDuGfSoa1LKLRFHBGhEI0Muu2QiLzMXCR6SmWFp4YQ6ZwXqr-zjoAs9W8YLB2d47P5T~tfxWOq6~rkOJGNyxuUqeeE9i0grOO4fGJ0kRGIDX47QJtZWNu1A__",
                name: "季節のフルーツタルト",
                price: "¥650〜",
                description: "サクサクの生地に、旬のフルーツをたっぷりと。自家製カスタードとの相性も抜群です。",
              },
              {
                id: "menu-3",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/gQEDWwSU0QSNNZCAOLDF7B/sandbox/JS8iLOVO79sohP2BzrZf0W-img-4_1770451772000_na1fn_cGFzdHJpZXMtZGlzcGxheQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1FFRFd3U1UwUVNOTlpDQU9MREY3Qi9zYW5kYm94L0pTOGlMT1ZPNzlzb2hQMkJ6clpmMFctaW1nLTRfMTc3MDQ1MTc3MjAwMF9uYTFmbl9jR0Z6ZEhKcFpYTXRaR2x6Y0d4aGVRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VmQTFsohAemgKks5EZIc~On8CEk5TXuDe9A0Cc5wQqPjfmGbqXLvm67KUBr9l7nHk53P7hb~01FZTN0flUYG1K1qXYgfTYRtQs16maof~NpDHe38ACEyp9czId595nenUJVLO4NTEm3jewtD2qySBEB7XOxHnExOVTHyJEZ683kXQTVNOJEUm9FcCrRpc5rmgbVS0Su28acDlJGFFNA71IcsbUcZuKaCDuGfSoa1LKLRFHBGhEI0Muu2QiLzMXCR6SmWFp4YQ6ZwXqr-zjoAs9W8YLB2d47P5T~tfxWOq6~rkOJGNyxuUqeeE9i0grOO4fGJ0kRGIDX47QJtZWNu1A__",
                name: "自家製レモンカードのパウンドケーキ",
                price: "¥450",
                description: "甘酸っぱいレモンカードを練り込んだ、しっとり食感の焼き菓子。コーヒーのお供にどうぞ。",
              },
            ].map((item, index) => (
              <Card
                key={item.id}
                id={item.id}
                data-animate
                className={`glass-card soft-shadow border-0 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible[item.id] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-display text-foreground">{item.name}</h3>
                    <span className="text-primary font-semibold text-lg">{item.price}</span>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2
            id="lifestyle-title"
            data-animate
            className={`text-4xl md:text-5xl font-display text-center mb-16 transition-all duration-700 ${
              isVisible["lifestyle-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Lumoでの過ごし方
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "lifestyle-1",
                title: "平日の朝活に",
                description: "出勤前の1時間。焼きたてのマフィンとコーヒーで、気持ちの良い1日をスタート。",
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
              },
              {
                id: "lifestyle-2",
                title: "集中したい午後に",
                description: "アイデアが煮詰まったら、場所を変えてリフレッシュ。快適なWi-Fi環境で、作業も捗ります。",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/gQEDWwSU0QSNNZCAOLDF7B/sandbox/JS8iLOVO79sohP2BzrZf0W-img-3_1770451777000_na1fn_Y2FmZS13b3Jrc3BhY2U.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1FFRFd3U1UwUVNOTlpDQU9MREY3Qi9zYW5kYm94L0pTOGlMT1ZPNzlzb2hQMkJ6clpmMFctaW1nLTNfMTc3MDQ1MTc3NzAwMF9uYTFmbl9ZMkZtWlMxM2IzSnJjM0JoWTJVLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wu19QOzAYKIT-w33ViiN8K3aY9Fl9Go0GflreC94Ui46gk0J6tE7tKC02pkGTRqrKgZNVnLN1TBwlnNsoWeJ-8~5K9aHlxkYgdYgPlt7ncKzYZtwBCkdcn0qJe2L2Geqza7-~ylCTOI0GNkXbi5StFib72~hF6sCvqIpjje65bm1gotXmBsJFsXeew4oFsIYE6t0HgY7dDXBAXUI~RRLfWhBdAuBYfqhiTHdMNzECq~UR5IFea6rRIDZn-h8rideiII7oRtg7kJVbZNU0Ajb2h4drE41m4xLa09ijC~Tfg0DEoxcCbRYEv5YcY2fOI1~~x7Yanr0eo656B2o-Ndstg__",
              },
              {
                id: "lifestyle-3",
                title: "週末のご褒美に",
                description: "頑張った自分へのご褒美に、季節限定のラテとスイーツを。読書をしながら、ゆったりとした時間を。",
                image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
              },
            ].map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                data-animate
                className={`transition-all duration-700 ${
                  isVisible[item.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="rounded-3xl overflow-hidden mb-4 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-display mb-3 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2
            id="reviews-title"
            data-animate
            className={`text-4xl md:text-5xl font-display text-center mb-4 transition-all duration-700 ${
              isVisible["reviews-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            お客様の声（サンプル）
          </h2>
          <p className="text-center text-sm text-foreground/60 mb-12">
            ※以下は架空のサンプルです。お客様のプライバシーに配慮し、個人を特定できない形で掲載しています。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "review-1",
                text: "本当に静かで、集中して作業ができました。コーヒーも美味しくて、つい長居してしまいます。",
                attribute: "30代 / フリーランス",
                point: "居心地",
              },
              {
                id: "review-2",
                text: "季節のラテが楽しみで、毎シーズン通っています。甘すぎず、大人な味がお気に入り。",
                attribute: "20代 / 大学生",
                point: "限定メニュー",
              },
              {
                id: "review-3",
                text: "ひとりで入りやすいカフェを探していました。カウンター席があるので、周りを気にせず過ごせます。",
                attribute: "40代 / 会社員",
                point: "雰囲気",
              },
              {
                id: "review-4",
                text: "ここの焼き菓子は全部美味しい！特にパウンドケーキが好きで、テイクアウトもよく利用します。",
                attribute: "20代 / 主婦",
                point: "スイーツ",
              },
              {
                id: "review-5",
                text: "Wi-Fiが速くて安定しているのが嬉しい。コンセントもあって、PC作業に最適です。",
                attribute: "30代 / クリエイター",
                point: "設備",
              },
            ].map((review, index) => (
              <Card
                key={review.id}
                id={review.id}
                data-animate
                className={`glass-card soft-shadow border-0 rounded-3xl transition-all duration-700 hover:-translate-y-1 hover:shadow-xl ${
                  isVisible[review.id] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <p className="text-foreground/80 mb-4 leading-relaxed italic">「{review.text}」</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/60">{review.attribute}</span>
                    <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full font-medium">
                      {review.point}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2
            id="access-title"
            data-animate
            className={`text-4xl md:text-5xl font-display text-center mb-16 transition-all duration-700 ${
              isVisible["access-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            アクセス
          </h2>
          <Card
            id="access-card"
            data-animate
            className={`glass-card soft-shadow border-0 rounded-3xl transition-all duration-700 ${
              isVisible["access-card"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display mb-2 text-foreground">所在地</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    渋谷駅（架空の出口）から徒歩約8分。大通りから一本入った、落ち着いた路地に佇んでいます。コンクリートと木目を基調とした、温かみのある外観が目印です。
                  </p>
                  <p className="text-sm text-foreground/50 mt-2">
                    ※当店は架空の店舗であり、特定の住所はございません。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-display mb-2 text-foreground">営業時間</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    平日: 8:00 – 20:00
                    <br />
                    休日: 9:00 – 20:00
                  </p>
                  <p className="text-sm text-foreground/60 mt-3">
                    <strong>おすすめの時間帯:</strong>
                    <br />
                    午前中（〜12:00）: 比較的空いており、静かに過ごしたい方におすすめです。
                    <br />
                    18:00以降: お仕事帰りの方が多くなりますが、夜の落ち着いた雰囲気も魅力です。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2
            id="faq-title"
            data-animate
            className={`text-4xl md:text-5xl font-display text-center mb-16 transition-all duration-700 ${
              isVisible["faq-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {[
              {
                id: "faq-1",
                question: "電源やWi-Fiはありますか？",
                answer: "はい、全席に電源コンセントと無料Wi-Fiをご用意しております。",
              },
              {
                id: "faq-2",
                question: "席の予約はできますか？",
                answer: "申し訳ございませんが、席のご予約は承っておりません。ご来店順にご案内しております。",
              },
              {
                id: "faq-3",
                question: "テイクアウトは可能ですか？",
                answer: "はい、ドリンクと一部の焼き菓子はテイクアウト可能です。お気軽にお申し付けください。",
              },
              {
                id: "faq-4",
                question: "支払いは何が使えますか？",
                answer: "現金のほか、各種クレジットカード、交通系ICカード、QRコード決済に対応しております。",
              },
              {
                id: "faq-5",
                question: "ひとりで利用しやすいですか？",
                answer: "はい、おひとり様でも気兼ねなくお過ごしいただけるよう、カウンター席を多くご用意しております。",
              },
            ].map((faq, index) => (
              <Card
                key={faq.id}
                id={faq.id}
                data-animate
                className={`glass-card soft-shadow border-0 rounded-3xl transition-all duration-700 hover:shadow-xl ${
                  isVisible[faq.id] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-display mb-2 text-foreground">{faq.question}</h3>
                      <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl text-center">
          <h2
            id="cta-title"
            data-animate
            className={`text-4xl md:text-5xl font-display mb-6 transition-all duration-700 ${
              isVisible["cta-title"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            次の休日は、Lumoで
            <br />
            自分だけの時間を過ごしませんか？
          </h2>
          <p
            id="cta-text"
            data-animate
            className={`text-lg text-foreground/70 mb-10 leading-relaxed transition-all duration-700 ${
              isVisible["cta-text"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            「今日の静かな隠れ家」を、いつでも見返せるように。
          </p>
          <div
            id="cta-buttons"
            data-animate
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
              isVisible["cta-buttons"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              この隠れ家を保存する
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-card hover:bg-card/90 text-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => document.getElementById("access")?.scrollIntoView({ behavior: "smooth" })}
            >
              お店について質問する
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12">
        <div className="container text-center">
          <div className="mb-6">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/gQEDWwSU0QSNNZCAOLDF7B/sandbox/JS8iLOVO79sohP2BzrZf0W-img-5_1770451779000_na1fn_Y2FmZS1leHRlcmlvcg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ1FFRFd3U1UwUVNOTlpDQU9MREY3Qi9zYW5kYm94L0pTOGlMT1ZPNzlzb2hQMkJ6clpmMFctaW1nLTVfMTc3MDQ1MTc3OTAwMF9uYTFmbl9ZMkZtWlMxbGVIUmxjbWx2Y2cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NX5bfwigPA4EGsRPGSiTiZ~IjRt7SPFeATj431LMmjZD3jwP64vTEJlpQASlEjoGsK1XABKIGfq1qcdIlLQ93r6Wz1j4Q2HpLWfjqcE9MNK5UcS23Y0PUBGowu2XywHXYet~j5ErEzcjFnLEF7Wj1746i15E06ICam5MTmm5upAlfS3~g-ISDvA2W8FYdCyC-BiI04~zeLvfnUnfGRif5-b91IILToL8CIiYWr7nFb1FKkzST~RWjB-TxNn1xbjgygtLXS7m~ju30iU7Fz3kpfCI6gfOZmM4neHFEr1V1Y8p~KXWGIazmvZZj8PWaNCV8lhEcwM8eSY0PTjQ6TXG3A__"
              alt="Cafe Lumo"
              className="w-48 h-32 object-cover rounded-2xl mx-auto mb-4"
            />
            <h3 className="font-display text-3xl mb-2 text-foreground">Cafe Lumo</h3>
            <p className="text-foreground/60">渋谷の片隅、あなたのための静かな隠れ家</p>
          </div>
          <div className="text-sm text-foreground/50 space-y-1">
            <p>※このページは架空店舗のポートフォリオとして作成されたものです。</p>
            <p className="mt-4">制作者: [空欄]</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

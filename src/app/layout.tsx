import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiz Lab - 재미있는 심리테스트",
  description: "나와 닮은 동물은? 다양한 심리테스트와 성격 테스트를 즐겨보세요!",
  openGraph: {
    title: "Quiz Lab - 재미있는 심리테스트",
    description: "나와 닮은 동물은? 다양한 심리테스트와 성격 테스트를 즐겨보세요!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-6064291457498538" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6064291457498538"
          crossOrigin="anonymous"
        />
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
          integrity="sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Ber2L7M"
          crossOrigin="anonymous"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                if (window.Kakao && !window.Kakao.isInitialized()) {
                  window.Kakao.init('${process.env.NEXT_PUBLIC_KAKAO_JS_KEY || ""}');
                }
              });
            `,
          }}
        />
      </head>
      <body className={`${geist.variable} font-sans antialiased text-gray-900`}>
        <header className="glass-card sticky top-0 z-50 border-b border-white/20">
          <nav className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-gradient flex items-center gap-2">
              <span className="text-3xl">🧪</span>
              Quiz Lab
            </a>
            <span className="text-sm text-purple-500 font-medium px-3 py-1 bg-purple-50 rounded-full">
              ✨ 심리테스트
            </span>
          </nav>
        </header>
        <main className="max-w-2xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="glass-card border-t border-white/20 mt-auto">
          <div className="max-w-2xl mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
              <a href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                소개
              </a>
              <a href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                문의하기
              </a>
              <a href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">
                개인정보처리방침
              </a>
              <a href="/terms" className="text-gray-600 hover:text-purple-600 transition-colors">
                이용약관
              </a>
            </div>
            <p className="text-center text-sm text-gray-500">
              © 2026 Quiz Lab. 재미로 보는 심리테스트 💜
            </p>
            <p className="text-center text-xs text-gray-400 mt-2">
              모든 테스트는 오락 목적이며 전문적인 진단을 대체하지 않습니다.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

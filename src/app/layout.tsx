import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://quiz-lab-eight.vercel.app"),
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

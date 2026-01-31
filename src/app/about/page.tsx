import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Quiz Lab",
  description: "Quiz Lab 소개 - 재미있는 심리테스트 플랫폼",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
        <span className="text-6xl block mb-4">🧪</span>
        <h1 className="text-3xl font-bold text-gradient mb-4">Quiz Lab</h1>
        <p className="text-lg text-gray-600">
          재미있는 심리테스트로 나를 알아가는 시간
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>💡</span> Quiz Lab이란?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Quiz Lab은 다양한 심리테스트와 성격 유형 테스트를 제공하는 무료 플랫폼입니다. 
          MBTI, 연애 스타일, 성격 유형 등 재미있는 테스트를 통해 자신을 더 잘 이해하고, 
          친구들과 결과를 공유하며 즐거운 시간을 보낼 수 있습니다.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>✨</span> 주요 특징
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">🎯</span>
            <div>
              <strong className="text-gray-800">다양한 테스트</strong>
              <p className="text-gray-600 text-sm">성격, 연애, 심리 등 다양한 주제의 테스트를 제공합니다.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">📱</span>
            <div>
              <strong className="text-gray-800">모바일 최적화</strong>
              <p className="text-gray-600 text-sm">어디서든 편하게 테스트를 즐길 수 있습니다.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">🔗</span>
            <div>
              <strong className="text-gray-800">쉬운 공유</strong>
              <p className="text-gray-600 text-sm">카카오톡, 트위터 등 SNS로 결과를 쉽게 공유할 수 있습니다.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">🆓</span>
            <div>
              <strong className="text-gray-800">완전 무료</strong>
              <p className="text-gray-600 text-sm">모든 테스트를 무료로 이용할 수 있습니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>⚠️</span> 주의사항
        </h2>
        <p className="text-gray-600 leading-relaxed">
          본 서비스에서 제공하는 모든 테스트는 <strong>오락 및 참고 목적</strong>으로 제작되었습니다. 
          테스트 결과는 전문적인 심리 상담이나 의학적 진단을 대체할 수 없습니다. 
          심각한 심리적 어려움이 있으신 경우 전문가와 상담하시기 바랍니다.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">지금 바로 시작하세요!</h2>
        <Link
          href="/"
          className="inline-block px-8 py-3 btn-primary text-white rounded-xl font-bold"
        >
          🧪 테스트 하러가기
        </Link>
      </div>
    </div>
  );
}

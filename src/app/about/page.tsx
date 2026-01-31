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
          <span>📚</span> 제공하는 테스트 소개
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h3 className="font-bold text-gray-800 mb-2">🐾 성격 및 자아 탐구</h3>
            <p className="mb-3">
              자신의 내면을 들여다보는 것은 성장의 첫걸음입니다. 
              <strong>나와 닮은 동물 테스트</strong>는 행동 패턴을 동물에 비유하여 직관적으로 이해를 돕고, 
              <strong>나의 색깔 테스트</strong>는 감성과 기질을 색채 심리학과 연결해 해석합니다. 
              <strong>T/F 성향 테스트</strong>는 MBTI의 판단 기능(Thinking/Feeling)을 집중적으로 분석하여, 
              이성적 논리와 감성적 공감 중 어느 쪽을 더 선호하는지 알려줍니다.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-800 mb-2">💕 사랑과 관계</h3>
            <p className="mb-3">
              인간관계는 삶의 행복을 결정하는 중요한 요소입니다. 
              <strong>연애 스타일 테스트</strong>는 사랑에 빠졌을 때의 행동 양식을 분석하여 나와 잘 맞는 파트너 유형을 제안합니다. 
              <strong>찐친 유형 테스트</strong>는 친구 관계에서의 역할을 정의하여, 내가 조언가인지 공감러인지 파악하게 해줍니다. 
              이를 통해 더 건강하고 만족스러운 관계를 맺을 수 있도록 돕습니다.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-800 mb-2">💼 직업과 라이프스타일</h3>
            <p className="mb-3">
              현대인의 가장 큰 고민인 진로와 일상! 
              <strong>직장인 유형 테스트</strong>는 업무 스타일과 조직 내 포지션을 분석합니다. 
              <strong>번아웃 테스트</strong>는 현재의 스트레스 수준을 점검하여 휴식이 필요한 시점을 알려주는 마음 건강 진단 도구입니다. 
              또한 <strong>금전 감각 테스트</strong>를 통해 소비 습관을 점검하고 경제 관념을 파악할 수 있습니다.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-gray-800 mb-2">🌟 재미와 트렌드</h3>
            <p className="mb-3">
              가볍게 즐길 수 있는 트렌디한 테스트도 준비되어 있습니다. 
              <strong>전생 테스트</strong>는 무의식적 선호도를 통해 흥미로운 과거를 상상해보게 하며, 
              <strong>MZ세대력 테스트</strong>와 <strong>스마트폰 중독 레벨 테스트</strong>는 
              디지털 시대의 트렌드 적응도와 라이프스타일을 유쾌하게 진단합니다. 
              <strong>빵 성격 테스트</strong>처럼 일상 소재를 활용한 귀여운 테스트로 힐링의 시간을 가져보세요.
            </p>
          </section>
        </div>
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

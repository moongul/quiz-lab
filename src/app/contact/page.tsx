import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 - Quiz Lab",
  description: "Quiz Lab에 문의하기",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
        <span className="text-5xl block mb-4">📬</span>
        <h1 className="text-2xl font-bold text-gradient mb-2">문의하기</h1>
        <p className="text-gray-600">
          Quiz Lab에 대한 문의사항이 있으시면 언제든 연락해주세요!
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>✉️</span> 이메일 문의
        </h2>
        <p className="text-gray-600 mb-4">
          아래 이메일로 문의해주시면 빠른 시일 내에 답변드리겠습니다.
        </p>
        <a 
          href="mailto:contact@quizlab.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:scale-105 transition-transform"
        >
          <span>📧</span>
          contact@quizlab.com
        </a>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>💬</span> 문의 가능 사항
        </h2>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-gray-600">
            <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-sm">1</span>
            서비스 이용 관련 문의
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-sm">2</span>
            버그 신고 및 개선 제안
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-sm">3</span>
            새로운 테스트 아이디어 제안
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-sm">4</span>
            제휴 및 협업 문의
          </li>
          <li className="flex items-center gap-3 text-gray-600">
            <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-sm">5</span>
            기타 문의사항
          </li>
        </ul>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>⏰</span> 답변 안내
        </h2>
        <p className="text-gray-600">
          문의 주신 내용은 확인 후 <strong>영업일 기준 1~3일 이내</strong>에 
          답변드리도록 하겠습니다. 문의량이 많은 경우 답변이 다소 지연될 수 있는 점 
          양해 부탁드립니다.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 text-center">
        <p className="text-sm text-gray-500">
          💜 Quiz Lab을 이용해주셔서 감사합니다!
        </p>
      </div>
    </div>
  );
}

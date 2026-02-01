import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 - Quiz Lab",
  description: "Quiz Lab 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h1 className="text-2xl font-bold text-gradient mb-6">이용약관</h1>
      
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <p className="text-sm text-gray-500">최종 수정일: 2026년 1월 1일</p>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제1조 (목적)</h2>
          <p>
            이 약관은 Quiz Lab(이하 "서비스")이 제공하는 심리테스트 서비스의 이용과 관련하여 
            서비스와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제2조 (정의)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>"서비스"란 Quiz Lab이 제공하는 웹 기반 심리테스트 및 관련 콘텐츠를 의미합니다.</li>
            <li>"이용자"란 본 약관에 따라 서비스를 이용하는 모든 사용자를 의미합니다.</li>
            <li>"콘텐츠"란 서비스에서 제공하는 테스트, 결과, 텍스트, 이미지 등 모든 정보를 의미합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제3조 (약관의 효력 및 변경)</h2>
          <ul className="list-decimal pl-5 space-y-1">
            <li>본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
            <li>서비스는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 공지 후 효력이 발생합니다.</li>
            <li>이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제4조 (서비스의 제공)</h2>
          <ul className="list-decimal pl-5 space-y-1">
            <li>서비스는 다양한 심리테스트와 그 결과를 무료로 제공합니다.</li>
            <li>서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다.</li>
            <li>시스템 점검, 장애 등의 사유로 서비스가 일시 중단될 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제5조 (서비스 이용)</h2>
          <ul className="list-decimal pl-5 space-y-1">
            <li>본 서비스는 회원가입 없이 누구나 이용할 수 있습니다.</li>
            <li>이용자는 본 약관 및 관계 법령을 준수하여야 합니다.</li>
            <li>이용자는 서비스를 개인적, 비상업적 용도로만 이용할 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제6조 (테스트 결과의 성격)</h2>
          <p className="font-medium text-gray-800">
            본 서비스에서 제공하는 모든 테스트와 결과는 오락 및 참고 목적으로만 제공됩니다.
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>테스트 결과는 전문적인 심리 상담이나 의학적 진단을 대체할 수 없습니다.</li>
            <li>심각한 심리적 문제가 있는 경우 전문가와 상담하시기 바랍니다.</li>
            <li>테스트 결과에 기반한 의사결정에 대해 서비스는 책임지지 않습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제7조 (금지 행위)</h2>
          <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>서비스를 이용하여 타인의 권리를 침해하는 행위</li>
            <li>서비스의 콘텐츠를 무단으로 복제, 배포, 수정하는 행위</li>
            <li>자동화된 수단을 이용하여 서비스에 접근하는 행위</li>
            <li>기타 법령에 위반되는 행위</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제8조 (지적재산권)</h2>
          <ul className="list-decimal pl-5 space-y-1">
            <li>서비스 내 모든 콘텐츠의 저작권은 서비스에 귀속됩니다.</li>
            <li>이용자는 개인적 용도 외에 콘텐츠를 사용할 수 없습니다.</li>
            <li>SNS 공유 기능을 통한 결과 공유는 허용됩니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제9조 (면책조항)</h2>
          <ul className="list-decimal pl-5 space-y-1">
            <li>서비스는 천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임지지 않습니다.</li>
            <li>서비스는 이용자가 서비스를 이용하여 기대하는 효용을 얻지 못한 것에 대해 책임지지 않습니다.</li>
            <li>서비스는 이용자 간 또는 이용자와 제3자 간의 분쟁에 대해 개입하거나 책임지지 않습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">제10조 (분쟁 해결)</h2>
          <p>
            본 약관과 관련된 분쟁은 대한민국 법률에 따라 해결되며, 
            관할 법원은 서비스 운영자의 소재지 법원으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">부칙</h2>
          <p>본 약관은 2026년 1월 1일부터 시행합니다.</p>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - Quiz Lab",
  description: "Quiz Lab 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8">
      <h1 className="text-2xl font-bold text-gradient mb-6">개인정보처리방침</h1>
      
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <p className="text-sm text-gray-500">최종 수정일: 2026년 1월 1일</p>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">1. 개인정보의 수집 및 이용 목적</h2>
          <p>
            Quiz Lab(이하 "서비스")은 다음의 목적을 위하여 개인정보를 처리합니다. 
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
            이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>서비스 제공 및 운영</li>
            <li>테스트 결과 통계 분석</li>
            <li>서비스 개선 및 개발</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">2. 수집하는 개인정보 항목</h2>
          <p>서비스는 다음과 같은 정보를 수집할 수 있습니다:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>테스트 응답 데이터 (익명)</li>
            <li>서비스 이용 기록, 접속 로그, 접속 IP 정보</li>
            <li>브라우저 종류 및 OS 정보</li>
          </ul>
          <p className="mt-2">
            <strong>본 서비스는 회원가입을 받지 않으며, 이름, 이메일, 전화번호 등의 개인식별정보를 수집하지 않습니다.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            수집된 테스트 응답 데이터는 통계 목적으로만 사용되며, 
            개인을 식별할 수 없는 형태로 익명화되어 저장됩니다.
            접속 로그는 서비스 운영 목적으로 최대 1년간 보관 후 파기됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">4. 쿠키(Cookie) 사용</h2>
          <p>
            서비스는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 쿠키를 사용합니다.
            쿠키는 웹사이트가 이용자의 브라우저에 전송하는 소량의 텍스트 파일입니다.
          </p>
          <p className="mt-2">
            이용자는 브라우저 설정을 통해 쿠키를 거부할 수 있으나, 
            이 경우 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">5. 광고</h2>
          <p>
            서비스는 Google AdSense를 통해 광고를 게재합니다. 
            Google은 사용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
            자세한 내용은{" "}
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              Google 개인정보처리방침
            </a>
            을 참조하세요.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">6. 개인정보 보호책임자</h2>
          <p>
            서비스의 개인정보 관련 문의사항은 아래 연락처로 문의해 주시기 바랍니다.
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>이메일: contact@quizlab.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mt-6 mb-3">7. 개인정보처리방침 변경</h2>
          <p>
            이 개인정보처리방침은 법령 및 방침에 따라 변경될 수 있으며, 
            변경 시 웹사이트 공지사항을 통해 고지할 것입니다.
          </p>
        </section>
      </div>
    </div>
  );
}

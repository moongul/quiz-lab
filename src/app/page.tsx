import Link from "next/link";
import { db } from "@/lib/db";
import { tests } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

const TEST_EMOJIS: Record<string, string> = {
  "animal-personality": "🐾",
  "thinking-feeling": "🧠",
  "love-style": "💕",
  "burnout-level": "🔥",
  "my-color": "🎨",
  "past-life": "👑",
  "homebody-level": "🏠",
  "mz-generation": "📱",
  "money-type": "💰",
  "work-style": "💼",
};

const CARD_COLORS = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500",
  "from-pink-500 to-rose-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-purple-500",
  "from-rose-500 to-red-500",
  "from-cyan-500 to-blue-500",
  "from-yellow-500 to-amber-500",
  "from-teal-500 to-green-500",
];

export default async function Home() {
  const allTests = await db.select().from(tests).orderBy(desc(tests.totalParticipants));

  return (
    <div className="space-y-8">
      <section className="text-center py-10">
        <div className="animate-float inline-block text-6xl mb-4">🎯</div>
        <h1 className="text-4xl font-bold mb-3">
          <span className="text-gradient">Quiz Lab</span>
        </h1>
        <p className="text-gray-600 text-lg">
          재미있는 심리테스트로 나를 알아가는 시간 ✨
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            #심리테스트
          </span>
          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
            #MBTI
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            #성격유형
          </span>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">🔥</span>
          <h2 className="text-xl font-bold">인기 테스트</h2>
          <span className="ml-auto text-sm text-gray-500">
            {allTests.length}개의 테스트
          </span>
        </div>
        
        <div className="grid gap-4">
          {allTests.length === 0 ? (
            <div className="text-center py-16 glass-card rounded-2xl">
              <span className="text-5xl block mb-4">🔍</span>
              <p className="text-gray-500">아직 테스트가 없습니다.</p>
            </div>
          ) : (
            allTests.map((test, index) => (
              <Link
                key={test.id}
                href={`/test/${test.slug}`}
                className="group block glass-card rounded-2xl overflow-hidden card-hover"
              >
                <div className="flex">
                  <div className={`w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-gradient-to-br ${CARD_COLORS[index % CARD_COLORS.length]} flex items-center justify-center`}>
                    <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform">
                      {TEST_EMOJIS[test.slug] || "✨"}
                    </span>
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-center">
                    <h3 className="font-bold text-lg group-hover:text-purple-600 transition-colors">
                      {test.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {test.description}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-0.5 rounded-full">
                        👥 {test.totalParticipants?.toLocaleString()}명 참여
                      </span>
                      <span className="text-xs text-gray-400 group-hover:text-purple-500 transition-colors">
                        시작하기 →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      <section className="glass-card rounded-2xl p-6 text-center">
        <span className="text-3xl block mb-2">💡</span>
        <p className="text-gray-600 text-sm">
          모든 테스트는 재미로 보는 심리테스트입니다.<br />
          결과는 참고용이며 전문적인 진단이 아닙니다.
        </p>
      </section>
    </div>
  );
}

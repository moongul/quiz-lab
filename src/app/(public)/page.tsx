import TestList from "@/components/TestList";
import { db } from "@/lib/db";
import { tests } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allTests = await db.select().from(tests).orderBy(desc(tests.totalParticipants));

  return (
    <div className="max-w-md mx-auto min-h-screen pb-20 px-4 sm:max-w-2xl md:max-w-4xl">
      {/* Header Section */}
      <header className="pt-12 pb-8 text-center relative">
        <div className="inline-block relative z-10">
          <div className="absolute -top-8 -right-8 text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🔮</div>
          <div className="absolute top-4 -left-10 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
          <h1 className="text-5xl font-black tracking-tight mb-3 drop-shadow-sm">
            <span className="text-gradient">Quiz Lab</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            나를 알아가는<br />
            가장 재미있는 시간 💫
          </p>
        </div>
      </header>

      {/* Client Component for List with Search & Filter */}
      <TestList initialTests={allTests} />

      {/* Footer Note */}
      <footer className="mt-12 text-center pb-8">
        <p className="text-xs text-gray-400 font-medium bg-white/30 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
          💡 모든 결과는 재미로만 봐주세요!
        </p>
      </footer>
    </div>
  );
}

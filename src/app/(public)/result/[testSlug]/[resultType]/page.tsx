import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { tests, resultTypes } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import ShareButtons from "@/components/ShareButtons";
import AdSlot from "@/components/AdSlot";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ testSlug: string; resultType: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { testSlug, resultType } = await params;

  const test = await db.select().from(tests).where(eq(tests.slug, testSlug)).get();
  if (!test) return { title: "결과를 찾을 수 없습니다" };

  const result = await db
    .select()
    .from(resultTypes)
    .where(and(eq(resultTypes.testId, test.id), eq(resultTypes.type, resultType)))
    .get();

  if (!result) return { title: "결과를 찾을 수 없습니다" };

  const ogUrl = new URL(`${process.env.NEXT_PUBLIC_SITE_URL || "https://quiz-lab-eight.vercel.app"}/api/og`);
  ogUrl.searchParams.set("title", `${test.title} 결과`);
  ogUrl.searchParams.set("desc", `나의 유형은 '${result.title}'입니다.\n${result.description.slice(0, 50)}...`);

  return {
    title: `${result.title} | ${test.title} 결과`,
    description: result.description,
    openGraph: {
      title: `${result.title} | ${test.title} 결과`,
      description: result.description,
      type: "website",
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: `${test.title} - ${result.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${result.title} | ${test.title} 결과`,
      description: result.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function ResultPage({ params }: PageProps) {
  const { testSlug, resultType } = await params;

  const test = await db.select().from(tests).where(eq(tests.slug, testSlug)).get();
  if (!test) notFound();

  const result = await db
    .select()
    .from(resultTypes)
    .where(and(eq(resultTypes.testId, test.id), eq(resultTypes.type, resultType)))
    .get();

  if (!result) notFound();

  const allResults = await db
    .select()
    .from(resultTypes)
    .where(eq(resultTypes.testId, test.id));

  const totalCount = allResults.reduce((sum, r) => sum + (r.count || 0), 0);
  const percentage = totalCount > 0
    ? Math.round(((result.count || 0) / totalCount) * 100)
    : 0;

  return (
    <div className="space-y-6">
      <div className="text-center mb-2">
        <span className="text-5xl block mb-2 animate-bounce-in">🎉</span>
        <p className="text-purple-600 font-medium">{test.title} 결과</p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 text-center animate-pulse-glow">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-4">
          ✨ 당신의 유형
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
          {result.title}
        </h1>

        <p className="text-gray-600 leading-relaxed text-lg">
          {result.description}
        </p>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
            <span className="text-purple-600 font-bold text-2xl">{percentage}%</span>
            <span className="text-purple-600 text-sm">의 사람들이 같은 결과!</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            👥 총 {test.totalParticipants?.toLocaleString()}명 참여
          </p>
        </div>
      </div>

      <ShareButtons testTitle={test.title} resultTitle={result.title} />

      <AdSlot slot="RESULT_AD_SLOT" className="min-h-[100px] rounded-2xl overflow-hidden" />

      <div className="flex gap-3">
        <Link
          href={`/test/${testSlug}`}
          className="flex-1 py-4 text-center glass-card rounded-xl font-medium hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          🔄 다시 하기
        </Link>
        <Link
          href="/"
          className="flex-1 py-4 text-center btn-primary text-white rounded-xl font-bold"
        >
          🧪 다른 테스트
        </Link>
      </div>

      <div className="glass-card rounded-2xl p-4 text-center">
        <p className="text-sm text-gray-500">
          💡 친구에게 공유해서 결과를 비교해보세요!
        </p>
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { tests, questions, options } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";
import TestClient from "@/components/TestClient";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const test = await db.select().from(tests).where(eq(tests.slug, slug)).get();

  if (!test) return {};

  const ogUrl = new URL(`${process.env.NEXT_PUBLIC_SITE_URL || "https://quiz-lab-gamma.vercel.app"}/api/og`);
  ogUrl.searchParams.set("title", test.title);
  ogUrl.searchParams.set("desc", test.description);

  return {
    title: `${test.title} | Quiz Lab`,
    description: test.description,
    openGraph: {
      title: test.title,
      description: test.description,
      type: "website",
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: test.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: test.title,
      description: test.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function TestPage({ params }: PageProps) {
  const { slug } = await params;

  const test = await db.select().from(tests).where(eq(tests.slug, slug)).get();

  if (!test) {
    notFound();
  }

  const testQuestions = await db
    .select()
    .from(questions)
    .where(eq(questions.testId, test.id))
    .orderBy(asc(questions.order));

  const questionsWithOptions = await Promise.all(
    testQuestions.map(async (q) => {
      const questionOptions = await db
        .select()
        .from(options)
        .where(eq(options.questionId, q.id));

      return {
        id: q.id,
        content: q.content,
        options: questionOptions.map((opt) => ({
          id: opt.id,
          content: opt.content,
          scores: JSON.parse(opt.scores) as Record<string, number>,
        })),
      };
    })
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": test.title,
    "description": test.description,
    "hasPart": testQuestions.map((q) => ({
      "@type": "Question",
      "name": q.content,
      "suggestedAnswer": questionsWithOptions
        .find(qo => qo.id === q.id)
        ?.options.map(opt => ({
          "@type": "Answer",
          "text": opt.content
        }))
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestClient
        testSlug={slug}
        testTitle={test.title}
        questions={questionsWithOptions}
      />
    </>
  );
}

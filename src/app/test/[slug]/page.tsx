import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { tests, questions, options } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";
import TestClient from "@/components/TestClient";

interface PageProps {
  params: Promise<{ slug: string }>;
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

  return (
    <TestClient
      testSlug={slug}
      testTitle={test.title}
      questions={questionsWithOptions}
    />
  );
}

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { tests, resultTypes, participantStats } from "@/lib/db/schema";
import { eq, and, sql } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { testSlug, resultType } = body;

    const test = await db.select().from(tests).where(eq(tests.slug, testSlug)).get();
    if (!test) {
      return NextResponse.json({ error: "Test not found" }, { status: 404 });
    }

    const result = await db
      .select()
      .from(resultTypes)
      .where(and(eq(resultTypes.testId, test.id), eq(resultTypes.type, resultType)))
      .get();

    if (!result) {
      return NextResponse.json({ error: "Result type not found" }, { status: 404 });
    }

    await db
      .update(tests)
      .set({ totalParticipants: sql`${tests.totalParticipants} + 1` })
      .where(eq(tests.id, test.id));

    await db
      .update(resultTypes)
      .set({ count: sql`${resultTypes.count} + 1` })
      .where(eq(resultTypes.id, result.id));

    await db.insert(participantStats).values({
      id: `stat-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      testId: test.id,
      resultTypeId: result.id,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

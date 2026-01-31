import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// 테스트 정보
export const tests = sqliteTable("tests", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  totalParticipants: integer("total_participants").default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// 질문
export const questions = sqliteTable("questions", {
  id: text("id").primaryKey(),
  testId: text("test_id").notNull().references(() => tests.id),
  order: integer("order").notNull(),
  content: text("content").notNull(),
});

// 선택지
export const options = sqliteTable("options", {
  id: text("id").primaryKey(),
  questionId: text("question_id").notNull().references(() => questions.id),
  content: text("content").notNull(),
  // 각 결과 유형에 대한 점수 (JSON으로 저장)
  scores: text("scores").notNull(), // {"dog": 2, "cat": 1, "bear": 0}
});

// 결과 유형
export const resultTypes = sqliteTable("result_types", {
  id: text("id").primaryKey(),
  testId: text("test_id").notNull().references(() => tests.id),
  type: text("type").notNull(), // "dog", "cat", "bear" 등
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  count: integer("count").default(0), // 이 결과가 나온 횟수
});

// 참여 통계
export const participantStats = sqliteTable("participant_stats", {
  id: text("id").primaryKey(),
  testId: text("test_id").notNull().references(() => tests.id),
  resultTypeId: text("result_type_id").notNull().references(() => resultTypes.id),
  participatedAt: integer("participated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

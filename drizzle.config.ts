import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.NODE_ENV === "production"
      ? process.env.TURSO_DATABASE_URL!
      : "file:./local.db",
  },
});

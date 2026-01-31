import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

function createDb(): LibSQLDatabase<typeof schema> {
  const url = process.env.NODE_ENV === "production"
    ? process.env.TURSO_DATABASE_URL
    : "file:./local.db";
  
  const client = createClient({
    url: url || "file:./local.db",
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
  
  return drizzle(client, { schema });
}

export const db = createDb();

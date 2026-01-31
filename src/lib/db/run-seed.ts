import "dotenv/config";
import { seedAllTests } from "./seed";

console.log("🔗 Connecting to:", process.env.TURSO_DATABASE_URL || "file:./local.db");

seedAllTests()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

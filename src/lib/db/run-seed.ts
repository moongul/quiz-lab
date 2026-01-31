import { seedAllTests } from "./seed";

seedAllTests()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

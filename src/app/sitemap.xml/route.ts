import { db } from "@/lib/db";
import { tests } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://quiz-lab-eight.vercel.app";

export async function GET() {
  const allTests = await db.select().from(tests);

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "daily", lastmod: new Date().toISOString() },
    { url: "/about", priority: "0.8", changefreq: "monthly", lastmod: undefined },
    { url: "/contact", priority: "0.5", changefreq: "monthly", lastmod: undefined },
    { url: "/privacy", priority: "0.3", changefreq: "yearly", lastmod: undefined },
    { url: "/terms", priority: "0.3", changefreq: "yearly", lastmod: undefined },
  ];

  const testPages = allTests.map((test) => ({
    url: `/test/${test.slug}`,
    priority: "0.9",
    changefreq: "weekly",
    lastmod: test.createdAt ? new Date(test.createdAt).toISOString() : new Date().toISOString(),
  }));

  const allPages = [...staticPages, ...testPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
      .map(
        (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ""}
  </url>`
      )
      .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

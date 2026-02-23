/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://example.com/en", hreflang: "en" },
    { href: "https://example.com/so", hreflang: "so" }
  ],
  transform: async (config, path) => ({
    loc: path,
    changefreq: "weekly",
    priority: path === "/en" || path === "/so" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
    alternateRefs: config.alternateRefs ?? []
  })
};

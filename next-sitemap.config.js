/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://eng-moscab-portofolio.vercel.app",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://eng-moscab-portofolio.vercel.app/en", hreflang: "en" },
    { href: "https://eng-moscab-portofolio.vercel.app/so", hreflang: "so" }
  ],
  transform: async (config, path) => ({
    loc: path,
    changefreq: "weekly",
    priority: path === "/en" || path === "/so" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
    alternateRefs: config.alternateRefs ?? []
  })
};


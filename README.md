# Bilingual Portfolio (Next.js App Router)

Production-ready portfolio website for a full-stack developer building institutional systems (schools, ERP, repositories, mobile apps).

## Stack

- Next.js (App Router) + TypeScript
- TailwindCSS
- `next-themes` (dark/light)
- `next-intl` (English + Somali)
- Framer Motion (subtle animations)
- Lucide React icons
- Optional `next-sitemap`

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Open:

- `http://localhost:3000/en`
- `http://localhost:3000/so`

## Project Structure

```text
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
    api/contact/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    About.tsx
    Badge.tsx
    Button.tsx
    Contact.tsx
    Container.tsx
    Footer.tsx
    Hero.tsx
    HomePage.tsx
    LanguageToggle.tsx
    MobileMenu.tsx
    Navbar.tsx
    ProjectCard.tsx
    ProjectModal.tsx
    Projects.tsx
    Reveal.tsx
    SectionHeading.tsx
    Services.tsx
    Skills.tsx
    Testimonials.tsx
    ThemeToggle.tsx
    providers/
      Providers.tsx
      ToastProvider.tsx
  data/
    profile.ts
    projects.ts
    skills.ts
  i18n/
    config.ts
  lib/
    localize.ts
    utils.ts
  messages/
    en.json
    so.json
  types/
    content.ts
public/
  avatar-placeholder.svg
  icon.svg
  og-image.svg
  project-placeholder.svg
middleware.ts
next-sitemap.config.js
```

## Editing Content

Update these files:

- `src/data/profile.ts` for name, about text, stats, contact links, and highlights
- `public/profile-photo.jpg` for your real profile image (used in the hero card; fallback placeholder is shown if missing)
- `src/data/projects.ts` for project cards, categories, stacks, and placeholder links
- `src/data/skills.ts` for skill categories and levels
- `src/messages/en.json` and `src/messages/so.json` for all UI labels and translated interface text

## i18n Behavior

- Locale routes use prefixes: `/en` and `/so`
- Language switcher stores preference in cookie (`NEXT_LOCALE`) and localStorage
- Middleware keeps locale routing consistent

## SEO

- Locale-specific metadata in `src/app/[locale]/layout.tsx`
- OpenGraph + Twitter card metadata
- Canonical and alternate language URLs
- Optional sitemap generation via `next-sitemap` on `postbuild`

Before production deployment:

- Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (used by metadata/canonical URLs)
- Update `siteUrl` in `next-sitemap.config.js` (or keep using the same env variable fallback)

## Deploy (Vercel)

1. Push project to GitHub
2. Import repository in Vercel
3. Set environment variable (optional but recommended):
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
4. Deploy

## Enable Real Email Sending Later

The current `/api/contact` route is a mock endpoint.

To enable real sending:

1. Add an email provider (Resend, SendGrid, Postmark, Nodemailer + SMTP)
2. Replace mock logic in `src/app/api/contact/route.ts`
3. Validate and sanitize input on the server
4. Add rate limiting / bot protection (e.g. Turnstile, hCaptcha)
5. Store submissions (optional) in a database or CRM

## Notes

- All project links are intentionally placeholder/empty where real URLs are not provided.
- The design uses editable theme tokens in `src/app/globals.css`.

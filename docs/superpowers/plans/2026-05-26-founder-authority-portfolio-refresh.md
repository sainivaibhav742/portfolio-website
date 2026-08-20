# Founder Authority Portfolio Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio homepage into an authority-focused founder/CTO site for Vaibhav Saini, using the new avatar/photo assets and SEO signals for `vaibhavsaini.in`.

**Architecture:** Keep the existing Next.js App Router structure and section components, but replace generic developer/project content with centralized founder-authority data in `src/data/portfolio.ts`. Reuse the existing section files to avoid large routing changes, while changing their content responsibilities to hero, founder narrative, founder services, companies, roles, and contact.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, lucide-react, next/image.

---

## File Structure

- Modify `src/data/portfolio.ts`: centralize identity, SEO, roles, companies, focus areas, principles, and contact links.
- Modify `src/app/layout.tsx`: add production metadata, canonical URL, Open Graph/Twitter metadata, and JSON-LD structured data.
- Modify `src/app/sitemap.ts`: use `https://vaibhavsaini.in`.
- Modify `src/app/robots.ts`: use `https://vaibhavsaini.in/sitemap.xml`.
- Modify `src/app/page.tsx`: remove the coding profile section from the homepage.
- Modify `src/app/globals.css`: update theme colors and global background for a premium founder/operator look.
- Modify `src/components/layout/Navbar.tsx`: update navigation labels and CTA.
- Modify `src/components/layout/Footer.tsx`: add canonical identity and handles.
- Modify `src/components/sections/Hero.tsx`: rewrite hero around Vaibhav Saini, founder/CTO positioning, CTAs, and new image assets.
- Modify `src/components/sections/About.tsx`: convert to founder snapshot and operating narrative.
- Modify `src/components/sections/Skills.tsx`: convert to "What I Build With Founders".
- Modify `src/components/sections/Projects.tsx`: convert to "Companies I'm Building".
- Modify `src/components/sections/Experience.tsx`: rewrite as executive roles timeline.
- Modify `src/components/sections/Contact.tsx`: rewrite around "Are you building something? Let's connect."
- Leave `src/components/sections/CodingProfiles.tsx` unused unless deleting it becomes necessary for lint/build.

## Tasks

### Task 1: Centralize Founder Authority Data

**Files:**
- Modify: `src/data/portfolio.ts`

- [ ] **Step 1: Replace old developer-portfolio data**

Rewrite `portfolioData` to include:

```ts
personal: {
  name: "Vaibhav Saini",
  handle: "sainivaibhav742",
  title: "Technical Founder, CTO & AI Product Builder",
  email: "sainivaibhav742@gmail.com",
  phone: "+91 9193410557",
  location: "Lucknow, India",
  domain: "https://vaibhavsaini.in",
  profileImage: "/vaibhav.jpg",
  avatarImage: "/avtar.png",
  social: {
    github: "https://github.com/sainivaibhav742",
    linkedin: "https://linkedin.com/in/sainivaibhav742",
    twitter: "https://twitter.com/sainivaibhav742",
  },
}
```

Add `hero`, `snapshot`, `companies`, `founderFocus`, `principles`, `experience`, `contactIntents`, and `seo`.

- [ ] **Step 2: Verify TypeScript consumers still have valid fields**

Run:

```bash
npm run lint
```

Expected: existing components may fail until later tasks update field usage.

### Task 2: Implement SEO And Structured Data

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts`

- [ ] **Step 1: Add production metadata**

Set metadata title/description around:

```ts
title: "Vaibhav Saini | Technical Founder, CTO & Co-founder of SocialMoon"
description: "Vaibhav Saini is a technical founder, CTO & Co-founder of SocialMoon, CTO at BPOlytix, and AI product builder helping founders turn ideas into scalable software."
```

Include canonical `https://vaibhavsaini.in`, Open Graph, and Twitter card fields.

- [ ] **Step 2: Add JSON-LD**

Add a JSON-LD script for `Person` with `sameAs` links to GitHub, LinkedIn, Twitter/X, SocialMoon, and BPOlytix.

- [ ] **Step 3: Fix sitemap and robots**

Use `https://vaibhavsaini.in` and `https://vaibhavsaini.in/sitemap.xml`.

### Task 3: Refresh Global Visual System

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update theme colors**

Move away from beige-heavy styling by using a light neutral background, ink text, amber accent, and slate secondary text.

- [ ] **Step 2: Update body background**

Use a restrained layered background with subtle grid/linear treatments, avoiding decorative orbs.

- [ ] **Step 3: Keep reusable utilities**

Keep `section-shell`, `eyebrow`, and `text-balance`, but tune `eyebrow` to the new accent palette.

### Task 4: Rebuild Navigation And Page Flow

**Files:**
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Update nav items**

Use:

```ts
[
  { name: "About", href: "#about" },
  { name: "Build With Me", href: "#build" },
  { name: "Companies", href: "#companies" },
  { name: "Roles", href: "#roles" },
  { name: "Connect", href: "#contact" },
]
```

- [ ] **Step 2: Remove coding profiles from homepage**

Remove the `CodingProfiles` import and `<CodingProfiles />` usage from `src/app/page.tsx`.

- [ ] **Step 3: Update footer**

Show "Vaibhav Saini", `@sainivaibhav742`, contact links, and backlinks to SocialMoon and BPOlytix.

### Task 5: Rebuild Hero With New Assets

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Rewrite content**

Hero must include:

- "Vaibhav Saini"
- "Technical founder, CTO, and product builder creating AI-first companies."
- SocialMoon and BPOlytix role references
- Primary CTA: "Are you building something?"
- Secondary CTA: "Investor / Partner Conversation"
- Visible handle `@sainivaibhav742`

- [ ] **Step 2: Use images**

Use `public/avtar.png` as the avatar/brand visual and `public/vaibhav.jpg` as the photographic credibility visual.

- [ ] **Step 3: Keep layout stable**

Use responsive grids and fixed aspect ratios so images and text do not overlap on mobile.

### Task 6: Convert About To Founder Snapshot

**Files:**
- Modify: `src/components/sections/About.tsx`

- [ ] **Step 1: Replace generic bio**

Write a founder/operator narrative around technical leadership, AI products, company building, and advisory work.

- [ ] **Step 2: Add snapshot cards**

Render `portfolioData.snapshot` as compact credibility cards.

- [ ] **Step 3: Add operating principles preview**

Render a concise list from `portfolioData.principles`.

### Task 7: Convert Skills To Founder Services

**Files:**
- Modify: `src/components/sections/Skills.tsx`

- [ ] **Step 1: Change section id**

Use `id="build"` so navigation points to the right section.

- [ ] **Step 2: Render founder focus areas**

Render `portfolioData.founderFocus` as outcome-oriented cards instead of skill chips.

### Task 8: Convert Projects To Companies

**Files:**
- Modify: `src/components/sections/Projects.tsx`

- [ ] **Step 1: Change section id**

Use `id="companies"`.

- [ ] **Step 2: Render companies**

Render SocialMoon, BPOlytix, and next ventures from `portfolioData.companies`.

- [ ] **Step 3: Link safely**

External company links should include `target="_blank"` and be visible where URLs exist.

### Task 9: Rewrite Roles And Contact

**Files:**
- Modify: `src/components/sections/Experience.tsx`
- Modify: `src/components/sections/Contact.tsx`

- [ ] **Step 1: Update experience id**

Use `id="roles"` and render executive roles from `portfolioData.experience`.

- [ ] **Step 2: Rewrite contact**

Make the final CTA headline "Are you building something?" with contact actions for email, investor/partner conversation, and social handles.

### Task 10: Verify End To End

**Files:**
- No code changes expected unless verification finds issues.

- [ ] **Step 1: Run lint**

Run:

```bash
npm run lint
```

Expected: passes without errors.

- [ ] **Step 2: Run build**

Run:

```bash
npm run build
```

Expected: production build completes.

- [ ] **Step 3: Browser check**

Start dev server, open the homepage, and verify:

- Hero clearly says "Vaibhav Saini"
- `avtar.png` and `vaibhav.jpg` render
- No LeetCode section appears
- SocialMoon and BPOlytix links appear
- Navigation anchors work
- Mobile layout has no text/image overlap


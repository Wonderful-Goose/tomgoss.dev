# Product Requirements Document (PRD)

**Project**: Personal Portfolio & Blog — tomgoss.dev
**Author**: Thomas Goss & Gemini Assistant
**Version**: 1.2
**Date**: May 9, 2025

---

## 1. Overview & Purpose

Build a modern, minimalist, professional portfolio and blog site (tomgoss.dev) that showcases Thomas Goss’s expertise in content marketing, product marketing, and AI applications. The platform will serve as both a portfolio (projects & case studies) and a thought-leadership blog, aimed at attracting potential employers, freelance clients, and industry peers.

## 2. Goals & Success Metrics

**2.1 Primary Goals**

* Launch a fully functional MVP by the end of the upcoming weekend.
* Demonstrate technical proficiency (Next.js, TypeScript, Tailwind CSS, Sanity.io, GA4).
* Provide clear, engaging project showcases and blog framework.
* Generate inbound leads: job inquiries, consulting requests, and CV downloads.

**2.2 Success Metrics**

* **Launch date**: Live by Monday morning, May 12, 2025.
* **Traffic & Engagement**: ≥50 unique visitors/day within first month.
* **Lead Gen**: ≥5 inquiry emails/CV downloads in first month.
* **Content**: Setup ready for 0 projects + placeholder, 0 articles + placeholder; structure ready for 10–20 future articles.

## 3. Target Audience

* **Primary**: Hiring managers, recruiters, marketing team leads seeking expertise in content strategy, storytelling, SEO, AI-driven marketing.
* **Secondary**: Freelance/consulting clients looking for content, SEO, or marketing strategy.
* **Tertiary**: Peers, industry connections, community builders.

## 4. MVP Scope & Timeline

**4.1 Timeline**

* **Day 1 (Fri)**: Initialize repo, config, layout, and global styles; implement Navbar + Footer.
* **Day 2 (Sat)**: Build Home page (Hero, Projects section, Articles section).
* **Day 3 (Sun)**: Build About, Projects list + detail placeholder, Articles list placeholder, Contact form; QA + deploy.
* **Day 4 (Mon)**: Launch, basic analytics setup, minor tweaks.

**4.2 MVP Scope**

* **Pages**: Home, About, Projects (list + stub detail), Articles (list + stub detail), Contact.
* **Content Types**:

  * **Project**: title, embed/list of web samples (links), commentary text, tags, optional image; placeholder for case studies.
  * **Article**: title, date, excerpt; body reserved for future posts.
* **Core Features**:

  * Responsive layout (desktop/tablet/mobile).
  * Minimalist design with subtle animations.
  * SEO basics: Meta tags, OG tags, semantic HTML.
  * Analytics: GA4 integration.
  * Contact form (mailto link or form backend).

## 5. Design & Branding

* **Aesthetic**: Clean, minimal, ample white space, strong typography, tech-professional vibe (inspired by julian.com).
* **Color Palette**: Neutral base (grays/off-white), accent color (muted teal or deep blue).
* **Typography**: Inter (sans-serif) for headings/body; ensure high contrast.
* **Imagery & Animations**:

  * Professional headshot on About page.
  * Placeholder cards for projects/articles.
  * Small CSS-driven hover/fade animations.

## 6. Information Architecture

**6.1 Main Navigation**

* Home
* About
* Projects
* Articles
* Contact

**6.2 Footer Links**

* LinkedIn
* GitHub
* CV Download (PDF)
* Privacy Policy (placeholder)
* Copyright

## 7. Content Strategy

* **Initial Projects**: Display 2–3 sample entries (e.g., newsletters or existing web posts), embed via URL with commentary.
* **Article Framework**: Placeholder “no posts yet” note; ready to import 10–20 posts later.
* **Voice & Tone**: Professional, knowledgeable, approachable, concise.
* **CMS**: Sanity.io for headless content management, with custom schemas for projects and articles.

## 8. Functional Requirements

1. **Initialization & Tooling**

   * Next.js + TypeScript project scaffold.
   * Tailwind CSS + PostCSS config.
   * ESLint + Prettier setup.
2. **Layout & Navigation**

   * Global layout component with `<Navbar />` and `<Footer />`.
   * Responsive breakpoints and mobile menu.
3. **Home Page**

   * **Hero**: Headline, subheading, CTA buttons.
   * **Featured Projects**: Grid of 2 sample `ProjectCard` components.
   * **Latest Articles**: Section with `ArticleCard` placeholders.
4. **About Page**

   * Bio section, skill list, headshot, CV download link.
5. **Projects List & Detail**

   * List view: Grid of `ProjectCard`s pulling from Sanity.
   * Detail stub: Show title + “Content coming soon.”
6. **Articles List & Detail**

   * List view: List of `ArticleCard`s.
   * Detail stub: Show title + “Content coming soon.”
7. **Contact**

   * Simple form or mailto link.
   * Social/profile links.
8. **Analytics & SEO**

   * GA4 snippet in `<Head>`.
   * Dynamic `<title>`, `<meta>` descriptions.
   * Open Graph tags.
9. **Performance & Accessibility**

   * Fast LCP/CLS metrics.
   * WCAG AA compliance (alt text, semantics, keyboard nav).

## 9. Non-Functional Requirements Non-Functional Requirements

* **Performance**: Optimize images, code-splitting.
* **Maintainability**: Clear folder structure, reusable components, well-documented code.
* **Extensibility**: Easy to add new pages, content types, or features (newsletter, demos).

## 10. Technology Stack

* **Frontend**: Next.js (App Router), React, TypeScript.
* **Styling**: Tailwind CSS, custom CSS for animations.
* **CMS**: Sanity.io.
* **Hosting**: Vercel (with preview deployments), custom domain tomgoss.dev.
* **Analytics**: Google Analytics 4.

## 11. Integrations & Tooling

* **Task Management**: Task Master (Taskmaster) with `.taskmasterconfig`.
* **Code Agent**: Cursor AI for file/component generation.
* **CI/CD**: GitHub → Vercel auto-deploys.
* **Form Backend**: Netlify Forms or Formspree (TBD).

## 12. Assumptions & Dependencies

* Domain `tomgoss.dev` already purchased and pointing to Vercel.
* Sanity.io account & dataset available.
* API keys for GA4 and Taskmaster are on hand.

---

*End of PRD v1.2*

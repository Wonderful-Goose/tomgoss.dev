# Project Scaffold for tomgoss.dev

Below is an opinionated starter scaffold for your Next.js + TypeScript + Tailwind CSS + Sanity site. You can feed this structure to Cursor’s AI agent to generate files and components.

---

## 1. File Structure

```
.
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── postcss.config.mjs
├── .eslintrc.json
├── .prettierrc
├── sanity.config.ts        # (if you choose to configure Sanity in the monorepo)
│
├── app/
│   ├── layout.tsx          # Root layout (html, body, Navbar, Footer)
│   ├── globals.css         # Tailwind base imports
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── projects/page.tsx   # Projects list (MVP: grid of cards)
│   ├── articles/page.tsx   # Articles list (placeholder state)
│   └── contact/page.tsx    # Contact form or info
│
├── components/
│   ├── Navbar.tsx          # Responsive nav
│   ├── Footer.tsx          # Links & copyright
│   ├── Hero.tsx            # For home
│   ├── FeaturedProjects.tsx# Home section
│   ├── LatestArticles.tsx  # Home section
│   ├── ProjectCard.tsx     # Reusable card
│   └── ArticleCard.tsx     # Reusable card
│
├── styles/
│   └── animations.css      # (optional small animations)
│
└── sanity/                 # (optional separate studio folder)
    ├── schemas/
    │   ├── project.ts
    │   ├── article.ts
    │   └── index.ts         # schema aggregation
    └── sanity.config.ts
```

---

## 2. Core Configuration

### package.json (key deps)

```json
{
  "name": "tomgoss.dev",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .js,.ts,.jsx,.tsx"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "sanity": "latest",
    "@portabletext/react": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "tailwindcss": "latest",
    "postcss": "latest",
    "autoprefixer": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "prettier": "latest"
  }
}
```

### tailwind.config.ts

```ts
import { defineConfig } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default defineConfig({
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#0070f3', // adjust to your preferred muted teal or deep blue
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
})
```

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* import any custom animations here */
```

---

## 3. MVP Pages & Components

1. **Home (`app/page.tsx`)**

   - `Hero` with headline and CTA
   - `FeaturedProjects` (grid of 2 sample items)
   - `LatestArticles` (placeholder / “Coming soon!”)

2. **About (`app/about/page.tsx`)**

   - Summary, skills list, CV link

3. **Projects (`app/projects/page.tsx`)**

   - Fetch/display sample array of 2–3 projects
   - `ProjectCard`

4. **Articles (`app/articles/page.tsx`)**

   - Placeholder info: “No posts yet, stay tuned”
   - `ArticleCard` stub

5. **Contact (`app/contact/page.tsx`)**

   - Contact form fields or mailto link

---

- Configure Sanity schemas in `/sanity/schemas` for `project` and `article`.
- Hook up data fetching in components using the Sanity client.

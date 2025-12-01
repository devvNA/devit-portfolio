# AGENTS.md

> AI coding agent instructions for devit-portfolio

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (Turbopack) at localhost:3000 |
| `npm run build` | Production build → `out/` |
| `npm run lint` | Run Biome linter |
| `npm run format` | Format code with Biome |
| `npx playwright test` | Run Playwright E2E tests |
| `npx cypress run` | Run Cypress E2E tests |

## Tech Stack

- **Next.js 15.5.4** (App Router, static export)
- **React 19.1.0** + **Framer Motion** (animations)
- **TypeScript 5** + **Tailwind CSS v4**
- **Biome 2.2.0** (linting/formatting)
- **Lucide React** (icons)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, metadata, SEO
│   ├── page.tsx        # Main page (composes sections)
│   └── globals.css     # Theme variables, utilities
├── components/
│   ├── sections/       # HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection
│   ├── ui/             # Badge, Card (reusable primitives)
│   ├── Navigation.tsx  # Fixed navbar with scroll spy
│   └── FloatingButtons.tsx
└── lib/
    └── data.ts         # Content arrays (skills, projects, achievements)
```

## Key Patterns

1. **Content lives in `src/lib/data.ts`** — edit skills, projects, achievements there
2. **Theme via CSS variables** in `globals.css` (e.g., `--primary`, `--accent`, `--background`)
3. **Client components** use `"use client"` directive for interactivity
4. **Static export** — no API routes, no server runtime

## Code Style

- Biome enforces rules; run `npm run lint` before committing
- 2-space indentation
- Organize imports automatically
- Use `@/*` path alias for imports from `src/`

## Verification Checklist

Before marking work complete:

```bash
npm run lint          # Must pass with no errors
npm run build         # Must complete successfully
npx playwright test   # E2E tests must pass (if applicable)
```

## Common Tasks

### Add a new project
Edit `src/lib/data.ts` → `projects` array. Required fields:
- `title`, `description`, `tech` (string[]), `link`, `screenshots` (string[])

### Modify theme colors
Edit CSS variables in `src/app/globals.css` under `:root`

### Update SEO/metadata
Edit `src/app/layout.tsx` → `metadata` export

### Add a new section
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add nav item in `src/components/Navigation.tsx` → `navItems` array

## Constraints

- No server-side code (static export only)
- Images must be in `public/` and use relative paths
- Keep bundle size minimal — avoid heavy dependencies

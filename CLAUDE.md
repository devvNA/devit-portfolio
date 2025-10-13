# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern portfolio website for Devit Nur Azaqi, a Mobile Developer. Built with Next.js 15.5.4 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion animations. Features dark mode, smooth animations, and a single-page application layout with multiple sections.

## Development Commands

```bash
# Development server (with Turbopack)
npm run dev

# Production build (with Turbopack)
npm run build
npm run start

# Code quality
npm run lint      # Biome linter check
npm run format    # Auto-format with Biome
```

Note: This project uses **Biome** (not ESLint/Prettier) for linting and formatting. Biome is configured in `biome.json` with Next.js and React recommended rules.

## Architecture

### App Structure
- **Single-page portfolio** - All content rendered on one page (`src/app/page.tsx`)
- **Component-based sections** - Each portfolio section is a separate component
- **Server Components by default** - Client components explicitly marked with `"use client"`
- **CSS Variables for theming** - Theme switching via CSS custom properties

### Key Directories
```
src/
├── app/
│   ├── page.tsx       # Main portfolio page (imports all sections)
│   ├── layout.tsx     # Root layout with metadata & Inter font
│   └── globals.css    # CSS variables, theme definitions, custom styles
├── components/
│   ├── sections/      # Portfolio sections (Hero, About, Skills, Projects, Contact)
│   ├── Navigation.tsx # Fixed navbar with active section tracking
│   ├── Footer.tsx     # Footer with social links
│   └── FloatingButtons.tsx # WhatsApp button, dark mode toggle, back-to-top
└── lib/
    └── data.ts        # Portfolio data (skills, projects, achievements)
```

### Section Components
All portfolio sections live in `src/components/sections/`:
- `HeroSection.tsx` - Landing section with CTA buttons
- `AboutSection.tsx` - Professional background with achievement badges
- `SkillsSection.tsx` - Technical skills with animated progress bars
- `ProjectsSection.tsx` - Featured projects grid
- `ContactSection.tsx` - Contact form with email/WhatsApp integration

Each section has an `id` attribute matching the navigation links (home, about, skills, projects, contact).

### Theme System
- **CSS Variables** defined in `src/app/globals.css`
- **Light/Dark modes** via `[data-theme="dark"]` attribute on root element
- **Theme toggle** managed in `FloatingButtons.tsx` component
- Color palette:
  - Primary: `#0A2647` (deep blue)
  - Accent: `#4E9FFF` (vibrant blue)
  - Secondary: `#205295` (medium blue)

### Data Management
- **Static portfolio data** stored in `src/lib/data.ts`
- Exports: `skills`, `projects`, `achievements`
- Uses Lucide React icons for visual elements

### Client-Side Interactivity
Components using `"use client"`:
- `Navigation.tsx` - Scroll-based active section tracking
- `FloatingButtons.tsx` - Dark mode toggle, scroll-to-top button
- All section components - Framer Motion animations

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017

## Customization Points

### Portfolio Content
Edit `src/lib/data.ts` to update:
- Skills and proficiency levels
- Project details and achievements
- Achievement metrics

### Personal Information
Update in section components:
- Contact details (email, WhatsApp) in `ContactSection.tsx`
- Social links in `Footer.tsx`
- CV download link in `Navigation.tsx` (expects `/cv-devit.pdf` in public folder)
- Name and title in `HeroSection.tsx`

### Metadata & SEO
Update `src/app/layout.tsx` for:
- Page title and description
- Keywords
- Open Graph metadata

### Styling & Theme
Edit CSS variables in `src/app/globals.css`:
- Color scheme (light/dark mode)
- Custom scrollbar styles
- Gradient effects
- Glass morphism utilities

## Tech Stack Notes

- **Next.js 15.5.4** with App Router (not Pages Router)
- **Turbopack** build tool (faster than webpack)
- **Tailwind CSS v4** (new PostCSS-based version)
- **Framer Motion** for animations
- **Lucide React** for icons
- **@emailjs/browser** dependency present (contact form integration)
- **No testing framework** currently configured

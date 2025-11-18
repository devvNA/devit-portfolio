# Mobile Developer Portfolio

A modern, professional portfolio website showcasing mobile development expertise, projects, and achievements.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### Design & UI
- **Modern Design** with deep blue (#0A2647) and vibrant blue (#4E9FFF) color scheme
- **Smooth Animations** powered by Framer Motion
- **Dark Mode Toggle** with persistent theme
- **Responsive Design** - works perfectly on all devices
- **Custom Scrollbar** with accent colors
- **Gradient Text Effects** for visual appeal

### Sections
1. **Hero Section** - Animated introduction with call-to-action buttons
2. **About Section** - Professional background with achievement badges
3. **Skills Section** - Technical skills with animated progress bars
4. **Projects Section** - Featured projects with real data and metrics
5. **Contact Section** - Interactive form with email/WhatsApp integration
6. **Professional Footer** - Social links and credits

### Interactive Elements
- ✅ Floating WhatsApp button for instant contact
- ✅ Dark mode toggle
- ✅ Back to top button (appears on scroll)
- ✅ Smooth scroll navigation
- ✅ Active section highlighting in navbar
- ✅ Hover animations on cards and buttons
- ✅ Contact form with mailto integration

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.4 with App Router
- **UI Library:** React 19.1.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Build Tool:** Turbopack
- **Linter/Formatter:** Biome

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd devit-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production with Turbopack
npm run start        # Start production server

# Code Quality
npm run lint         # Run Biome linter
npm run format       # Format code with Biome
```

## 📁 Project Structure

```
devit-portfolio/
├── src/
│   └── app/
│       ├── page.tsx        # Main portfolio page (all sections)
│       ├── layout.tsx      # Root layout with metadata
│       ├── globals.css     # Global styles & theme
│       └── favicon.ico     # Site icon
├── public/                 # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── biome.json            # Biome config
└── next.config.ts        # Next.js config
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #0A2647;      /* Deep blue */
  --accent: #4E9FFF;       /* Vibrant blue */
  --secondary: #205295;    /* Medium blue */
  /* ... */
}
```

### Content
Update personal information in `src/app/page.tsx`:
- Skills array
- Projects array
- Achievements data
- Contact information
- Social media links

### Metadata
Update SEO information in `src/app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph data

## 📊 Key Metrics Highlighted

- **40%** Performance Improvements
- **30%** Bug Reduction
- **60%** Faster Testing
- **5000+** Active Users (LMS Project)

## 🎯 Projects Showcased

1. **Learning Management System (LMS)**
   - 5000+ active students
   - Real-time course management
   - Tech: Flutter, Laravel, PostgreSQL

2. **E-Commerce Mobile Platform**
   - Payment integration
   - Real-time inventory
   - Tech: React Native, Redux, Laravel

3. **Point of Sale (POS) System**
   - Offline-first architecture
   - Multi-branch support
   - Tech: Flutter, GetX, Supabase

4. **Agriculture Management App**
   - IoT sensor integration
   - Weather forecasting
   - Tech: Flutter, Laravel, MySQL

## 🔧 Technical Skills

- **Mobile:** Flutter, React Native
- **Architecture:** Clean Architecture, MVVM
- **State Management:** GetX, Redux
- **Backend:** Laravel, Supabase
- **Databases:** PostgreSQL, MySQL
- **APIs:** RESTful API Integration
- **Analysis:** System Analysis

## 📱 Contact Integration

### WhatsApp
Update the phone number in `src/app/page.tsx`:
```typescript
href="https://wa.me/6282142185804"
```

### Email
Update the email address:
```typescript
href="mailto:devitazaqi@gmail.com"  // Replace with actual email
```

### Social Links
Update profile URLs:
- GitHub: `https://github.com/devvNA`
- LinkedIn: `https://linkedin.com/in/devitnurazaqi`

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## ⚡ Performance Features

- **Server Components** for faster initial load
- **Font Optimization** with Next.js Font
- **Image Optimization** ready
- **Code Splitting** automatic
- **Turbopack** for faster builds

## 🎭 Dark Mode

Dark mode is implemented with CSS variables and can be toggled using the floating button. Theme preference is managed in component state and can be extended to use localStorage for persistence.

## 📝 License

This project is open source and available for personal use.

## 👨‍💻 Developer

**Devit Nur Azaqi**
- Mobile Developer
- 2+ years experience in Flutter & React Native
- Specialized in Clean Architecture

---

Built with ❤️ using Next.js, Tailwind CSS & Framer Motion

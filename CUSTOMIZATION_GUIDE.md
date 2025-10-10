# Portfolio Customization Guide

This guide will help you customize the portfolio website with your own information.

## 📋 Quick Customization Checklist

- [ ] Update personal information
- [ ] Add your CV file
- [ ] Update contact details
- [ ] Modify skills list
- [ ] Add your projects
- [ ] Update social media links
- [ ] Customize colors (optional)
- [ ] Add your photo (optional)

## 1. Personal Information

### Update Metadata (SEO)
**File:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Mobile Developer Portfolio",
  description: "Your professional description here...",
  keywords: ["Your", "Keywords", "Here"],
  authors: [{ name: "Your Name" }],
  // ...
};
```

### Update Hero Section
**File:** `src/app/page.tsx`

Find the Hero section and update:
```typescript
<h1>
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>
<h2>Your Title</h2>
<p>Your bio and professional summary...</p>
```

## 2. Contact Information

**File:** `src/app/page.tsx`

### Email
Replace all instances of:
```typescript
devitazaqi@gmail.com
```
with your email address.

### WhatsApp Number
Find and replace:
```typescript
href="https://wa.me/6281234567890"
```
with your number (include country code, no + or spaces):
```typescript
href="https://wa.me/1234567890"  // Example
```

### Location
Update in the Contact section:
```typescript
<p className="text-[var(--text-light)]">Your City, Country</p>
```

## 3. Social Media Links

**File:** `src/app/page.tsx`

Update these URLs throughout the file:

```typescript
// GitHub
href="https://github.com/yourusername"

// LinkedIn
href="https://linkedin.com/in/yourusername"
```

## 4. Skills

**File:** `src/app/page.tsx`

Find the `skills` array and modify:

```typescript
const skills = [
  { name: "Your Skill 1", icon: Code, level: 90 },
  { name: "Your Skill 2", icon: Server, level: 85 },
  // Add more skills...
];
```

**Available Icons:**
- `Code` - General coding
- `Smartphone` - Mobile development
- `Server` - Backend/Server
- `Database` - Databases

Import more icons from `lucide-react` if needed.

## 5. Projects

**File:** `src/app/page.tsx`

Find the `projects` array:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Detailed project description...",
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3",
    ],
    impact: "Quantifiable impact (e.g., 40% improvement)",
  },
  // Add more projects...
];
```

**Tips for Projects:**
- Use real data and metrics
- Highlight business impact
- Keep descriptions concise but informative
- Limit to 4-6 best projects

## 6. Achievements

**File:** `src/app/page.tsx`

Find the `achievements` array:

```typescript
const achievements = [
  {
    icon: TrendingUp,
    value: "Your Metric",
    label: "Description",
    color: "text-green-500",
  },
  // Modify all 4 achievements...
];
```

**Available Colors:**
- `text-green-500` - Green
- `text-blue-500` - Blue
- `text-purple-500` - Purple
- `text-orange-500` - Orange
- `text-red-500` - Red

## 7. About Section

**File:** `src/app/page.tsx`

Update the About section paragraphs:

```typescript
<p className="text-[var(--text-light)] mb-4 leading-relaxed">
  Your first paragraph about your experience...
</p>
<p className="text-[var(--text-light)] mb-4 leading-relaxed">
  Your second paragraph about expertise...
</p>
<p className="text-[var(--text-light)] leading-relaxed">
  Your third paragraph about passion...
</p>
```

Update experience boxes:
```typescript
<div>
  <h4 className="font-semibold mb-1">Experience</h4>
  <p className="text-[var(--text-light)]">
    Your experience description
  </p>
</div>
```

## 8. Add Your CV

1. Export your CV as a PDF
2. Rename it to: `cv-devit.pdf` (or update the filename in code)
3. Place it in the `/public` folder
4. The download button will automatically work

To change the CV filename, update in `src/app/page.tsx`:
```typescript
<a href="/your-cv-filename.pdf" download>
  Download CV
</a>
```

## 9. Colors (Optional)

**File:** `src/app/globals.css`

### Light Mode
```css
:root {
  --background: #ffffff;
  --foreground: #0A2647;
  --primary: #0A2647;      /* Main brand color */
  --accent: #4E9FFF;       /* Accent color */
  --secondary: #205295;    /* Secondary color */
  --text-light: #64748b;   /* Light text */
  --card-bg: #ffffff;      /* Card background */
  --border: #e2e8f0;       /* Borders */
}
```

### Dark Mode
```css
[data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #4E9FFF;
  --accent: #6BB6FF;
  --secondary: #205295;
  --text-light: #94a3b8;
  --card-bg: #1a1a1a;
  --border: #2a2a2a;
}
```

**How to choose colors:**
1. Pick your primary brand color
2. Use a lighter version for accent
3. Use a darker version for secondary
4. Tools: [Coolors.co](https://coolors.co), [Adobe Color](https://color.adobe.com)

## 10. Add Your Photo (Optional)

Currently, the hero section shows a code icon. To add your photo:

**Option 1: Replace with Image**

1. Add your photo to `/public` folder (e.g., `profile.jpg`)
2. In `src/app/page.tsx`, replace the hero graphic:

```typescript
// Find this code in the Hero section:
<div className="relative hidden md:block">
  {/* Replace the Code icon section with: */}
  <Image
    src="/profile.jpg"
    alt="Your Name"
    width={400}
    height={400}
    className="rounded-3xl"
  />
</div>
```

3. Import Image from next/image at the top:
```typescript
import Image from "next/image";
```

**Option 2: Use Avatar Service**

```typescript
<img
  src="https://ui-avatars.com/api/?name=Your+Name&size=400"
  alt="Your Name"
  className="rounded-3xl"
/>
```

## 11. Navigation Menu (Mobile)

The current design shows navigation on desktop. For mobile menu:

This is a more advanced customization. The current design is responsive and the navigation is hidden on mobile to maintain clean aesthetics. You can add a hamburger menu if needed.

## 12. Contact Form (Advanced)

The current setup uses `mailto:` links. To add email service:

### Option 1: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Update the `handleSubmit` function in `src/app/page.tsx`

### Option 2: API Route
1. Create an API route in `src/app/api/contact/route.ts`
2. Use a service like SendGrid, Nodemailer, or Resend
3. Update the form to POST to your API

## 13. Analytics (Optional)

### Google Analytics
1. Get your GA4 measurement ID
2. Add to `src/app/layout.tsx`:

```typescript
import Script from 'next/script'

// In the component:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🎨 Design Tips

1. **Consistency:** Keep the same color scheme throughout
2. **Whitespace:** Don't overcrowd sections
3. **Typography:** Stick to 2-3 font weights
4. **Images:** Use high-quality images (if adding photos)
5. **Content:** Keep it concise and impactful

## 🚀 Testing Checklist

Before deploying:

- [ ] Test on mobile devices
- [ ] Test dark mode toggle
- [ ] Click all links (social media, email, WhatsApp)
- [ ] Test contact form
- [ ] Check CV download
- [ ] Test smooth scrolling
- [ ] Verify all sections load properly
- [ ] Check for typos
- [ ] Test on different browsers

## 📱 Responsive Testing

Test on these breakpoints:
- Mobile: 375px (iPhone SE)
- Mobile Large: 414px (iPhone Pro Max)
- Tablet: 768px (iPad)
- Desktop: 1024px+

## 🐛 Common Issues

### Issue: Dark mode doesn't persist on refresh
**Solution:** Add localStorage in useEffect:

```typescript
useEffect(() => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') setIsDarkMode(true);
}, []);

useEffect(() => {
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  // ... rest of code
}, [isDarkMode]);
```

### Issue: Animations not working
**Solution:** Make sure framer-motion is installed:
```bash
npm install framer-motion
```

### Issue: Icons not showing
**Solution:** Verify lucide-react is installed:
```bash
npm install lucide-react
```

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all packages are installed
3. Clear cache and rebuild: `npm run build`
4. Check Node.js version (should be 18+)

---

Happy customizing! 🎉


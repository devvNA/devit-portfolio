# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Next.js applications.

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Done! ✨

3. **Automatic Deployments:**
   - Every push to `main` branch auto-deploys
   - Pull requests get preview deployments

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL is automatic!

---

## 🌐 Deploy to Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy
   netlify deploy --prod
   ```

3. **Or use Netlify UI:**
   - Connect your GitHub repository
   - Set build command and directory
   - Deploy

---

## 🐳 Deploy with Docker

1. **Create `Dockerfile`:**

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
```

2. **Update `next.config.ts`:**

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
};
```

3. **Build and run:**

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## ☁️ Deploy to AWS (Amplify)

1. **Install Amplify CLI:**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize:**
   ```bash
   amplify init
   amplify add hosting
   ```

3. **Deploy:**
   ```bash
   amplify publish
   ```

---

## 🔷 Deploy to Azure Static Web Apps

1. **Install Azure CLI:**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Deploy via GitHub Actions:**
   - Create Static Web App in Azure Portal
   - Connect to GitHub
   - Auto-generates workflow file

---

## 🔧 Manual Deployment (VPS/Dedicated Server)

### Prerequisites
- Node.js 18+ installed
- PM2 for process management
- Nginx for reverse proxy

### Steps

1. **SSH to your server:**
   ```bash
   ssh user@your-server.com
   ```

2. **Clone repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm ci --production
   ```

4. **Build:**
   ```bash
   npm run build
   ```

5. **Install PM2:**
   ```bash
   npm install -g pm2
   ```

6. **Start with PM2:**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Enable SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## 📊 Environment Variables

If you add environment variables (e.g., for EmailJS):

### Vercel
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Netlify
1. Site Settings → Build & Deploy → Environment
2. Add variables

### Local Development
Create `.env.local`:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🔍 Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add your CV to `/public` folder
- [ ] Update contact details (email, phone, WhatsApp)
- [ ] Update social media links
- [ ] Test all links and buttons
- [ ] Test dark mode
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check for console errors
- [ ] Run production build locally: `npm run build && npm start`
- [ ] Optimize images (if added)
- [ ] Update meta tags and SEO
- [ ] Test contact form
- [ ] Remove any test/dummy data

---

## 🎯 Build Command Reference

```bash
# Development (with Turbopack)
npm run dev

# Production build (with Turbopack)
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format

# Test production build locally
npm run build && npm start
```

---

## 🌍 Custom Domain Setup

### For Vercel:
1. Add domain in Vercel dashboard
2. Update DNS records:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### For Netlify:
1. Add domain in Netlify
2. Update DNS to Netlify nameservers

### For Custom Server:
1. Point A record to your server IP
2. Configure Nginx/Apache

---

## 🔒 Security Best Practices

1. **Enable HTTPS** (SSL/TLS)
2. **Set security headers** in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

3. **Keep dependencies updated:**
   ```bash
   npm audit
   npm update
   ```

---

## 📈 Post-Deployment

### Add Analytics
- Google Analytics
- Vercel Analytics
- Plausible Analytics

### Monitor Performance
- Lighthouse scores
- Core Web Vitals
- Vercel Speed Insights

### SEO
- Submit to Google Search Console
- Create sitemap
- Add robots.txt

---

## 🐛 Troubleshooting

### Build fails on Vercel
- Check Node.js version (should be 18+)
- Clear build cache
- Check for TypeScript errors

### Images not loading
- Ensure images are in `/public` folder
- Check image paths (use `/image.jpg` not `./image.jpg`)

### Environment variables not working
- Ensure they start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables

### Slow performance
- Check image optimization
- Enable caching headers
- Use Vercel Edge Network

---

## 📞 Support

**Vercel Support:** https://vercel.com/support
**Next.js Docs:** https://nextjs.org/docs
**Deployment Issues:** Check build logs for errors

---

**Ready to deploy? Start with Vercel for the smoothest experience!** 🚀


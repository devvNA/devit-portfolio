# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 📋 Prerequisites

Make sure you have:
- ✅ Node.js 18+ installed ([Download here](https://nodejs.org/))
- ✅ A code editor (VS Code recommended)
- ✅ Basic command line knowledge

Check your Node version:
```bash
node --version
# Should show v18.0.0 or higher
```

---

## 🚀 5-Minute Setup

### Step 1: Open Terminal
Navigate to the project folder:
```bash
cd devit-portfolio
```

### Step 2: Install Dependencies (if not done)
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open your browser and go to:
```
http://localhost:3000
```

**🎉 You should see your portfolio running!**

---

## ✏️ Essential Customizations (10 minutes)

### 1. Update Your Name & Email
Open `src/app/page.tsx` in your editor and search for:
- `Devit Nur Azaqi` → Replace with your name
- `devitazaqi@gmail.com` → Replace with your email

**Tip:** Use Ctrl+F (Cmd+F on Mac) to find and replace all instances

### 2. Update WhatsApp Number
Search for: `wa.me/6281234567890`
Replace with: `wa.me/YOUR_NUMBER` (include country code, no + or spaces)

Example: For US number (123) 456-7890, use `wa.me/11234567890`

### 3. Update Social Links
Search and replace:
- `github.com/devvNA` → Your GitHub username
- `linkedin.com/in/devitnurazaqi` → Your LinkedIn username

### 4. Add Your CV
1. Save your CV as PDF
2. Rename it to: `cv-devit.pdf`
3. Copy it to the `public` folder
4. The download button will now work!

**Save the file and check the browser - it auto-updates!** ✨

---

## 🎨 Quick Customizations

### Change Your Title
In `src/app/page.tsx`, find:
```typescript
<h2>Mobile Developer</h2>
```
Change "Mobile Developer" to your title.

### Update Your Bio
Find the paragraph starting with "Experienced Mobile Developer..."
Replace with your own professional summary.

### Update Location
Find "Indonesia" in the Contact section
Replace with your city/country.

---

## 🧪 Testing Checklist

After customizations, test these:

- [ ] Your name appears correctly
- [ ] Email link works (click to open email client)
- [ ] WhatsApp button opens WhatsApp with your number
- [ ] Social links go to your profiles
- [ ] Dark mode toggle works
- [ ] Download CV button works (after adding CV)
- [ ] Mobile view looks good (resize browser)

**How to test mobile view:**
1. Open browser DevTools (F12)
2. Click device toolbar icon (phone/tablet icon)
3. Select iPhone or other device

---

## 🚀 Deploy in 5 Minutes

### Option 1: Deploy to Vercel (Easiest)

1. **Create GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   ```
   
   Create a new repository on GitHub, then:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (use GitHub account)
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Wait 2 minutes ⏱️
   - **Done!** Your portfolio is live! 🎉

You'll get a URL like: `your-portfolio.vercel.app`

### Option 2: Deploy with Vercel CLI (Alternative)

```bash
# Install Vercel
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

Follow the prompts, and you're done!

---

## 🎯 Common First-Timer Questions

### Q: How do I stop the server?
**A:** Press `Ctrl+C` in the terminal

### Q: Changes aren't showing?
**A:** 
1. Make sure you saved the file
2. Check terminal for errors
3. Refresh browser (Ctrl+R)
4. If still not working, stop server (Ctrl+C) and run `npm run dev` again

### Q: I see errors in the terminal
**A:** 
1. Read the error message
2. Most common: Syntax error (missing bracket, quote, etc.)
3. Check the line number mentioned
4. Make sure you didn't accidentally delete important code

### Q: Dark mode button not working?
**A:** It should work! Try clicking it multiple times. Check browser console (F12) for errors.

### Q: How do I add my photo?
**A:** See `CUSTOMIZATION_GUIDE.md` section 10 for detailed instructions

### Q: Can I change colors?
**A:** Yes! See `CUSTOMIZATION_GUIDE.md` section 9 for color customization

### Q: What if I break something?
**A:** 
1. Undo your changes (Ctrl+Z)
2. Or restore from git: `git checkout src/app/page.tsx`
3. Save and reload

---

## 📱 Mobile View Tips

The site is fully responsive, but here's what to check:

**On Mobile:**
- Navigation items are visible
- Text is readable (not too small)
- Buttons are tap-friendly
- Forms work properly
- Images don't overflow

**Test on your phone:**
1. Deploy to Vercel (see above)
2. Open the Vercel URL on your phone
3. Test all features

---

## 🎨 Quick Design Tips

### Professional Look:
✅ Use a professional email (not party.lover99@...)
✅ Keep descriptions concise and clear
✅ Use metrics (40% improvement, 5000+ users)
✅ Proofread everything for typos
✅ Use consistent capitalization

### What NOT to do:
❌ Don't use too many emojis
❌ Don't use informal language
❌ Don't exaggerate skills
❌ Don't leave placeholder/test data
❌ Don't use low-quality images

---

## 🆘 Emergency Troubleshooting

### Server won't start
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Strange errors
```bash
# Check Node version (should be 18+)
node --version

# Update npm
npm install -g npm@latest
```

---

## 📚 Next Steps

After the quick start:

1. ✅ Read `PROJECT_SUMMARY.md` for complete overview
2. ✅ Read `CUSTOMIZATION_GUIDE.md` for detailed customization
3. ✅ Read `DEPLOYMENT_GUIDE.md` for advanced deployment
4. ✅ Customize all your data
5. ✅ Deploy to Vercel
6. ✅ Share with friends and on LinkedIn!

---

## 🎉 You're Ready!

You now have:
- ✅ Portfolio running locally
- ✅ Basic customization knowledge
- ✅ How to deploy
- ✅ Where to find help

**Go make it yours and show the world what you can do!** 🚀

---

## 💬 Still Stuck?

1. Check the error message carefully
2. Google the error message
3. Check `CUSTOMIZATION_GUIDE.md` for detailed help
4. Make sure you're in the right folder: `devit-portfolio`
5. Make sure you saved your files before testing

**Remember:** Every developer gets errors. It's part of the process! 💪

---

**Happy coding!** 🎨✨


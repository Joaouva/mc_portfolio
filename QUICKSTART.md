# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## What You Have

✅ A modern Next.js portfolio website  
✅ Clean, minimalist design inspired by BAK Gordon  
✅ Ready for Strapi CMS integration  
✅ Mock data already showing example projects  
✅ Fully responsive and production-ready  

## Immediate Next Steps

### 1. See It in Action (30 seconds)

```bash
cd mc_portfolio
npm run dev
```

Open http://localhost:3000 - Your portfolio is live with placeholder content!

### 2. Set Up Strapi CMS (15–20 minutes)

**Full step-by-step guide (for you or your client):** [STRAPI_SETUP.md](./STRAPI_SETUP.md)

Quick version:
1. Run `npx create-strapi@latest mc-portfolio-strapi` (outside or next to this folder)
2. `cd mc-portfolio-strapi` → `npm run develop`
3. Create admin user at http://localhost:1337/admin
4. In Content-Type Builder: create “Project” collection with title, slug, description, category, year, location, featuredImage, images
5. Settings → Roles → Public: enable **find** and **findOne** for Project
6. Add projects in Content Manager and **Publish** them
7. In this app: add `NEXT_PUBLIC_STRAPI_URL=http://localhost:1337` to `.env.local` (no `/api` at the end)
8. Optional: switch `lib/data.ts` to Strapi (code in STRAPI_SETUP.md)

### 3. Deploy to Internet (10 minutes)

Follow the guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

Quick version:
1. Push to GitHub
2. Connect to Vercel (free)
3. Add environment variables
4. Deploy!

## Project Structure

```
📁 app/
  ├── page.tsx          → Homepage with gallery
  ├── practice/         → About/practice page
  ├── contact/          → Contact page  
  └── projects/[slug]/  → Individual project pages

📁 components/
  ├── Navigation.tsx    → Top menu with dropdowns
  ├── Gallery.tsx       → Project grid
  └── ProjectCard.tsx   → Project cards

📁 lib/
  ├── data.ts          → Data fetching (currently mock data)
  └── strapi.ts        → Strapi API integration functions
```

## Switching from Mock to Real Data

Once Strapi is set up, update `lib/data.ts` - instructions are in comments!

## What Makes This Different?

- **Non-Developer Friendly:** Content manager can update everything via Strapi CMS
- **Fast & Modern:** Built with Next.js 16 and Tailwind CSS
- **Zero Cost:** Free on Vercel + Strapi Cloud free tier
- **Beautiful:** Clean, minimalist design
- **SEO Ready:** Server-side rendering for great SEO

## Need Help?

- **CMS Setup:** See [STRAPI_SETUP.md](./STRAPI_SETUP.md)
- **Deployment:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Everything Else:** See [README.md](./README.md)

## Current Features

✅ Project gallery with category filtering  
✅ Individual project detail pages  
✅ Practice/about page  
✅ Contact page  
✅ Responsive navigation with dropdowns  
✅ Image optimization  
✅ TypeScript for reliability  

## What to Customize First

1. **Logo/Brand:** Change "MC" in `components/Navigation.tsx`
2. **Colors:** Edit `app/globals.css`
3. **Contact Info:** Update `app/contact/page.tsx`
4. **About Text:** Edit `app/practice/page.tsx`

---

**You're all set!** The hardest part is done. Now just add your content and deploy! 🚀


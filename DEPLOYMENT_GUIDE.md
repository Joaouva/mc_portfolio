# 🚀 GitHub Pages Deployment Guide

## ⚙️ Enable GitHub Pages (First Time Setup)

1. Go to your repository settings:
   https://github.com/Joaouva/mc_portfolio/settings/pages

2. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"** (not "Deploy from a branch")
   
3. Click **"Save"**

## 📊 Check Deployment Status

1. Go to Actions tab:
   https://github.com/Joaouva/mc_portfolio/actions

2. You should see "Deploy to GitHub Pages" workflow
   - Green checkmark ✅ = deployed successfully
   - Orange dot 🟠 = currently deploying (wait 1-3 minutes)
   - Red X ❌ = deployment failed (check logs)

## 🌐 Access Your Site

Once deployed, your site will be available at:
**https://joaouva.github.io/mc_portfolio/**

### If styles are missing:

1. **Hard refresh** your browser:
   - **Mac:** `Cmd + Shift + R`
   - **Windows/Linux:** `Ctrl + Shift + R`
   
2. **Clear cache** in browser settings

3. Wait for GitHub Actions to finish deploying (check Actions tab)

## 🔄 Future Updates

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your Next.js site
2. Deploy to GitHub Pages
3. Update your live site (takes 1-3 minutes)

## ⚠️ Common Issues

### Styles not loading
- Wait for deployment to complete (check Actions tab)
- Hard refresh browser (Cmd + Shift + R)
- Verify Source is set to "GitHub Actions" in Pages settings

### 404 errors
- Make sure basePath is set correctly in `next.config.ts`
- Check that your domain is `joaouva.github.io/mc_portfolio/`

### Images not displaying
- Remote images are configured for Unsplash
- Images are unoptimized for static export (normal for GitHub Pages)


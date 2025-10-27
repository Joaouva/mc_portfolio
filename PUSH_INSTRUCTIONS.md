# 🚀 Push to Personal GitHub - Step by Step

## ✅ Already Done:
- [x] Files staged (`git add .`)
- [x] Git configured for personal account (JoaoUva / joaouva@gmail.com)

## 📦 Step 1: Create Private Repository on GitHub

1. Open your browser and go to: https://github.com/new
2. **Make sure you're logged into your PERSONAL account** (not joao-SG)
3. Fill in the form:
   - **Repository name:** `mc_portfolio`
   - **Description:** "Portfolio website with Next.js and Strapi CMS"
   - **Visibility:** Select **PRIVATE** ✅
   - **DO NOT** check any of these boxes:
     - [ ] Add a README file
     - [ ] Add .gitignore
     - [ ] Choose a license
4. Click **"Create repository"**

## 🔗 Step 2: Commit and Add Remote

Run these commands in your terminal:

```bash
cd /Users/uva/Code/ManueCruchinho/mc_portfolio

# Commit the changes
git commit -m "Initial commit: Portfolio website with Next.js, TypeScript, Tailwind, and Strapi integration"

# Add remote using github-personal host (IMPORTANT!)
git remote add origin git@github-personal:YOUR_GITHUB_USERNAME/mc_portfolio.git

# Push to GitHub
git push -u origin main
```

**⚠️ REPLACE `YOUR_GITHUB_USERNAME`** with your actual personal GitHub username!

## 🔍 Step 3: Verify

After pushing, check:
```bash
git remote -v
```

Should show:
```
origin  git@github-personal:YOUR_USERNAME/mc_portfolio.git (fetch)
origin  git@github-personal:YOUR_USERNAME/mc_portfolio.git (push)
```

Visit: `https://github.com/YOUR_USERNAME/mc_portfolio` to see your private repository!

## ✨ Done!

Your portfolio is now in a private GitHub repository on your personal account! 🎉


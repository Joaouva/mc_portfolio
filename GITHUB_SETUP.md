# GitHub Setup for Personal Account

This project is configured to use your **personal GitHub account** (`joaouva@gmail.com`).

## ✅ Current Configuration

- **Git User:** JoaoUva
- **Git Email:** joaouva@gmail.com
- **SSH Key:** `~/.ssh/id_rsa`
- **SSH Host:** `github-personal` (as configured in `~/.ssh/config`)

## 📦 Create Repository on GitHub

1. Go to [github.com](https://github.com) and log in with your personal account
2. Click the **"+"** icon → **"New repository"**
3. Fill in:
   - **Repository name:** `mc_portfolio` (or any name you prefer)
   - **Description:** "Portfolio website built with Next.js and Strapi CMS"
   - **Visibility:** Public or Private (your choice)
   - ⚠️ **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## 🚀 Push to GitHub

After creating the repository on GitHub, run these commands:

```bash
cd /Users/uva/Code/ManueCruchinho/mc_portfolio

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website with Next.js, TypeScript, and Tailwind"

# Add remote (IMPORTANT: use 'github-personal' instead of 'github.com')
git remote add origin git@github-personal:JoaoUva/mc_portfolio.git

# Push to GitHub
git push -u origin main
```

**IMPORTANT:** Notice we use `git@github-personal:` instead of `git@github.com:` - this tells Git to use your personal SSH key!

## 🔄 If Remote Already Exists

If you get an error saying the remote already exists, update it:

```bash
git remote remove origin
git remote add origin git@github-personal:JoaoUva/mc_portfolio.git
git push -u origin main
```

## ✏️ Replace Username

In the remote URL above, replace `JoaoUva` with your actual GitHub username if it's different.

Example:
```bash
git remote add origin git@github-personal:YOUR-USERNAME/mc_portfolio.git
```

## 🔍 Verify Configuration

Check that everything is configured correctly:

```bash
# Check local git config
git config user.name
git config user.email

# Check remote URL
git remote -v

# Test SSH connection
ssh -T git@github-personal
```

The SSH test should return: "Hi YOUR-USERNAME! You've successfully authenticated..."

## 📝 Future Commits

For future changes, just use normal git commands:

```bash
git add .
git commit -m "Your commit message"
git push
```

The project will automatically use your personal account! ✨


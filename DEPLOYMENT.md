# Deployment Guide

This guide explains how to deploy your portfolio website to production.

## Prerequisites

Before deploying, ensure you have:
- ✅ A GitHub account
- ✅ A Strapi Cloud instance set up and configured
- ✅ Your domain ready (optional, but recommended)
- ✅ All content added to Strapi CMS

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Step-by-Step Instructions

1. **Push to GitHub**
   ```bash
   cd mc_portfolio
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

3. **Import Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a Next.js project

4. **Configure Environment Variables**
   
   Add these environment variables:
   ```
   NEXT_PUBLIC_STRAPI_URL = your_strapi_url_here
   STRAPI_API_TOKEN = your_strapi_token_here
   ```

   Get these from:
   - Strapi URL: Your Strapi Cloud dashboard
   - API Token: Strapi Settings → API Tokens

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - You'll get a URL like: `your-project.vercel.app`

6. **Add Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Click "Add"
   - Enter your domain name
   - Follow the DNS configuration instructions
   - Your domain provider should have a DNS settings page where you:
     - Add a CNAME record pointing to `cname.vercel-dns.com`
     - Or add A records to Vercel's IP addresses
   - Wait for DNS propagation (can take up to 24 hours)

#### Automatic Deployments

Once set up, Vercel will automatically deploy when you push to GitHub:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployments

### Option 2: Netlify

1. **Push to GitHub** (same as Vercel step 1)

2. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

3. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

4. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

5. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add the same variables as Vercel

6. **Deploy**
   - Click "Deploy site"
   - Your site will be at: `random-name.netlify.app`

7. **Add Custom Domain**
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS instructions

### Option 3: Self-Hosted (VPS)

For deployment on your own server:

1. **Server Requirements**
   - Node.js 18+
   - PM2 (process manager)
   - Nginx (reverse proxy)

2. **Clone and Install**
   ```bash
   git clone your-repo-url
   cd mc_portfolio
   npm install
   ```

3. **Set Environment Variables**
   ```bash
   nano .env.local
   # Add your Strapi credentials
   ```

4. **Build**
   ```bash
   npm run build
   ```

5. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**
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

7. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

## Post-Deployment Checklist

After deploying, verify:

- [ ] Website loads correctly
- [ ] All images display properly
- [ ] Navigation works
- [ ] Project pages open correctly
- [ ] Contact information is correct
- [ ] Mobile view looks good
- [ ] Custom domain works (if configured)
- [ ] SSL certificate is active (https://)

## Updating Your Site

### Content Updates (via Strapi)
- Log in to Strapi
- Edit/add content
- Click "Save" and "Publish"
- Changes appear immediately (or after cache clears)

### Code Updates

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Vercel/Netlify will automatically deploy the changes

## Troubleshooting

### Images Not Loading
- Check if NEXT_PUBLIC_STRAPI_URL is correct (includes https://)
- Verify Strapi Public permissions are set
- Check image URLs in Strapi

### Build Failures
- Check build logs in your deployment platform
- Verify all environment variables are set
- Make sure dependencies are listed in package.json

### Slow Performance
- Optimize images before uploading to Strapi
- Enable Vercel/Netlify's CDN features
- Consider upgrading to a paid plan for better performance

### Domain Not Working
- Wait for DNS propagation (up to 24 hours)
- Verify DNS records are correct
- Check domain provider's DNS settings
- Use [DNS Checker](https://dnschecker.org) to verify propagation

## Monitoring

### Vercel Analytics
- Enable in Vercel dashboard
- Get insights on page views, performance, etc.

### Google Analytics (Optional)
1. Create a Google Analytics account
2. Add tracking code to `app/layout.tsx`:
   ```typescript
   // Add to <head>
   <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
   <Script id="google-analytics">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     `}
   </Script>
   ```

## Support

- **Next.js Issues:** [Next.js GitHub](https://github.com/vercel/next.js/issues)
- **Vercel Support:** [Vercel Help](https://vercel.com/help)
- **Strapi Issues:** [Strapi Forum](https://forum.strapi.io/)

---

**Need help?** Create an issue in your GitHub repository with:
- What you're trying to do
- Error messages (if any)
- Screenshots
- Steps you've already tried


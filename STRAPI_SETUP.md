# 📝 Strapi Cloud Setup Guide

## 1. Create Strapi Cloud Account

1. Go to: https://cloud.strapi.io/signup
2. Sign up with any email (test or personal - you can migrate later!)
3. Verify your email and login

## 2. Create New Project

1. Click **"Create Project"**
2. Select:
   - **Free Tier** (Hobby - $0/month)
   - **Region**: Choose closest to your location
   - **Project Name**: `mc-portfolio` (or any name)
3. Wait 3-5 minutes for deployment ☕

## 3. Access Your Strapi Admin

After deployment:
1. You'll get a URL like: `https://your-project-name.strapiapp.com`
2. Click **"Open admin"**
3. Create your admin user (username, email, password)

## 4. Create Content Types

### 📁 Create "Project" Collection Type

1. Go to **Content-Type Builder** (left sidebar)
2. Click **"Create new collection type"**
3. Name it: `project` (singular)
4. Add the following fields:

#### Field Configuration:

| Field Name | Type | Settings |
|------------|------|----------|
| **title** | Text (Short) | Required |
| **slug** | UID (attached to title) | Required |
| **description** | Text (Long) | Required |
| **category** | Enumeration | Values: `residential`, `interior`, `urban` |
| **year** | Text (Short) | Optional |
| **location** | Text (Short) | Optional |
| **featuredImage** | Text (Short) | Required (URL) |
| **images** | JSON | Required |

5. Click **"Save"** and wait for server restart

### 🔒 Set Permissions (PUBLIC ACCESS)

1. Go to **Settings** → **Roles** → **Public**
2. Under **Permissions**, expand **Project**
3. Check these boxes:
   - ✅ `find` (get all projects)
   - ✅ `findOne` (get single project)
4. Click **"Save"**

## 5. Add Content (Sample Projects)

1. Go to **Content Manager** → **Project**
2. Click **"Create new entry"**

### Example Project 1:

```
Title: Modern Villa
Slug: modern-villa (auto-generated)
Description: A contemporary residential project featuring clean lines and sustainable design.
Category: residential
Year: 2024
Location: New York, USA
Featured Image: https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800
Images: 
[
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"
]
```

3. Click **"Save"** and **"Publish"**
4. Repeat for more projects

## 6. Get API Credentials

### API URL:
Your API URL is: `https://your-project-name.strapiapp.com/api`

### Create API Token (Optional - for authenticated requests):

1. Go to **Settings** → **API Tokens**
2. Click **"Create new API Token"**
3. Configure:
   - **Name**: `Next.js App`
   - **Token type**: `Read-only`
   - **Token duration**: `Unlimited`
4. Copy the token (you'll only see it once!)

## 7. Configure Your Next.js App

### Add Environment Variables:

Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_STRAPI_URL=https://your-project-name.strapiapp.com/api
STRAPI_API_TOKEN=your-api-token-here-if-you-created-one
```

### Update `lib/data.ts`:

Replace the mock data functions with the actual Strapi API calls (see `lib/strapi.ts`)

## 8. Test the Integration

Run your Next.js app locally:

```bash
npm run dev
```

Visit http://localhost:3000 - you should see your Strapi projects!

## 🔄 Migrating to Another Account Later

### Option 1: Transfer Data (Manual)
1. Export content from old Strapi project (Content Manager → Select all → Export)
2. Create new project in new account
3. Import content

### Option 2: Database Export/Import
1. Use Strapi's backup/restore features
2. Export database from old project
3. Import to new project

### Option 3: Fresh Start
1. Create new Strapi project in new account
2. Re-add content manually
3. Update API URL in `.env.local`

## 📚 Helpful Resources

- Strapi Docs: https://docs.strapi.io
- Strapi Cloud Docs: https://docs.strapi.io/cloud
- Content API: https://docs.strapi.io/dev-docs/api/rest

## 🆓 Free Tier Limits

- **1 project**
- **10k records** (more than enough for a portfolio)
- **1 GB assets** (images stored elsewhere recommended)
- **Community support**

## 💡 Best Practices

1. **Use external image hosting** (Unsplash, Cloudinary, etc.) to save storage
2. **Keep backups** of your content
3. **Test locally first** before deploying changes
4. **Use environment variables** for sensitive data

---

## ✅ Ready to Go!

Once you've completed these steps:
1. Your Strapi backend is live ✨
2. Your Next.js site can fetch real content 🎉
3. You can manage content without touching code! 💪

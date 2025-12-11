# 📝 Strapi Setup Guide - Following Official Quick Start

This guide follows the [official Strapi quick start](https://docs.strapi.io/cms/quick-start) adapted for your portfolio project.

## ✅ Current Status

- ✅ Next.js app is ready to connect to Strapi
- ✅ Strapi helper functions are prepared (`lib/strapi.ts`)
- ⏳ **Strapi project needs to be created** (follow steps below)

---

## 🚀 Part A: Create a New Strapi Project

### Step 1: Run the Installation Script

Open a terminal and run:

```bash
npx create-strapi@latest mc-portfolio-strapi
```

**What happens:**
1. Terminal will prompt you to **log in or sign up** to Strapi Cloud
2. Select **"Login/Sign up"** and press Enter
3. A browser tab opens - confirm the code matches
4. Click **"Continue with GitHub"** (login if needed)
5. You'll see "Congratulations, you're all set!" - close the browser tab
6. Back in terminal, press `Enter` to accept all default answers

**Important:** This creates a **30-day trial** of the Growth plan automatically!

### Step 2: Register First Administrator User

After installation completes:

```bash
cd mc-portfolio-strapi
npm run develop
```

Your browser will open automatically. Complete the form to create your admin account:
- **First name**
- **Last name**
- **Email**
- **Password**

**🎉 Congratulations!** You now have access to the Strapi admin panel at `http://localhost:1337/admin`

---

## 🏗️ Part B: Build Your Content Structure

### Step 1: Create "Project" Collection Type

1. In the admin panel, click **"Create your first Content type"** (or go to **Content-Type Builder**)
2. Click **"Create new collection type"**
3. Type `Project` for the **Display name**, click **Continue**

Now add these fields:

#### Field 1: Title
- Click **Text** field
- Name: `title`
- Go to **Advanced Settings** tab
- ✅ Check **Required field**
- Click **Finish**

#### Field 2: Slug
- Click **Add another field**
- Choose **UID** field
- Name: `slug`
- **Attached field**: Select `title` (this auto-generates slug from title)
- Go to **Advanced Settings** tab
- ✅ Check **Required field**
- Click **Finish**

#### Field 3: Description
- Click **Add another field**
- Choose **Text** (Long text)
- Name: `description`
- Go to **Advanced Settings** tab
- ✅ Check **Required field**
- Click **Finish**

#### Field 4: Category
- Click **Add another field**
- Choose **Enumeration**
- Name: `category`
- **Values** (one per line):
  ```
  residential
  interior
  urban
  ```
- Go to **Advanced Settings** tab
- ✅ Check **Required field**
- Click **Finish**

#### Field 5: Year
- Click **Add another field**
- Choose **Text** (Short text)
- Name: `year`
- Click **Finish** (optional field)

#### Field 6: Location
- Click **Add another field**
- Choose **Text** (Short text)
- Name: `location`
- Click **Finish** (optional field)

#### Field 7: Featured Image
- Click **Add another field**
- Choose **Text** (Short text)
- Name: `featuredImage`
- Go to **Advanced Settings** tab
- ✅ Check **Required field**
- Click **Finish**

**Note:** We're using text URLs for images (like Unsplash) to save storage. You can use Media Library later if preferred.

#### Field 8: Images
- Click **Add another field**
- Choose **JSON**
- Name: `images`
- Go to **Advanced Settings** tab
- ✅ Check **Required field**
- Click **Finish**

**Note:** This stores an array of image URLs as JSON.

#### Save the Content Type
- Click **Save** at the top right
- Wait for Strapi to restart (~30 seconds)

**✅ Done!** Your "Project" collection type is created!

---

## ☁️ Part C: Deploy to Strapi Cloud

### Option 1: Deploy from Local Project (Recommended)

Since you created the project with `npx create-strapi@latest`, it's already linked to Strapi Cloud:

1. Go to: https://cloud.strapi.io
2. You should see your `mc-portfolio-strapi` project
3. Click on it, then click **"Deploy"** or **"Visit app"**

### Option 2: Create Fresh Cloud Project

If you want to start fresh in the cloud:

1. Go to: https://cloud.strapi.io
2. Click **"Create Project"**
3. Choose:
   - **Free Tier** (Hobby - $0/month)
   - **Region**: Closest to you
   - **Project Name**: `mc-portfolio`
4. Wait 3-5 minutes for deployment

**Important:** If you create a fresh cloud project, you'll need to recreate the content types in the cloud admin panel (follow Part B again).

---

## 📝 Part D: Add Content to Your Strapi Project

### Step 1: Log in to Admin Panel

**If using local project:**
- Admin panel: `http://localhost:1337/admin`

**If using Strapi Cloud:**
- Admin panel: `https://your-project-name.strapiapp.com/admin`
- Create your first admin user when prompted

### Step 2: Create Project Entries

1. Go to **Content Manager** → **Collection types** → **Project**
2. Click **"Create new entry"**

#### Example Project 1:
```
Title: Modern Villa
Slug: modern-villa (auto-generated from title)
Description: A contemporary residential project featuring clean lines and sustainable design principles.
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

3. Click **Save**
4. Repeat for more projects

### Step 3: Set Roles & Permissions (CRITICAL!)

**This step is essential** - without it, your Next.js app can't access the data:

1. Go to **Settings** (bottom of sidebar) → **Users & Permissions Plugin** → **Roles**
2. Click **"Public"** role
3. Scroll down to **Permissions**
4. Find **"Project"** and expand it
5. ✅ Check **"find"** (get all projects)
6. ✅ Check **"findOne"** (get single project)
7. Click **"Save"** at the top

**✅ Your API is now publicly accessible!**

### Step 4: Publish Content

By default, content is saved as drafts. You must publish to make it accessible:

1. Go to **Content Manager** → **Collection types** → **Project**
2. Click on a project entry
3. Click **"Publish"** button (top right)
4. Confirm **"Yes, publish"**
5. Repeat for all projects

**✅ Published content is now accessible via API!**

### Step 5: Test the API

Visit your API endpoint in a browser:

**Local:** `http://localhost:1337/api/projects`

**Cloud:** `https://your-project-name.strapiapp.com/api/projects`

You should see JSON data with your projects! 🎉

---

## 🔗 Connect Next.js to Strapi

### Step 1: Create Environment File

Create `.env.local` in your Next.js project root:

```bash
NEXT_PUBLIC_STRAPI_URL=https://your-project-name.strapiapp.com/api
# Or for local: http://localhost:1337/api

# Optional: If you created an API token
STRAPI_API_TOKEN=your-token-here
```

### Step 2: Update Data Functions

Replace the mock data in `lib/data.ts` with Strapi API calls:

```typescript
import { Project } from '@/types';
import { fetchAPI } from './strapi';

interface StrapiProject {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  year?: string;
  location?: string;
  featuredImage: string;
  images: string[];
}

export async function getProjects(category?: string): Promise<Project[]> {
  const query = category && category !== 'all' 
    ? `?filters[category][$eq]=${category}&populate=*`
    : '?populate=*';
  
  const response = await fetchAPI<{ data: StrapiProject[] }>(`/projects${query}`);
  
  return response.data.map((project) => ({
    id: project.documentId,
    title: project.title,
    slug: project.slug,
    category: project.category,
    description: project.description,
    year: project.year,
    location: project.location,
    featuredImage: project.featuredImage,
    images: Array.isArray(project.images) ? project.images : [],
  }));
}

export async function getProject(slug: string): Promise<Project | null> {
  const response = await fetchAPI<{ data: StrapiProject[] }>(
    `/projects?filters[slug][$eq]=${slug}&populate=*`
  );
  
  if (!response.data || response.data.length === 0) {
    return null;
  }
  
  const project = response.data[0];
  return {
    id: project.documentId,
    title: project.title,
    slug: project.slug,
    category: project.category,
    description: project.description,
    year: project.year,
    location: project.location,
    featuredImage: project.featuredImage,
    images: Array.isArray(project.images) ? project.images : [],
  };
}
```

### Step 3: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` - you should see your Strapi projects! 🎉

---

## 🔄 Migrating Between Accounts

### Transfer Data Between Projects:

1. **Export from old project:**
   - Content Manager → Select all entries → Export

2. **Import to new project:**
   - Content Manager → Import → Upload file

3. **Update environment variables:**
   - Update `.env.local` with new API URL

---

## 📚 Resources

- [Official Strapi Quick Start](https://docs.strapi.io/cms/quick-start)
- [Strapi Cloud Documentation](https://docs.strapi.io/cloud)
- [REST API Documentation](https://docs.strapi.io/dev-docs/api/rest)

---

## ✅ Checklist

- [ ] Created Strapi project (`npx create-strapi@latest`)
- [ ] Created admin user
- [ ] Created "Project" content type with all fields
- [ ] Set Public role permissions (find, findOne)
- [ ] Created and published project entries
- [ ] Tested API endpoint in browser
- [ ] Created `.env.local` with API URL
- [ ] Updated `lib/data.ts` to use Strapi API
- [ ] Tested Next.js app locally

**Once all checked, your portfolio is fully connected to Strapi! 🚀**

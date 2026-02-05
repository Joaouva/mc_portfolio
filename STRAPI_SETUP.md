# Strapi Setup – Step-by-Step Guide

This guide is for the **client** (or whoever will manage content). Follow the steps in order. The portfolio site is already built; Strapi is the backend where you edit projects, and the site will load content from it.

---

## Overview

| Step | What you do |
|------|----------------|
| 1 | Create the Strapi project (one-time) |
| 2 | Create your admin account and open the admin panel |
| 3 | Create the “Project” content type (fields for title, slug, images, etc.) |
| 4 | Set permissions so the site can read the API |
| 5 | Add and publish your first projects |
| 6 | Connect the Next.js site to Strapi (env + optional code) |
| 7 | Test the site |

---

## Step 1: Create the Strapi project

1. Open a terminal.
2. Go to the folder where you want Strapi to live (e.g. next to the portfolio folder, or inside the same repo). Example:
   ```bash
   cd /path/to/ManueCruchinho
   ```
3. Run:
   ```bash
   npx create-strapi@latest mc-portfolio-strapi
   ```
4. When prompted:
   - **Quickstart?** → Choose **Yes** (or **No** if you want to pick a database; then choose SQLite for simplicity).
   - **TypeScript?** → **Yes** is fine.
5. Wait until it finishes. It will create a folder `mc-portfolio-strapi`.

---

## Step 2: Start Strapi and create the admin user

1. Go into the Strapi project and start it:
   ```bash
   cd mc-portfolio-strapi
   npm run develop
   ```
2. A browser tab should open at **http://localhost:1337/admin**.
3. The first time, you’ll see **“Create your first administrator”**. Fill in:
   - First name  
   - Last name  
   - Email  
   - Password  
   and submit.
4. You’re now in the Strapi admin at **http://localhost:1337/admin**. Keep this tab open.

---

## Step 3: Create the “Project” content type

You’re defining the structure of a “Project” (what fields each project has).

1. In the left sidebar, open **Content-Type Builder**.
2. Click **Create new collection type**.
3. **Display name:** type `Project` → **Continue**.

Add these fields one by one (click **Add another field** for each):

| # | Field type | Name | Notes |
|---|------------|------|--------|
| 1 | **Text** (short) | `title` | Required |
| 2 | **UID** | `slug` | Attached field: **title** (slug is generated from title). Required |
| 3 | **Text** (long) | `description` | Required |
| 4 | **Enumeration** | `category` | Values (one per line): `residential`, `interior`, `urban`. Required |
| 5 | **Text** (short) | `year` | Optional |
| 6 | **Text** (short) | `location` | Optional |
| 7 | **Text** (short) | `featuredImage` | URL of the main image. Required |
| 8 | **JSON** | `images` | Array of image URLs. Required |

For **Required** fields: after adding the field, open **Advanced settings** and check **Required field**, then **Finish**.

4. When all fields are added, click **Save** (top right). Strapi will restart (wait ~30 seconds).

---

## Step 4: Set API permissions

Without this, the portfolio site cannot read your content.

1. In the left sidebar: **Settings** (gear icon) → **Users & Permissions** → **Roles**.
2. Click the **Public** role.
3. Under **Permissions**, find **Project**.
4. Check:
   - **find** (list projects)
   - **findOne** (single project by slug)
5. Click **Save** (top right).

---

## Step 5: Add and publish projects

1. In the sidebar: **Content Manager** → **Collection types** → **Project**.
2. Click **Create new entry**.
3. Fill in at least:
   - **title** (e.g. “Modern Villa”)
   - **slug** (e.g. “modern-villa”; often auto-filled from title)
   - **description**
   - **category** (residential / interior / urban)
   - **featuredImage** (full image URL)
   - **images** (valid JSON array of image URLs, e.g. `["https://example.com/1.jpg", "https://example.com/2.jpg"]`)
4. Click **Save**, then click **Publish** (top right). Confirm.
5. Repeat for more projects.

Check the API in the browser:

- **http://localhost:1337/api/projects**  
  You should see JSON with your projects.

---

## Step 6: Connect the Next.js site to Strapi

1. In the **portfolio** project (the Next.js app), create or edit `.env.local` in the project root (same folder as `package.json`).
2. Add (use your real Strapi URL when you deploy; for local Strapi use the line below):

   ```env
   # Local Strapi (while you run Strapi on your machine)
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

   # Optional: only if you use private API token
   # STRAPI_API_TOKEN=your_token_here
   ```

   Important: use **no** `/api` at the end (e.g. `http://localhost:1337`, not `http://localhost:1337/api`).

3. **Optional – use Strapi data in the site:**  
   The app can keep using mock data until you’re ready. When you want the site to load from Strapi, the developer can switch `lib/data.ts` to use the Strapi API (see “Connect Next.js to Strapi” section below for the exact code).

---

## Step 7: Test the site

1. Make sure Strapi is running: in the Strapi folder, `npm run develop` (Step 2).
2. In the portfolio folder, run:
   ```bash
   npm run dev
   ```
3. Open **http://localhost:3000**.  
   - If the site still uses mock data, you’ll see the existing demo projects.  
   - Once `lib/data.ts` is updated to use Strapi, you’ll see the projects you created in Step 5.

---

## Connect Next.js to Strapi (for the developer)

When the client is ready to pull content from Strapi, do the following.

### 1. Environment

Ensure `.env.local` has:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

(Or the production Strapi URL, e.g. `https://your-project.strapiapp.com` — again **without** `/api`.)

### 2. Use Strapi in `lib/data.ts`

Replace the mock implementation in `lib/data.ts` with Strapi. Strapi v5 returns documents with `documentId`; v4 uses `id`. The mapping below works for the usual v5 shape; adjust if your API response differs.

```typescript
import { Project } from '@/types';
import { fetchAPI } from './strapi';

interface StrapiProject {
  id?: number;
  documentId?: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  year?: string;
  location?: string;
  featuredImage: string;
  images: string[] | { url: string }[];
}

function mapStrapiProject(p: StrapiProject): Project {
  return {
    id: String(p.documentId ?? p.id ?? ''),
    title: p.title,
    slug: p.slug,
    category: p.category as Project['category'],
    description: p.description,
    year: p.year,
    location: p.location,
    featuredImage: typeof p.featuredImage === 'string' ? p.featuredImage : (p.featuredImage as { url: string })?.url ?? '',
    images: Array.isArray(p.images)
      ? p.images.map((img) => (typeof img === 'string' ? img : (img as { url: string }).url))
      : [],
  };
}

export async function getProjects(category?: string): Promise<Project[]> {
  const query = category && category !== 'all'
    ? `?filters[category][$eq]=${encodeURIComponent(category)}&populate=*`
    : '?populate=*';
  const response = await fetchAPI<{ data: StrapiProject[] }>(`/projects${query}`);
  const list = response.data ?? [];
  return list.map(mapStrapiProject);
}

export async function getProject(slug: string): Promise<Project | null> {
  const response = await fetchAPI<{ data: StrapiProject[] }>(
    `/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`
  );
  const list = response.data ?? [];
  if (list.length === 0) return null;
  return mapStrapiProject(list[0]);
}
```

After this, the portfolio will show content from Strapi.

---

## Running Strapi in production (optional)

- **Strapi Cloud:** [Strapi Cloud](https://cloud.strapi.io) – create a project, then in the cloud admin recreate the same “Project” content type and permissions, and add your content. Set `NEXT_PUBLIC_STRAPI_URL` to the cloud URL (no `/api`).
- **Self‑hosted:** Deploy Strapi to a VPS or platform (Node + database). Point `NEXT_PUBLIC_STRAPI_URL` to that URL.

---

## Checklist

- [ ] Created Strapi project (`npx create-strapi@latest mc-portfolio-strapi`)
- [ ] Created admin user and can open http://localhost:1337/admin
- [ ] Created “Project” content type with all fields
- [ ] Set Public role: **find** and **findOne** for Project
- [ ] Created at least one project and **published** it
- [ ] Opened http://localhost:1337/api/projects and see JSON
- [ ] Added `NEXT_PUBLIC_STRAPI_URL` to portfolio `.env.local` (no `/api`)
- [ ] (Developer) Switched `lib/data.ts` to Strapi and tested at http://localhost:3000

Once all are done, the client can manage projects in Strapi and the site will display them.

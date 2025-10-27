# Strapi CMS Setup Guide

This guide will help a non-technical user set up and manage content using Strapi Cloud's free tier.

## Step 1: Create a Strapi Cloud Account

1. Go to [Strapi Cloud](https://cloud.strapi.io/)
2. Sign up for a free account
3. Create a new project (choose the free tier)
4. Wait for your Strapi instance to be deployed

## Step 2: Configure Content Types

Once your Strapi instance is ready:

### Create the "Project" Content Type

1. In the Strapi admin panel, go to **Content-Type Builder**
2. Click **Create new collection type**
3. Name it: `project`
4. Add the following fields:

   - **title** (Text, Short text) - Required
   - **slug** (UID, attached to title) - Required
   - **category** (Enumeration) - Required
     - Add values: `residential`, `interior`, `urban`, `all`
   - **description** (Text, Long text)
   - **year** (Text, Short text)
   - **location** (Text, Short text)
   - **featuredImage** (Media, Single media)
   - **images** (Media, Multiple media)

5. Click **Save**
6. Restart your Strapi instance when prompted

## Step 3: Set Permissions

1. Go to **Settings** → **Roles** → **Public**
2. Scroll down to **Permissions**
3. Find **Project** and check:
   - `find` (to list all projects)
   - `findOne` (to view a single project)
4. Click **Save**

## Step 4: Get Your API Token

1. Go to **Settings** → **API Tokens**
2. Click **Create new API Token**
3. Name: `Next.js Portfolio`
4. Token type: `Read-only`
5. Token duration: `Unlimited`
6. Click **Save**
7. **Copy the token** (you'll only see it once!)

## Step 5: Connect to Your Next.js Site

1. In your Next.js project, create a file called `.env.local`
2. Add these lines (replace with your actual values):

```env
NEXT_PUBLIC_STRAPI_URL=https://your-instance-name.strapiapp.com
STRAPI_API_TOKEN=your_api_token_here
```

3. Restart your Next.js development server

## Step 6: Add Content

1. Go to **Content Manager** in Strapi
2. Click on **Project**
3. Click **Create new entry**
4. Fill in the fields:
   - Add a title
   - The slug will auto-generate
   - Choose a category
   - Add description, year, location
   - Upload a featured image
   - Upload multiple images in the images field
5. Click **Save**
6. Click **Publish**

## Managing Content

### Adding a New Project
1. Content Manager → Project → Create new entry
2. Fill in all fields
3. Save and Publish

### Editing a Project
1. Content Manager → Project
2. Click on the project you want to edit
3. Make changes
4. Save and Publish

### Deleting a Project
1. Content Manager → Project
2. Click on the project
3. Click the Delete button

## Using Your Own Images

1. When editing a project, click on the image field
2. Click **Add new assets**
3. Drag and drop your images or click to browse
4. Select images and click **Finish**
5. Save and Publish

## Tips

- Always click **Publish** after saving, or your content won't appear on the website
- Use descriptive slugs for better SEO
- Keep image file sizes reasonable (under 2MB for best performance)
- Use consistent aspect ratios for featured images for a cleaner gallery view


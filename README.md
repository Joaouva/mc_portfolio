# MC Portfolio

A modern, minimalist portfolio website built with Next.js and Strapi CMS. Inspired by clean architectural portfolio designs.

## Features

- 🎨 Clean, minimalist design
- 📱 Fully responsive
- 🚀 Built with Next.js 16 (App Router)
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 📝 Strapi CMS for easy content management
- 🖼️ Image optimization with Next.js Image component
- 📂 Category filtering for projects

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Strapi Cloud (free tier)
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Strapi Cloud account (free tier available)
- A domain (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mc_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Edit `.env.local` with your Strapi credentials:
```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.strapiapp.com
STRAPI_API_TOKEN=your_strapi_api_token_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Strapi CMS Setup

For detailed instructions on setting up Strapi CMS, see [STRAPI_SETUP.md](./STRAPI_SETUP.md).

### Quick Setup Steps:
1. Create a Strapi Cloud account
2. Create a new project (free tier)
3. Set up the Project content type
4. Configure permissions
5. Generate an API token
6. Add your credentials to `.env.local`

## Project Structure

```
mc_portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page with project gallery
│   ├── practice/          # Practice/about page
│   ├── contact/           # Contact page
│   └── projects/[slug]/   # Dynamic project detail pages
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation with dropdowns
│   ├── Gallery.tsx        # Project gallery grid
│   └── ProjectCard.tsx    # Individual project card
├── lib/                   # Utility functions
│   ├── data.ts           # Mock data & data fetching
│   └── strapi.ts         # Strapi API integration
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## Switching from Mock Data to Strapi

The project currently uses mock data in `lib/data.ts`. To switch to Strapi:

1. Complete the Strapi setup (see STRAPI_SETUP.md)
2. Update the functions in `lib/data.ts`:

```typescript
import { getStrapiProjects, getStrapiProject } from './strapi';

export async function getProjects(category?: string) {
  const response = await getStrapiProjects(category);
  // Transform Strapi response to match Project type
  return response.data.map(item => ({
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
    category: item.attributes.category,
    featuredImage: item.attributes.featuredImage.data.attributes.url,
    images: item.attributes.images.data.map(img => img.attributes.url),
    description: item.attributes.description,
    year: item.attributes.year,
    location: item.attributes.location,
  }));
}

// Similar transformation for getProject()
```

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `NEXT_PUBLIC_STRAPI_URL`
   - `STRAPI_API_TOKEN`
6. Click "Deploy"
7. Once deployed, add your custom domain in Vercel settings

### Environment Variables

Make sure to add these in your deployment platform:

```
NEXT_PUBLIC_STRAPI_URL=your_strapi_url
STRAPI_API_TOKEN=your_strapi_token
```

## Content Management

### For Non-Technical Users

Once Strapi is set up, content management is simple:

1. Log in to your Strapi admin panel
2. Go to Content Manager → Project
3. Click "Create new entry"
4. Fill in the project details
5. Upload images
6. Click "Save" then "Publish"

Changes appear on your website immediately!

### Adding Projects

- **Title:** Project name
- **Category:** Choose from residential, interior, urban, or all
- **Description:** Brief description of the project
- **Year & Location:** Optional metadata
- **Featured Image:** Main image for the gallery grid
- **Images:** All project images (including the featured one)

## Customization

### Changing Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### Updating Navigation

Edit `components/Navigation.tsx` to add/remove menu items:

```typescript
const navigation = [
  { label: 'PROJECTS', href: '/', submenu: [...] },
  { label: 'YOUR_NEW_LINK', href: '/your-page' },
];
```

### Changing Fonts

Update `app/layout.tsx` to use different Google Fonts:

```typescript
import { Your_Font } from "next/font/google";
```

## Development

### Build for Production

```bash
npm run build
```

### Run Production Build Locally

```bash
npm run start
```

### Linting

```bash
npm run lint
```

## Support

For issues or questions:
1. Check [STRAPI_SETUP.md](./STRAPI_SETUP.md) for CMS questions
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Strapi documentation: https://docs.strapi.io

## License

MIT License - feel free to use this project for personal or commercial purposes.

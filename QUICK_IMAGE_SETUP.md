# Quick Image Setup for Project One

## 🚀 3 Simple Steps

### 1. Save Your 7 Images
Place your images in this folder:
```
public/images/temp/
```

Name them: `01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`, `05.jpg`, `06.jpg`, `07.jpg`

### 2. Run the Optimizer
```bash
npm run optimize-images
```

This will:
- Convert to WebP (smaller file size)
- Resize to optimal dimensions
- Save to `public/images/projects/project-one/`

### 3. Done! ✅

Your images are now optimized and ready to use.
The project page is already configured at: `/projects/project-one`

## What Was Done

✅ Created folder structure for project images
✅ Installed Sharp for image optimization
✅ Created optimization script
✅ Updated project data to use local images
✅ Set up proper image paths

## View Your Project

After optimizing:
1. Start dev server: `npm run dev`
2. Navigate to: `http://localhost:3000/projects/project-one`

## File Structure Created

```
public/
├── images/
│   ├── temp/                    ← PUT YOUR IMAGES HERE
│   └── projects/
│       └── project-one/         ← OPTIMIZED IMAGES GO HERE
└── logos/
    └── logo.png

scripts/
└── optimize-images.js           ← OPTIMIZATION SCRIPT
```

## Alternative: Manual Optimization

If you prefer, use https://squoosh.app/ to:
1. Convert to WebP
2. Set quality to 85
3. Resize to max 1920px width
4. Save directly to `public/images/projects/project-one/`
5. Name them: `01.webp`, `02.webp`, etc.

/**
 * Get the correct image path with basePath for static export
 * In production builds, this ensures images work correctly on GitHub Pages
 */
export function getImagePath(path: string): string {
  // If it's already a full URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // In production builds, basePath is '/mc_portfolio'
  // Next.js Image component should handle this, but with unoptimized: true,
  // we need to ensure paths are correct
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || 
    (process.env.NODE_ENV === 'production' ? '/mc_portfolio' : '');

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combine basePath with path
  return basePath ? `${basePath}${normalizedPath}` : normalizedPath;
}

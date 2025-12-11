/**
 * Custom image loader that applies basePath for static exports
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  // If it's already a full URL, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Apply basePath to local images
  const basePath = '/mc_portfolio';
  return `${basePath}${src}`;
}

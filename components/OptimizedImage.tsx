"use client";

import Image, { ImageProps } from "next/image";
import { useMemo } from "react";

/**
 * Image component that applies basePath for static exports
 * Next.js Image with unoptimized doesn't apply basePath automatically
 */
export default function OptimizedImage({ src, ...props }: ImageProps) {
	// Always use /mc_portfolio as basePath (set in next.config.ts)
	const basePath = "/mc_portfolio";

	// Calculate the correct image source
	const imageSrc = useMemo(() => {
		if (typeof src === "string") {
			// Full URL - use as-is
			if (src.startsWith("http://") || src.startsWith("https://")) {
				return src;
			}
			// Local path - add basePath
			if (src.startsWith("/")) {
				return `${basePath}${src}`;
			}
		}
		return src;
	}, [src]);

	return <Image src={imageSrc} {...props} />;
}

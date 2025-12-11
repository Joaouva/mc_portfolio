"use client";

import { useMemo } from "react";

interface OptimizedImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	fill?: boolean;
	className?: string;
	sizes?: string;
	priority?: boolean;
}

/**
 * Image component that handles basePath correctly for static exports (GitHub Pages)
 * Uses regular img tags since Next.js Image with unoptimized doesn't apply basePath
 */
export default function OptimizedImage({
	src,
	alt,
	width,
	height,
	fill,
	className = "",
	sizes,
	priority,
}: OptimizedImageProps) {
	// Detect basePath synchronously during render
	const basePath = useMemo(() => {
		if (typeof window === "undefined") return "";

		// Check global variable first (set by script in layout)
		if ((window as any).__NEXT_BASE_PATH__) {
			return (window as any).__NEXT_BASE_PATH__;
		}

		// Fallback: check pathname directly
		if (window.location.pathname.startsWith("/mc_portfolio")) {
			return "/mc_portfolio";
		}

		return "";
	}, []);

	// Calculate the correct image source
	const imageSrc = useMemo(() => {
		if (typeof src === "string") {
			// Full URL - use as-is
			if (src.startsWith("http://") || src.startsWith("https://")) {
				return src;
			}
			// Local path - add basePath if needed
			if (src.startsWith("/") && basePath) {
				return `${basePath}${src}`;
			}
		}
		return src;
	}, [src, basePath]);

	// Handle fill prop (absolute positioning)
	const style = fill
		? {
				position: "absolute" as const,
				height: "100%",
				width: "100%",
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
				objectFit: "cover" as const,
		  }
		: undefined;

	return (
		<img
			src={imageSrc}
			alt={alt}
			width={fill ? undefined : width}
			height={fill ? undefined : height}
			className={className}
			style={style}
			sizes={sizes}
			loading={priority ? "eager" : "lazy"}
			decoding="async"
		/>
	);
}

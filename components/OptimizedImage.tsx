"use client";

import Image, { ImageProps } from "next/image";
import { useMemo } from "react";

/**
 * Wrapper around Next.js Image component that handles basePath correctly
 * for static exports (GitHub Pages)
 */
export default function OptimizedImage({ src, ...props }: ImageProps) {
	// Detect basePath synchronously - check both global variable and pathname
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

	// If src is already a full URL, use it as-is
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

	return <Image src={imageSrc} {...props} />;
}

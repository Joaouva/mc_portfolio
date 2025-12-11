"use client";

import Image, { ImageProps } from "next/image";
import { useMemo } from "react";

/**
 * Wrapper around Next.js Image component that handles basePath correctly
 * for static exports (GitHub Pages)
 */
export default function OptimizedImage({ src, ...props }: ImageProps) {
	// Detect basePath from current URL at runtime
	const basePath = useMemo(() => {
		if (typeof window !== "undefined") {
			const pathname = window.location.pathname;
			// Check if we're on GitHub Pages (pathname starts with /mc_portfolio)
			if (pathname.startsWith("/mc_portfolio")) {
				return "/mc_portfolio";
			}
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

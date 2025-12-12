"use client";

import { useState, useEffect, useMemo } from "react";
import OptimizedImage from "./OptimizedImage";
import { Project } from "@/types";

interface ImageCarouselProps {
	projects: Project[];
}

export default function ImageCarousel({ projects }: ImageCarouselProps) {
	// Collect all images from all projects and shuffle them
	const allImages = useMemo(() => {
		const images: string[] = [];
		projects.forEach((project) => {
			images.push(...project.images);
		});
		// Shuffle array
		for (let i = images.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[images[i], images[j]] = [images[j], images[i]];
		}
		return images;
	}, [projects]);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	// Auto-play carousel
	useEffect(() => {
		if (!isAutoPlaying || allImages.length === 0) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % allImages.length);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, [isAutoPlaying, allImages.length]);

	const goToSlide = (index: number) => {
		setIsAutoPlaying(false);
		setCurrentIndex(index);
	};

	if (allImages.length === 0) {
		return null;
	}

	return (
		<div className="relative w-full h-screen">
			{/* Main Image */}
			<div className="relative w-full h-full">
				<OptimizedImage
					src={allImages[currentIndex]}
					alt={`Project image ${currentIndex + 1}`}
					fill
					className="object-cover"
					sizes="100vw"
					priority={currentIndex === 0}
				/>
			</div>

			{/* Dots Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
				{allImages.slice(0, Math.min(10, allImages.length)).map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						onMouseEnter={() => setIsAutoPlaying(false)}
						className={`w-2 h-2 rounded-full transition-all ${
							currentIndex === index
								? "bg-white w-8 backdrop-blur-md"
								: "bg-white/40 hover:bg-white/60"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}

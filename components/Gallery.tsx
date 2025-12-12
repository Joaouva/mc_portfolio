"use client";

import { Project } from "@/types";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

interface GalleryProps {
	allProjects: Project[];
}

export default function Gallery({ allProjects }: GalleryProps) {
	const searchParams = useSearchParams();
	const category = searchParams.get("category") || "all";
	const tag = searchParams.get("tag");

	// Client-side filtering
	const filteredProjects = useMemo(() => {
		let projects = allProjects;

		// Filter by category
		if (category && category !== "all") {
			projects = projects.filter((project) => project.category === category);
		}

		// Filter by tag
		if (tag) {
			projects = projects.filter(
				(project) =>
					project.tags &&
					project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
			);
		}

		return projects;
	}, [allProjects, category, tag]);

	if (filteredProjects.length === 0) {
		return (
			<div className="text-center py-20">
				<p className="text-gray-500 dark:text-gray-400 font-light">
					No projects found
				</p>
			</div>
		);
	}

	return (
		<>
			{tag && (
				<div className="flex justify-center items-center gap-3 mb-8">
					<span className="text-sm text-gray-600 dark:text-gray-400">
						Filtered by tag:
					</span>
					<span className="px-3 py-1 text-xs font-light tracking-wider uppercase bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-full text-gray-700 dark:text-gray-300">
						{tag}
					</span>
					<Link
						href="/projects"
						className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline">
						Clear
					</Link>
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{filteredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</>
	);
}

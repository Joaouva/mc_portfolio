import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Link href={`/projects/${project.slug}`} className="block group">
			<div className="relative w-full h-[400px] overflow-hidden">
				<Image
					src={project.featuredImage}
					alt={project.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-white/10 transition-colors" />
			</div>
			<div className="mt-4 space-y-1">
				<h3 className="text-sm font-light tracking-wider uppercase">
					{project.title}
				</h3>
				{project.year && project.location && (
					<p className="text-xs text-gray-600 dark:text-gray-400 font-light">
						{project.year} • {project.location}
					</p>
				)}
			</div>
		</Link>
	);
}

import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface GalleryProps {
	projects: Project[];
}

export default function Gallery({ projects }: GalleryProps) {
	if (projects.length === 0) {
		return (
			<div className="text-center py-20">
				<p className="text-gray-500 dark:text-gray-400 font-light">
					No projects found
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
}

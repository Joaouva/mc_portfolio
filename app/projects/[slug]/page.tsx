import OptimizedImage from "@/components/OptimizedImage";
import Link from "next/link";
import { getProject, mockProjects } from "@/lib/data";
import { notFound } from "next/navigation";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return mockProjects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = await getProject(slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="min-h-screen">
			<div className="max-w-screen-2xl mx-auto px-6 pt-52 pb-20">
				<Link
					href="/projects"
					className="inline-block mb-8 text-sm tracking-wider uppercase hover:opacity-60 transition-opacity">
					← Back to Projects
				</Link>

				<div className="space-y-8 mb-12">
					<h1 className="text-4xl font-light tracking-wider uppercase">
						{project.title}
					</h1>

					{(project.year || project.location) && (
						<div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
							{project.year && <span>{project.year}</span>}
							{project.year && project.location && <span>•</span>}
							{project.location && <span>{project.location}</span>}
						</div>
					)}

					<p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
						{project.description}
					</p>

					{project.tags && project.tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<Link
									key={tag}
									href={`/projects?tag=${encodeURIComponent(
										tag.toLowerCase()
									)}`}
									className="px-3 py-1 text-xs font-light tracking-wider uppercase bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-900/30 transition-all cursor-pointer">
									{tag}
								</Link>
							))}
						</div>
					)}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{project.images.map((image, index) => (
						<div
							key={index}
							className={`relative overflow-hidden rounded-lg ${
								index === 0 ? "md:col-span-2 h-[500px]" : "h-[400px]"
							}`}>
							<OptimizedImage
								src={image}
								alt={`${project.title} - Image ${index + 1}`}
								fill
								className="object-cover hover:scale-105 transition-transform duration-500"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

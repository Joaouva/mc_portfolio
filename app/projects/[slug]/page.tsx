import Image from "next/image";
import Link from "next/link";
import { getProject, mockProjects } from "@/lib/data";
import { notFound } from "next/navigation";

interface ProjectPageProps {
	params: { slug: string };
}

export async function generateStaticParams() {
	return mockProjects.map((project) => ({
		slug: project.slug,
	}));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const project = await getProject(params.slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="min-h-screen">
			<div className="max-w-screen-2xl mx-auto px-6 py-20">
				<Link
					href="/"
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
				</div>

				<div className="space-y-4">
					{project.images.map((image, index) => (
						<div key={index} className="relative w-full h-[600px]">
							<Image
								src={image}
								alt={`${project.title} - Image ${index + 1}`}
								fill
								className="object-contain"
								sizes="100vw"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

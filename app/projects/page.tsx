import Gallery from "@/components/Gallery";
import CategoryFilter from "@/components/CategoryFilter";
import { getProjects } from "@/lib/data";

export const dynamic = "force-static";

export default async function ProjectsPage() {
	// Get all projects for client-side filtering
	const allProjects = await getProjects();

	return (
		<div className="min-h-screen">
			<div className="max-w-screen-2xl mx-auto px-6 pt-32 pb-12">
				<CategoryFilter />
				<Gallery allProjects={allProjects} />
			</div>
		</div>
	);
}

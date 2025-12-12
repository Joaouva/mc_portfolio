import ImageCarousel from "@/components/ImageCarousel";
import { getProjects } from "@/lib/data";

export const dynamic = "force-static";

export default async function Home() {
	// Get all projects for the carousel
	const allProjects = await getProjects();

	return (
		<div className="min-h-screen">
			<ImageCarousel projects={allProjects} />
		</div>
	);
}

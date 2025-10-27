import { Suspense } from "react";
import Gallery from "@/components/Gallery";
import CategoryFilter from "@/components/CategoryFilter";
import { getProjects } from "@/lib/data";

interface HomeProps {
	searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
	const params = await searchParams;
	const category = params.category || "all";
	const projects = await getProjects(category);

	return (
		<div className="min-h-screen">
			<div className="max-w-screen-2xl mx-auto px-6 py-12">
				<Suspense fallback={<div className="h-12" />}>
					<CategoryFilter />
				</Suspense>
				<Suspense
					key={category}
					fallback={<div className="text-center py-20">Loading...</div>}>
					<Gallery projects={projects} />
				</Suspense>
			</div>
		</div>
	);
}

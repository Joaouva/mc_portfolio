"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const categories = [
	{ label: "all projects", value: "all" },
	{ label: "residential", value: "residential" },
	{ label: "interior | ephemeral | design", value: "interior" },
	{ label: "urban | public", value: "urban" },
];

export default function CategoryFilter() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const currentCategory = searchParams.get("category") || "all";

	const handleCategoryClick = (
		value: string,
		e: React.MouseEvent<HTMLAnchorElement>
	) => {
		e.preventDefault();
		const href = value === "all" ? "/" : `/?category=${value}`;
		router.push(href);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="flex flex-wrap justify-center gap-3 mb-12 mt-10">
			{categories.map((category) => (
				<Link
					key={category.value}
					href={category.value === "all" ? "/" : `/?category=${category.value}`}
					onClick={(e) => handleCategoryClick(category.value, e)}
					className={`px-5 py-2.5 rounded-full text-sm font-light tracking-wider transition-all backdrop-blur-md border cursor-pointer ${
						currentCategory === category.value
							? "bg-white/50 dark:bg-gray-900/50 border-gray-200/60 dark:border-gray-600/60 shadow-md text-gray-900 dark:text-gray-100"
							: "bg-white/20 dark:bg-gray-900/20 border-gray-200/40 dark:border-gray-600/40 hover:bg-white/30 dark:hover:bg-gray-900/30 text-gray-700 dark:text-gray-300"
					}`}>
					{category.label}
				</Link>
			))}
		</div>
	);
}

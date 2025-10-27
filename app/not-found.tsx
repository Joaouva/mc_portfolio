import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center space-y-6 px-6">
				<h1 className="text-6xl font-light tracking-wider">404</h1>
				<p className="text-gray-600 dark:text-gray-400 tracking-wide">
					Page not found
				</p>
				<Link
					href="/"
					className="inline-block mt-8 text-sm tracking-wider uppercase hover:opacity-60 transition-opacity">
					Return Home
				</Link>
			</div>
		</div>
	);
}

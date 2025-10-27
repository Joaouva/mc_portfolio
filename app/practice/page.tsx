export default function PracticePage() {
	return (
		<div className="min-h-screen">
			<div className="max-w-4xl mx-auto px-6 py-20">
				<div className="space-y-12">
					<section>
						<h1 className="text-2xl font-light tracking-wider mb-8 uppercase">
							About
						</h1>
						<div className="prose prose-sm max-w-none">
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-light tracking-wider mb-6 uppercase">
							Hand Drawing
						</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-light tracking-wider mb-6 uppercase">
							Publications
						</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-medium">Publication One, 2024</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Lorem ipsum dolor sit amet
								</p>
							</div>
							<div>
								<h3 className="font-medium">Publication Two, 2023</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Consectetur adipiscing elit
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-light tracking-wider mb-6 uppercase">
							Teaching
						</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}

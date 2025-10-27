export default function ContactPage() {
	return (
		<div className="min-h-screen">
			<div className="max-w-2xl mx-auto px-6 py-20">
				<h1 className="text-2xl font-light tracking-wider mb-12 uppercase">
					Contact
				</h1>

				<div className="space-y-8">
					<div>
						<h2 className="text-lg font-light mb-4">Email</h2>
						<a
							href="mailto:contact@example.com"
							className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
							contact@example.com
						</a>
					</div>

					<div>
						<h2 className="text-lg font-light mb-4">Studio</h2>
						<p className="text-gray-700 dark:text-gray-300">
							123 Architecture Street
							<br />
							City, Country
							<br />
							ZIP Code
						</p>
					</div>

					<div>
						<h2 className="text-lg font-light mb-4">Social</h2>
						<div className="space-y-2">
							<a
								href="#"
								className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
								Instagram
							</a>
							<a
								href="#"
								className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

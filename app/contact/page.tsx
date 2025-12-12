import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
	return (
		<div className="min-h-screen">
			<div className="max-w-2xl mx-auto px-6 pt-52 pb-20">
				<h1 className="text-4xl font-light tracking-wider mb-12 uppercase">
					Contact
				</h1>

				<div className="space-y-12">
					{/* Contact Information */}
					<div className="space-y-8 pb-12 border-b border-gray-200/40 dark:border-gray-700/40">
						<div>
							<h2 className="text-lg font-light mb-4 tracking-wider uppercase">
								Email
							</h2>
							<a
								href="mailto:geral@mc-arquitectos.com"
								className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
								geral@mc-arquitectos.com
							</a>
						</div>

						<div>
							<h2 className="text-lg font-light mb-4 tracking-wider uppercase">
								Studio
							</h2>
							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								Calçada das Lajes, Lote 21, 6º C
								<br />
								1900-293 Lisboa
							</p>
						</div>

						<div>
							<h2 className="text-lg font-light mb-4 tracking-wider uppercase">
								Social
							</h2>
							<div className="space-y-2">
								<a
									href="https://www.instagram.com/mc__arquitectos/?hl=en"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
									Instagram
								</a>
								<a
									href="https://www.linkedin.com/in/manuel-cruchinho"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
									LinkedIn
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="pt-4">
						<h2 className="text-lg font-light mb-6 tracking-wider uppercase">
							Send a Message
						</h2>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}

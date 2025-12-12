"use client";

import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");

		try {
			// Option 1: Using EmailJS (recommended for static sites)
			// You'll need to set up EmailJS at https://www.emailjs.com
			// Replace these with your EmailJS service ID, template ID, and public key
			const serviceId =
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
			const templateId =
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
			const publicKey =
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

			// Option 2: Using Formspree (alternative)
			// Sign up at https://formspree.io and replace YOUR_FORM_ID
			const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

			if (formspreeId && formspreeId !== "YOUR_FORM_ID") {
				// Use Formspree
				const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: formData.name,
						email: formData.email,
						message: formData.message,
						_to: "geral@mc-arquitectos.com",
					}),
				});

				if (response.ok) {
					setStatus("success");
					setFormData({ name: "", email: "", message: "" });
				} else {
					setStatus("error");
				}
			} else if (serviceId !== "YOUR_SERVICE_ID") {
				// Use EmailJS
				const response = await fetch(
					"https://api.emailjs.com/api/v1.0/email/send",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							service_id: serviceId,
							template_id: templateId,
							user_id: publicKey,
							template_params: {
								from_name: formData.name,
								from_email: formData.email,
								message: formData.message,
								to_email: "geral@mc-arquitectos.com",
							},
						}),
					}
				);

				if (response.ok) {
					setStatus("success");
					setFormData({ name: "", email: "", message: "" });
				} else {
					setStatus("error");
				}
			} else {
				// Fallback: Use mailto link
				const subject = encodeURIComponent("Contact Form Submission");
				const body = encodeURIComponent(
					`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
				);
				window.location.href = `mailto:geral@mc-arquitectos.com?subject=${subject}&body=${body}`;
				setStatus("success");
				setFormData({ name: "", email: "", message: "" });
			}
		} catch (error) {
			setStatus("error");
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-light tracking-wider uppercase mb-2 text-gray-700 dark:text-gray-300">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border border-[#232323] rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#232323] focus:border-[#232323] transition-all"
					placeholder="Your name"
				/>
			</div>

			<div>
				<label
					htmlFor="email"
					className="block text-sm font-light tracking-wider uppercase mb-2 text-gray-700 dark:text-gray-300">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border border-[#232323] rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#232323] focus:border-[#232323] transition-all"
					placeholder="your.email@example.com"
				/>
			</div>

			<div>
				<label
					htmlFor="message"
					className="block text-sm font-light tracking-wider uppercase mb-2 text-gray-700 dark:text-gray-300">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					rows={6}
					className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border border-[#232323] rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#232323] focus:border-[#232323] transition-all resize-none"
					placeholder="Your message..."
				/>
			</div>

			<button
				type="submit"
				disabled={status === "sending"}
				className="w-full px-6 py-3 bg-[#232323] dark:bg-[#232323] backdrop-blur-sm border border-[#232323] rounded-lg text-white font-light tracking-wider uppercase hover:bg-[#2a2a2a] dark:hover:bg-[#2a2a2a] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
				{status === "sending"
					? "Sending..."
					: status === "success"
					? "Message Sent ✓"
					: "Send Message"}
			</button>

			{status === "success" && (
				<p className="text-sm text-green-600 dark:text-green-400 text-center">
					Thank you! Your message has been sent successfully.
				</p>
			)}

			{status === "error" && (
				<p className="text-sm text-red-600 dark:text-red-400 text-center">
					Something went wrong. Please try again or email directly at{" "}
					<a
						href="mailto:geral@mc-arquitectos.com"
						className="underline hover:opacity-60">
						geral@mc-arquitectos.com
					</a>
				</p>
			)}
		</form>
	);
}

"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
	{ label: "PROJECTS", href: "/" },
	{ label: "ABOUT ME", href: "/practice" },
	{ label: "CONTACT", href: "/contact" },
];

export default function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			{/* Logo - Fixed top left with glass effect */}
			<Link
				href="/"
				className="fixed top-8 left-8 z-50 text-2xl font-light tracking-widest hover:opacity-60 transition-opacity backdrop-blur-md bg-white/30 dark:bg-gray-950/30 px-4 py-2 rounded-lg border border-white/20 dark:border-gray-700/20">
				MC
			</Link>

			{/* Mobile Hamburger Button */}
			<button
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				className="fixed top-8 right-8 z-50 p-3 md:hidden backdrop-blur-md bg-white/30 dark:bg-gray-950/30 rounded-lg border border-white/20 dark:border-gray-700/20"
				aria-label="Toggle menu">
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24">
					{mobileMenuOpen ? (
						<path d="M6 18L18 6M6 6l12 12" />
					) : (
						<path d="M4 6h16M4 12h16M4 18h16" />
					)}
				</svg>
			</button>

			{/* Desktop Vertical Navigation - Fixed right side with glass effect */}
			<nav className="hidden md:block fixed right-8 top-1/2 -translate-y-1/2 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-950/30 px-6 py-8 rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-lg">
				<div className="flex flex-col items-end gap-8">
					{navigation.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="text-sm font-light tracking-widest hover:opacity-60 transition-opacity block py-2">
							{item.label}
						</Link>
					))}
				</div>
			</nav>

			{/* Mobile Navigation Menu */}
			{mobileMenuOpen && (
				<nav className="fixed inset-0 z-40 md:hidden">
					<div
						className="absolute inset-0 bg-black/20 backdrop-blur-sm"
						onClick={() => setMobileMenuOpen(false)}
					/>
					<div className="absolute top-24 right-4 left-4 backdrop-blur-md bg-white/30 dark:bg-gray-950/30 rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-lg p-6">
						<div className="flex flex-col gap-6">
							{navigation.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className="text-base font-light tracking-widest hover:opacity-60 transition-opacity block py-2">
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</nav>
			)}
		</>
	);
}

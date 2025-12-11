import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MC Portfolio",
	description: "Portfolio showcase",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} antialiased font-light bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
				<Script
					id="base-path-detector"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								var basePath = window.location.pathname.startsWith('/mc_portfolio') ? '/mc_portfolio' : '';
								window.__NEXT_BASE_PATH__ = basePath;
								
								// Fix image paths immediately and on DOMContentLoaded
								function fixImagePaths() {
									if (basePath) {
										var images = document.querySelectorAll('img[src^="/"]');
										images.forEach(function(img) {
											var src = img.getAttribute('src');
											if (src && !src.startsWith(basePath) && !src.startsWith('http')) {
												img.setAttribute('src', basePath + src);
											}
										});
									}
								}
								
								// Run immediately if DOM is ready
								if (document.readyState === 'loading') {
									document.addEventListener('DOMContentLoaded', fixImagePaths);
								} else {
									fixImagePaths();
								}
								
								// Also run after a short delay to catch React-rendered images
								setTimeout(fixImagePaths, 100);
							})();
						`,
					}}
				/>
				<ThemeProvider>
					<Navigation />
					<ThemeToggle />
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}

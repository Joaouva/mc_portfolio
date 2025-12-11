import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	// In development, redirect root to /mc_portfolio
	if (process.env.NODE_ENV === 'development') {
		const { pathname } = request.nextUrl;
		
		// If accessing root path, redirect to /mc_portfolio
		if (pathname === '/') {
			return NextResponse.redirect(new URL('/mc_portfolio', request.url));
		}
	}
	
	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};

import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (!excludeUrls.includes(pathname)) {
    const user = request.cookies.get('token');
    if (!user) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }
}

const excludeUrls = ['/form', '/sign-in', '/', '/forget-password', 'admin/delegates-info/view-details'];

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

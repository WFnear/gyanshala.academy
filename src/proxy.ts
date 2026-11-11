import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  // 1. Enforce non-www canonical domain: redirect www.gyanshala.in -> gyanshala.in (301)
  if (host.toLowerCase().startsWith("www.gyanshala.in")) {
    const url = new URL(`https://gyanshala.in${pathname}${search}`);
    return NextResponse.redirect(url, { status: 301 });
  }

  // 2. Permanent redirect for /faq -> /faqs
  if (pathname === "/faq") {
    const url = new URL(`https://gyanshala.in/faqs${search}`);
    return NextResponse.redirect(url, { status: 301 });
  }

  const response = NextResponse.next();

  // 3. Security & SEO: Instruct search crawlers to never index /admin or /api routes
  if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
    response.headers.set(
      "X-Robots-Tag",
      "noindex, nofollow, noarchive, nosnippet"
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, favicon.png, etc.
     */
    "/((?!_next/static|_next/image|favicon.ico|favicon.png).*)",
  ],
};

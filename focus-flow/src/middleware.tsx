import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const id = request.cookies.get("User Cookie")?.value;

  //Stops people from faking a cookie
  if (id) {
    return NextResponse.redirect(new URL("/api/verify", request.url));
  }

  // Logged in
  if (request.nextUrl.pathname === "/" && id != null) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Not Logged in
  if (request.nextUrl.pathname.startsWith("/home") && id == null) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Not Logged in for api
  if (request.nextUrl.pathname.startsWith("/api") && id == null) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/", "/api/"],
};

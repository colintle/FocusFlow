import { NextResponse,  NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const id = request.cookies.get('User Cookie')?.value;
  console.log('Cookie:' + id);

  console.log("pathname:" + request.nextUrl.pathname)
  if (request.nextUrl.pathname === "/" && id != null) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/home') && id == null) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/api') && id == null) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home', '/', '/api/*'],
}
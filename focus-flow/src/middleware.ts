import { NextResponse,  NextRequest } from 'next/server'
import { admin } from './app/firebase/firebase-admin';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const id = request.cookies.get('User Cookie')?.value;
  
  /*if (id){
    try {
      await admin.auth().getUser(id);
    } catch (error) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }*/

  // Logged in
  if (request.nextUrl.pathname === "/" && id != null) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Not Logged in 
  if (request.nextUrl.pathname.startsWith('/home') && id == null) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Not Logged in for api
  if (request.nextUrl.pathname.startsWith('/api') && id == null) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home', '/', '/api/'],
}
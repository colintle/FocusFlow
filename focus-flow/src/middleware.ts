'use server'
import { NextResponse, NextRequest } from "next/server";
import { db } from "./app/firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const id = request.cookies.get("User Cookie")?.value;

  if (id) {
    const userCollection = collection(db, "users");
    const user = doc(userCollection, id);
    const userDoc = await getDoc(user);

    if (userDoc.exists()) {
      console.log("Document data:", userDoc.data());
    } else {
      // Document does not exist
      
      return NextResponse.redirect(new URL("/api/logout", request.url));
    }
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

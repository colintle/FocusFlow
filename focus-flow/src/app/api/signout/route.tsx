import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  let errorCode = null;
  let errorMessage = null;

  try {
    cookies().delete("User Cookie");
    return  NextResponse.redirect(new URL("/", request.url));
  } catch (error: any) {
    errorCode = error.code;
    errorMessage = error.message;
    return NextResponse.json({ errorCode, errorMessage });
  }
}
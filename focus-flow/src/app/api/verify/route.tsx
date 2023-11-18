import { NextResponse, NextRequest } from "next/server";
import { db } from "@/app/firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export async function GET(request: NextRequest) {
    let errorCode = null;
    let errorMessage = null;
    const id = request.cookies.get("User Cookie")?.value;

    try{
        const userCollection = collection(db, "users");
        const user = doc(userCollection, id);
        const userDoc = await getDoc(user);
    
        if (userDoc.exists()) {
          console.log("Document data:", userDoc.data());
          return NextResponse.redirect(new URL("/home", request.url));
        } else {
          return NextResponse.redirect(new URL("/api/signout", request.url));
        }
    }
    catch(error: any){
        console.log(error)
        errorCode = error.code;
        errorMessage = error.message;
        return NextResponse.json({ error, id });
    }
  }
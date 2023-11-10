import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '@/app/firebase/firebase';
import { setDoc, doc, collection } from 'firebase/firestore';
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { email, password, firstName, lastName } = data;
  let errorCode = null;
  let errorMessage = null;
  try {
    // Create a user using the Firebase auth object
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed up
    const user = userCredential.user;
    const id = user.uid;

    const userRef = doc(collection(db, 'users'), id);
    await setDoc(userRef, {
      firstName,
      lastName,
      email
      // Other user properties can be added here
    });

    cookies().set({
      name: 'Registration cookie',
      value: id,
      httpOnly: true,
      path: 'https://focusflow3.vercel.app/home' && 'http://localhost:3000/home',
      maxAge: 3600,
      secure: true
    })

  } catch (error : any) {
    errorCode = error.code;
    errorMessage = error.message;
    return NextResponse.json({ errorCode, errorMessage });
  }

  return NextResponse.json({message: 'Registration Successful'});
}
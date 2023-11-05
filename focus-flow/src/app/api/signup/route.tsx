import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '@/app/firebase/firebase';
import { setDoc, doc, collection } from 'firebase/firestore';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
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
    console.log(user.uid);

    const userRef = doc(collection(db, 'users'), id);
    await setDoc(userRef, {
      firstName,
      lastName,
      email
      // Other user properties can be added here
    });


  } catch (error : any) {
    errorCode = error.code;
    errorMessage = error.message;
    console.log(errorCode + " message: " + errorMessage);
    return NextResponse.json({ errorCode, errorMessage });
  }

  return NextResponse.json('Registration Successful');
}

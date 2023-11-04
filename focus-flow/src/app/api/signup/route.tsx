import { createUserWithEmailAndPassword, AuthError, Auth } from 'firebase/auth';
import { db, auth } from '@/app/firebase/firebase';
import { setDoc, doc, collection } from 'firebase/firestore';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { email, password, firstName, lastName } = data;
  console.log(data);

  try {
    // Create a user using the Firebase auth object
    const userCredential = await createUserWithEmailAndPassword(auth as Auth, email, password);

    // Extract the user's UID
    const uid = userCredential.user.uid;

    // Store additional user information (first name, last name) in Firestore
    const userRef = doc(collection(db, 'users'), uid);
    await setDoc(userRef, {
      firstName,
      lastName,
      email
      // Other user properties can be added here
    });

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error: any) {
    let errorMessage = 'User registered successfully';

    if (error.code) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'The provided email address is already in use.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'The provided email address is not valid.';
          break;
        // Add more cases as needed
      }
    }
    return NextResponse.json({ error: errorMessage });
  }
};
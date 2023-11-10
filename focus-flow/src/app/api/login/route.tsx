import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '@/app/firebase/firebase';
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { email, password } = data;
  let errorCode = null;
  let errorMessage = null;

  try {
    // Sign a user using the Firebase auth object
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;
    await sendEmailVerification(user);
    
    if (user.emailVerified) {
      // The user is logged in only if their email is verified
      const id = user.uid;

      cookies().set({
        name: 'User Cookie',
        value: id,
        httpOnly: true,
        path: 'https://focusflow3.vercel.app/home' && 'http://localhost:3000/home' && 'https://focusflow3.vercel.app/' && 'http://localhost:3000/',
        maxAge: 3600,
        secure: true
      });
      
      return NextResponse.json('Login Successful');
    } else {
      await sendEmailVerification(user);
      return NextResponse.json({errorCode: 50, errorMesage:'Please verify your email before logging in.'});
    }
  } catch (error: any) {
    errorCode = error.code;
    errorMessage = error.message;
    return NextResponse.json({ errorCode, errorMessage });
  }
}
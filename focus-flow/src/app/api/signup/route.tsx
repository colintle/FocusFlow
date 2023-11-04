import type { NextApiRequest, NextApiResponse } from 'next';
import { createUserWithEmailAndPassword, AuthError, Auth } from 'firebase/auth';
import { db, auth } from '@/app/firebase/firebase';
import { setDoc, doc, collection } from 'firebase/firestore';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method not allowed
  }

  const { email, password, firstName, lastName } = req.body;

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

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error: any) {
    let errorMessage = 'An error occurred during registration';

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

    return res.status(400).json({ error: errorMessage });
  }
};

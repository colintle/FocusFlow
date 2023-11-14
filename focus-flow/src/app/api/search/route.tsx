import { db } from '@/app/firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const idCookie = cookieStore.get('User Cookie');
  const userId = idCookie!.value;

  const data = await request.json();
  const { searchQuery } = data; // Assuming your request contains a 'searchQuery' property
  let errorCode = null;
  let errorMessage = null;

  try {
      const tasksCollection = collection(db, 'users', userId, 'tasks');
      const q = query(tasksCollection, where('title', '>=', searchQuery));

      const querySnapshot = await getDocs(q);

      const matchingTasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log('Matching tasks: ', matchingTasks);

      return NextResponse.json({ matchingTasks });
  } catch (error: any) {
    errorCode = error.code;
    errorMessage = error.message;
    return NextResponse.json({ errorCode, errorMessage });
  }
}

import { db } from '@/app/firebase/firebase';
import { setDoc, doc} from 'firebase/firestore';
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const idCookie = cookieStore.get('User Cookie')
    const id = idCookie!.value;

    const data = await request.json();
    const { title, description, due, status } = data;
    let errorCode = null;
    let errorMessage = null;

    try {
        const taskRef = doc(db, 'users', id, 'tasks', title);
        await setDoc(taskRef, {
            title,
            description, 
            due, 
            status
            // Other properties can be added here
          });

        
    } catch (error: any) {
        errorCode = error.code;
        errorMessage = error.message;
        return NextResponse.json({ errorCode, errorMessage });
    }
    
    return NextResponse.json({message: 'Task Added'});
}
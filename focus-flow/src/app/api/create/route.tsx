import { db } from '@/app/firebase/firebase';
import { setDoc, doc, collection, addDoc} from 'firebase/firestore';
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const idCookie = cookieStore.get('User Cookie')
    const id = idCookie!.value;

    const data = await request.json() ;
    const { title, description, date, status } = data;
    let errorCode = null;
    let errorMessage = null;

    try {
        const taskCollection = collection(db, 'users', id, 'tasks');
        await addDoc(taskCollection, {
            title,
            description,
            date,
            status,
          });

        
    } catch (error: any) {
        errorCode = error.code;
        errorMessage = error.message;
        return NextResponse.json({ errorCode, errorMessage });
    }
    
    return NextResponse.json({message: 'Task Added'});
}
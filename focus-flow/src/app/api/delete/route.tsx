import { db } from '@/app/firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
    const cookieStore = cookies()
    const idCookie = cookieStore.get('User Cookie')
    const id = idCookie!.value;

    const data = await request.json() ;
    const { title } = data;
    let errorCode = null;
    let errorMessage = null;

    try {
        const taskRef = doc(db, 'users', id, 'tasks', title);
        await deleteDoc(taskRef);

        
    } catch (error: any) {
        errorCode = error.code;
        errorMessage = error.message;
        return NextResponse.json({ errorCode, errorMessage });
    }
    
    return NextResponse.json({message: 'Task Deleted'});
}
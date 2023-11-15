// pages/api/authMiddleware.js
import { admin } from '@/app/firebase/admin';
import { NextRequest, NextResponse } from 'next/server';

const authMiddleware = async (req: NextRequest) => {
  try {
    const idToken = req.headers.get('Authorization');
    if (!idToken)
        return NextResponse.json({ message: 'Idtoken is null'});

    const verifyIdToken = await admin.auth().verifyIdToken(idToken);

    NextResponse.next();
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json({ message: 'Unauthorized'});
  }
};

export default authMiddleware;

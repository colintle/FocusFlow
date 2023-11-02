import Image from 'next/image'
import { db } from './firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'

export default async function Home() {
  console.log("hello")
  const usersCollectionRef = collection(db, "users");

  try {
    const data = await getDocs(usersCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(), 
      id: doc.id,

    }));
    console.log(filteredData);
  } catch (error) {
    console.log(error)
  }
  
  return (
    <div>
      <p>Hi</p>
    </div>
  )
}
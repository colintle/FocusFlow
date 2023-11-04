import { db } from './firebase/firebase'
import { getDocs, collection, doc } from 'firebase/firestore'

export default async function LandingPage() {
  console.log("hello")
  const usersCollectionRef = collection(db, "users");

  try {
    const data = await getDocs(usersCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(), 
      id: doc.id
    }));
    console.log(filteredData);

    const userID = "JiWoWuVNb5lfnEevInVs";
    const userDocRef = doc(db, "users", userID);
    const tasksCollectionRef = collection(userDocRef, "tasks");
    const tasksData = await getDocs(tasksCollectionRef);

    const tasks = tasksData.docs.map((taskDoc) => ({
      ...taskDoc.data(),
      id: taskDoc.id,
    }));

    console.log(tasks);
  } catch (error) {
    console.log(error)
  }
  return (
    <div>
      <p>Hi</p>
    </div>
  )
}
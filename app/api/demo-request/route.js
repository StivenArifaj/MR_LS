
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.fullName || !data.schoolName || !data.role || !data.email || !data.location || !data.demoType) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Add a new document with a generated id to the "demoRequests" collection
    const docRef = await addDoc(collection(db, "demoRequests"), {
      ...data,
      submittedAt: serverTimestamp() // Add a server-side timestamp
    });

    return new Response(JSON.stringify({ success: true, id: docRef.id }), { status: 201 });

  } catch (error) {
    console.error("Error adding demo request: ", error);
    return new Response(JSON.stringify({ error: "Failed to submit demo request." }), { status: 500 });
  }
}

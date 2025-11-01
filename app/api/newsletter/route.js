4
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
  }

  try {
    const docRef = await addDoc(collection(db, "newsletter"), {
      email: email,
      subscribedAt: new Date()
    });
    return new Response(JSON.stringify({ success: true, message: "You have been subscribed!" }), { status: 200 });
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}


import dbConnect from '../../lib/dbConnect';
import DemoRequest from '../../models/DemoRequest';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await dbConnect();

  try {
    const newDemoRequest = new DemoRequest(req.body);
    await newDemoRequest.save();
    res.status(201).json({ message: 'Demo request submitted successfully' });
  } catch (error) {
    console.error('Demo Request Error:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}

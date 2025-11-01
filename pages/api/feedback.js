
import dbConnect from '../../lib/dbConnect';
import Feedback from '../../models/Feedback';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await dbConnect();

  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Feedback Submission Error:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}

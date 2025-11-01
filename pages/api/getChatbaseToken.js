
import * as admin from 'firebase-admin';
import jwt from 'jsonwebtoken';

const secret = '98pd7jqvoqomtgmtccgtl9xw8w9n94n8';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
    // IMPORTANT: You need to set up your Firebase service account credentials.
    // Go to your Firebase project settings, then "Service accounts", and generate a new private key.
    // Store the contents of the JSON file as an environment variable named 'SERVICE_ACCOUNT_KEY'.
    const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}


export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(401).send('Authorization token not found');
    }
    const token = authorization.split('Bearer ')[1];


    const decodedToken = await admin.auth().verifyIdToken(token);
    const { uid, email } = decodedToken;

    // You can fetch additional user data from your database here if needed
    // const user = await getMyUser(uid);

    const chatbaseToken = jwt.sign(
      {
        user_id: uid,
        email: email,
        // ...user
      },
      secret,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token: chatbaseToken });
  } catch (error) {
    console.error('Error verifying token or creating Chatbase token', error);
    res.status(401).send('Unauthorized');
  }
}

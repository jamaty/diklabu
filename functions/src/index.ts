import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Make them public like this
// https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_function_invocation

export const helloWorld = functions.region('europe-west3').https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

export const addMessage = functions.region('europe-west3').https.onRequest(async (request, response) => {
  admin.initializeApp();
  const original = request.query.text;
  const snapshot = await admin.firestore().collection('/messages').add({ original: original });
  response.send('Added message with id '+snapshot.id.toString());
});

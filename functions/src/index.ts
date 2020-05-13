import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Make them public like this
// https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_function_invocation

export const helloWorld = functions
  .region('europe-west3')
  .https.onRequest((request, response) => {
    response.send('Hello from Firebase!');
  });

export const addMessage = functions
  .region('europe-west3')
  .https.onRequest(async (request, response) => {
    const original = request.query.text;
    const snapshot = await admin
      .firestore()
      .collection('/messages')
      .add({ original: original });
    response.send('Added message with id ' + snapshot.id.toString());
  });

export const notifyUser = functions
  .region('europe-west3')
  .firestore.document('messages/{messageId}')
  .onCreate(async (snapshot) => {
    const message = snapshot.data();

    const notification: admin.messaging.Notification = {
      title: 'Diklabu ist toll!',
      body: message!.original,
    };

    const payload: admin.messaging.Message = {
      notification,
      webpush: {
        notification: {
          vibrate: [200, 100, 200],
          icon: 'https://bit.ly/3fEqm6G',
          actions: [
            {
              action: 'like',
              title: ' Yaaay!',
            },
            {
              action: 'dislike',
              title: 'Boooo!',
            },
          ],
        },
      },
      topic: 'messages',
    };

    return admin.messaging().send(payload);
  });

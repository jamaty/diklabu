// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.14.3/firebase-messaging.js'
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyBfM3J8LyiA0B6fOGcCRSw7OcvHJR9xlC8',
  authDomain: 'diklabu-2020.firebaseapp.com',
  databaseURL: 'https://diklabu-2020.firebaseio.com',
  projectId: 'diklabu-2020',
  storageBucket: 'diklabu-2020.appspot.com',
  messagingSenderId: '446535694064',
  appId: '1:446535694064:web:228d9bc757eac6c9b6f435',
  measurementId: 'G-DVDY6ME30E',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

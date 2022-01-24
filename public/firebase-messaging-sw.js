/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyCz54bv3xBSEwaYgdiOyAXLhNPGeroWcEk',
  authDomain: 'chat-web-app-8b7a5.firebaseapp.com',
  databaseURL: 'https://chat-web-app-8b7a5-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-8b7a5',
  storageBucket: 'chat-web-app-8b7a5.appspot.com',
  messagingSenderId: '172457876643',
  appId: '1:172457876643:web:69019f3f25d5665f7d7316',
});

firebase.messaging();

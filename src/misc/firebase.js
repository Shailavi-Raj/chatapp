import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyCz54bv3xBSEwaYgdiOyAXLhNPGeroWcEk',
  authDomain: 'chat-web-app-8b7a5.firebaseapp.com',
  databaseURL: 'https://chat-web-app-8b7a5-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-8b7a5',
  storageBucket: 'chat-web-app-8b7a5.appspot.com',
  messagingSenderId: '172457876643',
  appId: '1:172457876643:web:69019f3f25d5665f7d7316',
};
export const fcmVapidKey =
  'BLs_I-HQyrAuUJJh8H3U0vtHGhVhXLMqoVoomeNL90GMKm0-o7sSoN9CJYRiBAVz-Yi7ZAni8mKateJfDwodTnw';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}

// eslint-disable-next-line no-unused-vars

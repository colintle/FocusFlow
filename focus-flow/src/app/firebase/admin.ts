// firebase-admin.js
import admin from 'firebase-admin';

const serviceAccount = require('../../../focusflow-6cd39-firebase-adminsdk-xb2nc-a6bdacf1d9.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export { admin };

const admin = require('firebase-admin');
const serviceAccount = require('./../couply-dev-firebase-adminsdk-nncvo-03701dfcf7.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://couply-dev.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };

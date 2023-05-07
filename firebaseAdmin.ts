import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

// const serviceAccount = require("./serviceAccountKey.json")

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

//Singleton
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
// so now I can make admin calls from my backend to manipulate the database with zero permission

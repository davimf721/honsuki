import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";




admin.initializeApp({
  credential: admin.credential.cert({
    projectID: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,'\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL
  })
})

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
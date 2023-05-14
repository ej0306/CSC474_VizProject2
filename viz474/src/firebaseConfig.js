import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtSD19FID_zLZTbPKnfCOVLK5zgI0DKyY",

  authDomain: "viz4747.firebaseapp.com",

  projectId: "viz4747",

  storageBucket: "viz4747.appspot.com",

  messagingSenderId: "256783492913",

  appId: "1:256783492913:web:a8b58ce9503d1a0d037210",
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export { fireDb, app };

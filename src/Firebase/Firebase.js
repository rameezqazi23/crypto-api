import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABIpfqKVdaBPyLhT4lx3OvOQYVCkkvlfs",
    authDomain: "crypto-api-531bf.firebaseapp.com",
    projectId: "crypto-api-531bf",
    storageBucket: "crypto-api-531bf.appspot.com",
    messagingSenderId: "335401689675",
    appId: "1:335401689675:web:c405c1ee94d95487ec63ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app
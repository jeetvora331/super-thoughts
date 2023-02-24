// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: process.env.NEXT_PUBLIC_API_KEY,
// 	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
// 	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
// 	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
// 	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
// 	appId: process.env.NEXT_PUBLIC_APP_ID,
// 	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,

// };

const firebaseConfig = {
	apiKey: "AIzaSyDmp5Lt53Vykcg_EuSqTNuLpuiYuAkV7EE",
	authDomain: "super-thoughts.firebaseapp.com",
	projectId: "super-thoughts",
	storageBucket: "super-thoughts.appspot.com",
	messagingSenderId: "489369265985",
	appId: "1:489369265985:web:2344d063703eef253fa3c0",
	measurementId: "G-STHTJV1MGB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

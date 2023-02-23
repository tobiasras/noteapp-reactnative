// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// irmport { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCKaOu6CmoXDQvFszqdW1XsLf51UesOp8",
    authDomain: "noteappv2.firebaseapp.com",
    projectId: "noteappv2",
    storageBucket: "noteappv2.appspot.com",
    messagingSenderId: "1008828414017",
    appId: "1:1008828414017:web:a26b84533b27dff1a4eec0",
    measurementId: "G-1E26T1DX4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);





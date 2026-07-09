import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCHgd5buytu-MJzMEdnUysMOLm57SP6VnI",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "sistema-comercial-cab54.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "sistema-comercial-cab54",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "sistema-comercial-cab54.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "301807360865",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:301807360865:web:ba7d4e891ae0825bdcc320",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Inicializar Analytics solo si es compatible
let analytics = null;

if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

const googleProvider = new GoogleAuthProvider();

// Exportar todos los servicios
export { app, auth, db, storage, analytics, googleProvider };
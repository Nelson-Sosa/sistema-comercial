import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase/firebaseConfig";

async function ensureUserDoc(uid, email) {
  const userDoc = await getDoc(doc(db, "users", uid));

  if (!userDoc.exists()) {
    const userData = {
      uid,
      email,
      role: "user",
      createdAt: serverTimestamp(),
    };
    await setDoc(doc(db, "users", uid), userData);
    return { uid, ...userData, createdAt: new Date().toISOString() };
  }

  return { uid, ...userDoc.data(), id: uid };
}

export async function registerWithEmailPassword(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return ensureUserDoc(userCredential.user.uid, email);
}

export async function loginWithEmailPassword(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return ensureUserDoc(userCredential.user.uid, email);
}

export async function logout() {
  await signOut(auth);
}

export async function loginWithGoogle() {
  await signInWithRedirect(auth, googleProvider);
}

export async function handleRedirectResult() {
  const result = await getRedirectResult(auth);
  if (!result || !result.user) return null;
  const { uid, email } = result.user;
  return ensureUserDoc(uid, email);
}

export async function getUserData(uid) {
  const userDoc = await getDoc(doc(db, "users", uid));
  if (!userDoc.exists()) return null;
  return { uid, ...userDoc.data(), id: uid };
}

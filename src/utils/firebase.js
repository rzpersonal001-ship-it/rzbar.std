// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// ✅ Konfigurasi Firebase (tidak perlu ubah)
const firebaseConfig = {
  apiKey: "AIzaSyDU0WR246rebXCy7Rgluy-NB6GeF6KugUw",
  authDomain: "rzbar-blog.firebaseapp.com",
  projectId: "rzbar-blog",
  storageBucket: "rzbar-blog.appspot.com", // dibiarkan walau tidak dipakai
  messagingSenderId: "577352871537",
  appId: "1:577352871537:web:84160030650dde253075d0",
  measurementId: "G-MQ4QW2B4BZ",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Services yang dipakai
export const auth = getAuth(app);
export const db = getFirestore(app);

/* ==========================
   🔹 FIRESTORE UTILITIES
   ========================== */

// Tambah post baru (gambar pakai URL statis dari /public/images/blog/)
export const addBlogPost = async (post) => {
  await addDoc(collection(db, "posts"), {
    ...post,
    createdAt: serverTimestamp(),
  });
};

// Ambil semua post dari Firestore
export const getBlogPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* ==========================
   🔹 AUTHENTICATION UTILITIES
   ========================== */

export const loginAdmin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutAdmin = () => signOut(auth);

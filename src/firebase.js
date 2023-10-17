import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

// const firebaseConfig = {
//   apiKey: "AIzaSyAnqFv5DEB9MGnMgaI5R2FQbgTdRhwcSmA",
//   authDomain: "airbus-1b698.firebaseapp.com",
//   projectId: "airbus-1b698",
//   storageBucket: "airbus-1b698.appspot.com",
//   messagingSenderId: "50105786508",
//   appId: "1:50105786508:web:1b9969b1f6576395b29ba9",
//   measurementId: "G-20NDJX5MT7",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBtkSPUfyR_zBArSmRRi9x5rvNfx_TBNZA",
  authDomain: "airbus-flightbooking.firebaseapp.com",
  projectId: "airbus-flightbooking",
  storageBucket: "airbus-flightbooking.appspot.com",
  messagingSenderId: "349297786431",
  appId: "1:349297786431:web:b9bf49e06050390530028a",
  measurementId: "G-PR3RKPZEN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);

//custom Hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );
    return unsubscribe;
  }, []);
  return currentUser;
}

export default app;

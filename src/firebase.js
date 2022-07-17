import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

// import { getStorage } from 'firebase/storage';


const firebaseConfing = {
  apiKey: 'AIzaSyDHkP6BtHmKCN8WduH3Zm74n5N5Ka9jmV0',
  authDomain: 'carshop-198bf.firebaseapp.com',
  databaseURL:
  'https://carshop-198bf-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'carshop-198bf',
  storageBucket: 'carshop-198bf.appspot.com',
  messagingSenderId: '1056539599007',
  appId: '1:1056539599007:web:015c3da8258253f3d4c2aa',
};

const app = initializeApp(firebaseConfing);
const auth = getAuth();

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

const db = getDatabase();
export function logOut() {
  return signOut(auth);
}
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  localStorage.setItem('user', JSON.stringify(currentUser));

  return currentUser;
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function createCar(
  brandRef,
  modelRef,
  millageRef,
  engineRef,
  phoneRef,
  priceRef,
  descriptionRef
) {
  const carId =
    Math.floor(Math.random() * 10000) + '-' + Math.floor(Math.random() * 10000);
  const userData = localStorage.getItem('user').trim();
  const user = JSON.parse(userData);

  set(ref(db, 'cars/' + carId), {
    carId: carId,
    brand: brandRef,
    model: modelRef,
    millage: millageRef,
    engine: engineRef,
    phone: phoneRef,
    price: priceRef,
    description: descriptionRef,
    user: user.email,
  });
}

// export const storage = getStorage(app);

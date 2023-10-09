import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, deleteDoc } from 'firebase/firestore';

// Function to fetch user data from Firestore based on user ID
export const getUserDataFromFirestore = async (userId) => {
  try {
    const firestore = getFirestore();
    const userRef = doc(firestore, 'users', userId);
    const userDoc = await getDoc(userRef);

    // Check if the user document exists and return its data
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      return null; // User document doesn't exist
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Function to delete user data from Firestore based on user ID
export const deleteUserDataFromFirestore = async (userId) => {
  try {
    const firestore = getFirestore();
    const userRef = doc(firestore, 'users', userId);

    // Delete the user document from Firestore
    await deleteDoc(userRef);

    console.log('User data deleted successfully.');
  } catch (error) {
    console.error('Error deleting user data:', error);
    throw error;
  }
};

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCtRr0_ksnBdShTqQOd2xHgR_wD6Cq45WA",
  authDomain: "deakin-web-app-cba3b.firebaseapp.com",
  projectId: "deakin-web-app-cba3b",
  storageBucket: "deakin-web-app-cba3b.appspot.com",
  messagingSenderId: "812789337611",
  appId: "1:812789337611:web:49e3533d07a2b25f49010e"
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Get the authentication instance from Firebase
const auth = getAuth(app);

// Get the Firestore instance from Firebase and export it
const firestore = getFirestore(app);

// Export the authentication and Firestore instances
export { auth, firestore };

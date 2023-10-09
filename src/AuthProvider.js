import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase-config'; 

// Authentication context
const AuthContext = createContext();

// Custom hook to access the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Firebase authentication state change listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    currentUser,
    logout, // Logout function in the context
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
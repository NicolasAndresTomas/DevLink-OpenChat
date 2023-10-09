import React from 'react';
import Messaging from '../Messaging'; // Import the Messaging component
import NavigationBar from '../NavigationBar'; // Import the NavigationBar component
import '../styles/MessagingPage.css'; // Import styles for this page
import { useAuth } from '../AuthProvider'; // Import useAuth hook for authentication

function MessagingPage() {
  const { currentUser } = useAuth(); // Get the current user from useAuth()

  return (
    <div>
      <NavigationBar /> {/* Include the NavigationBar component */}
      <div className="messaging-page">
        {/* Conditional rendering based on whether a user is logged in */}
        {currentUser ? (
          <Messaging currentUser={currentUser} /> // Display the Messaging component if a user is logged in
        ) : (
          <p>Please log in to use messaging.</p> // Display a message if no user is logged in
        )}
      </div>
    </div>
  );
}

export default MessagingPage;
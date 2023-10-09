import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthProvider'; 
import { getUserDataFromFirestore, deleteUserDataFromFirestore } from './firebase-config'; 
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

function UserDashboard() {
  const { currentUser, logout } = useAuth(); // Access the current user from your authentication context
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data when the component mounts
    if (currentUser) {
      getUserDataFromFirestore(currentUser.uid)
        .then((data) => {
          console.log('Fetched user data:', data); // Check if data is fetched
          setUserData(data);
        })
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [currentUser]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    const confirmation = window.confirm('Are you sure you want to delete your account? This action is irreversible.');

    if (confirmation) {
      try {
        await deleteUserDataFromFirestore(currentUser.uid);
        await currentUser.delete();
        logout();
        navigate('/');
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  return (
    <div>
      <h1>User</h1>
      <h2 className="user">{currentUser ? currentUser.email : 'Not logged in'}</h2>
      {userData && (
        <div>
          <p className="description">Email: {currentUser.email}</p>
        </div>
      )}
      <button className="continue-btn" onClick={handleLogout}>Logout</button>
      <p className="or">or</p>
      <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
      <div className="back">
        <p><Link to="/messaging">Back</Link></p>
      </div>
    </div>
  );
}

export default UserDashboard;
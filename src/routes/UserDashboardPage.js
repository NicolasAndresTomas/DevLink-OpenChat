import React from 'react';
import UserDashboard from '../UserDashboard'; // Import the UserDashboard component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/UserDashboardPage.css'; // Import styles for this page
import logoImage from '../images/grey-logo.png'; // Import the logo image

function UserDashboardPage() {
  return (
    <div className="user-dashboard-page">
      {/* Include the UserDashboard component */}
      <UserDashboard />

      <div className="centered-text">
        {/* Display the logo image */}
        <img src={logoImage} alt="Logo" className="logo-image" />
        <p>
          {/* Link to the Terms of Use page */}
          <span className="footer-link-1"><Link to="/termsofuse">Terms of use</Link></span>
          {' | '}
          {/* Link to the Privacy Policy page */}
          <span className="footer-link-2"><Link to="/privacypolicy">Privacy policy</Link></span>
        </p>
      </div>
    </div>
  );
}

export default UserDashboardPage;
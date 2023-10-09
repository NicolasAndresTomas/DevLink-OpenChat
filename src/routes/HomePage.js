import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/HomePage.css'; // Import styles for this page
import logoImage from '../images/grey-logo.png'; // Import the logo image

function HomePage() {
  return (
    <div>
      <div className="home-page">
        <h1>Get started</h1>
        <div>
          {/* Link to the login page */}
          <Link to="/login" className="btn">Log in</Link>

          {/* Link to the registration page */}
          <Link to="/register" className="btn">Sign up</Link>
        </div>
       
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
    </div>
  );
}

export default HomePage;
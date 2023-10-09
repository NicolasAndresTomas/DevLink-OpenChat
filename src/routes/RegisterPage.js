import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Register from '../Register'; // Import the Register component
import '../styles/RegisterPage.css'; // Import styles for this page
import symbolImage from '../images/black-symbol.png'; // Import the symbol image

function RegisterPage() {
  return (
    <div className="register-page">
      {/* Display the symbol image */}
      <img src={symbolImage} alt="Logo" className="symbol-image" />

      {/* Include the Register component */}
      <Register />

      {/* Display links to Terms of Use and Privacy Policy */}
      <div className="centered">
        <p>
          {/* Link to the Terms of Use page */}
          <span className="link-1"><Link to="/termsofuse">Terms of use</Link></span>
          {' | '}
          {/* Link to the Privacy Policy page */}
          <span className="link-2"><Link to="/privacypolicy">Privacy policy</Link></span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
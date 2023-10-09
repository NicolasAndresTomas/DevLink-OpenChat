import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/PrivacyPolicyPage.css'; // Import styles for this page
import symbolImage from '../images/black-symbol.png'; // Import the symbol image

function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
        {/* Display the symbol image */}
        <img src={symbolImage} alt="Logo" className="symbol-image" />
        
        {/* Title for the privacy policy */}
        <h1 className="privacy-policy-title">Privacy policy</h1>
        
        {/* Description of the privacy policy */}
        <p className="privacy-policy-description">We at DevLink OpenChat, LLC (together with our affiliates, “DevLink”, “we”, “our” or “us”) respect your <br></br>
        privacy and are strongly committed to keeping secure any information we obtain from you or <br></br> 
        about you. This Privacy Policy describes our practices with respect to Personal Information we <br></br> 
        collect from or about you when you use our website, applications, and services (collectively, <br></br>
        “Services”). This Privacy Policy does not apply to content that we process on behalf of customers <br></br>
        of our business offerings. Our use of that data is governed by our customer <br></br> 
        agreements covering access to and use of those offerings.</p>

        {/* Link to a help center article */}
        <p className="privacy-policy-description">For information about how we collect and use training information to develop our language <br></br>
        models that power DevLink OpenChat and other Services, and your choices with respect to that information. <br></br> 
        please see this <Link className="privacy-policy-link" to="https://ironcladapp.com/journal/contracts/how-to-create-the-best-privacy-policy-for-your-business/">help center article.</Link></p>

         {/* Link to navigate back */}
        <p><Link className="privacy-policy-link" to="/">Back</Link></p>
    </div>
  );
}

export default PrivacyPolicyPage;
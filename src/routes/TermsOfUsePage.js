import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/TermsOfUsePage.css'; // Import styles for this page
import symbolImage from '../images/black-symbol.png'; // Import the symbol image

function TermsOfUsePage() {
  return (
    <div className="terms-of-use-page">
        {/* Display the symbol image */}
        <img src={symbolImage} alt="Logo" className="symbol-image" />
       
        {/* Title for the Terms of Use */}
        <h1 className="terms-of-use-title">Terms of use</h1>
        
        {/* Description of the Terms of Use */}
        <p className="terms-of-use-description">Thank you for using DevLink OpenChat!</p>

        {/* Detailed Terms of Use description */}
        <p className="terms-of-use-description">
        These Terms of Use apply when you use the services of DevLink OpenChat, L.L.C. or our affiliates, including <br></br> 
        our application programming interface, software, tools, developer services, data, documentation, <br></br> 
        and websites (“Services”). The Terms include our Service Terms, Sharing & Publication <br></br>
        Policy, Usage Policies, and other documentation, guidelines, or policies we may provide in writing. <br></br>
        By using our Services, you agree to these Terms. Our Privacy Policy explains how we collect and <br></br> 
        use personal information.</p>

        {/* Link to navigate back */}
        <p><Link className="terms-of-use-link" to="/">Back</Link></p>
    </div>
  );
}

export default TermsOfUsePage;
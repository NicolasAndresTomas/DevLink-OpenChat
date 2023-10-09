import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from './firebase-config';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false); // State to track if the reset email is sent

  // Function to handle resetting the password
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true);
    } catch (error) {
      console.error('Reset password error:', error);

      if (error.code === 'auth/user-not-found') {
        // Handle user not found error, e.g., display a message to the user
        alert('User not found. Please check your email address.');
      } else {
        // Handle other errors, e.g., display a generic error message
        alert('An error occurred while resetting your password. Please try again later.');
      }
    }
  };

  // Function to handle resending the reset email
  const handleResendEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      // You can add any additional logic here, such as displaying a success message.
    } catch (error) {
      console.error('Resend email error:', error);
      // Handle the error, e.g., display an error message to the user.
    }
  };

  return (
    <div>
      {!isEmailSent ? (
        // Step 1: Request password reset
        <>
          <h1 className="title">Reset your password</h1>
          <p className="description">Enter your email address, and we will send you instructions to reset your password.</p>
          <input
            className="input-field"
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <button className="continue-btn" onClick={handleResetPassword}>Continue</button>
          </div>
          <div className="no-account">
            <p><Link to="/">Back to Apps Client</Link></p>
          </div>
        </>
      ) : (
        // Step 2: Email sent
        <>
          <h1 className="title">Check your email</h1>
          <p className="description">Please check the email address {email} for instructions to reset your password.</p>
          <div>
            <button className="continue-btn" onClick={handleResendEmail}>Resend email</button>
          </div>
          <div className="no-account">
            <p><Link to="/">Back to Apps Client</Link></p>
          </div>
        </>
      )}
    </div>
  );
}

export default ForgotPassword;
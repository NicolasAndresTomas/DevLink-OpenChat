import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config'; 
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: Password
  const [isEmailValid, setIsEmailValid] = useState(false); // Track email validity
  const navigate = useNavigate();

  // Function to navigate to the forgot password page
  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };

  // Function to move to the password step
  const handleContinue = () => {
    if (isEmailValid) {
      setStep(2); // Move to the password step
    }
  };

  // Function to go back to step 1 for email editing
  const handleEditEmail = () => {
    setStep(1); // Move back to step 1 for email editing
  };

  // Function to handle user login
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
    } catch (error) {
      console.error('Login error:', error);
    }
    navigate('/messaging');
  };

  // Function to validate email format
  const validateEmail = (input) => {
    // Simple email validation (you can use a more robust regex if needed)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  };

  // Update email validity whenever the email input changes
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  return (
    <div>
      {step === 1 ? ( // Step 1: Email
        <div>
          <h1 className="title">Welcome back</h1>
          <input
            className="input-field"
            type="text"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
          />
          <div>
            <button
              onClick={handleContinue}
              className="continue-btn"
              disabled={!isEmailValid} // Disable the button if email is invalid
            >
              Continue
            </button>
          </div>
          <div className="no-account">
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          </div>
        </div>
      ) : (
        // Step 2: Password
        <div>
          <h1 className="title">Enter your password</h1>
          <div className='display-email'>
            <span>{email}</span>
            <a href="#" onClick={handleEditEmail}>
              Edit
            </a>
          </div>
          <div>
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className="forgot-password" onClick={handleForgotPassword}>
            Forgot password?
          </a>
          <div>
            <button onClick={handleLogin} className="continue-btn">
              Continue
            </button>
          </div>
          <div className="no-account">
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
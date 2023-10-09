import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: Password
  const [isEmailValid, setIsEmailValid] = useState(false); // Track email validity
  const navigate = useNavigate();

  // Function to handle user registration
  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered:', user);
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
    }
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

  // Function to validate email format
  const validateEmail = (input) => {
    // Simple email validation (you can use a more robust regex if needed)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  };

  // Function to update email validity whenever the email input changes
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  return (
    <div>
      {step === 1 ? ( // Step 1: Email
        <div>
          <h1 className="title">Create your account</h1>
          <div>
            <input
              className="input-field"
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input-field"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input-field"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input-field"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
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
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </div>
      ) : (
        // Step 2: Password
        <div>
          <h1 className="title">Create your account</h1>
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
          <div>
            <button onClick={handleRegister} className="continue-btn">
              Continue
            </button>
          </div>
          <div className="no-account">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
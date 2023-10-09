import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UserDashboardPage from './UserDashboardPage';
import MessagingPage from './MessagingPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsOfUsePage from './TermsOfUsePage';

function AppRouter() {
  return (
    // Use React Router to handle routing in your application.
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route for the forgot password page */}
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />

        {/* Route for the registration page */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Route for the user dashboard */}
        <Route path="/dashboard" element={<UserDashboardPage />} />

        {/* Route for the messaging page */}
        <Route path="/messaging" element={<MessagingPage />} />

        {/* Route for the privacy policy page */}
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />

        {/* Route for the terms of use page */}
        <Route path="/termsofuse" element={<TermsOfUsePage />} />

        {/* Default route, typically the homepage */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
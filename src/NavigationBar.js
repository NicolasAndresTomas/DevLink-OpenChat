import React from "react";
import { Outlet, Link } from "react-router-dom";
import './index.css'; 
import logo from '../src/images/logo.png'; 

function NavigationBar() {
    return (
        <div>
            {/* Navigation Bar */}
            <div className="navbar">
                {/* Left side of the navigation bar containing the logo */}
                <div className="navbar-left-container">
                    <img src={logo} alt="Logo" />  
                </div>
                {/* Right side of the navigation bar containing external and internal links */}
                <div className="navbar-right-container">
                    {/* External link to DevLink Marketing website */}
                    <a className='external-link' href='https://delightful-genie-a8a96e.netlify.app/' target='_blank' rel='noopener noreferrer'>
                        DevLink Marketing
                    </a>
                    {/* Internal link to the Profile page */}
                    <Link className='internal-link' to='/dashboard'>Profile</Link>
                </div>
            </div>
            {/* Outlet renders the child routes */}
            <Outlet />
        </div>
    );
}

export default NavigationBar;
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img 
                        src="https://expofp.com/template/img/site-header-logo.png" 
                        alt="Expo FP Logo" 
                        className="footer-logo-img" 
                    />
                </div>
                <div className="footer-links">
                    <a href="#home" className="footer-link">Home</a>
                    <a href="#about" className="footer-link">About Us</a>
                    <a href="#services" className="footer-link">Services</a>
                    <a href="#contact" className="footer-link">Contact</a>
                </div>
                <div className="footer-text">
                    © 2024 Expo FP Brasil. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;

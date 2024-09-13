import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg'; // Replace with your logo
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-light">
            <div className="container py-4">
                <div className="row">
                    {/* First part: Logo, Review, and Social Media */}
                    <div className="col-md-3 d-flex flex-column align-items-start">
                        <img src={logo} alt="Pure Cleaning Logo" className="footer-logo mb-3" />
                        <div className="review-button">Leave Us A Review</div>
                        <div className="social-icons mt-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-2">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-2">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    {/* Additional footer content here */}
                    <div className="col-md-3">
                        {/* Add more content if needed */}
                    </div>
                    <div className="col-md-3">
                        {/* Add more content if needed */}
                    </div>
                    <div className="col-md-3">
                        {/* Add more content if needed */}
                    </div>
                </div>
            </div>
            {/* Horizontal line connecting the vertical lines */}
            <div className="footer-horizontal-line"></div>

            {/* Vertical lines */}
            <div className="footer-lines">
                <div className="footer-line"></div>
                <div className="footer-line"></div>
                <div className="footer-line"></div>
                <div className="footer-line"></div>
            </div>
        </footer>
    );
};

export default Footer;

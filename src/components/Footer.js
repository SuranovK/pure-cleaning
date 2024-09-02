// src/components/Footer.js
import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Company Info Section */}
                    <div className="col-md-4">
                        <h5>Pure Cleaning</h5>
                        <p>Your trusted partner in commercial cleaning. We ensure your space is always clean, safe, and welcoming.</p>
                    </div>
                    <div className='link-to-top'>
                        <button name='back-to-top'>Back To Top</button>
                        <a></a>
                    </div>
                
                    {/* Quick Links Section */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link className="footer-link" to="home" smooth={true}>Home</Link></li>
                            <li><Link className="footer-link" to="about" smooth={true}>About</Link></li>
                            <li><Link className="footer-link" to="services" smooth={true}>Services</Link></li>
                            <li><Link className="footer-link" to="areas" smooth={true}>Areas We Serve</Link></li>
                            <li><Link className="footer-link" to="contact" smooth={true}>Contact</Link></li>
                        </ul>
                    </div>
                    
                    {/* Social Media and Contact Info Section */}
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Email: info@purecleaning.com</li>
                            <li>Phone: (123) 456-7890</li>
                        </ul>
                        <div className="social-icons">
                            <a href="#" className="text-white mr-3"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white mr-3"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                
                {/* Copyright Section */}
                <div className="row mt-4">
                    <div className="col text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Pure Cleaning. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

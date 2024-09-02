import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link to="home" className="navbar-brand" smooth={true} duration={500}>Pure Cleaning</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="home" className="nav-link" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link" smooth={true} duration={500}>About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <Link to="office-cleaning" className="dropdown-item" smooth={true} duration={500}>Office Cleaning</Link>
                                <Link to="school-cleaning" className="dropdown-item" smooth={true} duration={500}>School Cleaning</Link>
                                {/* Add more service links as needed */}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="areasDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Areas We Serve
                            </a>
                            <div className="dropdown-menu" aria-labelledby="areasDropdown">
                                <Link to="st-louis" className="dropdown-item" smooth={true} duration={500}>St. Louis</Link>
                                <Link to="chicago" className="dropdown-item" smooth={true} duration={500}>Chicago</Link>
                                {/* Add more area links as needed */}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className="nav-link" smooth={true} duration={500}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="testimonials" className="nav-link" smooth={true} duration={500}>Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="appointment" className="nav-link btn btn-primary text-white" smooth={true} duration={500}>Book An Appointment</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

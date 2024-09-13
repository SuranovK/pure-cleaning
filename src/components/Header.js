import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true); // State to manage collapse
    const navRef = useRef(null); // Ref to access the collapse div

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const closeNav = () => {
        if (!isNavCollapsed) {
            setIsNavCollapsed(true);
            if (navRef.current) {
                navRef.current.classList.remove('show');
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link to="home" className="navbar-brand" smooth={true} duration={500} onClick={closeNav}>Pure Cleaning</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav" ref={navRef}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="home" className="nav-link" smooth={true} duration={500} onClick={closeNav}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link" smooth={true} duration={500} onClick={closeNav}>About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <Link to="office-cleaning" className="dropdown-item" smooth={true} duration={500} onClick={closeNav}>Office Cleaning</Link>
                                <Link to="school-cleaning" className="dropdown-item" smooth={true} duration={500} onClick={closeNav}>School Cleaning</Link>
                                {/* Add more service links as needed */}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="areasDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Areas We Serve
                            </a>
                            <div className="dropdown-menu" aria-labelledby="areasDropdown">
                                <Link to="st-louis" className="dropdown-item" smooth={true} duration={500} onClick={closeNav}>St. Louis</Link>
                                <Link to="chicago" className="dropdown-item" smooth={true} duration={500} onClick={closeNav}>Chicago</Link>
                                {/* Add more area links as needed */}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className="nav-link" smooth={true} duration={500} onClick={closeNav}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="testimonials" className="nav-link" smooth={true} duration={500} onClick={closeNav}>Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="appointment" className="nav-link btn btn-primary text-white" smooth={true} duration={500} onClick={closeNav}>Book An Appointment</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

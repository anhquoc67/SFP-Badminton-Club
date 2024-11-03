import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-light shadow-sm py-3">
            <div className="container">
                <div className="row align-items-center">
                    {/* Logo Section */}
                    <div className="col-lg-2 col-md-3 col-6">
                        <Link to="/" className="navbar-brand">
                            <img
                                src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729433981/logo1_tmdtl6.png"
                                alt="Logo"
                                className="img-fluid"
                                style={{ maxWidth: '150px', height: 'auto' ,borderRadius: '10px' }}
                            />
                        </Link>
                    </div>

                    {/* Navigation Section */}
                    <div className="col-lg-10 col-md-9 col-6">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link text-dark fw-bold">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/Gallery' className="nav-link text-dark fw-bold">Gallery</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to='/AboutUs' className="nav-link text-dark fw-bold">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/ContactUs' className="nav-link text-dark fw-bold">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link text-dark fw-bold">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link text-dark fw-bold">Register</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
                    
                </div>
            </div>

            {/* Back to Top Button */}
            <a href="#top" className="top" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <img
                    src="https://res.cloudinary.com/duj4e3i6z/image/upload/v1729172852/Top_qokqaf.png"
                    alt="Back to Top"
                    style={{ width: '30px' }}
                />
            </a>
        </header>
    );
};

export default Header;

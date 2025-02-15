import React from 'react';
import './Footer.css';
import logo from '../images/favicon.ico';

const Footer = () => {
    return (
        <footer  className="footer">
            <div id="fooooter" className="footer-container">
                <div className="footer-left">
                    <img src={logo}/>
                    <div className="footer-section intro-section">
                        <p>Ready to transform your space? Let’s bring your vision to life! Whether you need an interior design consultation or a detailed quote for your project, I’m here to help.</p>
                        <p>Contact me today for a personalized consultation and let’s make your dream space a reality!</p>

                        <p>Your trusted partner in transforming spaces into personalized works of art.</p>
                    </div>
                    <div className="footer-section">

                        <h2 className="footer-title2">SS Construction & Interior Solutions</h2>

                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-section">
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="footer-contact-info">
                            <li>Email: ssconstructions1820@gmail.com</li>
                            <li>Email: ssdesignstudiogoa@gmail.com</li>
                            <li>Phone: +91 9766808444</li>
                            <li>Address: Guirim, Bardez-Goa</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Follow Us</h3>
                        <a href="https://www.facebook.com/ssconstructionsgoa?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">Facebook</a> |
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
                        <a href="https://www.instagram.com/ss.constructionsandinteriors" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <div className="footer-section">
                        <p>&copy; 2025 SS Construction & Interior Solutions. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

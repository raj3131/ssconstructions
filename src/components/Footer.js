import React from 'react';
import './Footer.css'; // Make sure to import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h2 className="footer-title">SS Construction & Interior Solutions</h2>
                <p>Your trusted partner in transforming spaces into personalized works of art.</p>
            </div>
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
        </footer>
    );
};

export default Footer;

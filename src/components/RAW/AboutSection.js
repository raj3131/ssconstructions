import React from 'react';
import './AboutSection.css'; // Import your CSS file



const AboutSection = () => {
    return (
        <div id="about" className="about-section">
            <div className="about-container">
                <div className="about-content">
                    {/* Welcome, Section - Centered Aesthetically */}
                    <div className="welcome-section">
                        <h1 className="welcome-heading">Welcome to SS Construction & Interior Solutions!</h1>
                        <p className="welcome-text">
                            We specialize in turning your vision into reality, whether it’s building a new space or reimagining an existing one. Our team is committed to delivering exceptional quality and innovative designs, ensuring your project exceeds expectations from start to finish. Let’s create something extraordinary together!
                        </p>
                    </div>

                    <div className="divider-container">
                        <div className="divider-line"></div>
                        <div className="hollow-circle"></div>
                        <div className="divider-line"></div>
                    </div>

                    {/* Info Container - Flexbox Layout */}
                    <div className="info-container">
                        {/* About Section */}
                        <div className="about-details card" >
                            <h2 className="about-heading">About SS Construction & Interior Solutions</h2>
                            <p className="about-text">
                                At SS Construction & Interior Solutions, we are dedicated to delivering exceptional construction and interior solutions that transform spaces into personalized works of art. With over 15 years of experience in the industry, we have successfully completed hundreds of projects ranging from residential homes to large-scale commercial establishments.
                            </p>
                            <p className="about-text">
                                Our team of skilled professionals is committed to quality craftsmanship, timely project delivery, and exceeding client expectations every step of the way.
                            </p>
                        </div>

                        {/* Mission Section */}
                        <div className="mission-section card">
                            <h3 className="mission-heading">Mission Statement</h3>
                            <p className="mission-text">
                                To provide innovative and sustainable construction and interior design solutions that elevate the quality of living and working environments.
                            </p>
                        </div>

                        {/* Values Section */}
                        <div className="values-section card" >
                            <h3 className="values-heading">Our Values</h3>
                            <ul className="values-list">
                                <li><strong>Integrity:</strong> We believe in honesty and transparency in all aspects of our work.</li>
                                <li><strong>Quality:</strong> We never compromise on the quality of materials or workmanship.</li>
                                <li><strong>Customer-Centric:</strong> Your satisfaction is our top priority.</li>
                                <li><strong>Innovation:</strong> We stay ahead of trends and offer modern, cutting-edge designs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

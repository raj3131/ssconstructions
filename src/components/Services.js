import React from 'react';
import './Services.css'; // Import your CSS file

const Services  = () => {
    return (
        <div id="services" className="services-section">
            <h1 className="services-heading">Our Services</h1>

            {/* Architectural Design Service */}
            <div className="service-item">
                <div className="service-description">
                    <h2>Architectural Design</h2>
                    <p>
                        Our architectural design services focus on creating innovative, functional, and aesthetically pleasing spaces tailored to our clients' needs. We specialize in residential, commercial, industrial, and institutional projects, delivering bespoke designs that harmonize with the environment and meet modern standards. From concept development to detailed drawings, we ensure every project is a perfect blend of creativity and practicality.
                    </p>
                </div>
                <div className="service-image">
                    <img src="path_to_image.jpg" alt="Architectural Design" />
                </div>
            </div>

            {/* Construction Services */}
            <div className="service-item">
                <div className="service-description">
                    <h2>Construction Services</h2>
                    <p>
                        We offer comprehensive construction services designed to bring your projects to life with precision and care. From groundwork to finishing touches, we manage every phase of construction for residential, commercial, and industrial projects. Combining technical expertise with a commitment to quality and timely delivery, we create spaces that are built to last.
                    </p>
                </div>
                <div className="service-image">
                    <img src="path_to_image.jpg" alt="Construction Services" />
                </div>
            </div>

            {/* Repeat similar structure for other services */}
            {/* Interior Design Solutions */}
            <div className="service-item">
                <div className="service-description">
                    <h2>Interior Design Solutions</h2>
                    <p>
                        We specialize in creating inspiring interior spaces that balance aesthetics and functionality. Our tailored designs enhance the character of your space, whether it’s a cozy home, a dynamic workplace, or a vibrant commercial setting. With a focus on style, comfort, and practicality, we deliver interiors that resonate with your vision and elevate everyday living.
                    </p>
                </div>
                <div className="service-image">
                    <img src="path_to_image.jpg" alt="Interior Design Solutions" />
                </div>
            </div>

            {/* Continue similarly for other services */}
        </div>
    );
};

export default Services;

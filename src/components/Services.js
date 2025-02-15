import React from 'react';
import './Services.css';
import architectual from "../images/architectural design.jpg"
import construction from "../images/construction service.webp"
import interior from "../images/interior design solution.png"
import renovation from "../images/renovation and remodeling.jpg"
import project from "../images/project management.jpg"
import threed from "../images/3D visualisation & planning.jpg"
import vastiu  from "../images/VASTU PLANNING AND CONSULTATION.png"

const Services  = () => {
    return (
        <div id="services" className="services-section">
            <h1 className="services-heading">Our Services</h1>

            {/* Architectural Design Service */}
            <div className="service-item">
                <div id="architectural-design" className="service-description">
                    <h2>Architectural Design</h2>
                    <p>
                        Our architectural design services focus on creating innovative, functional, and aesthetically pleasing spaces tailored to our clients' needs. We specialize in residential, commercial, industrial, and institutional projects, delivering bespoke designs that harmonize with the environment and meet modern standards. From concept development to detailed drawings, we ensure every project is a perfect blend of creativity and practicality.
                    </p>
                </div>
                <div className="service-image">
                    <img src={architectual} alt="Architectural Design" />
                </div>
            </div>

            {/* Construction Services */}
            <div id="construction-services"  className="service-item">

                <div className="service-image">
                    <img src={construction} alt="Construction Services" />
                </div>

                <div className="service-description">
                    <h2>Construction Services</h2>
                    <p>
                        We offer comprehensive construction services designed to bring your projects to life with precision and care. From groundwork to finishing touches, we manage every phase of construction for residential, commercial, and industrial projects. Combining technical expertise with a commitment to quality and timely delivery, we create spaces that are built to last.
                    </p>
                </div>

            </div>

                       {/* Interior Design Solutions */}
            <div id="interior-design" className="service-item">
                <div className="service-description">
                    <h2>Interior Design Solutions</h2>
                    <p>
                        We specialize in creating inspiring interior spaces that balance aesthetics and functionality. Our tailored designs enhance the character of your space, whether it’s a cozy home, a dynamic workplace, or a vibrant commercial setting. With a focus on style, comfort, and practicality, we deliver interiors that resonate with your vision and elevate everyday living.
                    </p>
                </div>
                <div className="service-image">
                    <img src={interior} alt="Interior Design Solutions" />
                </div>
            </div>

            <div className="service-item">

                <div id="renovation-remodeling" className="service-image">
                    <img src={renovation} alt="Interior Design Solutions" />
                </div>

                <div className="service-description">
                    <h2>Renovation & Remodelling</h2>
                    <p>Our renovation and remodeling services help you reimagine your space with fresh designs and enhanced functionality. Whether restoring timeless charm or introducing modern elements, we work closely with you to create a space that aligns with your vision. From concept to completion, we deliver seamless transformations with exceptional quality and attention to detail

                    </p>
                </div>
            </div>

            <div id="project-management" className="service-item">
                <div className="service-description">
                    <h2>Project Management
                    </h2>
                    <p>
                        we provide end-to-end project management, ensuring your interior architecture and construction projects run smoothly. From planning and budgeting to vendor coordination and quality control, we handle every detail to meet deadlines and stay within budget.
                        Our goal is to deliver your vision efficiently and professionally, with minimal stress.

                    </p>
                </div>
                <div className="service-image">
                    <img src={project} alt="Interior Design Solutions" />
                </div>
            </div>

            <div id="3d-visualization" className="service-item">

                <div className="service-image">
                    <img src={threed} alt="Interior Design Solutions" />
                </div>
                <div className="service-description">


                    <h2>3D visualisation & planning</h2>
                    <p>
                        we use advanced 3D visualization techniques to turn your design ideas into clear, lifelike representations. Our planning process ensures every detail is meticulously planned and optimized for both form and function, helping you make informed decisions and envision the final outcome before construction begins.

                    </p>
                </div>

            </div>

            <div id="vastu-planning" className="service-item">
                <div className="service-description">
                    <h2>Vastu Planning & Consultation</h2>
                    <p>
                        we offer expert Vastu planning and consultation to create harmonious spaces that promote positive energy flow. Our approach integrates Vastu principles with modern design to enhance well-being, balance, and prosperity. Whether you're designing a new space or renovating an existing one, we provide tailored solutions that align with Vastu guidelines to ensure a peaceful and prosperous environment.

                    </p>
                </div>
                <div className="service-image">
                    <img src={vastiu} alt="Interior Design Solutions" />
                </div>
            </div>



            <div className="divider2-container">
                <div className="divider-line"></div>
                <div className="hollow-circle"></div>
                <div className="divider-line"></div>
            </div>



        </div>
    );
};

export default Services;

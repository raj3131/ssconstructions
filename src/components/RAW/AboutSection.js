import React, { useState, useEffect, useRef } from "react";
import './AboutSection.css'; // Import your CSS file



const AboutSection = () => {

    const [tens, setTens] = useState(0); // For the tens digit
    const [units, setUnits] = useState(0); // For the units digit
    const experienceRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    animateNumber(0, 15, 700); // Animate from 0 to 15 in 2000ms (2 seconds)
                    observer.unobserve(experienceRef.current); // Stop observing after animation
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (experienceRef.current) {
            observer.observe(experienceRef.current);
        }

        return () => {
            if (experienceRef.current) {
                observer.unobserve(experienceRef.current);
            }
        };
    }, []);

    const animateNumber = (start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentNumber = Math.floor(progress * (end - start) + start);

            // Split the number into tens and units digits
            const tensDigit = Math.floor(currentNumber / 10);
            const unitsDigit = currentNumber % 10;

            // Update the state for tens and units
            setTens(tensDigit);
            setUnits(unitsDigit);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };






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



                    <div ref={experienceRef} style={{ textAlign: "center", margin: "50px 0" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontSize: "65px", fontWeight: "bold" }}>{tens}</span>
                            <span style={{ fontSize: "65px", fontWeight: "bold" }}>{units}</span>
                            <span style={{ fontSize: "60px", fontWeight: "bold", marginLeft: "4px" }}>+</span>
                        </div>
                        <span style={{ color: "#808000", fontSize: "25px", display: "block", marginTop: "8px" }}>
        years experience
      </span>
                    </div>





                    <div className="divider-container">
                        <div className="divider-line"></div>
                        <div className="hollow-circle"></div>
                        <div className="divider-line"></div>
                    </div>

                    {/* Info Container - Flexbox Layout */}
                    {/*<div className="info-container">*/}
                    {/*    /!* About Section *!/*/}
                    {/*    <div className="about-details card" >*/}
                    {/*        <h2 className="about-heading">About SS Construction & Interior Solutions</h2>*/}
                    {/*        <p className="about-text">*/}
                    {/*            At SS Construction & Interior Solutions, we are dedicated to delivering exceptional construction and interior solutions that transform spaces into personalized works of art. With over 15 years of experience in the industry, we have successfully completed hundreds of projects ranging from residential homes to large-scale commercial establishments.*/}
                    {/*        </p>*/}
                    {/*        <p className="about-text">*/}
                    {/*            Our team of skilled professionals is committed to quality craftsmanship, timely project delivery, and exceeding client expectations every step of the way.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}

                    {/*    /!* Mission Section *!/*/}
                    {/*    <div className="mission-section card">*/}
                    {/*        <h3 className="mission-heading">Mission Statement</h3>*/}
                    {/*        <p className="mission-text">*/}
                    {/*            To provide innovative and sustainable construction and interior design solutions that elevate the quality of living and working environments.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}

                    {/*    /!* Values Section *!/*/}
                    {/*    <div className="values-section card" >*/}
                    {/*        <h3 className="values-heading">Our Values</h3>*/}
                    {/*        <ul className="values-list">*/}
                    {/*            <li><strong>Integrity:</strong> We believe in honesty and transparency in all aspects of our work.</li>*/}
                    {/*            <li><strong>Quality:</strong> We never compromise on the quality of materials or workmanship.</li>*/}
                    {/*            <li><strong>Customer-Centric:</strong> Your satisfaction is our top priority.</li>*/}
                    {/*            <li><strong>Innovation:</strong> We stay ahead of trends and offer modern, cutting-edge designs.</li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}








                    <section className="aboutUsSection">
                    <h2 className="aboutUsTitle">About SS Construction & Interior Solutions</h2>
                    <p className="aboutUsDescription">
                    At SS Construction & Interior Solutions, we deliver exceptional construction and innovative interior design solutions tailored to your needs. Here’s why clients trust us:
                    </p>

                    <div className="cardsContainer">
                {/* Card 1: Expertise & Experience */}
                    <div className="card">
                        <h3 className="cardTitle">Expertise & Experience</h3>
                        <p className="cardDescription">
                            With over 15 years in the industry, our skilled team ensures every project is executed to perfection.
                        </p>
                    </div>

                    {/* Card 2: End-to-End Services */}
                    <div className="card">
                        <h3 className="cardTitle">End-to-End Services</h3>
                        <p className="cardDescription">
                            From planning and construction to interior design and finishing, we handle everything, making your experience seamless.
                        </p>
                    </div>

                    {/* Card 3: Quality & Craftsmanship */}
                    <div className="card">
                        <h3 className="cardTitle">Quality & Craftsmanship</h3>
                        <p className="cardDescription">
                            We use only the best materials and skilled craftsmanship to guarantee long-lasting, high-quality results.
                        </p>
                    </div>

                    {/* Card 4: Custom Designs */}
                    <div className="card">
                        <h3 className="cardTitle">Custom Designs</h3>
                        <p className="cardDescription">
                            We create personalized spaces that blend creativity with functionality, reflecting your vision and lifestyle.
                        </p>
                    </div>

                    {/* Card 5: On-Time, On-Budget Delivery */}
                    <div className="card">
                        <h3 className="cardTitle">On-Time, On-Budget Delivery</h3>
                        <p className="cardDescription">
                            We stay on schedule and within budget, ensuring a smooth, hassle-free experience.
                        </p>
                    </div>

                    {/* Card 6: Sustainability */}
                    <div className="card">
                        <h3 className="cardTitle">Sustainability</h3>
                        <p className="cardDescription">
                            We incorporate eco-friendly practices, using sustainable materials and energy-efficient designs.
                        </p>
                    </div>

                    {/* Card 7: Client-Centered Approach */}
                    <div className="card">
                        <h3 className="cardTitle">Client-Centered Approach</h3>
                        <p className="cardDescription">
                            Your satisfaction is our priority, and we work closely with you throughout every step of the project.
                        </p>
                    </div>
                </div>

                <p className="closingStatement">
                    Choose SS Construction & Interior Solutions to bring your vision to life with precision, creativity, and reliability.
                </p>
            </section>
























                </div>
            </div>
        </div>
    );
};

export default AboutSection;

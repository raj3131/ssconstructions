import React from 'react';
import './Testimonials.css';
import profilepic1 from '../images/profile-default.jpg'; // Import the default profile picture

const testimonials = [
    {
        name: "TRUPTI RIVONKAR",
        image: profilepic1, // Use the imported default image
        testimonial: `I had an amazing experience working with SS CONSTRUCTION & INTERIOR SOLUTIONS. They really listened to what I wanted and came up with a design that perfectly fit my needs. The Vastu consultation helped me feel confident in my choices, and their 3D visualizations made everything so easy to understand. The whole process was smooth and stress-free, and I’m thrilled with the final result!`,
        rating: 4.5 // Rating for Rivonkar
    },
    {
        name: "MR. VERLEKAR",
        image: profilepic1, // Use the imported default image
        testimonial: `The team at SS was professional, approachable, and highly detail-oriented. They managed our renovation project with such care, from planning to execution. I appreciated how they kept us informed at every stage and ensured everything was completed on time. The end result was even better than we imagined, and we get compliments on our space all the time!`,
        rating: 5 // Rating for Verlekar
    },
    {
        name: "MR. NORONHA",
        image: profilepic1, // Use the imported default image
        testimonial: `I couldn’t have asked for a better partner for our office redesign than SS CONSTRUCTION & INTERIOR SOLUTIONS. They combined functionality with aesthetics perfectly, and their planning process ensured everything was completed on time and within budget. Their expertise in project management and quality control made the entire experience stress-free. Highly professional and truly talented!`,
        rating: 5 // Rating for Noronha
    }
];

const Testimonial = () => {
    return (
        <>
            <h1 className="Testimonials-heading">Testimonials</h1>

            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <blockquote key={index} className="testimonial">
                        <div className="testimonial-image">
                            <img
                                src={testimonial.image}  // Use the default profile picture here
                                width="100"
                                height="100"
                                alt={testimonial.name}
                            />
                        </div>
                        <div className="testimonial-content">
                            <div className="testimonial-rating">
                                {[...Array(Math.round(testimonial.rating))].map((_, index) => (
                                    <svg key={index} height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z" />
                                    </svg>
                                ))}
                            </div>
                            <p>{testimonial.testimonial}</p>
                            <footer>
                                — {testimonial.name}, <cite>Client</cite>
                            </footer>
                        </div>
                    </blockquote>
                ))}
            </div>
        </>
    );
}

export default Testimonial;

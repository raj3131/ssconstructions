import React from "react";
import "./Testimonials.css"

function Testimonial() {
    // Data is now inside the Testimonial component
    const testimonials = [
        {
            name: "TRUPTI RIVONKAR",
            image: "https://via.placeholder.com/100", // Replace with an actual image URL
            testimonial: `I had an amazing experience working with SS CONSTRUCTION & INTERIOR SOLUTIONS. They really listened to what I wanted and came up with a design that perfectly fit my needs. The Vastu consultation helped me feel confident in my choices, and their 3D visualizations made everything so easy to understand. The whole process was smooth and stress-free, and I’m thrilled with the final result!`,
            rating: 4.5 // Rating for Rivonkar
        },
        {
            name: "MR. VERLEKAR",
            image: "https://via.placeholder.com/100", // Replace with an actual image URL
            testimonial: `The team at SS was professional, approachable, and highly detail-oriented. They managed our renovation project with such care, from planning to execution. I appreciated how they kept us informed at every stage and ensured everything was completed on time. The end result was even better than we imagined, and we get compliments on our space all the time!`,
            rating: 5 // Rating for Verlekar
        },
        {
            name: "MR. NORONHA",
            image: "https://via.placeholder.com/100", // Replace with an actual image URL
            testimonial: `I couldn’t have asked for a better partner for our office redesign than SS CONSTRUCTION & INTERIOR SOLUTIONS. They combined functionality with aesthetics perfectly, and their planning process ensured everything was completed on time and within budget. Their expertise in project management and quality control made the entire experience stress-free. Highly professional and truly talented!`,
            rating: 5 // Rating for Noronha
        }
    ];

    // Function to render the stars based on rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); // Full stars
        const halfStar = rating % 1 !== 0; // Half star if the rating has a decimal
        const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

        // Array of full, half, and empty stars
        const stars = [
            ...Array(fullStars).fill("★"), // Full stars
            ...(halfStar ? ["☆"] : []),    // Half star if needed
            ...Array(emptyStars).fill("☆")  // Empty stars
        ];

        return stars.map((star, index) => (
            <span key={index} className="star">
                {star}
            </span>
        ));
    };

    return (

        <>
            <h1>Testimonials</h1>

        <div className="testimonials-container">

            {testimonials.map((testimonial, index) => (
                <div className="testimonial" key={index}>
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    <h3>{testimonial.name}</h3>
                    <div className="testimonial-rating">
                        {renderStars(testimonial.rating)} {/* Display the stars */}
                    </div>
                    <p>{testimonial.testimonial}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default Testimonial;

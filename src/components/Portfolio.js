import React from 'react';
import img1 from "../images/portfolio/Untitled.png";
import img2 from "../images/portfolio/2.png";
import img3 from "../images/portfolio/3.png";
import img4 from "../images/portfolio/4.png";
import img5 from "../images/portfolio/5.png";
import img6 from "../images/portfolio/6.png";
import img7 from "../images/portfolio/7.png";
import img8 from "../images/portfolio/8.png";
import img9 from "../images/portfolio/9.png";
import img10 from "../images/portfolio/10.png";
import img11 from "../images/portfolio/11.png";
import img12 from "../images/portfolio/12.png";

const Portfolio = () => {
    // Array of image imports
    const images = [
        img1, img2, img3, img4, img5,
        img6, img7, img8, img9, img10,
        img11, img12
    ];

    return (
        <div style={styles.gallery}>
            {images.map((img, index) => (
                <div key={index} style={styles.imageContainer}>
                    <img src={img} alt={`Portfolio ${index + 1}`} style={styles.image} />
                </div>
            ))}
        </div>
    );
};

// Simple inline styles for the gallery
const styles = {
    gallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        padding: '20px',
    },
    imageContainer: {
        overflow: 'hidden',
        transition: 'transform 0.3s ease', // Animation for spacing effect
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
};

// Add hover effect to the image container
const hoverStyles = {
    imageContainerHover: {
        transform: 'scale(1.05)', // Scale effect on hover
    },
};

// Use the hover effect in the component
const ImageContainer = ({ img, index }) => {
    return (
        <div
            style={styles.imageContainer}
            onMouseEnter={(e) => e.currentTarget.style.transform = hoverStyles.imageContainerHover.transform}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <img src={img} alt={`Portfolio ${index + 1}`} style={styles.image} />
        </div>
    );
};

export default Portfolio;
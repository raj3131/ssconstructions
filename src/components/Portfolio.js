import React from 'react';
import './Portfolio.css';
import img1 from "../images/portfolio/Untitled.png";
import img2 from "../images/portfolio/2.png";
import img3 from "../images/portfolio/3.png"; // Image 3
import img4 from "../images/portfolio/4.png"; // Image 4
import img5 from "../images/portfolio/5.png"; // Image 5
import img6 from "../images/portfolio/6.png"; // Image 6
import img7 from "../images/portfolio/7.png"; // Image 7
import img8 from "../images/portfolio/8.png"; // Image 8
import img9 from "../images/portfolio/9.png"; // Image 9
import img10 from "../images/portfolio/10.png"; // Image 10
import img11 from "../images/portfolio/11.png"; // Image 11
// import img12 from "../images/portfolio/12.png";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="gallery">
                <div className="item big-item"><img src={img1} alt="Image 1" /></div>
                <div className="item"><img src={img2} alt="Image 2" /></div>
                <div className="item"><img src={img3} alt="Image 3" /></div>
                <div className="item"><img src={img4} alt="Image 4" /></div>
                <div className="item"><img src={img5} alt="Image 5" /></div>
                <div className="item big-item"><img src={img6} alt="Image 6" /></div>
                <div className="item"><img src={img7} alt="Image 7" /></div>
                <div className="item"><img src={img8} alt="Image 8" /></div>
                <div className="item"><img src={img9} alt="Image 9" /></div>
                <div className="item"><img src={img10} alt="Image 10" /></div>
                <div className="item"><img src={img11} alt="Image 11" /></div>
                {/*<div className="item big-item"><img src={img12} alt="Image 12" /></div>*/}
                {/* Add more items as needed */}
            </div>
        </div>
    );
};

export default Portfolio;

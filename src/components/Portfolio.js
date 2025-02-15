import React, { useState } from 'react';
import './Portfolio.css';
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
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="gallery">
                <div className="item big-item" onClick={() => handleImageClick(img1)}>
                    <img src={img1} alt="Image 1" />
                </div>
                <div className="item" onClick={() => handleImageClick(img2)}>
                    <img src={img2} alt="Image 2" />
                </div>
                <div className="item" onClick={() => handleImageClick(img3)}>
                    <img src={img3} alt="Image 3" />
                </div>
                <div className="item" onClick={() => handleImageClick(img4)}>
                    <img src={img4} alt="Image 4" />
                </div>
                <div className="item" onClick={() => handleImageClick(img5)}>
                    <img src={img5} alt="Image 5" />
                </div>
                <div className="item big-item" onClick={() => handleImageClick(img6)}>
                    <img src={img6} alt="Image 6" />
                </div>
                <div className="item" onClick={() => handleImageClick(img7)}>
                    <img src={img7} alt="Image 7" />
                </div>
                <div className="item" onClick={() => handleImageClick(img8)}>
                    <img src={img8} alt="Image 8" />
                </div>
                <div className="item" onClick={() => handleImageClick(img9)}>
                    <img src={img9} alt="Image 9" />
                </div>
                <div className="item" onClick={() => handleImageClick(img10)}>
                    <img src={img10} alt="Image 10" />
                </div>
                <div className="item" onClick={() => handleImageClick(img11)}>
                    <img src={img11} alt="Image 11" />
                </div>
                <div className="item" onClick={() => handleImageClick(img12)}>
                    <img src={img12} alt="Image 12" />
                </div>
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Selected" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
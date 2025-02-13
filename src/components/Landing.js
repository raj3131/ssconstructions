import React, { useEffect, useState } from "react";
import "./Landing.css";
import heroimg from "../images/hero1.png";
import heroimg2 from "../images/hero2.png";
import AboutSection from "./RAW/AboutSection";



export default function Landing() {
    const images = [heroimg, heroimg2];
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prevImage) =>
                    prevImage === images.length - 1 ? 0 : prevImage + 1
                );
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

      return (
        <>


        <div className="container">
            <div className="left-half">
                <img
                    alt="Slideshow"
                    src={images[currentImage]}
                    className={`image ${fade ? "fade-in" : "fade-out"}`}
                />
            </div>
            <div className="right-half">
                <div className="text-container">
                    <h1 className="text">Dream</h1>
                    <h1 className="shift-left">Design</h1>
                    <h1 className="subtext">Build</h1>
                </div>
            </div>

        </div>




<AboutSection/>





        </>
    );
}

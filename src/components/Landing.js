import React from "react";
import "./Landing.css";

import herovid from "../images/Pink & Blue Futuristic Gaming Channel Youtube Intro.mp4";
import herovidphn from "../images/herovidphn.mp4";  // Mobile video

export default function Landing() {
    return (
        <div id="homee" className="container">
            <div className="hero-video">
                <video
                    className="video-background desktop-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: 'cover', width: '100%', height: '100vh' }}
                >
                    <source src={herovid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <video
                    className="video-background mobile-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: 'cover', width: '100%', height: '100vh' }}
                >
                    <source src={herovidphn} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

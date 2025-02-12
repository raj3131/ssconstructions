import React, { useState } from "react";
import logo from "../images/Logo.png";
import "./CombinedHeroHeader.css";

const CombinedHeroHeader = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <nav className="appbar">
            <ul className="nav-links desktop-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>

            <img src={logo} alt="Logo" className="logo" />

            <ul className="nav-links desktop-nav">
                <li className="dropdown">
                    <a href="#services" className="dropbtn">Services</a>
                    <div className="dropdown-content">
                        <a href="#architectural-design">Architectural Design</a>
                        <a href="#construction-services">Construction Services</a>
                        <a href="#interior-design">Interior Design Solutions</a>
                        <a href="#renovation-remodeling">Renovation & Remodeling</a>
                        <a href="#project-management">Project Management</a>
                        <a href="#3d-visualization">3D Visualization & Planning</a>
                        <a href="#vastu-planning">VASTU Planning and Consultation</a>
                    </div>
                </li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={`hamburger ${drawerOpen ? "open" : ""}`} onClick={toggleDrawer}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`drawer ${drawerOpen ? "open" : ""}`}>
                <ul className="drawer-links">
                    <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
                    <li><a href="#about" onClick={toggleDrawer}>About</a></li>
                    <li><a href="#services" onClick={toggleDrawer}>Services</a></li>
                    <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default CombinedHeroHeader;

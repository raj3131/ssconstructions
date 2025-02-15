// App.js
import React from 'react';
import './App.css'; // Import the CSS file here
import Landing from './components/Landing';
import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import AboutSection from "./components/RAW/AboutSection";

const App = () => {
    return (
        <>
            <header className="appjsheadrer">
                <NavBar  />
            </header>
            <main className="appjsmain"> {/* Change <body> to <main> for better semantics */}
                <Landing />
                <AboutSection/>
                <Services />
                <Testimonials/>
                {/*<Portfolio />*/}
                <Footer />
            </main>
        </>
    );
};

export default App;

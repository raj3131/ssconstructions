// App.js
import React from 'react';
import AboutUs from './components/AboutUs';
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import CombinedHeroHeader from "./components/CombinedHeroHeader";

const App = () => {
  return (
      <div className="app">
        <CombinedHeroHeader  />
        <AboutUs />
        {/*<Services />*/}
        {/*<Portfolio />*/}
        {/*<Contact />*/}
        {/*<Footer />*/}
      </div>
  );
};

export default App;
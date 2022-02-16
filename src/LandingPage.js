import React from 'react';
import About from './Components/AboutMe/About';
import Contact from './Components/Contact/Contact';
import HomeTop from './Components/HomeTop/HomeTop';
import Work from './Components/Work/Work';
import './LandingPage.css';


function LandingPage() {
    return (
        <div className="landingpage">
            <HomeTop />
            <About />
            <Work />

        </div>
    )
}

export default LandingPage

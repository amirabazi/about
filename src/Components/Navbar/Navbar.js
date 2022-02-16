import React, { useState, useEffect } from 'react';
import './Navbar.css';


function Navbar() {

    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div className={navbar ? "navbar active" : "navbar"}>
            <h4 className="navbar__main">ABAZIamir</h4>
            <div className="navbar__right">
                <div className="tabs">
                    <span className="tabs__num">01</span>
                    <a href="#homediv" className={navbar ? "tabs_main col" : "tabs__main"}>Home</a>
                </div>
                <div className="tabs">
                    <span className="tabs__num">02</span>
                    <a href="#aboutdiv" className={navbar ? "tabs_main col" : "tabs__main"}>About</a>
                </div>
                <div className="tabs">
                    <span className="tabs__num">03</span>
                    <a href="#workdiv" className={navbar ? "tabs_main col" : "tabs__main"}>My Work</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

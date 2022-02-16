import React from 'react';
import './About.css';
import { FiMail } from "react-icons/fi";

function About() {
    return (
        <div id="aboutdiv" className="about">
            <div className="about__main">
                <h4 className="main__title">About me</h4>
                <div className="about__wrapper">
                    <p className="main__about">Web developer working with React and Node, willing to work with other technologies and learn new things. </p>
                    <p className="main__about">Currently living in Sarajevo, Bosnia.</p>
                    <p className="main__about"><FiMail className="gmail" />abaziamirr@gmail.com</p>
                </div>
                <div className="about__imgwrap">
                    <img className="img" src={process.env.PUBLIC_URL + '/itsMe.jpg'} alt="" />
                </div>
            </div>
        </div >
    )
}

export default About

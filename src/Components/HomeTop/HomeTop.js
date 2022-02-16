import React from 'react'
import './HomeTop.css';

function HomeTop() {
    return (
        <div id="homediv" className="hometop">
            <div className="hometop__wrapper">
                <div className="wrapper__text">
                    <h3 className="text_first">Hello I'm Amir Abazi</h3>
                    <h1 className="text_scnd">Web Developer</h1>
                    <div className="text__links">
                        <a href="https://github.com/amirabazi" className="link">Github Profile</a>
                        <a href="https://www.linkedin.com/in/amir-abazi-2882921b3/" className="link">Linkedin</a>
                        <a href="https://drive.google.com/file/d/1zhkGCTqZ-dynKDfCMm6-1vgtYdV2E-eD/view?usp=sharing" className="link">Resume</a>
                    </div>
                </div>
            </div>
            <div className="wrapper__img">
                <img src={process.env.PUBLIC_URL + '/emoji.png'} alt="" className="img" />
            </div>
            <div className="scroll">
                <div className="scroll__per">
                    <div></div>
                </div>
                <p className="scroll__text">Scroll for more content</p>
            </div>
        </div >
    )
}

export default HomeTop

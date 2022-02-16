import React from 'react';
import './Work.css';
import { workData } from './Workdata';
import { FiLink2 } from "react-icons/fi";

function Work() {

    return (
        <div id="workdiv" className="work">
            <div className="work__main">
                <h4 className="work__title">My Work</h4>
                <div className="work__wrapper">
                    {workData.map((data) => {
                        return (
                            <div className="work__single">
                                <div className="single__wrapper">
                                    <img src={data.img} alt="" className="img" />
                                </div>
                                <div className="single__about">
                                    <div className="link">
                                        <h3 className="about__title">{data.title}</h3>

                                        <a href={data.gitlink} className="href"><FiLink2 className="linkicon" /></a>
                                    </div>
                                    <p className="about__about">{data.about}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Work

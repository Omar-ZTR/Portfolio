import React, { useEffect, useState } from 'react'
import './backend.css'
import html from "../../asset/html.png";

const Backend = () => {
    const [isTransition, setTransition] = useState(false);

    const handleskilClick = () => {
        setTransition(!isTransition);
    };
//     console.log("wwwwww", window.pageYOffset);
//     var __Y = window.pageYOffset;
//     const h = skillsGroup.clientHeight
//     setTimeout(function() {
//       window.scrollTo(0, __Y - h );
//   }, 1000);
//     console.log("hhhhhswwww",h)
    return (
        <div >
            <ul className={`skil-stacks ${isTransition ? 'transition' : ''}`} onClick={handleskilClick}>
                {/* <li classNameName="title">
                    <h2>Expand to grid</h2>
                </li> */}
                <li className="stack stack-1">
                    <ul className="skils-down">
                        <li className="skil skil-1">
                            <div className="content">
                                <img src={html} alt="hhh" />
                                <div className="line"></div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </li>
                        <li className="skil skil-2">
                            <div className="content">
                                <img src={html} alt="hhh" />
                                <div className="line"></div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </li>
                        <li className="skil skil-3">
                            <div className="content">
                                <img src={html} alt="hhh" />
                                <div className="line"></div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="stack stack-2">
                    <ul className="skils-down">
                        <li className="skil skil-1">
                            <div className="content">
                                <img src={html} alt="hhh" />
                                <div className="line"></div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </li>
                        <li className="skil skil-2">
                            <div className="content">
                                <img src={html} alt="hhh" />
                                <div className="line"></div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </li>
                        <li className="skil skil-3">
                            <div className="content">
                                <img src={html} alt="hhh" />
                                <div className="line"></div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="stack stack-3">
                    <ul className="skils-down">
                        <li className="skil  skil-1 ">
                            <div className='skills__data'>
                                <div className="content ">
                                    <img src={html} alt="hhh" />
                                    <div className="line"></div>
                                    <h3 className="skills__name">HTML</h3>
                                </div>
                            </div>
                        </li>
                        <li className="skil skil-2">
                            <div className="content">
                                <img src={html} alt="hhh" />
                                <div className="line"></div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </li>
                        <li className="skil skil-3">
                            <div className="content">
                                <img src={html} alt="hhh" />
                                <div className="line"></div>
                                <h3 className="skills__name">HTML</h3>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <hr />
        </div>
    )
}

export default Backend
import React from 'react'
import "./profile.css";
import av from "../../asset/omr.jpg";

function CardProfile() {
    // window.addEventListener("scroll", function () {
    //     const gri = document.querySelector("#card");
    //     // when the scroll is higher than 560 viewport height, add the show-scroll 
    //     // class to a tag with the scroll-top class
    //     if (this.scrollY <= 760) gri.style.display = 'none';
    //     else gri.style.display = 'block';

    // });
    return (
        <div className='profi'>


            <div id='card' className='profily'>
                <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg"  >
                    <defs>
                        {/* <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/> */}
                        <filter id="flt_tag">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                           
                    
                             <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />

                        </filter>
                    </defs>
                </svg>
                <div className="dsa"></div>
                <div className="avatar-holder">
                    <img src={av} alt="Albert Einstein" />
                </div>
                <div className="name">
                    Zouiter Omar

                </div>
                <div className="ds-info">
                    <div className="ds pens">
                        <h6 title="Number of pens created by the user">Pens <i className="fas fa-edit"></i></h6>
                        <p>29</p>
                    </div>
                    <div className="ds projects">
                        <h6 title="Number of projects created by the user">Projects <i className="fas fa-project-diagram"></i></h6>
                        <p>0</p>
                    </div>
                    <div className="ds posts">
                        <h6 title="Number of posts">Posts <i className="fas fa-comments"></i></h6>
                        <p>0</p>
                    </div>
                </div>
                <div className="ds-skill">
                    <h6>Skill <i className="fa fa-code" aria-hidden="true"></i></h6>
                    <div className="skill html">
                        <h6><i className="fab fa-html5"></i> HTML5 </h6>
                        <div className="bar bar-html">
                            <p>95%</p>
                        </div>
                    </div>
                    <div className="skill css">
                        <h6><i className="fab fa-css3-alt"></i> CSS3 </h6>
                        <div className="bar bar-css">
                            <p>90%</p>
                        </div>
                    </div>
                    <div className="skill javascript">
                        <h6><i className="fab fa-js"></i> JavaScript </h6>
                        <div className="bar bar-js">
                            <p>75%</p>
                        </div>
                    </div>
                </div>
                {/* <div className="button">
                <a href="#" className="btn" onmousedown="follow();">Follow <i className="fas fa-user-plus"></i></a>
            </div>
          
            */}



            </div>
        </div>
    )
}

export default CardProfile
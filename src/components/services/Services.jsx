import React from "react";
import { useState } from "react";
import "./service.css";
import mongo from "../../asset/mongo.png";
import js from "../../asset/js.png";
import jequery from "../../asset/jequery.png";
import word from "../../asset/word.png";
import fire from "../../asset/fire.png";
import uml from "../../asset/uml.png";
import git from "../../asset/git.png";
import wweb from "../../asset/wweb.png";
import wireframe from "../../asset/wireframe_3950767.png";
import mobil from "../../asset/mobil.png";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    
      <section  id="services" className='boxWithBAck'>
      <div className="container " >
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        <p style={{    color: "#4d4d4d",
    marginbottom:" 0.5rem"}}>
          As a Full Stack Web and Mobile Developer and UI/UX Designer, I
          specialize in building responsive, flexible, and high-performance
          websites and applications with a strong focus on UI/UX design.
          Leveraging a diverse skill set, I deliver solutions that not only meet
          design and functionality requirements but also provide exceptional
          user experiences.
        </p>

        <div className="services__container container grid">
          <div className="services__content">
            <div>
              {/* <i className="uil uil-web-grid services__icon"></i> */}
              <img style={{ height: "100px" }} src={wweb} alt="hhh" />
              <h3 className="services__title">Web App Development</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active__modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times  services__modal-close"
                ></i>

                <h3 className="services__modal-title">Web App Development</h3>

                <p className="services__modal-description">
                  Service with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>

                {/* <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">I develop the user interface.</p>                                   

                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Web page development.</p>                                   

                                    </li>

                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">I create ux element interactions.</p>                                   

                                    </li>

                                    
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">I position your company brand.</p>                                   

                                    </li>


                                    
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p className="services__modal-info">Design and mockups of products for companies.</p>                                   

                                    </li>


                                </ul> */}

                <div className="grid-wrapper">
                  <div>
                    <img src={git} alt="" />
                  </div>
                  <div>
                    <img src={jequery} alt="" />
                  </div>
                  <div>
                    <img src={js} alt="" />
                  </div>
                  <div>
                    <img src={mongo} alt="" />
                  </div>
                  <div>
                    <img src={uml} alt="" />
                  </div>
                  <div>
                    <img src={fire} alt="" />
                  </div>
                  <div>
                    <img src={word} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              {/* <i className="uil uil-arrow services__icon"></i> */}
              <img style={{ height: "100px" }} src={wireframe} alt="hhh" />
              <h3 className="services__title">
                Ui/Ux <br /> Designer
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active__modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times  services__modal-close"
                ></i>

                <h3 className="services__modal-title">Ui/Ux Designer</h3>

                <p className="services__modal-description">
                  Service with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              {/* <i className="uil uil-edit services__icon"></i> */}
              <img style={{ height: "100px" }} src={mobil} alt="hhh" />
              <h3 className="services__title">Mobile App Development</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "services__modal active__modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times  services__modal-close"
                ></i>

                <h3 className="services__modal-title">Visual Designer</h3>

                <p className="services__modal-description">
                  Service with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page development.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     
    </div> </section>
  );
};

export default Services;

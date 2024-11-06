import React from "react";
import { useState } from "react";
import "./qualification.css";
import Education from "./Education";
import Experience from "./Experience";
const Qualification = ({translations}) => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="boxWithBAck  "  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  >
      <section id="resume">
        <h2 className="section__title">{translations.title}</h2>
        <span className="section__subtitle">{translations.subTitle}</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <button
              className={
                toggleState === 2
                  ? "qualification__btn btn__active"
                  : "qualification__btn"
              }
              onClick={() => toggleTab(2)}
            >
              {" "}
              <i
                className="uil uil-briefcase-alt
                      qualification__icon"
              ></i>
            {translations.textBtnEx}
            </button>
            <button
              className={
                toggleState === 1
                  ? "qualification__btn btn__active"
                  : "qualification__btn"
              }
              onClick={() => toggleTab(1)}
            >
              <i
                className="uil uil-graduation-cap
                  qualification__icon"
              ></i>
            {translations.textBtnEd}
            </button>
          </div>
          <div className="qualification__sections">
            {toggleState === 1 && <Education transedu= {translations.education} />}
            {toggleState === 2 && <Experience transexp= {translations.experience} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualification;

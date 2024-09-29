import React from "react";
import { useState } from "react";
import "./qualification.css";
import Education from "./Education";
import Experience from "./Experience";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (<div className="boxWithBAck  " >
    <section   id="portfolio">
      <h2 className="section__title">Resume</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">

        <div className="qualification__sections">
       
        <Experience />
          <Education />
          
        
        </div>
      </div>
    </section>
  </div>
  );
};

export default Qualification;

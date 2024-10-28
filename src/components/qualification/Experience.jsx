import React from "react";

function Experience() {
  return (
    <div>
      {" "}
      <div className="qualification__content qualification__content-active">
      

        {/* ----------------------------------------------------------------------- */}

        <div className="qualification__data">
          <div>
            <span className="qualification__rounder" data-aos="zoom-in"
      data-aos-delay="100"></span>

            <span className="qualification__line"></span>
          </div>
          <div className="qulafiFlex">
           <div className="date-col"  data-aos="fade-right"
      data-aos-delay="150">
            <h4>SmartSkills </h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              March to July 2024
            </div>
          </div>

          <div className="qualification-info"  data-aos="fade-right"
      data-aos-delay="300">
            <h3 className="qualification__title"> End-of-Study Internship </h3>
            <span className="qualification__subtitle">
              <ul className="listExp">
                <li>
                  Design and development of a web application for exam
                  management.
                </li>
                <li>Technologies: Angular, NodeJs, MySQL, Figma.</li>
              </ul>
            </span>
          </div>  
            </div>
         
        </div>

        <div className="qualification__data"> 
             <div>
            <span className="qualification__rounder" data-aos="zoom-in"
      data-aos-delay="400"></span>

            <span className="qualification__line"></span>
          </div>
          <div className="qulafiFlex">
             <div className="date-col"  data-aos="fade-right"
      data-aos-delay="450">
            <h4>Wind Consulting tunis</h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              July 2023
            </div>
          </div>
      
          <div className="qualification-info"  data-aos="fade-right"
      data-aos-delay="600">
            <h3 className="qualification__title"> Summer Internship </h3>
            <span className="qualification__subtitle">
              <ul className="listExp">
                <li>
                  Develop a module to optimize the performance of API call
                  systems.
                </li>
                <li>Technologies: NodeJs, MySQL.</li>
              </ul>
            </span>
          </div>
            </div>
         
        </div>
        <div className="qualification__data">
        <div>
            <span className="qualification__rounder" data-aos="zoom-in"
      data-aos-delay="700" ></span>

            <span className="qualification__line"></span>
          </div>
          <div className="qulafiFlex">
            <div className="date-col"  data-aos="fade-right"
      data-aos-delay="750" >
            <h4>G-Dev sousse</h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              February to June 2021
            </div>
          </div>
          
          <div className="qualification-info"  data-aos="fade-right"
      data-aos-delay="900" >
            <h3 className="qualification__title"> End-of-Study Internship </h3>
            <span className="qualification__subtitle">
              <ul className="listExp">
                <li>
                  Creation of a web application dedicated to job postings.
                </li>
                <li>Technologies: Reactjs, MongoDB, NodeJs, Figma.</li>
              </ul>
            </span>
          </div> 
            </div>
         
        </div>

        {/* ----------------------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default Experience;

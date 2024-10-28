import React from "react";

function Education() {
  return (
    <div>
     
      <div className="qualification__content qualification__content-active">
        {/* ----------------------------------------------------------------------- */}

        <div className="qualification__data">
          <div>
            <span className="qualification__rounder" data-aos="zoom-in"
      data-aos-delay="100"></span>

            <span className="qualification__line"></span>
          </div>
          <div className="qulafiFlex">
             <div className="date-col" data-aos="fade-right"
      data-aos-delay="150">
            <h4>EPI-Digital School Sousse</h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              2021 - Present
            </div>
          </div>
          <div className="qualification-info" data-aos="fade-right"
      data-aos-delay="300">
            <h3 className="qualification__title">
              National Engineering Diploma
            </h3>
            <span className="qualification__subtitle">
              Software engineering
            </span>
          </div>
          </div>
         


        </div>

        <div className="qualification__data">
          <div>
            <span className="qualification__rounder" data-aos="zoom-in"
      data-aos-delay="350"></span>

            <span className="qualification__line"></span>
          </div>
          <div className="qulafiFlex">
            <div className="date-col" data-aos="fade-right"
      data-aos-delay="450">
            <h4>
              Higher Institute of Applied Sciences and Technologies of Sousse
            </h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              2017 - 2021
            </div>
          </div>
          <div className="qualification-info" data-aos="fade-right"
      data-aos-delay="600">
            <h3 className="qualification__title">
              National Diploma of Applied License
            </h3>
            <span className="qualification__subtitle">
              Industrial Computing
            </span>
          </div>
            </div>
          
        </div>

        <div className="qualification__data">
          <div>
            <span className="qualification__rounder" data-aos="zoom-in"
      data-aos-delay="650"></span>

            <span className="qualification__line"></span>
          </div>
          <div className="qulafiFlex">
             <div className="date-col" data-aos="fade-right"
      data-aos-delay="750">
            <h4>High school Bekalta</h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              2017
            </div>
          </div>

          <div className="qualification-info" data-aos="fade-right"
      data-aos-delay="900">
            <h3 className="qualification__title"> Bachelor </h3>
            <span className="qualification__subtitle">Computer Science</span>
          </div> 
            </div>
        
        </div>
        {/* ----------------------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default Education;

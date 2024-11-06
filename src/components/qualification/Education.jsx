import React from "react";

function Education({transedu}) {
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
            <h4>{transedu.edu1.local}</h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              {transedu.edu1.date}
            </div>
          </div>
          <div className="qualification-info" data-aos="fade-right"
      data-aos-delay="300">
            <h3 className="qualification__title">
            {transedu.edu1.title}
            </h3>
            <span className="qualification__subtitle">
            {transedu.edu1.subTitle}
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
            {transedu.edu2.local}  </h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              {transedu.edu2.date}
            </div>
          </div>
          <div className="qualification-info" data-aos="fade-right"
      data-aos-delay="600">
            <h3 className="qualification__title">
            {transedu.edu2.title}
            </h3>
            <span className="qualification__subtitle">
            {transedu.edu2.subTitle}
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
            <h4>{transedu.edu3.local}</h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              {transedu.edu3.date}
            </div>
          </div>

          <div className="qualification-info" data-aos="fade-right"
      data-aos-delay="900">
            <h3 className="qualification__title"> {transedu.edu3.title} </h3>
            <span className="qualification__subtitle">{transedu.edu3.subTitle}</span>
          </div> 
            </div>
        
        </div>
        {/* ----------------------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default Education;

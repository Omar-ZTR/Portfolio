import React from "react";

function Experience({transexp}) {
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
            <h4>{transexp.exp1.local} </h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              {transexp.exp1.date}
            </div>
          </div>

          <div className="qualification-info"  data-aos="fade-right"
      data-aos-delay="300">
            <h3 className="qualification__title"> {transexp.exp1.title} </h3>
            <span className="qualification__subtitle">
              <ul className="listExp">
                <li>
                {transexp.exp1.mission}
                </li>
                <li>{transexp.exp1.tech}</li>
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
            <h4>{transexp.exp2.local}</h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              {transexp.exp2.date}
            </div>
          </div>
      
          <div className="qualification-info"  data-aos="fade-right"
      data-aos-delay="600">
            <h3 className="qualification__title"> {transexp.exp2.title}</h3>
            <span className="qualification__subtitle">
              <ul className="listExp">
                <li>
                {transexp.exp2.mission}
                </li>
                <li>{transexp.exp2.tech}</li>
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
            <h4>{transexp.exp3.local}</h4>
            <div className="qualification__calender">
              {/* <i className="uil uil-calendar-alt"></i> */}
              {transexp.exp3.date}
            </div>
          </div>
          
          <div className="qualification-info"  data-aos="fade-right"
      data-aos-delay="900" >
            <h3 className="qualification__title"> {transexp.exp3.title} </h3>
            <span className="qualification__subtitle">
              <ul className="listExp">
                <li>
                {transexp.exp3.mission}
                </li>
                <li>{transexp.exp3.tech}</li>
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

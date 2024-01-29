import React from "react";
import { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i
              className="uil uil-graduation-cap
                          qualification__icon"
            ></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i
              className="uil uil-briefcase-alt
                          qualification__icon"
            ></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Baccalaureate </h3>
                <span className="qualification__subtitle">
                  Computer Science
                </span>
                <span className="qualification__subtitle">
                  {" "}
                  High school Bekalta
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> Diploma</h3>
                <span className="qualification__subtitle">
                  Applied degree in industrial computing
                </span>
                <span className="qualification__subtitle">
                  Higher Institute of Applied Sciences and Technologies of
                  Sousse
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software engineering</h3>
                <span className="qualification__subtitle">
                  EPI-Digital School Sousse
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> internship </h3>
                <span className="qualification__subtitle">web developer(backend)</span>
                <span className="qualification__subtitle">Wind Consulting tunis</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  July 2023
                                  </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> End of study project </h3>
                <span className="qualification__subtitle">
                 
                  web developer
                </span>
                <span className="qualification__subtitle">G-Dev sousse</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  February to June 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              

              <div>
                <h3 className="qualification__title">
                   internship
                </h3>
                <span className="qualification__subtitle">web developer(frontend)</span>
                <span className="qualification__subtitle">G-Dev sousse</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  July 2019                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

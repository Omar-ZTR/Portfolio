import React from "react";

import "./service.css";

import wweb from "../../asset/webdev.png";
import wireframe from "../../asset/UiUxicon.png";
import mobil from "../../asset/mobidev.png";

import wweb2 from "../../asset/webdevW.png";
import wireframe2 from "../../asset/UiUxiconW.png";
import mobil2 from "../../asset/mobidevW.png";

const Services = ({ darkMode,translations }) => {
  return (
    <section
      id="services"
      className="boxWithBAck"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container ">
        <h2 className="section__title">{translations.title}</h2>
        <span className="section__subtitle">{translations.subTitle}</span>
        <p style={{ marginbottom: " 0.5rem" }}>
        {translations.text}
        </p>

        <div className="services__container container grid">
          <div className="services__content">
            <div className="services__item">
              <img
                style={{ height: "4rem" }}
                src={darkMode ? wweb2 : wweb}
                alt="hhh"
              />
              <h3 className="services__title">  {translations.servWeb}</h3>
            </div>
          </div>

          <div className="services__content">
            <div className="services__item">
              <img
                style={{ height: "4rem" }}
                src={darkMode ? wireframe2 : wireframe}
                alt="hhh"
              />
              <h3 className="services__title">  {translations.servDes}</h3>
            </div>
          </div>

          <div className="services__content">
            <div className="services__item">
              <img
                style={{ height: "4rem" }}
                src={darkMode ? mobil2 : mobil}
                alt="hhh"
              />
              <h3 className="services__title">  {translations.servMob}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

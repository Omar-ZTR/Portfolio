import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./project.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import weMO from "../../asset/wwe.png";
import smartSkillsMo from "../../asset/SsProject.png";
import showorkMo from "../../asset/showWork.png";
import apiVetrina from "../../asset/backVetrian.png";
import GAG from "../../asset/giveAndget.png";

function Project({translations}) {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <section id="portfolio" className="boxWithBAck">
        <div className="container ">
          <h2 className="section__title">{translations.title}</h2>
          <span className="section__subtitle">
          {translations.subTitle}
          </span>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <div className="descProject displayNN">
                <h2 className="project__title">{translations.pro1.title}</h2>
                <p className="project__subtitle">
                {translations.pro1.text}
                </p>
                <div className="techOutils">
                  <span className="itemTech"> {translations.pro1.tech1}</span>
                  <span className="itemTech"> {translations.pro1.tech2}</span>
                  <span className="itemTech"> {translations.pro1.tech3}</span>
                  <span className="itemTech"> {translations.pro1.tech4}</span>
                  <span className="itemTech"> {translations.pro1.tech5}</span>
                </div>
              </div>
              <div className="cardProject">
                <img src={smartSkillsMo} alt="slide_image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="descProject displayNN">
                <h2 className="project__title">{translations.pro2.title}</h2>
                <p className="project__subtitle">
                {translations.pro2.text}
                </p>
                <div className="techOutils">
                  <span className="itemTech"> {translations.pro2.tech1}</span>
                  <span className="itemTech"> {translations.pro2.tech2}</span>
                  <span className="itemTech"> {translations.pro2.tech3}</span>
                  <span className="itemTech"> {translations.pro2.tech4}</span>
                </div>
              </div>
              <div className="cardProject">
                <img src={showorkMo} alt="slide_image" />
                
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="descProject displayNN">
                <h2 className="project__title">{translations.pro3.title}</h2>
                <p className="project__subtitle">
                {translations.pro3.text}
                </p>
                <div className="techOutils">
                  <span className="itemTech"> {translations.pro3.tech1}</span>
                  
                </div>
              </div>
              <div className="cardProject">
                <img src={weMO} alt="slide_image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="descProject displayNN">
                <h2 className="project__title">{translations.pro4.title}</h2>
                <p className="project__subtitle">
                {translations.pro4.text}
                </p>
                <div className="techOutils">
                  <span className="itemTech"> {translations.pro4.tech1}</span>
                  <span className="itemTech"> {translations.pro4.tech2}</span>

                  <span className="itemTech"> {translations.pro4.tech3}</span>
                  <span className="itemTech"> {translations.pro4.tech4}</span>
                </div>
              </div>
              <div className="cardProject">
                <img src={GAG} alt="slide_image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="descProject displayNN">
                <h2 className="project__title">{translations.pro5.title}</h2>
                <p className="project__subtitle">
                {translations.pro5.text}
                </p>
                <div className="techOutils">
                  <span className="itemTech"> {translations.pro5.tech1}</span>
                  <span className="itemTech"> {translations.pro5.tech2}</span>
                  <span className="itemTech"> {translations.pro5.tech3}</span>
                  <span className="itemTech"> {translations.pro5.tech4}</span>
                </div>
              </div>
              <div className="cardProject">
                <img src={apiVetrina} alt="slide_image" />
              </div>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Project;

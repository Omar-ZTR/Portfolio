import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./project.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../asset/wwe.png";
import slide_image_2 from "../../asset/SsProject.png";
import slide_image_3 from "../../asset/showWork.png";
import slide_image_4 from "../../asset/backVetrian.png";

function Project() {
  return (
    <div  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >

      <section id="portfolio" className="boxWithBAck">
        <div className="container ">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">I am glad to share with you some of my Projects</span>
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
                <h2 className="project__title">Work Show</h2>
                <p className="project__subtitle">
                  A web application dedicated to showcasing professional
                  opportunities and employee portfolios. It provides an
                  intuitive platform for easily presenting skills and
                  achievements while streamlining the search for suitable career
                  opportunities.
                </p>
                <div className="techOutils">
                  <span className="itemTech">Angular</span>
                  <span className="itemTech">NodeJs</span>
                  <span className="itemTech">MongoDB</span>
                  <span className="itemTech">Figma</span>
                </div>
              </div>
              <div className="cardProject">
                <img src={slide_image_3} alt="slide_image" />
                {/* <div className="info">
                  <h1> Mountain</h1>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text from the printing and
                    typeseting industry
                  </p>
                  <button>Read More </button>
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="descProject displayNN">
                <h2 className="project__title">SmartExam</h2>
                <p className="project__subtitle">
                  This web application simplifies school and exam management,
                  offering efficient exam scheduling, grade consultation, and
                  streamlined coordination between teachers and students. It
                  enhances productivity and improves communication within
                  educational institutions.
                </p>
                <div className="techOutils">
                  <span className="itemTech">Angular</span>
                  <span className="itemTech">NodeJs</span>
                  <span className="itemTech">TypeScript</span>
                  <span className="itemTech">MySQL</span>
                  <span className="itemTech">Figma</span>
                </div>
              </div>
              <div className="cardProject">
                <img src={slide_image_2} alt="slide_image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="descProject displayNN">
                <h2 className="project__title">We</h2>
                <p className="project__subtitle">
                  This mobile carpooling app design in Figma focuses on
                  user-friendly navigation and a seamless ride-sharing
                  experience. It offers intuitive layouts for finding or
                  offering rides, trip details, and communication. Key features
                  include trip scheduling, real-time tracking, and user ratings,
                  all designed for simplicity and efficiency.
                </p>
                <div className="techOutils">
                  <span className="itemTech">Angular</span>
                  <span className="itemTech">NodeJs</span>
                  <span className="itemTech">MongoDB</span>
                  <span className="itemTech">Figma</span>
                </div>
              </div>
              <div className="cardProject">
                <img src={slide_image_1} alt="slide_image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="descProject displayNN">
                <h2 className="project__title">API Optimization Module</h2>
                <p className="project__subtitle">
                  A task to develop a module aimed at optimizing API call system
                  performance by enhancing response times, reducing latency, and
                  improving efficiency. The objective is to ensure faster, more
                  reliable data retrieval and boost scalability under
                  high-demand conditions
                </p>
                <div className="techOutils">
                  <span className="itemTech">Angular</span>
                  <span className="itemTech">NodeJs</span>
                  <span className="itemTech">MongoDB</span>
                  <span className="itemTech">Figma</span>
                </div>
              </div>
              <div className="cardProject">
                <img src={slide_image_4} alt="slide_image" />
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

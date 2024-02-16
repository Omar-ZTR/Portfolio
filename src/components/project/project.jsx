import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./project.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../asset/omr.jpg';
import slide_image_2 from '../../asset/omr.jpg';
import slide_image_3 from '../../asset/omr.jpg';
import slide_image_4 from '../../asset/omr.jpg';
import slide_image_5 from '../../asset/omr.jpg';
import slide_image_6 from '../../asset/omr.jpg';
import slide_image_7 from '../../asset/omr.jpg';

function Project() {
  return (<div>
    <div className='diag'></div>
    <div className='boxstyl'>
      <div className="container " >
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>

            <div className='card'>
              <img src={slide_image_2} alt="slide_image" />
              <div className='info'>
                <h1> Mountain</h1>
                <p> Lorem Ipsum is simply dummy text from the printing and typeseting industry
                </p>
                <button>Read More </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <img src={slide_image_3} alt="slide_image" />
            <div className='cardH'>
              <h3>project1</h3>
              <p>lorem ipsum fncb cchdhcb hbchbec hbcheb chbc </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
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
    </div>
  </div>
  );
}

export default Project;
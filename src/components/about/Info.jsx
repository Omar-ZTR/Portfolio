import React from 'react'

const Info = ({trans}) => {
  return (
    <div className="about__info grid">
      <div className="about__box" data-aos="fade-up"
      data-aos-delay="100">
        <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">{trans.info1Title}</h3>
        <span className="about__subtitle">{trans.info1Subitle}</span>
      </div>


      <div className="about__box" data-aos="fade-up"
      data-aos-delay="200">
        <i class='bx bxs-id-card about__icon'></i>

        <h3 className="about__title">{trans.info2Title}</h3>
        <span className="about__subtitle">{trans.info2Subitle}</span>
      </div>

      <div className="about__box" data-aos="fade-up"
      data-aos-delay="300">
        <i class='bx bx-briefcase-alt about__icon' ></i>

        <h3 className="about__title">{trans.info3Title}</h3>
        <span className="about__subtitle">{trans.info3Subitle}</span>
      </div>

    </div>
  )
}

export default Info
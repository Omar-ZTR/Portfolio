import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box" data-aos="fade-up"
      data-aos-delay="100">
        <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Software Engineering</h3>
        <span className="about__subtitle">full-stack web developer</span>
      </div>


      <div className="about__box" data-aos="fade-up"
      data-aos-delay="200">
        <i class='bx bxs-id-card about__icon'></i>

        <h3 className="about__title">Tunisian</h3>
        <span className="about__subtitle">Tunis Monastir-Bekalta</span>
      </div>

      <div className="about__box" data-aos="fade-up"
      data-aos-delay="300">
        <i class='bx bx-briefcase-alt about__icon' ></i>

        <h3 className="about__title">Freelancer</h3>
        <span className="about__subtitle">7 + Projects</span>
      </div>

    </div>
  )
}

export default Info
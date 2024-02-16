import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Student</h3>
        <span className="about__subtitle">software engineering</span>
      </div>


      <div className="about__box">
        <i class='bx bxs-id-card about__icon'></i>

        <h3 className="about__title">Tunisian</h3>
        <span className="about__subtitle">Tunis Monastir-Bekalta</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon' ></i>

        <h3 className="about__title">Work</h3>
        <span className="about__subtitle">7 + Projects</span>
      </div>

    </div>
  )
}

export default Info
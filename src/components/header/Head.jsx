import React from 'react'
import { useState, useEffect  } from 'react';
import "./Had.css";
const Head = ({ translations }) => {


  window.addEventListener("scroll", function () {
    const header = document.querySelector(".ha");
   
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  })

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");


  
  useEffect(() => {

    const sections = document.querySelectorAll("section[id]");
    const options = {
      root: null,
      threshold: 0.3, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="ha">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          OMR
        </a>

        <div className={Toggle ? "nav__menu show-menu" :
          "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav('#home')}
                className={activeNav === "#home" ?
                  "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>
                { translations.home }
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav('#about')}
                className={activeNav === "#about" ?
                  "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>{ translations.about }
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" onClick={() => setActiveNav('#resume')}
                className={activeNav === "#resume" ?
                  "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>{ translations.resume}
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav('#skills')}
                className={activeNav === "#skills" ?
                  "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i>{ translations.skills }
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" onClick={() => setActiveNav('#services')}
                className={activeNav === "#services" ?
                  "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>{ translations.services }
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
                className={activeNav === "#portfolio" ?
                  "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i>
                { translations.portfolio }
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav('#contact')}
                className={activeNav === "#contact" ?
                  "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i>{ translations.contact }
              </a>
            </li>
          </ul>

          <i class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle"
          onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Head
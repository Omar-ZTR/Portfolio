import React, { useEffect, useState } from "react";
import "./skills.css";
// import Frontend from "./Frontend";
import angular from "../../asset/angular.png";
import node from "../../asset/node.png";
import figma from "../../asset/figma.png";
import react from "../../asset/react.png";
import js from "../../asset/js.png";
import flutter from "../../asset/flutter.png";
import Ts from "../../asset/TS.png";


import html from "../../asset/html.png";
import css from "../../asset/css.png";
import bootstr from "../../asset/bootstr.png";

import andstudio from "../../asset/andstudio.png";
import java from "../../asset/java.png";
import php from "../../asset/php.png";
import ppt from "../../asset/ppt.png";
import Sqllite from "../../asset/Sqllite.png";

import mysql from "../../asset/mysql.png";
import mongo from "../../asset/mongo.png";

import jequery from "../../asset/jequery.png";
import word from "../../asset/word.png";
import fire from "../../asset/fire.png";
import uml from "../../asset/uml.png";
import git from "../../asset/git.png";
import reactHover from "../../asset/reactHover.png";
import mysqlHover from "../../asset/mysqlHover.png";

import angularHover from "../../asset/angularHover.png";

import cssHover from "../../asset/cssHover.png";
import jsHover from "../../asset/javascriptHover.png";

const Skills = ({translations}) => {
  
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isTop, setTop] = useState(true);

  const handleToggleSkills = () => {
    setShowAllSkills(!showAllSkills);
    setTop((prevIsTop) => !prevIsTop);
  };

  useEffect(() => {
    // Select all elements with the 'skills__more' class
    const skillMoreElements = document.querySelectorAll('.skills__more');
    
    // Apply styles and attributes when toggling visibility
    if (showAllSkills) {
      skillMoreElements.forEach((item, index) => {
        item.style.display = 'flex';
        item.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`;
        item.setAttribute('data-aos', 'fade-up');
        item.setAttribute('data-aos-delay', index * 150);
      });
    } else {
      skillMoreElements.forEach((item) => {
        item.style.display = 'none';
        item.removeAttribute('data-aos');
        item.removeAttribute('data-aos-delay');
      });
    }
  }, [showAllSkills]);

  // Intersection Observer to detect when the #skills section is out of view
  useEffect(() => {
    const skillsSection = document.getElementById('skills');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setShowAllSkills(false); // Collapse skills when section is out of view
          }
        });
      },
      { threshold: 0.1 } // Adjust this value based on when you want to trigger it
    );

    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);
     return (
    <div
   
      className="boxWithBAck"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      
      <section className="skills  " id="skills">
        <h2 className="section__title">{translations.title}</h2>
        <span className="section__subtitle">{translations.subTitle}</span>

        
        <p>
        {translations.text}
        </p>
        <div className="TopSkill" 
     >

        <div className="skills__Itm" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
      data-aos-delay="100"  >
            <img src={angular} alt="hhh" />
            <h3 className="skills__name">Angular</h3>
          </div>

          <div className="skills__Itm" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
      data-aos-delay="250"  >
            <img src={react} alt="hhh" />
            <h3 className="skills__name">React</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
      data-aos-delay="400"  >
            <img src={Ts} alt="hhh" />
            <h3 className="skills__name">TypeScript</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
     data-aos-delay="550"  >
            <img src={node} alt="hhh" />
            <h3 className="skills__name">NodeJs</h3>
          </div>

          <div className="skills__Itm" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
     data-aos-delay="700"  >
            <img src={js} alt="hhh" />
            <h3 className="skills__name">JavaScript</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
      data-aos-delay="850"  >
            <img src={flutter} alt="hhh" />
            <h3 className="skills__name">Flutter</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
      data-aos-delay="1000"  >
            <img src={figma} alt="hhh" />
            <h3 className="skills__name">Figma</h3>
          </div>



        
   
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={html} alt="Html" />
              <h3 className="skills__name">HTML</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={css} alt="CSS" />
              <h3 className="skills__name">CSS</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={bootstr} alt="Bootstrap" />
              <h3 className="skills__name">Bootstrap</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={jequery} alt="jQuery" />
              <h3 className="skills__name">jQuery</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={git} alt="Git" />
              <h3 className="skills__name">Git</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={php} alt="PHP" />
              <h3 className="skills__name">PHP</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={ppt} alt="PowerPoint" />
              <h3 className="skills__name">PowerPoint</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={mysql} alt="MySQL" />
              <h3 className="skills__name">MySQL</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={java} alt="JAVA" />
              <h3 className="skills__name">JAVA</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={fire} alt="Firebase" />
              <h3 className="skills__name">Firebase</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={mongo} alt="MongoDB" />
              <h3 className="skills__name">MongoDB</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={Sqllite} alt="SQLite" />
              <h3 className="skills__name">SQLite</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={uml} alt="UML" />
              <h3 className="skills__name">UML</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={word} alt="Word" />
              <h3 className="skills__name">Word</h3>
            </div>
            <div className="skills__more" data-aos-anchor-placement="top-bottom" >
              <img src={andstudio} alt="Android Studio" />
              <h3 className="skills__name">Android Studio</h3>
            </div>
          
       
          <div className="buttonContainer" data-aos="fade-right" data-aos-anchor-placement="center-bottom"  data-aos-delay="1150">
     
     <a href="#skills" className=" button btnSkills"  onClick={handleToggleSkills}>
     <img className="imgHover imgHover1" src={reactHover} alt="hhh" />
   <img className="imgHover imgHover2" src={jsHover} alt="hhh" />
   <img className="imgHover imgHover3" src={angularHover} alt="hhh" />
   <img className="imgHover imgHover4" src={cssHover} alt="hhh" />
   <img className="imgHover imgHover5" src={mysqlHover} alt="hhh" />
       {showAllSkills ? translations.show2 : translations.show1}<i className={`${isTop ? 'bx bx-chevrons-down skil__icon' : 'bx bx-chevrons-up skil2__icon'}`}></i>
     </a>
   </div>

</div>
        
      </section>
    </div>
  );
};

export default Skills;

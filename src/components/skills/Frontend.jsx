import React, { useEffect, useState } from "react";
import angular from "../../asset/angular.png";
import react from "../../asset/react.png";
import html from "../../asset/html.png";
import css from "../../asset/css.png";
import bootstr from "../../asset/bootstr.png";
import figma from "../../asset/figma.png";
import andstudio from "../../asset/andstudio.png";
import java from "../../asset/java.png";
import php from "../../asset/php.png";
import ppt from "../../asset/ppt.png";
import Sqllite from "../../asset/Sqllite.png";
import node from "../../asset/node.png";
import mysql from "../../asset/mysql.png";
import mongo from "../../asset/mongo.png";
import js from "../../asset/js.png";
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

const Frontend = ({trans}) => {

  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isshow, setIsshow] = useState(false);
  useEffect(() => {

    const skillsbox = document.querySelector('.skills__box');
    const skillsGroup = document.querySelector('.skills__group');
    const skillsDataItems = skillsGroup.querySelectorAll('.skills__data');

    if (showAllSkills) {
      skillsDataItems.forEach((item, index) => {
        item.style.position = 'relative';
        skillsbox.style.display = 'flex';
        item.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`;
      });

    } else {
      skillsDataItems.forEach((item) => {
        item.style.position = 'absolute';
        skillsbox.style.display = 'none';
      });

    }
  }, [showAllSkills]);


  const [isTop, setTop] = useState(true);
  const handleToggleSkills = () => {
    setShowAllSkills(!showAllSkills);
    setIsshow(!isshow);
    setTop((prevIsTop) => !prevIsTop);
  };
  return (<>

    <div className="skills__content">
      <div className="buttonContainer">
     
        <a href="#skills" className={`button transition-button ${isTop ? 'top' : 'bottom'}`} onClick={handleToggleSkills}>
        <img className="imgHover imgHover1" src={reactHover} alt="hhh" />
      <img className="imgHover imgHover2" src={jsHover} alt="hhh" />
      <img className="imgHover imgHover3" src={angularHover} alt="hhh" />
      <img className="imgHover imgHover4" src={cssHover} alt="hhh" />
      <img className="imgHover imgHover5" src={mysqlHover} alt="hhh" />
          {showAllSkills ? trans.show1 : trans.show1}<i className={`${isTop ? 'bx bx-chevrons-down skil__icon' : 'bx bx-chevrons-up skil2__icon'}`}></i>
        </a>
      </div>
      <div id="skilBox" className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={html} alt="hhh" />
            <div className="line"></div>
            <h3 className="skills__name">HTML</h3>
          </div>

          <div className="skills__data">
            <img src={css} alt="hhh" />
            <h3 className="skills__name">CSS</h3>
          </div>

          <div className="skills__data">
            <img src={js} alt="hhh" />
            <h3 className="skills__name">JS</h3>
            {/* <span className="spane top"></span>
            <span className="spane right"></span>
            <span className="spane bottom"></span>
            <span className="spane left"></span> */}
          </div>
          <div className="skills__data">
            <img src={angular} alt="hhh" />
            <h3 className="skills__name">Angular</h3>
          </div>

          <div className="skills__data">
            <img src={bootstr} alt="hhh" />
            <h3 className="skills__name">Bootstrap</h3>
          </div>
          <div className="skills__data">
            <img src={jequery} alt="hhh" />
            <h3 className="skills__name">jQuery</h3>
          </div>

          <div className="skills__data">
            <img src={git} alt="hhh" />
            <h3 className="skills__name">Git</h3>
          </div>

          <div className="skills__data">
            <img src={react} alt="hhh" />
            <h3 className="skills__name">React</h3>
          </div>

          <div className="skills__data">
            <img src={php} alt="hhh" />
            <h3 className="skills__name">PHP</h3>
          </div>

          <div className="skills__data">
            <img src={node} alt="hhh" />
            <h3 className="skills__name">Node JS</h3>
          </div>

          <div className="skills__data">
            <img src={ppt} alt="hhh" />
            <h3 className="skills__name">PowerPoint</h3>
          </div>

          <div className="skills__data">
            <img src={mysql} alt="hhh" />
            <h3 className="skills__name">MySQL</h3>
          </div>
          <div className="skills__data">
            <img src={java} alt="hhh" />
            <h3 className="skills__name">JAVA</h3>
          </div>
          <div className="skills__data">
            <img src={fire} alt="hhh" />
            <h3 className="skills__name">Firebase</h3>
          </div>
          <div className="skills__data">
            <img src={mongo} alt="hhh" />
            <h3 className="skills__name">MongoDB</h3>
          </div>
          <div className="skills__data">
            <img src={Sqllite} alt="hhh" />
            <h3 className="skills__name">SQLite</h3>
          </div>
          <div className="skills__data">
            <img src={uml} alt="hhh" />
            <h3 className="skills__name">UML</h3>
          </div>

          <div className="skills__data">
            <img src={word} alt="hhh" />
            <h3 className="skills__name">Word</h3>
          </div>
          <div className="skills__data">
            <img src={andstudio} alt="hhh" />
            <h3 className="skills__name" >Android Studio</h3>
          </div>
          <div className="skills__data">
            <img src={figma} alt="hhh" />
            <h3 className="skills__name">Figma</h3>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Frontend;

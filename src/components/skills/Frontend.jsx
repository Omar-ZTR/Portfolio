import React from "react";
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

const Frontend = () => {
  return (
    <div className="skills__content">
      <div className="skills__box">
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
            <span className="spane top"></span>
            <span className="spane right"></span>
            <span className="spane bottom"></span>
            <span className="spane left"></span>
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
  );
};

export default Frontend;

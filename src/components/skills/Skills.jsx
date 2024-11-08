import React, { useEffect, useState } from "react";
import "./skills.css";
import Frontend from "./Frontend";
import angular from "../../asset/angular.png";
import node from "../../asset/node.png";
import figma from "../../asset/figma.png";
import react from "../../asset/react.png";
import js from "../../asset/js.png";
import flutter from "../../asset/flutter.png";
import Ts from "../../asset/TS.png";


const Skills = ({translations}) => {
  const [startVal1, setStartVal1] = useState(0);
  const [startVal2, setStartVal2] = useState(0);
  const [startVal3, setStartVal3] = useState(0);
 
  const endVal1 = 90; 
  const endVal2 = 80;
  const endVal3 = 70;
 
  const speed = 50; 

  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector("#skills");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSkillsVisible(true);
          }
        });
      },
      { threshold: 0.3 } 
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (!isSkillsVisible) return;

    const interval1 = setInterval(() => {
      setStartVal1((prevStartVal) => {
        if (prevStartVal < endVal1) return prevStartVal + 1;
        clearInterval(interval1);
        return prevStartVal;
      });
    }, speed);

    const interval2 = setInterval(() => {
      setStartVal2((prevStartVal) => {
        if (prevStartVal < endVal2) return prevStartVal + 1;
        clearInterval(interval2);
        return prevStartVal;
      });
    }, speed);

    const interval3 = setInterval(() => {
      setStartVal3((prevStartVal) => {
        if (prevStartVal < endVal3) return prevStartVal + 1;
        clearInterval(interval3);
        return prevStartVal;
      });
    }, speed);

  

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
     
    };
  }, [isSkillsVisible]);

  const backgroundStyle1 = {
    background: `conic-gradient(#ff6a3d ${startVal1 * 3.6}deg, #ededed 0deg)`,
  };
  const backgroundStyle2 = {
    background: `conic-gradient(#ff6a3d ${startVal2 * 3.6}deg, #ededed 0deg)`,
  };
  const backgroundStyle3 = {
    background: `conic-gradient(#ff6a3d ${startVal3 * 3.6}deg, #ededed 0deg)`,
  };
  return (
    <div
      className="boxWithBAck"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      {/* <Qualification/> */}
      <section className="skills  " id="skills">
        <h2 className="section__title">{translations.title}</h2>
        <span className="section__subtitle">{translations.subTitle}</span>

        {/* <h3>My Advantages</h3> */}
        <p>
        {translations.text}
        </p>
        <div className="TopSkill" 
     >

        <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="100"  >
            <img src={angular} alt="hhh" />
            <h3 className="skills__name">Angular</h3>
          </div>

          <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="250"  >
            <img src={react} alt="hhh" />
            <h3 className="skills__name">React</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="400"  >
            <img src={Ts} alt="hhh" />
            <h3 className="skills__name">TypeScript</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up"
     data-aos-delay="550"  >
            <img src={node} alt="hhh" />
            <h3 className="skills__name">NodeJs</h3>
          </div>

          <div className="skills__Itm" data-aos="fade-up"
     data-aos-delay="700"  >
            <img src={js} alt="hhh" />
            <h3 className="skills__name">JavaScript</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="850"  >
            <img src={flutter} alt="hhh" />
            <h3 className="skills__name">Flutter</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="1000"  >
            <img src={figma} alt="hhh" />
            <h3 className="skills__name">Figma</h3>
          </div>



</div>
        <div style={{ marginBottom: "50px" }}>
          <div className="face__Skills">
            <div className="top__skills"  >
              {/* <img src={frontendLog} alt="hhh" /> */}
              <span className="skill__name">  {translations.skil1} </span>
              <div className="skills__levels" style={backgroundStyle1}>
                <span
                  className="skill__value"
                  data-values={22}
                >{`${startVal1}%`}</span>
              </div>
            </div>

            <div className="top__skills"  >
              {/* <img src={backendLog} alt="hhh" /> */}
              <span className="skill__name">  {translations.skil2} </span>
              <div className="skills__levels" style={backgroundStyle2}>
                <span
                  className="skill__value"
                  data-values={22}
                >{`${startVal2}%`}</span>
              </div>
            </div>

            <div className="top__skills"  >
              {/* <img src={designLog} alt="hhh" /> */}
              <span className="skill__name">  {translations.skil3}</span>
              <div className="skills__levels" style={backgroundStyle3}>
                <span
                  className="skill__value"
                  data-values={22}
                >{`${startVal3}%`}</span>
              </div>
            </div>

            {/* <div className='top__skills'>
            <img src={html} alt="hhh" />
            <div className='skills__levels' style={backgroundStyle4}>
              <span className='skill__value' data-values={22}>{`${startVal4}%`}</span>
            </div>
            <span className='skill__name'>44 </span>
          </div> */}
          </div>
        </div>
        <div className="skills__container  grid">
          <Frontend trans= {translations} />
    
        </div>
      </section>
    </div>
  );
};

export default Skills;

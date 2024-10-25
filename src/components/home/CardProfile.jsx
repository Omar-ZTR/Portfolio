import React, { useEffect, useState } from "react";
import "./profile.css";
import av from "../../asset/oukiis.png";
import CV from "../../asset/John-Cv.pdf";

function CardProfile() {
  const [cardDisplay, setCardDisplay] = useState(false);
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".profi");

    if (this.scrollY >= 460) {
      scrollUp.classList.add("show-CardP");
      setCardDisplay(false);
    } else scrollUp.classList.remove("show-CardP");
  });

  useEffect(() => {
    const CardOn = document.querySelector(".profi");
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    if (cardDisplay) {
      CardOn.style.right = "1rem";
    } else {
      if (mediaQuery.matches) {
        CardOn.style.right = "-16rem";
      } else {
        CardOn.style.right = "-20rem";
      }
    }
  }, [cardDisplay]);

  const handleToggleCard = () => {
    setCardDisplay(!cardDisplay);
  };
  return (
    <div className=" profi">
      {/*  <svg style={{ height: "25px" }}>
        <clipPath
          id="my-clip-path"
          clipPathUnits="objectBoundingBox"
          stroke="green"
          stroke-width="20"
        >
          <path d="M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031"></path>
          <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/> 
        </clipPath>
      </svg>
*/}
      <div className="btnTog" onClick={handleToggleCard}>
      <i className={`${cardDisplay ? 'bx bx-chevrons-right ' : 'bx bx-chevrons-left '}`}></i>
      </div>

      <div id="card">
        <div className="avatar-holder">
          <img src={av} alt="Albert Einstein" />
        </div>
        <div className="name">Zouiter Omar</div>
        <div className="ds-info-detail ">
          <h2 className="subName">Software engineer</h2>
        </div>
        <hr />
        <div className="ds-info">
          <div className="ds-info-detail ">
            <div className="ds-info-icon">
              <i class="bx bxl-linkedin"></i>
            </div>
            <h6>Bekalta Monastir,Tunisia</h6>
          </div>
          <div className="ds-info-detail ">
          <div className="ds-info-icon">
              <i class="bx bxl-whatsapp"></i>
            </div>
            <h6>(+216) 24934850</h6>
          </div>
          <div className="ds-info-detail ">
          <div className="ds-info-icon">
              <i class="bx bxl-gmail"></i>
            </div>
            <h6>omarzouiter97@gmail.com</h6>
          </div>
        </div>
       
        <div className="ds-skill">
          <h6>
            Skill <i className="fa fa-code" aria-hidden="true"></i>
          </h6>
          <div className="skill html">
            <h6>
              <i className="fab fa-html5"></i> Problem-solving{" "}
            </h6>
            <div className="bar bar-html">
              <p>80%</p>
            </div>
          </div>

          <div className="skill javascript">
            <h6>
              <i className="fab fa-js"></i> Web{" "}
            </h6>
            <div className="bar bar-js">
              <p>90%</p>
            </div>
          </div>
          <div className="skill css">
            <h6>
              <i className="fab fa-css3-alt"></i> Mobile{" "}
            </h6>
            <div className="bar bar-css">
              <p>75%</p>
            </div>
          </div>
          <div className="button  downCV">
            <a
              download=""
              href={CV}
              className=" button--flex"
              style={{ color: "white" }}
            >
              Download CV
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="var(--container-color"
                ></path>
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="var(--container-color"
                ></path>
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="var(--container-color"
                ></path>
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="var(--container-color"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;

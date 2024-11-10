import React from 'react'
import "./footer.css"
const Footer = ({translations , Myname}) => {
    return (
        <footer className="footer ">
            <div className="footer__container container">
            <h1 className="footer__title">{ Myname }</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">{ translations.about }</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">{ translations.portfolio }</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">{ translations.services }</a>
                    </li>
                </ul>
              
                <div className="footer__social">
                   
                   


       <a href="https://www.linkedin.com/in/omar-zouiter-a51771279/" target="_blank"
   rel="noopener noreferrer"
                        className="footer__social-link" >
                        <i class="bx bxl-linkedin"></i>
                    </a>
            
                    <a href="https://github.com/Omar-ZTR" target="_blank"
   rel="noopener noreferrer"
                        className="footer__social-link">
                        <i class="bx bxl-github"></i>
                      
                    </a>
                </div>

                <span className="footer__copy">&#169; 2024 Omar.
                 </span>
            </div>
        </footer>
    )
}

export default Footer;
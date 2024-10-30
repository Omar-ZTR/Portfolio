import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer ">
            <div className="footer__container container">
            <h1 className="footer__title">Omar Zouiter</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>
              
                <div className="footer__social">
                   
                    {/* target="_blank" */}
                    <a href="https://www.instagram.com/_____omr____/"
                        className="footer__social-link" >
                        <i class="bx bxl-instagram"></i>
                    </a>


                    <a href="https://x.com/OmrZtr"
                        className="footer__social-link" >
                       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z"></path>
</svg>
                    </a>
                    <a href="https://github.com/Omar-ZTR"
                        className="footer__social-link">
                        <i class="bx bxl-github"></i>
                      
                    </a>
                </div>

                <span className="footer__copy">&#169; OmarZouiter.
                    All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer;
import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>

            <div className="row">

                <div className="boxFooter col-6 col-sm-3 text-white text-center">
                    <a
                        href="https://github.com/darksh3ll" target="_blank" rel="noreferrer noopener">
                        <i className=" icone fab fa-github text-white text-center "></i>
                    </a>
                    <p>Github</p>
                </div>

                <div className="boxFooter col-6 col-sm-3 text-white text-center">
                    <a
                        href="https://www.linkedin.com/in/stephane-job/" target="_blank" rel="noreferrer noopener">
                        <i className=" icone fab fa-linkedin"></i>
                    </a>
                    <p>Linkedin</p>
                </div>

                <div className="boxFooter col-6 col-sm-3 text-white text-center">

                    <a
                        href="mailto:darksh3ll.js@gmail.com" rel="noreferrer noopener" >
                        <i className=" icone fas fa-envelope"></i>
                    </a>
                    <p>Email</p>
                </div>

                <div className="boxFooter col-6 col-sm-3 text-white text-center">
                    <a href="tel:0771582743" rel="noreferrer noopener" >
                        <i className="fas fa-phone-square icone"></i>
                    </a>
                    <p>Téléphone</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

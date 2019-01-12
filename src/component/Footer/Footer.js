import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="mt-40">

            <div className="row">

                <div className="boxFooter col-6 col-sm-3 text-white text-center">
                    <div>
                        <i className=" icone fab fa-github text-white text-center "></i>
                    </div>
                    <p>Github</p>
                </div>

                <div className="boxFooter col-6 col-sm-3 text-white text-center">
                    <div>
                        <i className=" icone fab fa-linkedin"></i>
                    </div>
                    <p>Linkedin</p>
                </div>

                <div className="boxFooter col-6 col-sm-3 text-white text-center">
                    <div>
                        <i className=" icone fas fa-envelope"></i>
                    </div>
                    <p>Mail</p>
                </div>

                <div className="boxFooter col-6 col-sm-3 text-white text-center">
                    <div>
                        <i className="fas fa-phone-square icone"></i>
                    </div>
                    <p>Téléphone</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

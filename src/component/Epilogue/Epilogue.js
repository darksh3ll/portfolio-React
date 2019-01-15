import React from 'react';
import {Link} from "react-router-dom";
import "./Epilogue.css"

const Epilogue = () => {
    return (
        <div className="mt-40">
            <p className="EpilogueContent">
                Programmer m'a appris
                que tous était possible.<br/>
                Je peux faire ce qui me plait
                En utilisant seulement mon esprit
            </p>

            <div className="parcours">
                <Link to='/parcours'>
                    <button className="info">
                        Découvrir Mon parcours
                        <i className="far savoirPlus fa-arrow-alt-circle-right"></i>
                    </button>
                </Link>
            </div>

        </div>
);
};

export default Epilogue;

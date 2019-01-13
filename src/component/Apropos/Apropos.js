import React from 'react';
import "./Apropos.css"

const Apropos = () => {
    return (
        <main className="sectionMain mt-40 ">
            <p className="mainContent">
                <span className="white">Former par la wild code school</span>.
                <br/>Développer est devenu ma passion. J'ai une soif d'apprendre telle que j'y passe
                le plus clair de mon temps.
                <br/>J'ai choisi Javascript/React pour son intéractivité mais ce n'est que le
                début tous les languages sont attirants et a découvrir.
                <br/>
                Il n'y a pas d'age pour enrechir ses connaissances
            </p>
            <a href="https://wildcodeschool.fr/" target="_blank" rel="noreferrer noopener" >
                <button>En savoir plus</button>
            </a>
        </main>
    );
};

export default Apropos;

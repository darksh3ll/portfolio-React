import React from 'react';
import "./Apropos.css"

const Apropos = () => {
    return (
        <main className="sectionMain mt-40 ">
            <p className="mainContent">
                <span className="white">Bonjour je m'appelle stéphane</span>.
                <p>Je poursuis actuellement une formation intensive de développeur web à la Wild Code School, un
                    parcours extrêmement efficace qui permet d’acquérir le maximum de compétences .
                </p>

                <p>Futur diplômé d’un titre de
                    Développeur web et mobile (Niveau III)
                </p>

                <p>Je maîtrise les outils d'intégration HTML5/CSS3, et je suis en train de me spécialiser en JavaScript,
                    React & Node.js.
                </p>
            </p>
            <a href="https://wildcodeschool.fr/" target="_blank" rel="noreferrer noopener">
                <button>En savoir plus</button>
            </a>
        </main>
    );
};

export default Apropos;

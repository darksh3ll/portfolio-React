import React, {Component} from 'react';
import Header from "../Header/Header";
import "./Home.css"
import Apropos from "../Apropos/Apropos";
import Techno from "../Technologies/Techno";
import TitreSection from "../TitreSection";
import Epilogue from "../Epilogue/Epilogue";
import Footer from "../Footer/Footer";
import Projet from "../Project/Projet";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header/>
                <Apropos/>
                <TitreSection
                    name="COMPÉTENCES JUNIOR"
                />
                <Techno/>
                <Epilogue/>
                <TitreSection
                    name="PORTFOLIO"
                />
                <div className="row">
                    <Projet
                        name="Projets"
                        img="https://images.unsplash.com/photo-1420745981456-b95fe23f5753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        titre="Ecohood"
                        description="Javascript - React - Scss - Firebase - Redux"
                        projet="https://ecohood.herokuapp.com/"
                        titreButton="Voir le projet"

                    />
                    <Projet
                        name="Projets"
                        img="https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        titre="Méteo"
                        description="Javascript - React - Scss"
                        projet="https://github.com/darksh3ll/AppMeteoReactV.2"
                        titreButton="Voir le projet"


                    />

                    <Projet
                        name="Projets"
                        img="https://images.unsplash.com/photo-1536405528985-0ab8ba47f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                        titre="Le poulpe qui fume"
                        description="Javascript - React - Redux - Scss - Mysql - NodeJs"
                        titreButton="Projet en cours"


                    />

                    <Projet
                        name="Projets"
                        img="https://images.unsplash.com/photo-1506585210546-67a607ca862b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                        titre="Star wars"
                        description="Javascript - React - Scss"
                        projet="https://wild-star-wars.herokuapp.com/"
                        titreButton="Voir le projet"

                    />
                </div>
                <TitreSection
                    name="CONTACT"
                />
                <Footer/>
            </div>
        );
    }
}

export default Home;
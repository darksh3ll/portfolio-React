import React from 'react';
import "./Parcours.css"
import {Link} from "react-router-dom";

const Parcours = () => {
    return (
        <div className="boxParcours">

            <div className="stephane">
                <img className="rounded img-fluid moi" src="http://www.stephanejob.com/stephane.jpg" alt=""/>

                <div className="box">
                    <h2 className="titreContent">Devenir développeur : témoignage de stéphane</h2>

                    <p className="content">
                        Stéphane, élève à la Wild Code School Marseille, a choisi de devenir développeur web car c'est un
                        métier où chaque programme à concevoir est un challenge à relever..<br/>
                        Cap Plombier Chauffagiste, Stéphane a travaillé en tant que chef d'équipe pour finalement créer
                        son entreprise dans le BTP en 2011.
                    </p>

                    <h2 className="titreContent">Pourquoi devenir développeur ?</h2>

                    < p className="content">
                        À l'âge de 18 ans mon grand-père m'a offert mon premier ordinateur cela été tout de suite le
                        coup de foudre !
                        Depuis ce jour l'informatique est devenue une véritable passion.</p>
                    <p className="content">
                        La vie a fait que j'ai choisi un autre métier celui de plombier.<br/>
                        À l'âge de 26 ans j'ai decouvert Linux, Je me suis intéressé pendant un certain temps à la
                        sécurité informatique et c'est là que j'ai connu le code informatique.<br/>
                        J'ai commencé mon premier cours python sur <cite>"apprendre à programmer avec python de Gérard
                        swinnen".</cite><br/></p>
                    <p className="content">
                        Puis en 2015 j'ai découvert un cours sur le HTML sur openclassrooms à l'époque le site s'appelait
                        "le site du zéro", j'ai voulu en savoir plus j'ai continué sur le cours Javascript j'avais soif
                        d'apprendre.</p>
                    <p className="content">
                        Mais mon travail d'entrepreneur me prenais de plus en plus de temps.<br/> Pendant mon travail sur les
                        chantiers ou au bureau, je pensais au code informatique.
                        C'est en 2017 que j'ai pris la décision d'arrêter mon activité et enfin devenir développeur.
                    </p>
                    <p className="content" >
                        Pendant la formation, je me suis spécialisé sur REACT/NODEJS/JAVASCRIPT, cela demande beaucoup
                        d’investissement.
                    </p>
                    <p className="content">
                        Je suis fier de ce que j'ai fait , avoir tout quitté pour ma passion.</p>

                </div>

                <div className="boxArrow">
                    <Link to={"/"}>
                        <i className=" arrow fas fa-arrow-circle-left"></i>
                    </Link>

                </div>

            </div>
        </div>
    );
};
export default Parcours;

import React from 'react';
import "./Projet.css"
import { Card, CardImg, CardText, CardBody, CardSubtitle } from 'reactstrap';
const Projet = ({img,titre,description,projet}) => {
    return (
            <Card className="col-md-6 cardProjet">
                <CardImg top width="100%"  src={img} alt="Card image cap" />
                <CardBody>
                    <CardSubtitle className="text-white">{titre}</CardSubtitle>
                    <CardText className="text-white" >{description}</CardText>
                    <a href={projet} target="_blank"><button>Voir le projet</button></a>

                </CardBody>
            </Card>
    );
};

export default Projet;

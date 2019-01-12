import React from 'react';
import "./TitreSection.css"
const TitreSection = ({name}) => {
    return (
        <div className="mt-40" >
            <p className="titreSection text-center ">{name}</p>
        </div>
    );
};

export default TitreSection;

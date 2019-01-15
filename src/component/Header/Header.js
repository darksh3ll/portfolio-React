import React from 'react';
import "./Header.css"


const Header = () => {
    return (
       <header className="mt-40">
           <h2 className="titreNameHeader text-dark">Job stéphane</h2>
           <h1 className="text-light titreHeader">
               Développeur Web
               <br/>
               Full Stack
           </h1>
           <a href="http://www.stephanejob.com/cvStephaneJob.pdf"target="_blank" rel="noreferrer noopener" ><button >Télécharger mon cv <i
               className="fas fa-download"></i> </button></a>

       </header>
    );
};

export default Header;

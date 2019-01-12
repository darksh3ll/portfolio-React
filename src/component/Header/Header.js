import React from 'react';
import { Button } from 'reactstrap';

import "./Header.css"


const Header = () => {
    return (
       <header>
           <h2 className="titreNameHeader text-dark">Job stéphane</h2>
           <h1 className="text-light titreHeader">
               Développeur Web
               <br/>
               Full-stack
           </h1>

       </header>
    );
};

export default Header;

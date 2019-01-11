import React from 'react';
import { Button } from 'reactstrap';

import "./Header.css"


const Header = () => {
    return (
       <header>
           <h3 className="titreNameHeader">Job stéphane</h3>
           <h1 className="text-light titreHeader">
               Développeur Web
               <br/>
               Full-stack
           </h1>
           <Button color="secondary">START</Button>{' '}

       </header>
    );
};

export default Header;

import React, {Component} from 'react';
import Header from "../Header/Header";
import bg from "../assets/bg.png"
import  "./Home.css"
import Apropos from "../sectionAPropos/Apropos";
class Home extends Component {
    render() {
        return (
            <div className="home">
               <Header/>
                <Apropos/>
            </div>
        );
    }
}

export default Home;
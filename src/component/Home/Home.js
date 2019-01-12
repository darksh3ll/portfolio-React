import React, {Component} from 'react';
import Header from "../Header/Header";
import  "./Home.css"
import Apropos from "../Apropos/Apropos";
import Techno from "../Technologies/Techno";
import TitreSection from "../TitreSection";
import Epilogue from "../Epilogue/Epilogue";
import Footer from "../Footer/Footer";
class Home extends Component {
    render() {
        return (
            <div className="home">
               <Header/>
                <Apropos/>
                <TitreSection
                name="Technologies"
                />
                <Techno/>
                <Epilogue/>

                <Footer/>
            </div>
        );
    }
}

export default Home;
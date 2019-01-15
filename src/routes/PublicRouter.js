import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../component/Home/Home";
import Parcours from "../component/Parcours/Parcours";
class PublicRouter extends Component {
    render() {
        return (
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/parcours" component={Parcours}/>
            </Switch>
        );
    }
}

export default PublicRouter;
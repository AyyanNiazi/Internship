import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Signup from '../container/signup'
import Login from '../container/login'
import Home from './home'
import About from './about'
import Contact from './contact'
import Congrats from './congrats'
import MainHome from './mainHome'

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch> 
                    <Route exact path='/' component={Login} />
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/main' component={MainHome} />
                    <Route path='/congrats' component={Congrats} />
                    <Route path='/signup' component={Signup} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;
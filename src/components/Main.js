import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from '../logo.svg';
import Home from './Home';
import AboutMe from './AboutMe';
import Work from './Work';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';


class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/aboutme' component={AboutMe}/>
                    <Route path='/work' component={Work}/>
                    <Route path='/education' component={Education}/>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
                
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                Learn React
                </a> */}
            </main>
        )
    }

}

export default Main;

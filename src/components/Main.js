import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from '../logo.svg';
import Home from './Home';
import AboutMe from './AboutMe';
import Work from './Work';
import Education from './Education';
import Skills from './Skills';


class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/ivan-jutamulia-website' component={Home}/>
                    <Route path='/ivan-jutamulia-website/aboutme' component={AboutMe}/>
                    <Route path='/ivan-jutamulia-website/work' component={Work}/>
                    <Route path='/ivan-jutamulia-website/education' component={Education}/>
                    <Route path='/ivan-jutamulia-website/skills' component={Skills}/>
                </Switch>
            </main>
        )
    }

}

export default Main;

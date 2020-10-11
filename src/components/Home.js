import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import headshot from '../images/headshot.jpg';

class Home extends Component {

    render() {
        return (
            <div class='home-container'>
                <div class='profile-pic-container'>
                    <img src={headshot} class='profile-pic-image' alt='profile-pic'/>
                </div>
                <div class='text-container'>
                    <h1 class='hello'>Hello! My name is Ivan.</h1>
                    <div class='route-buttons'>
                        <Link to="/aboutme"><button class='route-button'>My Interests</button></Link>
                        <Link to="/work"><button class='route-button'>My Work</button></Link>
                        <Link to="/resume"><button class='route-button'>My Resume</button></Link>
                    </div>
                    <p class='description'>I am currently an MEng. student at MIT studying computer science and artificial intelligence. 
                        I'm excited about machine learning and its applications in data analysis, and I love learning more about these topics. 
                        I'm from Berkeley, CA, but being on the East coast for school isn't so bad. 
                        Check out my hobbies and interests to learn more about me!
                    </p>
                    <p class='career-status'>
                        I am looking for a <b>full-time software engineering/data science role</b> starting <b>Fall 2021</b>.
                    </p>
                </div>
            </div>
        )
    }

}

export default Home;
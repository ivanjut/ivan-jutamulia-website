import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import headshot from '../images/headshot.jpg';
import resumePDF from '../docs/Ivan_Jutamulia_Resume.pdf';

class Home extends Component {

    render() {
        return (
            <div class='home-container'>
                <div class='profile-pic-container'>
                    <img src={headshot} class='profile-pic-image' alt='profile-pic'/>
                </div>
                {/* <p>
                    TODO: put current title and company
                </p> */}
                <div class='text-container'>
                    <h1 class='hello'>Hello! My name is Ivan.</h1>
                    <div class='route-buttons'>
                        <Link to="/aboutme"><button class='route-button'>My Interests</button></Link>
                        <Link to="/work"><button class='route-button'>My Work</button></Link>
                        <a href = {resumePDF} target = "_blank"><button class='route-button'>My Resume</button></a>
                    </div>
                    <p class='description'>
                        I am currently a machine learning engineer at Second Spectrum working on the cutting edge of sports technology. 
                        I'm originally from Berkeley, CA, and have been based in Boston, MA ever since attending and graduating from MIT with 
                        a B.S. (2020) and MEng. (2021) in computer science and artificial intelligence. 
                        
                    </p>
                    <p class="thanks">
                        Thanks for visiting my website profile! Check out my hobbies, interests, and background to learn more about me.
                    </p>
                    {/* <p class='career-status'>
                        I am looking for a <b>full-time software engineering/data science role</b> starting <b>Fall 2021</b>.
                    </p> */}
                </div>
            </div>
        )
    }

}

export default Home;
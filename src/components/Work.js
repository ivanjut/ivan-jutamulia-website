import React, { Component } from 'react';
import VimLogo from '../images/vim_logo.jpg';
import SecondSpectrumLogo from '../images/second_spectrum_logo.png';
import MITSportsLabLogo from '../images/mit_sports_lab_logo.png';
import MITCSAILLogo from '../images/mit_csail_logo.png';
import CovidProject from '../docs/covid_project.pdf';
import UberLyftProject from '../docs/uber_lyft_pricing_project.pdf'
import {FiArrowRightCircle} from 'react-icons/fi';
import './Work.css';


class Work extends Component {

    render() {
        return (
            <div class='work-container jumbotron'>
                <h2 class="display-4">Work Experience</h2>
                <hr class="my-4"/>

                <h3>Industry</h3>
                <div id="industry-card-deck" class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={VimLogo} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Vim</h5>
                        <p class="card-text"><i>Software Engineering Intern</i></p>
                        <p class="card-text">
                            I spent MIT's 2020 IAP period in January to work for Vim, helping them explore the technology behind healthcare EHR systems and develop tools that 
                            would cut referral workflow costs. My primary work revolved around developing browser extraction tools such as optical character recognition and DOM-scraping techniques
                            to pull EHR information and feed into Vim's referral system. I also built an embedded Chrome extension to integrate high-value recommendations from the referral system 
                            to streamline the referral workflow for users of the EHR.
                        </p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">January 2020</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={SecondSpectrumLogo} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Second Spectrum</h5>
                        <p class="card-text"><i>Machine Learning Intern</i></p>
                        <p class="card-text">
                            I spent the summer of 2019 working on Second Spectrum's soccer AI team to help develop and launch the tracking data and semantics delivery system for 
                            the English Premier League's 2019-2020 season. I developed a logistic regression model to detect bisecting passes in soccer and integrated the detection system
                            into the existing semantics workflow. I also spent significant time implementing a training and evaluation infrastructure with Pachyderm to greatly speed up
                            the machine learning workflow of developing models. I was able to utilize this infrastructure to successfully improve the existing expected goals model. 
                            Lastly, I designed and implemented a clustering-based system to identify player archetypes based on style of play.
                        </p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">June 2019 - August 2019</small>
                        </div>
                    </div>
                </div>

                <hr class="my-4"/>

                <h3>Research</h3>
                <div id="research-card-deck" class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src={MITSportsLabLogo} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">MIT Sports Laboratory</h5>
                        <p class="card-text"><i>Undergraduate/Graduate Researcher</i></p>
                        <p class="card-text">
                            My research with the MIT Sports Lab centers around evaluating decision making of NBA players and establishing a quantifiable framework to do so.
                            I've utilized deep learning approaches and other statistical techniques to build accurate pass difficulty and shot difficulty models to quantify 
                            probabilties of completing certain passes or shots, using predominantly tracking data to build features. With these values I introduced an 
                            <b> expected possession value (EPV) </b> metric that can be used as a proxy to determine whether certain decisions to pass or shoot were good or not.
                            This work is being conducted in collaboration with the San Antonio Spurs, and I have integrated this work into a coaching and analytical tool for them.
                        </p>
                        <p class="card-text"><i>Advisor: Peko Hosoi</i></p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">September 2019 - Present</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={MITCSAILLogo} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">MIT Computer Science and Artificial Intelligence Laboratory</h5>
                        <p class="card-text"><i>Undergraduate Researcher</i></p>
                        <p class="card-text">
                            Working in the Learning and Intelligent Systems group, we seeked to enable research on machine leaerning and planning in uncertain domains with small real-world datasets,
                            in the context of autonomous agents (robots!). We focused on developing a complete task and motion planning system for a life-sized robot to interpret and perform
                            long-horizon tasks. This involved training the robot to pick up certain objects, push objects, and a variety of other motions in a generalized fashion. I was personally
                            responsible for training and integrating a computre vision system that could robustly detect objects and their poses with occlusions. We were able to provide
                            a live in-person demonstration of the robot's capabilities to the lab's sponsor, Honda Research Institute, which successfully displayed our integrated system.
                        </p>
                        <p class="card-text"><i>Principal Investigators: Leslie Kaelbling & Tomas Lozano-Perez</i></p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">May 2018 - August 2018</small>
                        </div>
                    </div>
                </div>

                <hr class="my-4"/>

                <h3>Projects</h3>
                <div id="projects-card-deck" class="card-deck">
                    <div class="card">
                        {/* <img class="card-img-top" src={MITSportsLabLogo} alt="Card image cap"/> */}
                        <div class="card-body">
                        <h5 class="card-title">Covid-19 Sentiment Analysis on Twitter</h5>
                        <p class="card-text">
                            At the peak of the Covid-19 pandemic, I along with a friend seeked to understand the general sentiment surrounding the outbreak and the country's response to it. 
                            We trained various NLP binary classification models to characterize if tweets about the coronavirus were serious or not. We then used thee models to analyze trends
                            and patterns, discovering that there were correlations with factors such as level of outbreak, political affiliation, significant events, etc.  
                        </p>
                        <p style={{float: "right"}}><a href={CovidProject} target="_blank">Read More <FiArrowRightCircle/></a></p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">March 2020 - May 2020</small>
                        </div>
                    </div>
                    <div class="card">
                        {/* <img class="card-img-top" src={MITCSAILLogo} alt="Card image cap"/> */}
                        <div class="card-body">
                        <h5 class="card-title">Uber and Lyft Pricing</h5>
                        <p class="card-text">
                            This project was an analysis of Uber and Lyft pricing and specifically what kinds of factors influenced it the most. In a group of 4, we looked at various 
                            factors such as weather, location, and time of day that we hypothesized would play a role. We used statistical techniques such as network analysis, hypothesis testing,
                            time series analysis, and geospatial regression to determine some of the relationships. 
                        </p>
                        <p style={{float: "right"}}><a href={UberLyftProject} target="_blank">Read More <FiArrowRightCircle/></a></p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">October 2019 - December 2019</small>
                        </div>
                    </div>
                </div>
            
            
            </div>
        )
    }

}

export default Work;
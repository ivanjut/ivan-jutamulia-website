import React, { Component } from 'react';
import './Work.css';


class Work extends Component {

    render() {
        return (
            <div class='work-container jumbotron'>
                <h2 class="display-4">Work</h2>
                <hr class="my-4"/>

                <div id="accordion" class="py-5">
                <div class='internship-container'>
                    <div class="card border-0">
                            <div class="card-header p-0 border-0" id="heading-239">
                                <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-239" aria-expanded="true" aria-controls="#collapse-239"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Internships</button>
                            </div>
                            <div id="collapse-239" class="collapse show" aria-labelledby="heading-239" data-parent="#accordion">
                                <div class="card-body accordion-body">
                                    <div class='vim-container'>
                                        <h5><b>Vim</b> <i> Software Engineering Intern</i></h5>
                                        <p>January 2020</p>
                                        <ul>
                                            <li>Improved healthcare EHR systems to cut referral workflow costs by integrating high-value recommendations for provider referrals</li>
                                            <li>Developed browser extraction tools using optical character recognition and DOM-scraping techniques to pull EHR information</li>
                                            <li>Built an embedded Chrome extension that integrates high-value recommendations with the EHR referral workflow</li>
                                        </ul>
                                    </div>

                                    <div class='second-spectrum-container'>
                                        <h5><b>Second Spectrum</b> <i> Machine Learning Intern</i></h5>
                                        <p>June 2019 - August 2019</p>
                                        <ul>
                                            <li>Launched a tracking data and semantics delivery system for the English Premier League with the AI soccer semantics team</li>
                                            <li>Developed a logistic regression model for bisecting passes with over 90% f1 score and integrated into existing system</li>
                                            <li>Implemented training and evaluation infrastructure with Pachyderm to speed up model development process by a factor of 20 
                                                <ul>
                                                    <li>Leveraged Pachyderm infrastructure to improve the expected goals model ROC-AUC score to 0.86</li>
                                                </ul>
                                            </li>
                                            <li>Designed and implemented a clustering-based system to identify player archetypes and style of play on a per-game basis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>


                    <div class='research-container'>
                        <div class="card border-0">
                                <div class="card-header p-0 border-0" id="heading-240">
                                    <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-240" aria-expanded="true" aria-controls="#collapse-240"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Research</button>
                                </div>
                                <div id="collapse-240" class="collapse show" aria-labelledby="heading-240" data-parent="#accordion">
                                    <div class="card-body accordion-body">
                                    
                                        <div class='sports-lab-container'>
                                            <h5><b>MIT Sports Lab</b> <i> Undergraduate/Graduate Researcher</i></h5>
                                            <p>September 2019 - Present</p>
                                            <ul>
                                                <li>Developing an evaluation framework for decision making of NBA players with expected possession value (EPV) metric</li>
                                                <li>Utilized deep learning approaches to build accurate pass difficulty and shot difficulty models (0.89 and 0.63 ROC-AUC respectively)</li>
                                                <li>Built a visualization tool to analyze the evolution of EPV values for offensive players throughout a possession</li>
                                                <li>Collaborated with San Antonio Spurs to integrate as a coaching and analytical tool</li>
                                            </ul>
                                        </div>

                                        <div class='mit-csail-container'>
                                            <h5><b>MIT Computer Science and Artificial Intelligence Laboratory</b> <i> Undergraduate Researcher</i></h5>
                                            <p>May 2018 - August 2018</p>
                                            <ul>
                                                <li>Developed a complete task and motion planning system for a real-world robot to achieve long-horizon tasks</li>
                                                <li>Integrated a computer vision system that could robustly detect objects and their poses with occlusions up to 50%</li>
                                                <li>Enabled research on machine learning and planning in uncertain domains with small real-world datasets</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                {/* <div class='projects-container'>
                    <div class="card border-0">
                        <div class="card-header p-0 border-0" id="heading-241">
                            <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-241" aria-expanded="false" aria-controls="#collapse-241"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Projects</button>
                        </div>
                        <div id="collapse-241" class="collapse" aria-labelledby="heading-241" data-parent="#accordion">
                            <div class="card-body accordion-body">
                            </div>
                        </div>
                        </div>
                    </div>
                </div> */}

                </div>
            </div>
        </div>
        )
    }

}

export default Work;
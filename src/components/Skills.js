import React, { Component } from 'react';
import './Skills.css';


class Skills extends Component {

    render() {
        return (
            <div class='skills-container jumbotron'>
                <h2 class="display-4">Skills</h2>
                <hr class="my-4"/>

                <div class='programming'>
                    <h5>Programming:</h5>
                    <ul>
                        <li><b>Python</b> - proficient and significant experience, primary programming language</li>
                        <li><b>Java</b> - limited experience, learned and used for a class at MIT (6.031)</li>
                        <li><b>SQL</b> - good experience, have used extensively in data projects</li>
                        <li><b>JavaScript</b> - good experience, used for web development</li>
                        <li><b>HTML and CSS</b> - significant experience</li>
                        <li><b>LaTeX</b> - proficient and significant experience</li>
                    </ul>
                </div>

                <div class='tools-frameworks'>
                    <h5>Technical Tools and Frameworks:</h5>
                    <ul>
                        <li><b>Numpy</b> - proficient and significant experience</li>
                        <li><b>Pandas</b> - proficient and significant experience</li>
                        <li><b>Scikit-Learn</b> - proficient and significant experience</li>
                        <li><b>Tensorflow/Keras</b> - good experience, used in a few projects/work</li>
                        <li><b>PyTorch</b> - limited experience, learned and used for a couple classes at MIT (6.804, 6.864)</li>
                        <li><b>AWS</b> - good experience</li>
                        <li><b>GCP</b> - good experience</li>
                        <li><b>Docker</b> - limited experience</li>
                        <li><b>ReactJS</b> - good experience, used for web development</li>
                        <li><b>ExpressJS</b> - good experiencem used for web development</li>
                        <li><b>VueJS</b> - limited experience, learned and used for a class at MIT (6.170)</li>
                        <li><b>MySQL</b> - good experience</li>
                        <li><b>PostgreSQL</b> - good experience</li>
                        <li><b>Pachyderm</b> - limited experience</li>
                        <li><b>Apache Beam/Dataflow</b> - limited experience</li>
                    </ul>
                </div>

            </div>
        )
    }

}

export default Skills;
import React, { Component } from 'react';
import './Education.css';


class Education extends Component {

    render() {
        return (
            <div class='education-container jumbotron'>
                <h2 class="display-4">Education</h2>
                <hr class="my-4"/>
                <div class='masters-container'>
                    <h4><b>Massachusetts Institute of Technology</b></h4>
                    <h5><i>Master of Engineering in Computer Science and Artificial Intelligence</i> - May 2021</h5>
                    <div id="accordion" class="py-5">
                        <div class="card border-0">
                            <div class="card-header p-0 border-0" id="heading-239">
                                <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-239" aria-expanded="false" aria-controls="#collapse-239"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Relevant Courses</button>
                            </div>
                            <div id="collapse-239" class="collapse" aria-labelledby="heading-239" data-parent="#accordion">
                                <div class="card-body accordion-body">
                                    <ul>
                                        <li>6.438 Algorithms for Inference</li>
                                        <li>6.860 Statistical Learning Theory and Applications</li>
                                        <li>6.864 Advanced Natural Language Processing</li>
                                        <li>6.883 Modeling with Machine Learning: From Algorithms to Applications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class='bachelors-container'>
                    <h4><b>Massachusetts Institute of Technology</b></h4>
                    <h5><i>Bachelor of Science in Computer Science and Engineering</i> (GPA: 5.0/5.0) - May 2020</h5>
                    <h5><i>Minor in Statistics and Data Science</i></h5>
                    <div id="accordion" class="py-5">
                        <div class="card border-0">
                            <div class="card-header p-0 border-0" id="heading-240">
                                <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-240" aria-expanded="false" aria-controls="#collapse-240"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Relevant Courses</button>
                            </div>
                            <div id="collapse-240" class="collapse" aria-labelledby="heading-240" data-parent="#accordion">
                                <div class="card-body accordion-body">
                                    <p class='classes'>Computer Science:</p>
                                    <ul>
                                        <li>6.004 Computation Structures</li>
                                        <li>6.006 Introduction to Algorithms</li>
                                        <li>6.009 Fundamentals of Programming</li>
                                        <li>6.031 Elements of Software Construction</li>
                                        <li>6.033 Computer Systems Engineering</li>
                                        <li>6.036 Introduction to Machine Learning</li>
                                        <li>6.046 Design and Analysis of Algorithms</li>
                                        <li>6.170 Software Studio: Web Applications</li>
                                        <li>6.419 Statistical Computation and Applications</li>
                                        <li>6.804 Computational Cognitive Science</li>
                                        <li>6.UAT Technical Oral Communication</li>
                                    </ul>
                                    <p class='classes'>Math:</p>
                                    <ul>
                                        <li>6.042 Discrete Mathematics for Computer Science</li>
                                        <li>6.008 Introduction to Inference</li>
                                        <li>18.06 Linear Algebra</li>
                                        <li>18.600 Probability and Random Variables</li>
                                        <li>18.650 Fundamentals of Statistics</li>
                                        <li>18.065 Matrix Methods in Data Analysis, Signal Processing, and Machine Learning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div class='high-school-container'>
                    <h4><b>Berkeley High School</b></h4>
                    <h5><i>International Baccalaureate Diploma</i> (GPA: 4.0/4.0) - June 2016</h5>
                    <div id="accordion" class="py-5">
                        <div class="card border-0">
                            <div class="card-header p-0 border-0" id="heading-241">
                                <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-241" aria-expanded="false" aria-controls="#collapse-241"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Relevant Courses</button>
                            </div>
                            <div id="collapse-241" class="collapse" aria-labelledby="heading-241" data-parent="#accordion">
                                <div class="card-body accordion-body">
                                    <ul>
                                        <li>IB/AP Computer Science</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Education;
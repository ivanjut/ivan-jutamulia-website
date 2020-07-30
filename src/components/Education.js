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
                    <h4>Master of Engineering</h4>
                    <p>
                        During the summer of 2017, I had the amazing opportunity to embark on a two-week long road trip around the 
                        Western United States with some of my closest friends. In what became my most cherished travel experience ever, 
                        my friends and I explored numerous national parks and drove through seven states. 
                        This was such a special experience for me, that I made a video commemorating those memories forever. 
                        In the future I plan to go on even more extravagant adventures, 
                        and most importantly be able to share those adventures with the people I am closest to.
                    </p>
                </div>
                <div class='bachelors-container'>
                    <h4><b>Massachusetts Institute of Technology</b></h4>
                    <h4>Bachelor of Science</h4>
                    <p>
                        Soccer has been a passion of mine for as long as I can remember, and is an integral part of who I am. 
                        I started playing when I was four years old, and have continued to play basically year-round for the rest of my life. 
                        By the time I was in high school, I was the captain of my club soccer team as well as my high school team, 
                        gaining valuable leadership skills along the way. After captaining the varsity team at MIT, I am now an assistant coach for the team.
                    </p>
                </div>
                <div class='high-school-container'>
                    <h4><b>Berkeley High School</b></h4>
                    <h4>International Baccalaureate Diploma</h4>
                    <p>
                    I've been playing classical piano since I was four years old as a soloist, participating in certification tests as well as competitions. 
                    While I always liked playing classical music, I've recently started to shift towards playing more popular modern songs that I listen to daily. 
                    The musical aspect of my life is something I value greatly, and is something I hope to keep developing. 
                    Below are a couple performances from the US Open competitions I participated in.
                    </p>
                </div>
            </div>
        )
    }

}

export default Education;
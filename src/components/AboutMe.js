import React, { Component } from 'react';
import './AboutMe.css';


class AboutMe extends Component {

    render() {
        return (
            <div class='aboutme-container jumbotron'>
                <h2 class="display-4">About Me</h2>
                <hr class="my-4"/>
                <p>
                    I am currently a Master of Engineering student at MIT studying computer science and artificial intelligence, 
                    having just graduated with a Bachelor of Science degree from MIT. 
                    As an undergraduate I majored in computer science and engineering (Course 6-3 in MIT lingo) while minoring in statistics and data science.
                    As far as my interests go, I am particularly drawn to machine learning and working with large amounts of data. 
                    Much of my experience has been in this area, and I am passionate about using data-driven analysis to guide the future of our world.
                </p>
                <div class='travel-container'>
                    <h2>Travel</h2>
                    <p>
                        One of my favorite things to do is travel whenever I get the chance. 
                        I've visited many national parks in the United States, 
                        and have also travelled to Asia over 15 times in my short life so far. 
                        It's extremely important to me to see as much of the world as I can in person, 
                        and really explore the cultures, wonders, and people that it has to offer. 
                        A life goal of mine is to visit every state in the country and every continent in the world, 
                        a life goal that I very much look forward to working closer to!
                    </p>


                    <div id="carousel-example-2" class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                        <div class="view">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg" alt="First slide"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">This is the first title</h3>
                            <p>First text</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(115).jpg" alt="Second slide"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Thir is the second title</h3>
                            <p>Secondary text</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(108).jpg" alt="Third slide"/>
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">This is the third title</h3>
                            <p>Third text</p>
                        </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>


                    <p>
                        During the summer of 2017, I had the amazing opportunity to embark on a two-week long road trip around the 
                        Western United States with some of my closest friends. In what became my most cherished travel experience ever, 
                        my friends and I explored numerous national parks and drove through seven states. 
                        This was such a special experience for me, that I made a video commemorating those memories forever. 
                        In the future I plan to go on even more extravagant adventures, 
                        and most importantly be able to share those adventures with the people I am closest to.
                    </p>
                </div>
                <div class='soccer-container'>
                    <h2>Soccer</h2>
                    <p>
                        Soccer has been a passion of mine for as long as I can remember, and is an integral part of who I am. 
                        I started playing when I was four years old, and have continued to play basically year-round for the rest of my life. 
                        By the time I was in high school, I was the captain of my club soccer team as well as my high school team, 
                        gaining valuable leadership skills along the way. After captaining the varsity team at MIT, I am now an assistant coach for the team.
                    </p>
                </div>
                <div class='music-container'>
                    <h2>Music</h2>
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

export default AboutMe;
import React, { Component } from 'react';
import './AboutMe.css';
import craterlake from '../images/craterlake.jpg';
import zionquentin from '../images/zionquentin.jpg';
import grandcanyon1 from '../images/grandcanyon1.jpg';
import grandcanyon2 from '../images/grandcanyon2.jpg';
import youngivansoccer from '../images/young_ivan_soccer.jpg';
import ivansoccer from '../images/ivan_soccer.png';
import soccerprof from '../images/soccer_prof.jpg';


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
                    As far as my interests go, I am particularly drawn to machine learning and working with large datasets. 
                    Much of my experience has been in this area, and I am passionate about using data-driven analysis to guide the future of our world.
                </p>
                <div id="accordion" class="py-5">
                <div class='travel-container'>
                    <div class="card border-0">
                            <div class="card-header p-0 border-0" id="heading-239">
                                <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-239" aria-expanded="false" aria-controls="#collapse-239"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Travel</button>
                            </div>
                            <div id="collapse-239" class="collapse" aria-labelledby="heading-239" data-parent="#accordion">
                                <div class="card-body accordion-body">
                                <div class='travel-pics'>
                                    <div class='travel-desc'>
                                        <p>
                                            One of my favorite things to do is travel whenever I get the chance. 
                                            I've visited many national parks in the United States, 
                                            and have also travelled to Asia over 15 times in my short life so far. 
                                            In the summer of 2020, I spent 10 days driving across the United States from Berkeley to Boston, getting to see all different parts of the country.
                                            It's extremely important to me to see as much of the world as I can in person, 
                                            and really explore the cultures, wonders, and people that it has to offer. 
                                            A life goal of mine is to visit every state in the country and every continent in the world, 
                                            a life goal that I very much look forward to working closer to!
                                        </p>
                                    </div>

                                    <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
                                    {/* <ol class="carousel-indicators">
                                        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                                        <li data-target="#carousel-example-2" data-slide-to="3"></li>
                                    </ol> */}
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="view">
                                                <img class="d-block w-100" src={craterlake} alt="First slide"/>
                                                {/* <div class="mask rgba-black-light"></div> */}
                                            </div>
                                            {/* <div class="carousel-caption">
                                                <h3 class="h3-responsive">Crater Lake</h3>
                                                <p>July 2017</p>
                                            </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <div class="view">
                                                <img class="d-block w-100" src={zionquentin} alt="Second slide"/>
                                                {/* <div class="mask rgba-black-light"></div> */}
                                            </div>
                                            {/* <div class="carousel-caption">
                                                <h3 class="h3-responsive">Zion National Park</h3>
                                                <p>August 2017</p>
                                            </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <div class="view">
                                                <img class="d-block w-100" src={grandcanyon1} alt="Third slide"/>
                                                {/* <div class="mask rgba-black-light"></div> */}
                                            </div>
                                            {/* <div class="carousel-caption">
                                                <h3 class="h3-responsive">Grand Canyon</h3>
                                                <p>March 2018</p>
                                            </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <div class="view">
                                                <img class="d-block w-100" src={grandcanyon2} alt="Third slide"/>
                                                {/* <div class="mask rgba-black-light"></div> */}
                                            </div>
                                            {/* <div class="carousel-caption">
                                                <h3 class="h3-responsive">Grand Canyon</h3>
                                                <p>March 2018</p>
                                            </div> */}
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

                                    <div class='roadtrip-vid-section'>
                                        <p>
                                            During the summer of 2017, I had the amazing opportunity to embark on a two-week long road trip around the 
                                            Western United States with some of my closest friends. In what became my most cherished travel experience ever, 
                                            my friends and I explored numerous national parks and drove through seven states. 
                                            This was such a special experience for me, that I made a video commemorating those memories forever. 
                                            In the future I plan to go on even more extravagant adventures, 
                                            and most importantly be able to share those adventures with the people I am closest to.
                                        </p>

                                        <div class='roadtrip-video'>
                                            <iframe class='roadtrip-video-player' 
                                                width="500" height="315"
                                                src="https://www.youtube.com/embed/bBQSxpbU5ck">
                                            </iframe>
                                        </div>
                                    </div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                            </div>



                                <div class='soccer-container'>
                                    <div class="card border-0">
                                            <div class="card-header p-0 border-0" id="heading-240">
                                                <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-240" aria-expanded="false" aria-controls="#collapse-240"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Soccer</button>
                                            </div>
                                            <div id="collapse-240" class="collapse" aria-labelledby="heading-240" data-parent="#accordion">
                                                <div class="card-body accordion-body">
                                                <p>
                                                    Soccer has been a passion of mine for as long as I can remember, and is an integral part of who I am. 
                                                    I started playing when I was four years old, and have continued to play basically year-round for the rest of my life. 
                                                    By the time I was in high school, I was the captain of my club soccer team as well as my high school team, 
                                                    gaining valuable leadership skills along the way. After captaining the varsity team at MIT, I am now an assistant coach for the team.
                                                </p>

                                                <div class="row">
                                                    <div id="mdb-lightbox-ui"></div>
                                                    <figure class="col-md-4">
                                                        <a href={youngivansoccer} data-size="1600x1067">
                                                        <img alt="picture" src={youngivansoccer} class="img-fluid" />
                                                        </a>
                                                    </figure>

                                                    <figure class="col-md-4">
                                                        <a href={ivansoccer} data-size="1600x1067">
                                                        <img alt="picture" src={ivansoccer} class="img-fluid" />
                                                        </a>
                                                    </figure>

                                                    <figure class="col-md-4">
                                                        <a href={soccerprof} data-size="1600x1067">
                                                        <img alt="picture" src={soccerprof} class="img-fluid" />
                                                        </a>
                                                    </figure>
                                                </div>
                                                
                                                </div>
                                            </div>
                                    </div>
                                </div>
                <div class='music-container'>
                    <div class="card border-0">
                        <div class="card-header p-0 border-0" id="heading-241">
                            <button class="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-241" aria-expanded="false" aria-controls="#collapse-241"><i class="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Music</button>
                        </div>
                        <div id="collapse-241" class="collapse" aria-labelledby="heading-241" data-parent="#accordion">
                            <div class="card-body accordion-body">
                            <p>
                            I've been playing classical piano since I was four years old as a soloist, participating in certification tests as well as competitions. 
                            While I haven't continued playing piano much since high school, the musical aspect of my life is something I value greatly, and is something I hope to keep developing. 
                            Below are a couple performances from the US Open competitions I participated in.
                            </p>
                            </div>
                            <div class='music-videos'>
                            <iframe class='music-video-player-1' 
                                width="420" height="315"
                                src="https://www.youtube.com/embed/aB-XDB_ImEs">
                            </iframe>
                            <iframe class='music-video-player-2' 
                                width="420" height="315"
                                src="https://www.youtube.com/embed/-mkzExXsZZo">
                            </iframe>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default AboutMe;
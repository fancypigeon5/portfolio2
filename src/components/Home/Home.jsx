import { useEffect } from 'react';
import React from "react";
import "./Home.css";

const Home = ({ routeChange, scrollheight }) => {
    
    useEffect(() => {
        let welcome = document.querySelector('.home_welcome');
        const parentwidth = welcome.clientWidth;
        welcome.style.fontSize = parentwidth/250 + 'px';
    }, [scrollheight])
    

    return (
        <div className='home'>
            <div id='home' className="home_welcome">
                <div className="home_text">
                    <h1>Jules</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, possimus dolore dolor odit totam veritatis omnis unde neque magnam maxime quaerat temporibus atque minus est cum enim qui deleniti eius?
                    </p>
                    <div className='home_icons'>
                        <i class="devicon-html5-plain-wordmark"></i>
                        <i class="devicon-css3-plain-wordmark"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-react-original-wordmark"></i>
                        <i class="devicon-github-original-wordmark"></i>                    
                </div>
                </div>    
                
            </div>
        </div>
    )
}

export default Home;

/* <img src={developer} alt="developer" />
    <div className="home_buttons">
        <div className="buttons">
            <div className="button" onClick={() => routeChange('about')}> <p> About me </p></div>
            <div className="button" onClick={() => routeChange('projects')}> <p> Projects </p></div>
            <div className="button" onClick={() => routeChange('contact')}> <p> Contact </p></div>
        </div>
    </div> */
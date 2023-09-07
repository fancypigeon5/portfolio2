import { useEffect } from 'react';
import React from "react";
import "./Home.css";

const Home = ({ resize, scrollheight }) => {
    
    useEffect(() => {
        let welcome = document.querySelector('.home_welcome');
        const parentwidth = welcome.clientWidth;
        welcome.style.fontSize = parentwidth/250 + 'px';
    }, [scrollheight, resize])
    

    return (
        <div className='home'>
            <div id='home' className="home_welcome">
                <div className="home_text">
                    <h1>Jules</h1>
                    <p>
                        Crafting your digital dreams
                        {/* I'm a web developer specializing in crafting stunning, creative websites for small to medium-sized businesses. Using HTML5, CSS3, JavaScript, React.js, and WordPress, I'm dedicated to creating unique online representations that stand out and make a lasting impact. Let's work together to showcase your company's excellence on the web! */}
                    </p>
                    <div className='home_icons'>
                        <i className="devicon-html5-plain-wordmark"></i>
                        <i className="devicon-css3-plain-wordmark"></i>
                        <i className="devicon-javascript-plain"></i>
                        <i className="devicon-react-original-wordmark"></i>
                        <i class="devicon-wordpress-plain-wordmark"></i>
                        <i className="devicon-github-original-wordmark"></i>                    
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
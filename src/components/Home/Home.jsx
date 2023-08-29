import { useEffect } from 'react';
import React from "react";
import developer from './developer.png';
import "./Home.css";

const Home = ({ routeChange, scrollheight }) => {
    
    useEffect(() => {
        let welcome = document.querySelector('.home_welcome');
        const parentwidth = welcome.clientWidth;
        welcome.style.fontSize = parentwidth/250 + 'px';
    }, [scrollheight])
    

    return (
        <div className='home'>
            <div className="home_welcome">
                <div className="home_text">
                    <h1>Jules</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, possimus dolore dolor odit totam veritatis omnis unde neque magnam maxime quaerat temporibus atque minus est cum enim qui deleniti eius?
                    </p>
                </div>    
                <div className='home_content'>
                    <img src={developer} alt="developer" />
                    <div className="home_buttons">
                        <div className="buttons">
                            <div className="button" onClick={() => routeChange('about')}> <p> About me </p></div>
                            <div className="button" onClick={() => routeChange('projects')}> <p> Projects </p></div>
                            <div className="button" onClick={() => routeChange('contact')}> <p> Contact </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
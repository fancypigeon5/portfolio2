import React from "react";
import "./Home.css";

const Home = () => {   

    return (
        <div className='home'>
            <div id='home' className="home_welcome">
                <div className="home_text">
                    <div className="image"></div>
                    <div className='home_title'>
                        <h1>Jules Van Damme</h1>
                        <p className='text1'>web-<span className='s1'>developer</span><span className='s2'>designer</span></p>
                        <p className='text2'> Crafting your digital dreams </p>
                    </div>
                    <div className='home_icons'>
                        <i className="devicon-html5-plain-wordmark"></i>
                        <i className="devicon-css3-plain-wordmark"></i>
                        <i className="devicon-javascript-plain"></i>
                        <i className="devicon-react-original-wordmark"></i>
                        <i className="devicon-wordpress-plain-wordmark"></i>
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
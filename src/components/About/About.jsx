import React from "react";
import "./About.css";
import programming from './programming.jpg';
import coder from './coder.jpg';
import languages from './languages.png';

const About = () => {
    return (
            <div id='about' className="about_container">
                <div className="about_welcome">
                    <h1>About me</h1>
                </div>
                <div className="info">
                    <div className="block">
                        <img src={programming} alt="programming" />
                        <div>
                            <p>
                                Welcome to my web development world! I'm Jules, a passionate web developer with a knack for blending creativity and technology. From my early days of programming games on a TI-84+ calculator to mastering the art of juggling, fire performance, and magic in the circus, I've always been drawn to the extraordinary. Today, as a web developer, I combine my technical expertise with a creative mindset to craft digital experiences that stand out.
                            </p>
                        </div>
                    </div>
                    <div className="block">
                        <div>
                            <p>
                                I officially embarked on my web development journey in March this year, but my programming journey began at the age of 13. This early start equipped me with a solid coding foundation that I now bring to every project. What truly sets me apart is my passion for challenges and innovative solutions. I thrive on complex projects that demand creativity, avoiding the ordinary to create websites that leave a lasting impact.
                            </p>
                        </div>
                        <img src={coder} alt="coder" />
                    </div>
                    <div className="block">
                        <img src={languages} alt="coder" /> 
                        <div>
                            <p>
                                Beyond web development, I'm a true creative at heart. Whether it's through drawing or my background in the circus arts, I've developed a keen sense of storytelling and visual expression. I believe that every website should tell a captivating story, just like a well-choreographed circus act or a beautifully illustrated drawing. When you   collaborate with me, you can expect a unique and engaging online representation that reflects your brand's essence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About
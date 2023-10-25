import React from "react";
import "./About2.css";

const About2 = () => {
    return (
            <div id='about' className="about_container">
                <div className="about_welcome animateTitle">
                    <h1>About Me</h1>
                </div>
                <div className="about_info">
                    <div className="coding block">
                        <h1>&lt;Coding/&gt;</h1>
                        <div className="coding_content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p>Molestiae atque dolore repellendus perferendis aperiam pariatur,</p>
                            <p>quis provident sunt, distinctio eveniet culpa et quasi ad eius aliquam numquam laudantium,</p>
                            <p>quisquam tempora?</p>
                        </div>
                    </div>
                    <div className="creative block">
                        <h1>Design</h1>
                        <div className="design_animation">
                            <div className="header"></div>
                            <div className="body">
                                <div class="first"></div>
                                <div class="second"></div>
                                <div class="third"></div>
                            </div>
                            <div className="ball"></div>
                        </div>
                        <div className="creative_content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae atque dolore repellendus perferendis aperiam pariatur, quis provident sunt, distinctio eveniet culpa et quasi ad eius aliquam numquam laudantium, quisquam tempora?</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About2;
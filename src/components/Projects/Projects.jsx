import './Projects.css';
import React, { useEffect } from "react";
import Doe from './Doe.png';
import img2 from './website2.jpg';
import img3 from './website3.jpg';
import img4 from './website4.png';

export default function Projects({ popup, popupChange, popupContent, popupContentChange }) {
    
    const website1 = { img: Doe, title: 'DOE', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus sed quas minus fugit eum fugiat necessitatibus error neque inventore molestiae eius odit perspiciatis ea nisi quasi, recusandae nostrum consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos corporis! Quas dolores dicta et, labore dolorem omnis maxime quod eum quis eius eligendi totam, accusamus, qui corporis ipsa minima!"}

    const website2 = { img: img2, title: 'Website2', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus sed quas minus fugit eum fugiat necessitatibus error neque inventore molestiae eius odit perspiciatis ea nisi quasi, recusandae nostrum consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos corporis! Quas dolores dicta et, labore dolorem omnis maxime quod eum quis eius eligendi totam, accusamus, qui corporis ipsa minima!"}

    const website3 = { img: img3, title: 'Website3', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus sed quas minus fugit eum fugiat necessitatibus error neque inventore molestiae eius odit perspiciatis ea nisi quasi, recusandae nostrum consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos corporis! Quas dolores dicta et, labore dolorem omnis maxime quod eum quis eius eligendi totam, accusamus, qui corporis ipsa minima!"}

    const website4 = { img: img4, title: 'Website4', text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus sed quas minus fugit eum fugiat necessitatibus error neque inventore molestiae eius odit perspiciatis ea nisi quasi, recusandae nostrum consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eos corporis! Quas dolores dicta et, labore dolorem omnis maxime quod eum quis eius eligendi totam, accusamus, qui corporis ipsa minima!"}

    let currentSite = popupContent

    useEffect(() => {
        currentSite = popupContent
    }, [popupContent])

    useEffect(() => {
        const popupelement = document.querySelector('.popup')
        if (popup) {
            popupelement.classList.add('show_popup')
        } else {
            popupelement.classList.remove('show_popup')
        }
    }, [popup])

    const openPopup = (website) => {
        popupContentChange(website);
        popupChange(true);
    }
    
    return (
            <div id='projects' className='projects_container'>
        	    <div className='projects_welcome animateTitle'>
                    <h1>Projects</h1>
                </div>
                <div className='popup'>
                    <img src={currentSite.img} alt={currentSite.title} />
                    <div className='hidebutton' onClick={() => popupChange(false)}>
                        <h1>X</h1>
                    </div>
                    <h3>
                        {currentSite.title}
                    </h3>
                    <p>
                        {currentSite.text}
                    </p>
                </div>
                <div className='projects'>
                    <div className='project animateLeft'>
                        <div className='link' onClick={() => openPopup(website1)}>
                        {/* <a href='https://fancypigeon5.github.io/DOE/'>
                        </a> */}
                        <img src={website1.img} alt="Doe" />
                        <div className='overlay'>
                            <p>
                                {website1.text}
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className='project animateLeft'>
                        <div className="link" onClick={() => openPopup(website2)}>
                            <img src={website2.img} alt="website2" />
                            <div className='overlay'>
                                <p>
                                    {website2.text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='project animateLeft'>
                        <div className="link" onClick={() => openPopup(website3)}>
                            <img src={website3.img} alt="website3" />
                            <div className='overlay'>
                                <p>
                                    {website3.text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='project animateLeft'>
                        <div className="link" onClick={() => openPopup(website4)}>
                            <img src={website4.img} alt="website4" />
                            <div className='overlay'>
                                <p>
                                    {website4.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
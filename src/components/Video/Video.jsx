import React, { useEffect, useRef, useState } from "react";
import laptop from './laptop-opening.mp4';
import "./Video.css";
import Home from '../Home/Home';
import ScrollVideo from "react-scroll-video";

export default function HomeVideo({hidesite, routeChange, scrollheight}) {
    useEffect(() => {
        const site = document.querySelector(".site");
    
        if (hidesite) {
          site.classList.add("hide_site")
        } else {
          site.classList.remove("hide_site")
        }
    }, [hidesite])

    useEffect(() => {
        console.log(window.pageYOffset);
        let site = document.querySelector(".site");
        let video = document.querySelector("#v0");
        let width = window.innerWidth;
        let height = window.innerHeight;
        window.addEventListener('scroll', function() {
            let offset = window.pageYOffset - 1450;
            if (offset < 0) {
            site.style.top = "19.2vh";
            site.style.height = "47.2vh";
            site.style.width = "71vh";
            video.style.top = "0vh";
            video.style.height = "100vh";
            return; 
            }
            else { 
            if ((((47.2+(offset/10.7))*(71/47.2))* (height/100)) < width) {
                site.style.width = (47.2+(offset/10.7))*(71/47.2) + "vh";
            }
            else {
                site.style.width = "100vw";
            };
            site.style.height = Math.min(Math.max(47.2+(offset/10.7), 47.2), 100) + "vh";
            site.style.top = Math.max((19.2 - offset/60), 0) + "vh";
            video.style.height = (100 + offset/5) + "vh";
            video.style.top = -(offset/18) + "vh";
            return;
            }
        });
    })

    useEffect(() => {
        let site = document.querySelector(".site");
        let sitewidth = site.offsetWidth;
        let siteheight = site.offsetHeight;
        let width = window.innerWidth;
        let height = window.innerHeight;
        console.log(width, height)
        console.log(sitewidth, siteheight)
        if (sitewidth === width && siteheight === height) {
            routeChange('home')
        }
    }, [scrollheight])

    useEffect(() => {
        const welcome = document.querySelector(".homevideo_welcome")
        if (scrollheight === 0) {
            welcome.classList.remove("hide")
            welcome.style.opacity = 1;
        } else if (scrollheight > 0 && scrollheight < 300) {
            welcome.classList.remove("hide")
            welcome.style.opacity = 100-scrollheight/3 + "%";
        } else if ( scrollheight > 300) {
            welcome.classList.add("hide")
        }
    })

    useEffect(() => {
        const welcome = document.querySelector('.home_welcome');
        const parentwidth = welcome.clientWidth;
        welcome.style.fontSize = parentwidth/250 + 'px';
    }, [scrollheight])

    return (
        <main>
        <div className="wrapper">
            <div className="homevideo_welcome">
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi cumque cupiditate et iusto ea veniam? Porro non nostrum et voluptate dolorum delectus, nemo corrupti rerum cupiditate aperiam consequuntur qui.</p>
            </div>
            <div className="site">
                <Home routeChange={routeChange} scrollheight={scrollheight}/>
            </div>
            <ScrollVideo
                className= 'videoscroll'
                playbackRate={100}
                src={laptop}
            />
        </div>
        
        </main>
    );
}